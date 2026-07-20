// ===== LANGUAGE SERVICE PAGE JAVASCRIPT =====
'use strict';

// ── Language data ────────────────────────────────────────────────────────────
const languageData = {
    french: {
        lang:      'french',
        flag:      '🇫🇷',
        title:     'French Language (Online)',
        subtitle:  'Master the language of Molière — from beginner to advanced — with expert, certified guidance.',
        heroClass: 'hero-french',
        breadcrumb:'French Language',

        description: `Our online French language programme is designed to take you from complete beginner to confident communicator. 
Led by Dr. Sambita Modak — a DELF B2 & C1 certified instructor and laureate of the prestigious <em>La Plume d'Or</em> international contest — 
every session combines conversational practice, structured grammar, and immersive cultural exposure. 
Whether your goal is school exams (CBSE/ICSE/IGCSE/IB), international DELF/DALF certification, 
or simply the joy of speaking one of the world's most beautiful languages, this course is crafted for you.`,

        benefits: [
            { icon: 'fas fa-certificate',  text: 'Taught by a DELF B2 + C1 certified instructor with an international award to her name' },
            { icon: 'fas fa-comments',     text: 'Strong focus on spoken fluency and native-style pronunciation from day one' },
            { icon: 'fas fa-graduation-cap', text: 'Structured progression: A1 → A2 → B1 → B2 levels, each with clear milestones' },
            { icon: 'fas fa-file-alt',     text: 'Exam preparation for DELF/DALF international certifications' },
            { icon: 'fas fa-users',        text: 'Small online batches (4–8 students) for personalised attention' },
            { icon: 'fas fa-globe',        text: 'Cultural immersion — literature, music, film and French-speaking world exposure' }
        ],

        structure: [
            { level: 'Level A1 — Beginner',        duration: '3 months', topics: 'Alphabet, greetings, numbers, colours, introducing yourself, basic vocabulary, simple sentences.' },
            { level: 'Level A2 — Elementary',      duration: '3 months', topics: 'Everyday conversations, shopping, travel, family, past-tense storytelling, expanded vocabulary.' },
            { level: 'Level B1 — Intermediate',    duration: '4 months', topics: 'Extended conversations, opinion expression, complex grammar (subjunctive, conditional), reading comprehension.' },
            { level: 'Level B2 — Upper Intermediate', duration: '5 months', topics: 'DELF exam preparation, essay writing, advanced grammar, current-affairs discussions, mock tests.' }
        ],

        features: [
            'Live interactive online classes (Zoom / Google Meet)',
            'Professionally prepared study materials & worksheets',
            'Dedicated speaking practice in every session',
            'Grammar drills with immediate feedback',
            'DELF/DALF exam preparation & mock tests',
            'Regular progress assessments',
            'Certificate of completion awarded',
            'Recordings available for revision (upon request)'
        ],

        eligibility: `This course is open to everyone — no prior French knowledge is required for enrolment at A1 level. 
You are a great fit if you are:`,
        eligibilityPoints: [
            'A school student studying French (CBSE, ICSE, IGCSE or IB board)',
            'A college student or working professional moving to a French-speaking country',
            'A language enthusiast wanting to learn French for travel, culture or career',
            'Someone preparing for DELF/DALF international certification',
            'A beginner or intermediate learner looking to strengthen your existing French skills'
        ],

        quickFacts: [
            { label: 'Mode',             value: 'Online only (Zoom / Google Meet)' },
            { label: 'Levels Offered',   value: 'A1, A2, B1, B2' },
            { label: 'Session Duration', value: '60 minutes' },
            { label: 'Batch Size',       value: '4–8 students' },
            { label: 'Sessions / Week',  value: '3 sessions' },
            { label: 'Certification',    value: 'DELF / DALF preparation' },
            { label: 'Certificate',      value: 'Issued on completion' }
        ],

        instructor: {
            name:       'Dr. Sambita Modak',
            photo:      '../images/Sambita.jpg',
            title:      'French Language Instructor & IBDP Educator',
            experience: '5+ Years of Teaching French',
            bio: `Sambita holds a DELF B2 diploma from the French Ministry of Education (2017) 
and a C1 degree from Alliance Française de Bangalore (2018). She was also a laureate in the 
prestigious international French language contest <strong>La Plume d'Or (2017)</strong>. 
She earned her doctorate (PhD) in Behavioural &amp; Ecological Sciences from the Indian Institute of Science, Bengaluru, 
and currently serves as an IBDP educator at Bombay International School. 
<br><br>
Sambita has 5 years of dedicated French-teaching experience, working with learners across all age groups — 
school students of CBSE/ICSE/IGCSE/IB boards, college students, and professionals relocating to French-speaking nations.`,
            qualifications: [
                { icon: 'fas fa-award',        text: 'DELF B2 — French Ministry of Education (2017)' },
                { icon: 'fas fa-award',        text: 'C1 Degree — Alliance Française de Bangalore (2018)' },
                { icon: 'fas fa-flask',        text: 'PhD — Behavioural & Ecological Sciences, IISc Bangalore' }
            ],
            achievements: [
                'Laureate \u2014 La Plume d\'Or International French Language Contest (2017)',
                'IBDP Educator at Bombay International School',
                '5+ years teaching French to learners of all ages and boards'
            ],
            email:  'sambita@kriyacoachingclasses.com',
            phone:  '+91 84313 45144'
        }
    },

    german: {
        lang:      'german',
        flag:      '🇩🇪',
        title:     'German Language (Online)',
        subtitle:  'Begin your German journey with structured, interactive and beginner-friendly online classes.',
        heroClass: 'hero-german',
        breadcrumb:'German Language',

        description: `Our online German language programme provides a solid foundation in spoken and written German 
through a carefully structured A1 curriculum. Taught by Parmanand Banerjee — a language enthusiast certified in 
German A1 from Cambridge Institute, Mumbai — the course focuses on practical communication skills 
from the very first class. Whether you are a school student, a working professional or simply someone eager 
to explore a new language, this course makes German approachable and engaging.`,

        benefits: [
            { icon: 'fas fa-certificate',   text: 'Instructor certified in German A1 from Cambridge Institute, Mumbai' },
            { icon: 'fas fa-comments',      text: 'Practical communication focus — you will start speaking from lesson one' },
            { icon: 'fas fa-book-open',     text: 'Beginner-friendly A1 curriculum with clear weekly goals' },
            { icon: 'fas fa-school',        text: 'Supports school German syllabus (all boards)' },
            { icon: 'fas fa-users',         text: 'Small online batches (4–8 students) for personalised attention' },
            { icon: 'fas fa-passport',      text: 'Foundation for Goethe-Institut / TELC international certifications' }
        ],

        structure: [
            { level: 'Module 1 — Foundations',       duration: '4 weeks', topics: 'German alphabet, pronunciation rules, greetings, numbers 1–100, colours, days, months.' },
            { level: 'Module 2 — Everyday Life',     duration: '4 weeks', topics: 'Introducing yourself & others, family vocabulary, shopping dialogues, basic food & travel phrases.' },
            { level: 'Module 3 — Grammar Core',      duration: '5 weeks', topics: 'Articles (der/die/das), nominative & accusative cases, verb conjugation, sentence structure, negation.' },
            { level: 'Module 4 — Reading & Writing', duration: '4 weeks', topics: 'Reading simple German texts, writing basic paragraphs, composing short emails and messages.' },
            { level: 'Module 5 — Exam Readiness',    duration: '3 weeks', topics: 'A1 mock tests, exam strategy, revision of all modules, oral practice, certificate assessment.' }
        ],

        features: [
            'Live interactive online classes (Zoom / Google Meet)',
            'Professionally prepared study materials & worksheets',
            'Pronunciation practice in every session',
            'Grammar exercises with step-by-step explanations',
            'School exam support (all boards)',
            'A1 certification preparation (Goethe-Institut / TELC)',
            'Progress assessments after every module',
            'Certificate of completion awarded'
        ],

        eligibility: `This course is suitable for absolute beginners — no prior German knowledge is needed. 
You are a great fit if you are:`,
        eligibilityPoints: [
            'A school student who has German as a second language (any board)',
            'A working professional planning to relocate to Germany or Austria',
            'A language enthusiast wanting to start learning German from scratch',
            'Someone preparing for Goethe-Institut A1 or TELC A1 certification',
            'Anyone curious about German culture, music, philosophy and literature'
        ],

        quickFacts: [
            { label: 'Mode',              value: 'Online only (Zoom / Google Meet)' },
            { label: 'Level Offered',     value: 'A1 (Beginner)' },
            { label: 'Session Duration',  value: '60 minutes' },
            { label: 'Batch Size',        value: '4–8 students' },
            { label: 'Sessions / Week',   value: '3 sessions' },
            { label: 'Certification',     value: 'Goethe-Institut A1 / TELC A1 preparation' },
            { label: 'Certificate',       value: 'Issued on completion' }
        ],

        instructor: {
            name:       'Parmanand Banerjee',
            photo:      '../images/Parmanand.jpeg',
            title:      'German Language Instructor',
            experience: 'German A1 Specialist',
            bio: `Parmanand is a passionate language enthusiast with a genuine love for teaching German. 
He completed his German A1 certification from the Cambridge Institute, Mumbai, and brings an 
infectious enthusiasm for the language into every class. Parmanand continues his own German studies 
to steadily advance his proficiency — a commitment that keeps his teaching current and motivational.
<br><br>
His teaching philosophy is simple: make the language accessible, fun, and immediately practical. 
Students in his classes start speaking German from the very first session, building confidence 
alongside grammatical accuracy.`,
            qualifications: [
                { icon: 'fas fa-award', text: 'German A1 Certification — Cambridge Institute, Mumbai' },
                { icon: 'fas fa-book', text: 'Continuing advanced German studies for higher proficiency' }
            ],
            achievements: [
                'Certified German A1 instructor \u2014 Cambridge Institute, Mumbai',
                'Specialises in helping complete beginners start speaking German confidently',
                'Actively advancing personal German proficiency through ongoing studies'
            ],
            email:  'parmanand@kriyacoachingclasses.com',
            phone:  '+91 84313 45144'
        }
    }
};

