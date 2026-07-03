/**
 * Base Template Loader
 *
 * Loads shared head resources from pages/common-head.html and shared scripts from pages/common-scripts.html.
 * Automatically resolves relative asset paths for root pages and /pages/ subpages.
 */

(function() {
    'use strict';

    const isSubPage = window.location.pathname.includes('/pages/');
    const fragmentBasePath = isSubPage ? './' : './pages/';
    const shouldStripParentPrefix = !isSubPage;

    // Idempotency helpers: track injected script srcs and a shared load promise
    if (!window.__injectedCommonScriptSrcs) window.__injectedCommonScriptSrcs = new Set();
    if (!window.__loadCommonScriptsPromise) window.__loadCommonScriptsPromise = null;
    if (typeof window.__commonScriptsLoaded !== 'boolean') window.__commonScriptsLoaded = false;
    if (typeof window.__aosInitialized !== 'boolean') window.__aosInitialized = false;

    function ensureAosFallbackStyle() {
        if (document.getElementById('aos-fallback-style')) return;
        const style = document.createElement('style');
        style.id = 'aos-fallback-style';
        style.textContent = 'html.aos-fallback [data-aos]{opacity:1!important;transform:none!important;transition:none!important;}';
        (document.head || document.documentElement).appendChild(style);
    }

    function initializeOrFallbackAOS() {
        if (typeof window.AOS !== 'undefined') {
            try {
                if (!window.__aosInitialized) {
                    window.AOS.init({ duration: 1000, once: true, offset: 100 });
                    window.__aosInitialized = true;
                } else if (typeof window.AOS.refresh === 'function') {
                    window.AOS.refresh();
                }
                document.documentElement.classList.remove('aos-fallback');
                return;
            } catch (e) {
                console.error('AOS initialization failed:', e);
            }
        }

        ensureAosFallbackStyle();
        document.documentElement.classList.add('aos-fallback');
    }

    function resolvePath(value) {
        if (typeof value !== 'string' || !shouldStripParentPrefix) {
            return value;
        }
        return value.replace(/^\.\.\//, '');
    }

    function loadCommonHead() {
        fetch(fragmentBasePath + 'common-head.html')
            .then(response => response.text())
            .then(html => {
                const headElement = document.head;
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;

                Array.from(tempDiv.childNodes).forEach(node => {
                    const clone = node.cloneNode(true);
                    if (clone.nodeType === Node.ELEMENT_NODE) {
                        if (clone.tagName === 'LINK' && clone.hasAttribute('href')) {
                            clone.setAttribute('href', resolvePath(clone.getAttribute('href')));
                        }
                    }
                    headElement.appendChild(clone);
                });
            })
            .catch(error => console.error('Error loading common head:', error));
    }

    function loadCommonScripts() {
        const appendTarget = document.body || document.head || document.documentElement;

        // Return existing promise if already loading/loaded
        if (window.__loadCommonScriptsPromise) {
            console.info('[base-loader] loadCommonScripts(): reusing existing promise', {
                alreadyLoaded: window.__commonScriptsLoaded,
                injectedScripts: window.__injectedCommonScriptSrcs.size
            });
            return window.__loadCommonScriptsPromise;
        }

        console.info('[base-loader] loadCommonScripts(): first load start');

        window.__loadCommonScriptsPromise = fetch(fragmentBasePath + 'common-scripts.html')
            .then(response => response.text())
            .then(html => {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;

                const loadPromises = [];

                Array.from(tempDiv.childNodes).forEach(node => {
                    if (node.nodeType !== Node.ELEMENT_NODE) {
                        return;
                    }

                    // If element has an id and already exists, skip to avoid duplicates
                    if (node.id && document.getElementById(node.id)) {
                        return;
                    }

                    if (node.tagName === 'SCRIPT') {
                        const src = node.getAttribute('src');
                        if (src) {
                            const resolved = resolvePath(src);

                            // Skip if this script was already injected
                            if (window.__injectedCommonScriptSrcs.has(resolved)) return;

                            // Also check existing document scripts to be safe
                            const alreadyInDoc = Array.from(document.querySelectorAll('script')).some(s => {
                                const sAttr = s.getAttribute('src');
                                if (sAttr && (sAttr === resolved || sAttr.endsWith(resolved) || s.src.indexOf(resolved) !== -1)) return true;
                                return false;
                            });
                            if (alreadyInDoc) {
                                window.__injectedCommonScriptSrcs.add(resolved);
                                return;
                            }

                            const script = document.createElement('script');
                            script.src = resolved;
                            script.async = false;

                            // Track this src to prevent duplicates
                            window.__injectedCommonScriptSrcs.add(resolved);

                            loadPromises.push(new Promise((resolve) => {
                                script.addEventListener('load', resolve);
                                script.addEventListener('error', function(e) { console.error('Error loading script', script.src, e); resolve(); });
                            }));

                            appendTarget.appendChild(script);
                        } else {
                            // Inline script — append only if exact same script not already present
                            const text = node.textContent && node.textContent.trim();
                            if (text) {
                                const exists = Array.from(document.querySelectorAll('script')).some(s => !s.src && s.textContent && s.textContent.trim() === text);
                                if (!exists) {
                                    const script = document.createElement('script');
                                    script.textContent = node.textContent;
                                    script.async = false;
                                    appendTarget.appendChild(script);
                                }
                            }
                        }
                    } else {
                        appendTarget.appendChild(node.cloneNode(true));
                    }
                });

                return Promise.all(loadPromises).then(() => {
                    window.__commonScriptsLoaded = true;
                    initializeOrFallbackAOS();
                    console.info('[base-loader] loadCommonScripts(): load complete', {
                        injectedScripts: window.__injectedCommonScriptSrcs.size
                    });
                });
            })
            .catch(error => {
                console.error('Error loading common scripts:', error);
                initializeOrFallbackAOS();
            });

        return window.__loadCommonScriptsPromise;
    }

    window.loadCommonHead = loadCommonHead;
    window.loadCommonScripts = loadCommonScripts;

    loadCommonHead();
    // Preload shared JS early so page-specific scripts at the end of body can rely on them.
    loadCommonScripts();

    // If AOS is still unavailable after initial load window, force visible content fallback.
    setTimeout(function() {
        initializeOrFallbackAOS();
    }, 2500);
})();
