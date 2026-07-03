const jobOpenings = [
    {
        title: 'Mathematics Faculty (Class 9-12)',
        jobCode: 'KCC-EDU-101',
        postingDate: '2026-06-20',
        role: 'Academic Teaching',
        description: 'Deliver high-impact Mathematics sessions for secondary and senior secondary learners.',
        responsibilities: [
            'Plan chapter-wise lesson schedules and weekly assessments',
            'Conduct doubt-clearing and revision sessions',
            'Track student performance and share feedback with parents'
        ],
        preferredSkills: ['Strong conceptual teaching', 'Classroom management', 'Assessment design'],
        experience: '3-6 years'
    },
    {
        title: 'Physics Faculty (JEE/NEET Foundation)',
        jobCode: 'KCC-EDU-102',
        postingDate: '2026-06-18',
        role: 'Competitive Exam Coaching',
        description: 'Train aspirants with problem-solving techniques and exam-oriented preparation.',
        responsibilities: [
            'Create structured practice modules for Physics topics',
            'Conduct mock tests and performance reviews',
            'Mentor students on strategy and time management'
        ],
        preferredSkills: ['Numerical problem solving', 'Exam strategy coaching', 'Data-driven feedback'],
        experience: '4-8 years'
    },
    {
        title: 'English Communication Trainer',
        jobCode: 'KCC-LNG-201',
        postingDate: '2026-06-17',
        role: 'Language & Personality Development',
        description: 'Improve student fluency, confidence, and public speaking through practical sessions.',
        responsibilities: [
            'Run speaking, writing, and presentation workshops',
            'Design classroom activities for communication skills',
            'Support interview and group discussion readiness'
        ],
        preferredSkills: ['Communication coaching', 'Interactive facilitation', 'Student engagement'],
        experience: '2-5 years'
    },
    {
        title: 'Career Counselor',
        jobCode: 'KCC-CC-301',
        postingDate: '2026-06-16',
        role: 'Career Guidance & Counseling',
        description: 'Guide students in stream selection, career mapping, and goal planning.',
        responsibilities: [
            'Conduct one-on-one counseling sessions',
            'Create personalized career roadmaps',
            'Coordinate with parents for progress discussions'
        ],
        preferredSkills: ['Counseling techniques', 'Psychometric awareness', 'Empathy and communication'],
        experience: '3-7 years'
    },
    {
        title: 'Student Success Executive',
        jobCode: 'KCC-OPS-401',
        postingDate: '2026-06-15',
        role: 'Operations & Student Support',
        description: 'Own student onboarding, attendance tracking, and issue resolution.',
        responsibilities: [
            'Manage student onboarding and document verification',
            'Coordinate class schedules and attendance records',
            'Support day-to-day learner queries and escalations'
        ],
        preferredSkills: ['Coordination', 'CRM handling', 'Communication and follow-up'],
        experience: '1-4 years'
    },
    {
        title: 'Digital Marketing Specialist',
        jobCode: 'KCC-MKT-501',
        postingDate: '2026-06-14',
        role: 'Marketing',
        description: 'Drive admissions-focused digital campaigns and community engagement.',
        responsibilities: [
            'Plan and execute social media campaigns',
            'Manage paid ads and lead funnels',
            'Track campaign performance and optimize ROI'
        ],
        preferredSkills: ['Meta/Google Ads', 'Content planning', 'Analytics reporting'],
        experience: '2-5 years'
    },
    {
        title: 'Graphic Designer (Education Content)',
        jobCode: 'KCC-MKT-502',
        postingDate: '2026-06-13',
        role: 'Design & Creative',
        description: 'Create visual assets for promotions, classroom resources, and events.',
        responsibilities: [
            'Design creatives for social and print channels',
            'Build templates for academic communication',
            'Collaborate with marketing and faculty teams'
        ],
        preferredSkills: ['Canva/Adobe tools', 'Visual storytelling', 'Brand consistency'],
        experience: '1-4 years'
    },
    {
        title: 'Front Desk & Admission Coordinator',
        jobCode: 'KCC-ADM-601',
        postingDate: '2026-06-12',
        role: 'Administration',
        description: 'Handle front-office operations and admission inquiries professionally.',
        responsibilities: [
            'Manage walk-ins, calls, and enquiry forms',
            'Assist with admission conversion and payment tracking',
            'Coordinate between parents, students, and internal teams'
        ],
        preferredSkills: ['Customer handling', 'MS Office', 'Process discipline'],
        experience: '1-3 years'
    },
    {
        title: 'Content Writer (Academic & Web)',
        jobCode: 'KCC-CNT-701',
        postingDate: '2026-06-11',
        role: 'Content & Communication',
        description: 'Develop educational and marketing content for web, brochures, and campaigns.',
        responsibilities: [
            'Write website and campaign copy',
            'Prepare academic support content and announcements',
            'Work with faculty for topic accuracy and clarity'
        ],
        preferredSkills: ['Copywriting', 'Editing', 'SEO fundamentals'],
        experience: '2-5 years'
    },
    {
        title: 'Part-Time Workshop Facilitator',
        jobCode: 'KCC-EVT-801',
        postingDate: '2026-06-10',
        role: 'Events & Workshops',
        description: 'Facilitate skill-building workshops for students and parents.',
        responsibilities: [
            'Conduct thematic workshops on weekends',
            'Prepare activity-led learning modules',
            'Collect feedback and improve session quality'
        ],
        preferredSkills: ['Public speaking', 'Workshop design', 'Audience interaction'],
        experience: '2-6 years'
    }
];