// ── Helper: populate elements ─────────────────────────────────────────────────
function setHTML(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
}
function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

// ── Main render ───────────────────────────────────────────────────────────────
function renderLanguagePage(data) {
    // Page title & meta
    document.title = data.title + ' - Kriya Coaching Classes';

    // Hero
    const heroSection = document.getElementById('lang-hero');
    if (heroSection) heroSection.classList.add(data.heroClass);

    setHTML('lang-flag',     data.flag);
    setText('lang-title',    data.title);
    setText('lang-subtitle', data.subtitle);
    setText('breadcrumb-lang', data.breadcrumb);

    // About
    setHTML('lang-description', data.description);

    // Benefits
    const benList = document.getElementById('lang-benefits');
    if (benList) {
        benList.innerHTML = data.benefits.map(b =>
            `<li><i class="${b.icon}"></i><span>${b.text}</span></li>`
        ).join('');
    }

    // Structure
    const structureEl = document.getElementById('lang-structure');
    if (structureEl) {
        structureEl.innerHTML = data.structure.map(s =>
            `<div class="structure-item">
                <div class="structure-header">
                    <span class="structure-level">${s.level}</span>
                    <span class="structure-duration"><i class="fas fa-clock me-1"></i>${s.duration}</span>
                </div>
                <p class="structure-topics">${s.topics}</p>
            </div>`
        ).join('');
    }

    // What's included
    const featuresEl = document.getElementById('lang-features');
    if (featuresEl) {
        featuresEl.innerHTML = data.features.map(f =>
            `<li><i class="fas fa-check-circle"></i><span>${f}</span></li>`
        ).join('');
    }

    // Eligibility
    setHTML('lang-eligibility', data.eligibility);
    const eligibilityList = document.getElementById('lang-eligibility-points');
    if (eligibilityList) {
        eligibilityList.innerHTML = data.eligibilityPoints.map(p =>
            `<li><i class="fas fa-user-check"></i><span>${p}</span></li>`
        ).join('');
    }

    // Quick facts
    const factsEl = document.getElementById('lang-quick-facts');
    if (factsEl) {
        factsEl.innerHTML = data.quickFacts.map(f =>
            `<li><span class="fact-label">${f.label}</span><span class="fact-value">${f.value}</span></li>`
        ).join('');
    }

    // Instructor
    const inst = data.instructor;
    const photoEl = document.getElementById('instructor-photo');
    if (photoEl) { photoEl.src = inst.photo; photoEl.alt = inst.name; }

    setText('instructor-name',       inst.name);
    setText('instructor-title',      inst.title);
    setText('instructor-experience', inst.experience);
    setHTML('instructor-bio',        inst.bio);

    const qualsEl = document.getElementById('instructor-qualifications');
    if (qualsEl) {
        qualsEl.innerHTML = inst.qualifications.map(q =>
            `<div class="qual-item"><i class="${q.icon}"></i><span>${q.text}</span></div>`
        ).join('');
    }

    const achieveEl = document.getElementById('instructor-achievements');
    if (achieveEl) {
        achieveEl.innerHTML = inst.achievements.map(a =>
            `<div class="achieve-item">${a}</div>`
        ).join('');
    }

    const emailLink = document.getElementById('instructor-email-link');
    if (emailLink) emailLink.href = 'mailto:' + inst.email;
    setText('instructor-email', inst.email);

    const phoneLink = document.getElementById('instructor-phone-link');
    if (phoneLink) phoneLink.href = 'tel:' + inst.phone.replace(/\s/g, '');
    setText('instructor-phone', inst.phone);
}

// ── Init ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    loadHeader();
    loadFooter();

    const params  = new URLSearchParams(window.location.search);
    const langKey = (params.get('lang') || 'french').toLowerCase();
    const data    = languageData[langKey] || languageData.french;

    renderLanguagePage(data);
});
