// ===== 5TH ANNIVERSARY PAGE JAVASCRIPT =====

(function() {
    'use strict';

    function initializeAnniversaryPage() {
        loadHeader();
        loadFooter();
        initAnnivStatCounters();
        initConfetti();
        initCountdown();
        initAnnivGallery();
        initOfferButtons();
        if (typeof initializeEnquiryDropdowns === 'function') {
            initializeEnquiryDropdowns();
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        if (typeof loadCommonScripts === 'function') {
            loadCommonScripts().then(initializeAnniversaryPage).catch(initializeAnniversaryPage);
        } else {
            initializeAnniversaryPage();
        }
    });

    // ===== STAT COUNTERS =====
    function initAnnivStatCounters() {
        const section = document.querySelector('.anniv-stats-strip');
        if (!section) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.hasAttribute('data-animated')) {
                    entry.target.querySelectorAll('.anniv-stat-number').forEach(el => {
                        const target = parseInt(el.getAttribute('data-target'), 10) || 0;
                        animateAnnivCounter(el, target);
                    });
                    entry.target.setAttribute('data-animated', 'true');
                }
            });
        }, { threshold: 0.4 });

        observer.observe(section);
    }

    function animateAnnivCounter(element, target, duration = 1800) {
        let start = 0;
        const stepTime = 40;
        const increment = target / (duration / stepTime);
        const suffix = element.getAttribute('data-suffix') || '';

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target.toLocaleString() + suffix;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start).toLocaleString() + suffix;
            }
        }, stepTime);
    }

    // ===== CONFETTI & PARTY POPPER ANIMATION =====
    function initConfetti() {
        const layer = document.getElementById('annivConfettiLayer');
        if (!layer) return;

        const colors = ['#d9a52a', '#ffe38a', '#a5760f', '#7a1f1f', '#f6e6c8', '#0c6c41'];

        function spawnPiece() {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';
            const left = Math.random() * 100;
            const duration = 4 + Math.random() * 4;
            const delay = Math.random() * 1.5;
            const drift = (Math.random() * 160 - 80) + 'px';
            const color = colors[Math.floor(Math.random() * colors.length)];
            const isCircle = Math.random() > 0.6;

            piece.style.left = left + '%';
            piece.style.background = color;
            piece.style.animationDuration = duration + 's';
            piece.style.animationDelay = delay + 's';
            piece.style.setProperty('--drift', drift);
            if (isCircle) piece.style.borderRadius = '50%';

            layer.appendChild(piece);

            setTimeout(() => piece.remove(), (duration + delay) * 1000 + 200);
        }

        // Initial celebratory burst
        for (let i = 0; i < 40; i++) {
            setTimeout(spawnPiece, i * 60);
        }

        // Gentle continuous shower
        setInterval(() => {
            for (let i = 0; i < 4; i++) spawnPiece();
        }, 1400);
    }

    // ===== COUNTDOWN TIMER =====
    function initCountdown() {
        const el = document.getElementById('annivCountdown');
        if (!el) return;

        const endDateAttr = el.getAttribute('data-end-date');
        const endDate = new Date(endDateAttr || '2026-11-30T23:59:59');

        const daysEl = document.getElementById('annivDays');
        const hoursEl = document.getElementById('annivHours');
        const minsEl = document.getElementById('annivMins');
        const secsEl = document.getElementById('annivSecs');

        function tick() {
            const now = new Date();
            let diff = endDate - now;

            if (diff <= 0) {
                el.innerHTML = '<p class="mb-0 fw-bold">Our Anniversary Offers window has ended — but our Admissions team would still love to help you!</p>';
                clearInterval(timer);
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const mins = Math.floor((diff / (1000 * 60)) % 60);
            const secs = Math.floor((diff / 1000) % 60);

            if (daysEl) daysEl.textContent = String(days);
            if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
            if (minsEl) minsEl.textContent = String(mins).padStart(2, '0');
            if (secsEl) secsEl.textContent = String(secs).padStart(2, '0');
        }

        tick();
        const timer = setInterval(tick, 1000);
    }

    // ===== MEMORABLE PHOTO EXPERIENCE — LIGHTBOX =====
    function initAnnivGallery() {
        const items = Array.from(document.querySelectorAll('.anniv-gallery-item'));
        const lightbox = document.getElementById('annivLightbox');
        if (!items.length || !lightbox) return;

        const imgEl = lightbox.querySelector('img');
        const captionEl = lightbox.querySelector('.anniv-lightbox-caption');
        const closeBtn = lightbox.querySelector('.anniv-lightbox-close');
        const prevBtn = lightbox.querySelector('.anniv-lightbox-nav.prev');
        const nextBtn = lightbox.querySelector('.anniv-lightbox-nav.next');
        let currentIndex = 0;

        function openAt(index) {
            currentIndex = (index + items.length) % items.length;
            const img = items[currentIndex].querySelector('img');
            imgEl.src = img.getAttribute('src');
            imgEl.alt = img.getAttribute('alt') || '';
            captionEl.textContent = img.getAttribute('alt') || '';
            lightbox.classList.add('active');
        }

        function close() {
            lightbox.classList.remove('active');
        }

        items.forEach((item, index) => {
            item.addEventListener('click', () => openAt(index));
        });

        if (closeBtn) closeBtn.addEventListener('click', close);
        if (prevBtn) prevBtn.addEventListener('click', () => openAt(currentIndex - 1));
        if (nextBtn) nextBtn.addEventListener('click', () => openAt(currentIndex + 1));

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) close();
        });

        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowLeft') openAt(currentIndex - 1);
            if (e.key === 'ArrowRight') openAt(currentIndex + 1);
        });
    }

    // ===== OFFER CTA BUTTONS → PREFILL ENQUIRY FORM =====
    function initOfferButtons() {
        const buttons = document.querySelectorAll('.anniv-offer-cta[data-service]');
        const serviceSelect = document.getElementById('service');
        const enquirySection = document.getElementById('anniv-enquiry-section');

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const service = btn.getAttribute('data-service');

                if (serviceSelect) {
                    serviceSelect.value = service;
                    serviceSelect.dispatchEvent(new Event('change'));
                }

                const queryField = document.getElementById('queryMessage');
                if (queryField && !queryField.value) {
                    queryField.value = 'I would like to know more about the 5th Anniversary offer on ' + service + '.';
                }

                if (enquirySection) {
                    enquirySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }
})();