function formatDate(isoDate) {
    const date = new Date(isoDate + 'T00:00:00');
    return date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

function createJobCard(job) {
    const card = document.createElement('article');
    card.className = 'job-card';
    card.setAttribute('data-aos', 'fade-up');

    const responsibilities = job.responsibilities.map(item => `<li>${item}</li>`).join('');
    const skills = job.preferredSkills.map(item => `<li>${item}</li>`).join('');
    const applyUrl = `candidate-detail.html?jobCode=${encodeURIComponent(job.jobCode)}&jobTitle=${encodeURIComponent(job.title)}`;

    card.innerHTML = `
        <div class="job-header">
            <div class="job-title-wrap">
                <h3>${job.title}</h3>
                <p class="job-meta">Posted on ${formatDate(job.postingDate)} | Role: ${job.role}</p>
            </div>
            <span class="job-code-badge">${job.jobCode}</span>
        </div>

        <div class="job-section">
            <h5>Job Description</h5>
            <p>${job.description}</p>
        </div>

        <div class="job-section">
            <h5>Your Responsibilities</h5>
            <ul class="job-list-points">${responsibilities}</ul>
        </div>

        <div class="job-section">
            <h5>Preferred Skill Set</h5>
            <ul class="job-list-points">${skills}</ul>
        </div>

        <div class="job-footer">
            <span class="job-experience">Required Experience: ${job.experience}</span>
            <a class="btn btn-primary" href="${applyUrl}">Apply</a>
        </div>
    `;

    return card;
}

function renderJobs(jobsToRender) {
    const list = document.getElementById('job-list');
    const jobs = Array.isArray(jobsToRender) ? jobsToRender : jobOpenings;

    if (!list) return;

    list.innerHTML = '';

    if (!jobs.length) {
        const empty = document.createElement('div');
        empty.className = 'no-jobs-message';
        empty.textContent = 'No job openings matched your search. Try another keyword or experience value.';
        list.appendChild(empty);
    } else {
        jobs.forEach(job => list.appendChild(createJobCard(job)));
    }

    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

function normalizeText(value) {
    return String(value || '').trim().toLowerCase();
}

function parseExperienceRange(raw) {
    const matches = String(raw || '').match(/\d+(?:\.\d+)?/g);
    if (!matches || !matches.length) return null;
    const values = matches.map(Number);
    if (values.length === 1) {
        return { min: values[0], max: values[0] };
    }
    return { min: Math.min(values[0], values[1]), max: Math.max(values[0], values[1]) };
}

function matchesKeyword(job, keyword) {
    const query = normalizeText(keyword);
    if (!query) return true;

    const haystack = [
        job.title,
        job.role,
        ...(job.preferredSkills || [])
    ].join(' ').toLowerCase();

    return haystack.includes(query);
}

function matchesExperience(job, experienceQuery) {
    const query = normalizeText(experienceQuery);
    if (!query) return true;

    const jobRange = parseExperienceRange(job.experience);
    if (!jobRange) return false;

    // Numeric input: e.g., "3" should match if 3 is in role range.
    if (/^\d+(?:\.\d+)?$/.test(query)) {
        const value = Number(query);
        return value >= jobRange.min && value <= jobRange.max;
    }

    // Range input: e.g., "2-5" intersects role range.
    const queryRange = parseExperienceRange(query);
    if (queryRange) {
        return jobRange.max >= queryRange.min && jobRange.min <= queryRange.max;
    }

    // Fallback plain text contains check.
    return normalizeText(job.experience).includes(query);
}

function updateFilterSummary(count, total) {
    const resultText = document.getElementById('filter-result-text');
    if (!resultText) return;

    if (count === total) {
        resultText.textContent = `Showing all ${total} positions`;
    } else {
        resultText.textContent = `Showing ${count} of ${total} positions`;
    }
}

function initializeFilters() {
    const form = document.getElementById('career-filter-form');
    const keywordInput = document.getElementById('filter-keyword');
    const experienceInput = document.getElementById('filter-experience');
    const resetButton = document.getElementById('filter-reset');

    if (!form || !keywordInput || !experienceInput || !resetButton) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const keyword = keywordInput.value;
        const experience = experienceInput.value;

        const filteredJobs = jobOpenings.filter(job => {
            return matchesKeyword(job, keyword) && matchesExperience(job, experience);
        });

        renderJobs(filteredJobs);
        updateFilterSummary(filteredJobs.length, jobOpenings.length);
    });

    resetButton.addEventListener('click', function() {
        keywordInput.value = '';
        experienceInput.value = '';
        renderJobs(jobOpenings);
        updateFilterSummary(jobOpenings.length, jobOpenings.length);
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
    renderJobs(jobOpenings);
    updateFilterSummary(jobOpenings.length, jobOpenings.length);
    initializeFilters();
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 900, once: true, offset: 80 });
    }
});
