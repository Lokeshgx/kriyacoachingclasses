function getParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name) || '';
}

function prefillJobInfo() {
    const jobTitleInput = document.getElementById('jobTitle');
    const jobCodeInput = document.getElementById('jobCode');

    const jobTitle = getParam('jobTitle');
    const jobCode = getParam('jobCode');

    if (jobTitleInput) jobTitleInput.value = jobTitle;
    if (jobCodeInput) jobCodeInput.value = jobCode;
}

function validateForm(form) {
    if (!form) return false;

    const fieldValidators = [
        validateFullName,
        validateEmail,
        validateMobile,
        validateExperience,
        validateSkills,
        validateCoverNote,
    ];

    let isValid = true;

    for (const validator of fieldValidators) {
        const result = validator();
        if (!result) {
            isValid = false;
        }
    }

    return isValid;
}

function validateField(fieldId, errorId, message) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(errorId);

    if (!field || !error) return true;

    error.textContent = '';
    field.classList.remove('invalid-field');

    if (!field.value || !field.value.trim()) {
        error.textContent = message;
        field.classList.add('invalid-field');
        field.focus();
        return false;
    }

    return true;
}

function validateFullName() {
    return validateField('fullName', 'fullNameError', 'Please enter your full name.');
}

function validateEmail() {
    const field = document.getElementById('email');
    const error = document.getElementById('emailError');

    if (!field || !error) return true;

    error.textContent = '';
    field.classList.remove('invalid-field');

    if (!field.value || !field.value.trim()) {
        error.textContent = 'Please enter your email address.';
        field.classList.add('invalid-field');
        field.focus();
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(field.value.trim())) {
        error.textContent = 'Please enter a valid email address.';
        field.classList.add('invalid-field');
        field.focus();
        return false;
    }

    return true;
}

function validateMobile() {
    const field = document.getElementById('mobile');
    const error = document.getElementById('mobileError');

    if (!field || !error) return true;

    error.textContent = '';
    field.classList.remove('invalid-field');

    if (!field.value || !field.value.trim()) {
        error.textContent = 'Please enter your mobile number.';
        field.classList.add('invalid-field');
        field.focus();
        return false;
    }

    const mobilePattern = /^[0-9\s\-\+\(\)]{10,}$/;
    if (!mobilePattern.test(field.value.trim())) {
        error.textContent = 'Please enter a valid mobile number.';
        field.classList.add('invalid-field');
        field.focus();
        return false;
    }

    return true;
}

function validateExperience() {
    const field = document.getElementById('experience');
    const error = document.getElementById('experienceError');

    if (!field || !error) return true;

    error.textContent = '';
    field.classList.remove('invalid-field');

    if (!field.value || !field.value.trim()) {
        error.textContent = 'Please enter your experience in years.';
        field.classList.add('invalid-field');
        field.focus();
        return false;
    }

    const value = parseFloat(field.value);
    if (isNaN(value) || value < 0) {
        error.textContent = 'Experience must be a valid number.';
        field.classList.add('invalid-field');
        field.focus();
        return false;
    }

    return true;
}

function validateSkills() {
    return validateField('skills', 'skillsError', 'Please enter your key skills.');
}

function validateCoverNote() {
    return validateField('coverNote', 'coverNoteError', 'Please tell us why we should hire you.');
}

function validateResumeUpload(resumeField) {
    const errorMessage = document.getElementById('resumeUploadError');
    if (!resumeField || !errorMessage) return true;

    errorMessage.textContent = '';
    resumeField.classList.remove('invalid-field');

    if (!resumeField.files || resumeField.files.length === 0) {
        errorMessage.textContent = 'Please upload your resume or CV.';
        resumeField.classList.add('invalid-field');
        resumeField.focus();
        return false;
    }

    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
    const file = resumeField.files[0];

    if (!allowedTypes.includes(file.type)) {
        errorMessage.textContent = 'Only PDF, Word, or text files are accepted.';
        resumeField.classList.add('invalid-field');
        resumeField.focus();
        return false;
    }

    if (file.size > 5 * 1024 * 1024) {
        errorMessage.textContent = 'File size must be under 5MB.';
        resumeField.classList.add('invalid-field');
        resumeField.focus();
        return false;
    }

    return true;
}

function buildCandidateWhatsappMessage() {
    const jobTitle = document.getElementById('jobTitle').value.trim() || 'N/A';
    const jobCode = document.getElementById('jobCode').value.trim() || 'N/A';
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const experience = document.getElementById('experience').value.trim();
    const skills = document.getElementById('skills').value.trim();
    const coverNote = document.getElementById('coverNote').value.trim();
    const resumeField = document.getElementById('resumeUpload');
    const resumeName = resumeField && resumeField.files && resumeField.files.length > 0 ? resumeField.files[0].name : 'N/A';

    const lines = [
        'Candidate Application - Kriya Coaching Classes',
        '',
        'Job Details:',
        'Job Title: ' + jobTitle,
        'Job Code: ' + jobCode,
        '',
        'Applicant Details:',
        'Name: ' + fullName,
        'Mobile: ' + mobile,
        'Email: ' + email,
        'Experience: ' + experience + ' years',
        'Skills: ' + skills,
        'Resume File: ' + resumeName,
        '',
        'Cover Note:',
        coverNote,
        '',
        'Note: If the resume file is not attached automatically, please attach it manually in WhatsApp before sending.'
    ];

    return encodeURIComponent(lines.join('\n'));
}

function submitCandidateApplication() {
    const phoneNumber = '919584326764'; // Replace with the actual phone number
    const message = buildCandidateWhatsappMessage();
    const whatsappURL = 'https://wa.me/' + phoneNumber + '?text=' + message;

    window.open(whatsappURL, '_blank');
    if (typeof showNotification === 'function') {
        showNotification('Redirecting to WhatsApp.', 'success', 3000);
    }
}

function initializeCandidateForm() {
    const form = document.getElementById('candidate-form');
    if (!form) return;

    const resumeField = document.getElementById('resumeUpload');
    if (resumeField) {
        resumeField.addEventListener('change', function() {
            validateResumeUpload(resumeField);
        });
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const isFormValid = validateForm(form);
        const isResumeValid = validateResumeUpload(resumeField);

        if (!isFormValid || !isResumeValid) {
            if (typeof showNotification === 'function') {
                showNotification('Please fix the highlighted errors before submitting.', 'danger');
            }
            return;
        }

        submitCandidateApplication();
        form.reset();
        prefillJobInfo();
    });
}

function loadHeader() {
    const headerContainer = document.getElementById('header-container');
    if (!headerContainer) return;

    fetch('./header.html')
        .then(response => response.text())
        .then(html => {
            headerContainer.innerHTML = html;
            if (typeof setActiveNavLink === 'function') {
                setActiveNavLink();
            }
        })
        .catch(error => console.error('Error loading header:', error));
}

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

function loadFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (!footerContainer) return;

    fetch('./footer.html')
        .then(response => response.text())
        .then(html => {
            footerContainer.innerHTML = html;
            setupBackToTopButton();
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        })
        .catch(error => console.error('Error loading footer:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
    prefillJobInfo();
    initializeCandidateForm();

    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 850, once: true, offset: 70 });
    }
});
