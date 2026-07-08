// ===== COMMON UTILITY FUNCTIONS =====

// Smooth scroll to element
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Format phone number
function formatPhoneNumber(phone) {
    const cleaned = ('' + phone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phone;
}

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate phone number
function isValidPhoneNumber(phone) {
    const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
    return phoneRegex.test(phone);
}

// Show toast/notification
function showNotification(message, type = 'success', duration = 3000) {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
        const container = document.createElement('div');
        container.id = 'toast-container';
        container.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 9999;';
        document.body.appendChild(container);
    }
    
    const toast = document.createElement('div');
    toast.className = `alert alert-${type} alert-dismissible fade show`;
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.getElementById('toast-container').appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, duration);
}

// Count animation (useful for stats section)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 50);
    
    const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 50);
}

// Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// Form reset with validation
function resetForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.reset();
        form.querySelectorAll('.invalid-feedback').forEach(feedback => {
            feedback.style.display = 'none';
        });
    }
}

// Get query parameter from URL
function getQueryParameter(name) {
    const url = new URL(window.location);
    return url.searchParams.get(name);
}

// Initialize tooltips (Bootstrap)
function initializeTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}

// Initialize popovers (Bootstrap)
function initializePopovers() {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
}

// Toggle mobile menu
function toggleMobileMenu() {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar) {
        navbar.classList.toggle('show');
    }
}

// Close mobile menu when link is clicked
function closeMobileMenuOnLinkClick() {
    const navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navbar = document.querySelector('.navbar-collapse');
            if (navbar && navbar.classList.contains('show')) {
                navbar.classList.remove('show');
            }
        });
    });
}

// Add scroll event listener for navbar
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', throttle(() => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, 100));
}

// Initialize all common functionality
document.addEventListener('DOMContentLoaded', function() {
    lazyLoadImages();
    initializeTooltips();
    initializePopovers();
    handleNavbarScroll();
    closeMobileMenuOnLinkClick();
});

// ===== SHARED ENQUIRY FORM FUNCTIONS =====
// Used by both contact.html and index.html enquiry forms.

// Cascading dropdown data for Academic Courses
var enquiryDropdownData = {
    classes: ['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'],
    subjects: {
        'Class 6':  ['Mathematics', 'Science', 'Social Science', 'English', 'Hindi'],
        'Class 7':  ['Mathematics', 'Science', 'Social Science', 'English', 'Hindi'],
        'Class 8':  ['Mathematics', 'Science', 'Social Science', 'English', 'Hindi'],
        'Class 9':  ['Mathematics', 'Science', 'Social Science', 'English', 'Hindi'],
        'Class 10': ['Mathematics', 'Science', 'Social Science', 'English', 'Hindi'],
        'Class 11': ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'Business Studies', 'Accountancy', 'Economics', 'English'],
        'Class 12': ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'Business Studies', 'Accountancy', 'Economics', 'English']
    }
};

// Reset enquiry form and cascading dropdowns to initial state
function resetEnquiryForm() {
    var form = document.getElementById('enquiry-form');
    if (form) form.reset();

    var boardClassRow = document.getElementById('board-class-row');
    var classCol      = document.getElementById('class-col');
    var subjectRow    = document.getElementById('subject-row');
    if (boardClassRow) boardClassRow.classList.add('d-none');
    if (classCol)      classCol.classList.add('d-none');
    if (subjectRow)    subjectRow.classList.add('d-none');

    ['board', 'className', 'subject'].forEach(function(id) {
        var el = document.getElementById(id);
        if (el) el.removeAttribute('required');
    });
}

