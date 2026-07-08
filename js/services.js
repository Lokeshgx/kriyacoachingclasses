// ===== SERVICES PAGE JAVASCRIPT =====

// Initialize page on DOM load
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
    initializeFilterButtons();
});

// Initialize Filter Buttons
function initializeFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const serviceItems = document.querySelectorAll('.service-item');

    function setActiveButton(filter) {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
    }

    function applyFilter(filter) {
        setActiveButton(filter);
        filterItems(serviceItems, filter);
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            applyFilter(filter);
        });
    });

    // Get filter from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const typeParam = urlParams.get('type');

    // Apply initial filter deterministically.
    // Workshops should not appear on default/all view unless explicitly selected.
    if (typeParam && document.querySelector(`[data-filter="${typeParam}"]`)) {
        applyFilter(typeParam);
    } else {
        applyFilter('*');
    }
}

// Filter Items Function
function filterItems(items, filter) {
    items.forEach(item => {
        const category = item.getAttribute('data-category');

        // Keep Workshops & Events section hidden unless workshops filter is explicitly selected.
        const isWorkshops = category === 'workshops';
        const showItem = isWorkshops
            ? filter === 'workshops'
            : (filter === '*' || category === filter);

        if (showItem) {
            item.classList.remove('hidden');
            item.style.opacity = '1';
        } else {
            item.classList.add('hidden');
            item.style.opacity = '0';
        }
    });

    // Reinitialize AOS for newly visible items
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

// Initialize AOS
// Log page load
console.log('Services page loaded successfully');

