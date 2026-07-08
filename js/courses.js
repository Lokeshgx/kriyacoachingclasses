// ===== COURSES PAGE JAVASCRIPT =====

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
    initializeCourseFilters();
});

// Initialize Course Filters
function initializeCourseFilters() {
    const boardFilter = document.getElementById('boardFilter');
    const classFilter = document.getElementById('classFilter');
    const courseCards = document.querySelectorAll('.course-card');

    boardFilter.addEventListener('change', filterCourses);
    classFilter.addEventListener('change', filterCourses);

    function filterCourses() {
        const selectedBoard = boardFilter.value;
        const selectedClass = classFilter.value;

        courseCards.forEach(card => {
            const cardBoard = card.getAttribute('data-board');
            const cardClass = card.getAttribute('data-class');

            let show = true;

            if (selectedBoard && cardBoard !== selectedBoard) {
                show = false;
            }

            if (selectedClass && cardClass !== selectedClass) {
                show = false;
            }

            if (show) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.3s ease';
            } else {
                card.style.display = 'none';
            }
        });

        if (typeof AOS !== 'undefined') AOS.refresh();
    }
}

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

console.log('Courses page loaded successfully');

