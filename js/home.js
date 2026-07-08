// ===== HOME PAGE JAVASCRIPT =====

function initializeHomePage() {
    loadHeader();
    loadFooter();
    initializeStatCounters();
    initializeEnquiryForm();
    initializeEnquiryDropdowns();
    setupCarouselAutoplay();
    initializeStudentCarousel();
}

// Load Header and Footer dynamically after common scripts are available
document.addEventListener('DOMContentLoaded', function() {
    if (typeof loadCommonScripts === 'function') {
        loadCommonScripts().then(function() {
            initializeHomePage();
        }).catch(function() {
            // fallback if loader fails
            initializeHomePage();
        });
    } else {
        initializeHomePage();
    }
});

// Initialize Stat Counters with Animation
function initializeStatCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.hasAttribute('data-animated')) {
                const statElements = entry.target.querySelectorAll('.stat-number');
                statElements.forEach(element => {
                    const target = parseInt(element.getAttribute('data-target'));
                    animateCounter(element, target, 2000);
                });
                entry.target.setAttribute('data-animated', 'true');
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        observer.observe(statsSection);
    }
}

// Animate Counter Function
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 50);
    const stepTime = 50;

    const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(start).toLocaleString();
        }
    }, stepTime);
}

// Initialize Enquiry Form (home-page inline form via API/simulation)
function initializeEnquiryForm() {
    const form = document.getElementById('enquiry-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (!validateEnquiryForm()) {
            showNotification('Please fill all required fields correctly', 'danger');
            return;
        }

        const formData = new FormData(form);
        const data = {
            fullName: formData.get('fullName'),
            mobileNumber: formData.get('mobileNumber'),
            emailId: formData.get('emailId'),
            course: formData.get('course'),
            queryMessage: formData.get('queryMessage'),
            timestamp: new Date().toISOString()
        };

        submitEnquiryForm(data);
    });
}

// Validate Enquiry Form
function validateEnquiryForm() {
    const fullName = document.getElementById('fullName').value.trim();
    const mobileNumber = document.getElementById('mobileNumber').value.trim();
    const emailId = document.getElementById('emailId').value.trim();

    if (!fullName || fullName.length < 3) return false;
    if (!isValidPhoneNumber(mobileNumber) || mobileNumber.length < 10) return false;
    if (!isValidEmail(emailId)) return false;

    return true;
}

// Submit Enquiry Form (mock — replace with real API call)
function submitEnquiryForm(data) {
    const submitBtn = document.querySelector('#enquiry-form button[type="submit"]');
    if (!submitBtn) return;
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Submitting...';

    setTimeout(() => {
        showNotification('\u2714 Thank you! Your enquiry has been submitted. We will contact you soon!', 'success', 5000);
        document.getElementById('enquiry-form').reset();
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }, 1500);
}

// Setup Hero Carousel Autoplay
function setupCarouselAutoplay() {
    const carousel = document.getElementById('heroCarousel');
    if (carousel && typeof bootstrap !== 'undefined') {
        const bsCarousel = new bootstrap.Carousel(carousel, {
            interval: 5000,
            wrap: true,
            keyboard: true
        });

        carousel.addEventListener('mouseenter', () => { bsCarousel.pause(); });
        carousel.addEventListener('mouseleave', () => { bsCarousel.cycle(); });
    }
}

// Setup Back to Top Button
function setupBackToTopButton() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Close mobile navbar on link click
document.addEventListener('click', function(e) {
    if (e.target.matches('.navbar-nav a') || e.target.closest('.navbar-nav a')) {
        const navbar = document.querySelector('.navbar-collapse');
        if (navbar && navbar.classList.contains('show')) {
            const toggler = document.querySelector('.navbar-toggler');
            if (toggler) toggler.click();
        }
    }
});

// Smooth scroll for anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        const href = e.target.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
});

// ===== STUDENT CAROUSEL FUNCTIONALITY =====

function initializeStudentCarousel() {
    const wrapper = document.querySelector('.students-carousel-wrapper');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('prevStudents');
    const nextBtn = document.getElementById('nextStudents');

    if (!wrapper || slides.length === 0) return;

    let currentSlide = 0;
    let autoPlayInterval;
    const slideWidth = 100; // Each slide is 100% width

    // Update carousel position with smooth animation
    function goToSlide(slideIndex) {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });

        const translateValue = -slideIndex * slideWidth;
        wrapper.style.transform = `translateX(${translateValue}%)`;
        slides[slideIndex].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(currentSlide);
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            prevSlide();
            stopAutoPlay();
            startAutoPlay();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            nextSlide();
            stopAutoPlay();
            startAutoPlay();
        });
    }

    wrapper.addEventListener('mouseenter', stopAutoPlay);
    wrapper.addEventListener('mouseleave', startAutoPlay);

    goToSlide(0);
    startAutoPlay();
}