// Send enquiry form data via WhatsApp
function sendToWhatsapp() {
    var name    = document.getElementById('fullName').value.trim();
    var mobile  = document.getElementById('mobileNumber').value.trim();
    var email   = document.getElementById('emailId').value.trim();
    var service = document.getElementById('service').value;

    if (!name || name.length < 2) {
        showNotification('Please enter your full name', 'danger'); return;
    }
    if (!mobile || mobile.replace(/\D/g, '').length < 10) {
        showNotification('Please enter a valid 10-digit mobile number', 'danger'); return;
    }
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'danger'); return;
    }
    if (!service) {
        showNotification('Please select a service', 'danger'); return;
    }

    var termsAccepted = document.getElementById('terms');
    if (!termsAccepted || !termsAccepted.checked) {
        showNotification('Please accept the consent checkbox to continue', 'danger'); return;
    }

    var boardClassRow = document.getElementById('board-class-row');
    if (boardClassRow && !boardClassRow.classList.contains('d-none')) {
        var board = document.getElementById('board').value;
        if (!board) { showNotification('Please select a Board', 'danger'); return; }

        var classCol = document.getElementById('class-col');
        if (classCol && !classCol.classList.contains('d-none')) {
            var className = document.getElementById('className').value;
            if (!className) { showNotification('Please select a Class', 'danger'); return; }

            var subjectRow = document.getElementById('subject-row');
            if (subjectRow && !subjectRow.classList.contains('d-none')) {
                var subject = document.getElementById('subject').value;
                if (!subject) { showNotification('Please select a Subject', 'danger'); return; }
            }
        }
    }

    var query = document.getElementById('queryMessage').value.trim();
    if (!query) { showNotification('Please enter your query or message', 'danger'); return; }

    var lines = [
        '\uD83C\uDF93 New Enquiry - Kriya Coaching Classes',
        '',
        '\uD83D\uDCCB Contact Details:',
        'Name: '   + name,
        'Mobile: ' + mobile,
        'Email: '  + email,
        '',
        '\uD83D\uDCDA Service Interest:',
        'Service: ' + service
    ];

    if (boardClassRow && !boardClassRow.classList.contains('d-none')) {
        var b = document.getElementById('board').value;
        if (b) lines.push('Board: ' + b);
        var cc = document.getElementById('class-col');
        if (cc && !cc.classList.contains('d-none')) {
            var cn = document.getElementById('className').value;
            if (cn) lines.push('Class: ' + cn);
        }
        var sr = document.getElementById('subject-row');
        if (sr && !sr.classList.contains('d-none')) {
            var s = document.getElementById('subject').value;
            if (s) lines.push('Subject: ' + s);
        }
    }

    if (query) { lines.push(''); lines.push('\uD83D\uDCAC Message: ' + query); }

    var phoneNumber  = '918431345144';
    var message      = encodeURIComponent(lines.join('\n'));
    var whatsappURL  = 'https://wa.me/' + phoneNumber + '?text=' + message;

    // Must be called directly in submit event — not inside setTimeout — or browsers block it as a popup.
    window.open(whatsappURL, '_blank');
    showNotification('\u2713 Redirecting to WhatsApp.', 'success', 3000);
    resetEnquiryForm();
}

// Initialize cascading dropdowns for Enquiry Form
function initializeEnquiryDropdowns() {
    var serviceSelect = document.getElementById('service');
    var boardClassRow = document.getElementById('board-class-row');
    var boardSelect   = document.getElementById('board');
    var classCol      = document.getElementById('class-col');
    var classSelect   = document.getElementById('className');
    var subjectRow    = document.getElementById('subject-row');
    var subjectSelect = document.getElementById('subject');

    if (!serviceSelect || !boardSelect || !classSelect || !subjectSelect) return;

    function populateSelect(select, values) {
        var placeholder = select.options[0].cloneNode(true);
        select.innerHTML = '';
        select.appendChild(placeholder);
        values.forEach(function(val) {
            var opt = document.createElement('option');
            opt.value = val; opt.textContent = val;
            select.appendChild(opt);
        });
    }

    serviceSelect.addEventListener('change', function() {
        boardSelect.value = ''; boardSelect.removeAttribute('required');
        classSelect.innerHTML = '<option value="">Select a Class</option>'; classSelect.removeAttribute('required');
        subjectSelect.innerHTML = '<option value="">Select a Subject</option>'; subjectSelect.removeAttribute('required');
        classCol.classList.add('d-none');
        subjectRow.classList.add('d-none');
        if (this.value === 'Academic Courses') {
            boardClassRow.classList.remove('d-none');
            boardSelect.setAttribute('required', 'required');
        } else {
            boardClassRow.classList.add('d-none');
        }
    });

    boardSelect.addEventListener('change', function() {
        classSelect.innerHTML = '<option value="">Select a Class</option>'; classSelect.removeAttribute('required');
        subjectSelect.innerHTML = '<option value="">Select a Subject</option>'; subjectSelect.removeAttribute('required');
        subjectRow.classList.add('d-none');
        if (this.value) {
            populateSelect(classSelect, enquiryDropdownData.classes);
            classCol.classList.remove('d-none');
            classSelect.setAttribute('required', 'required');
        } else {
            classCol.classList.add('d-none');
        }
    });

    classSelect.addEventListener('change', function() {
        subjectSelect.innerHTML = '<option value="">Select a Subject</option>'; subjectSelect.removeAttribute('required');
        if (this.value) {
            populateSelect(subjectSelect, enquiryDropdownData.subjects[this.value] || []);
            subjectRow.classList.remove('d-none');
            subjectSelect.setAttribute('required', 'required');
        } else {
            subjectRow.classList.add('d-none');
        }
    });
}
