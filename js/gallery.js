// Gallery Page JavaScript
(function() {
    'use strict';
    
    // Initialize gallery page on DOM ready
    function initializeGalleryPage() {
        loadHeader();
        loadFooter();
        setupGalleryFilter();
    }
    
    // Setup gallery filter functionality
    function setupGalleryFilter() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter value
                const filter = this.getAttribute('data-filter');
                
                // Filter gallery items
                galleryItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    if (filter === '*' || category === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Initialize on page load
    document.addEventListener('DOMContentLoaded', initializeGalleryPage);
})();

