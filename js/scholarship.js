// ===== SCHOLARSHIP LIST PAGE DATA =====
'use strict';

const scholarshipPrograms = [
    {
        id: 'priya',
        program: 'priya',
        title: 'Dr. Priya Iyer Memorial Scholarship',
        tagline: 'For students aged 13-18 from any stream.',
        description: 'Created in fond memory of Dr. Priya Iyer, a compassionate researcher and social champion. This scholarship fully covers tuition for one deserving student each year.',
        image: '../images/priya-iyer.jpg',
        type: 'Memorial \u00B7 Inclusive',
        coverage: 'Full Tuition \u2014 100% Free',
        duration: '1 Academic Year',
        seats: '1 seat / year',
        highlights: ['No fees whatsoever', 'Science & Mathematics', 'Ages 13\u201318', 'Transgender / Special needs']
    },
    {
        id: 'kamala',
        program: 'kamala',
        title: 'Smt. Kamala Saxena Scholarship',
        tagline: 'For anyone who needs a second chance at education \u2014 at any age, any stage.',
        description: 'Named after a remarkable self-made woman who raised 6 daughters alone. This scholarship supports learners who need a restart in life.',
        image: '../images/kamala.jpg',
        type: 'Life Restart',
        coverage: '50% Tuition Support',
        duration: '1 Year (Renewable)',
        seats: '2\u20133 seats / year',
        highlights: ['All age groups', 'All Kriya courses', 'Monthly instalment option', 'No academic score barrier']
    },
    {
        id: 'abha',
        program: 'abha',
        title: 'Ms. Abha Saxena Scholarship',
        tagline: 'For students passionate about a skill, an art form, or a specific knowledge domain.',
        description: 'Honouring an internationally acclaimed artist who taught 5000+ students. Dedicated to learners who burn with passion for a craft.',
        image: '../images/abha.jpg',
        type: 'Talent & Skill-Based',
        coverage: '50% Tuition Support',
        duration: '1 Academic Year',
        seats: '2 seats / year',
        highlights: ['Skill/art portfolio required', 'Ages 12+', 'All Kriya programs', 'Flexible instalment']
    },
    {
        id: 'manju',
        program: 'manju',
        title: 'Mrs. Manju Saxena Scholarship',
        tagline: 'Recognising students who show up every day and hold themselves to high standards.',
        description: 'A merit-based scholarship for students with consistently outstanding academic performance and the discipline to match.',
        image: '../images/manju.jpg',
        type: 'Merit-Based',
        coverage: '40% Tuition Support',
        duration: '1 Year (Renewable)',
        seats: '3 seats / year',
        highlights: ['80%+ required', 'All academic courses', 'Renewable on performance', 'Essay + interview']
    },
    {
        id: 'sanjeev',
        program: 'sanjeev',
        title: 'Mr. Sanjeev Kumar Saxena Scholarship',
        tagline: 'For ambitious achievers who combine intellectual drive with a clear vision for their future.',
        description: 'Named after a life of purposeful ambition. This scholarship rewards students who have both the marks and the vision to go far.',
        image: '../images/sanjeev.jpg',
        type: 'Merit & Ambition',
        coverage: '40% Tuition Support',
        duration: '1 Year (Renewable)',
        seats: '3 seats / year',
        highlights: ['80%+ required', 'STEM & competitive prep', 'Vision statement required', 'Renewable on merit']
    }
];

function renderScholarshipCards() {
    const container = document.getElementById('scholarshipList');
    if (!container) return;

    container.innerHTML = '';
    scholarshipPrograms.forEach(function(s, i) {
        const card = document.createElement('article');
        card.className = 'sc-card';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', String(i * 80));
        card.innerHTML =
            '<div class="sc-card-image">' +
            '  <img src="' + s.image + '" alt="' + s.title + '" loading="lazy">' +
            '</div>' +
            '<div class="sc-card-body">' +
            '  <div class="sc-type-row"><i class="fas fa-tag me-1"></i>' + s.type + '</div>' +
            '  <h3>' + s.title + '</h3>' +
            '  <p class="sc-tagline">' + s.tagline + '</p>' +
            '  <div class="sc-chips">' +
            '    <span class="sc-chip chip-cov"><i class="fas fa-percent me-1"></i>' + s.coverage + '</span>' +
            '    <span class="sc-chip chip-dur"><i class="fas fa-clock me-1"></i>' + s.duration + '</span>' +
            '    <span class="sc-chip chip-seat"><i class="fas fa-chair me-1"></i>' + s.seats + '</span>' +
            '  </div>' +
            '  <ul class="sc-highlights">' +
            s.highlights.map(function(h) { return '<li><i class="fas fa-check"></i>' + h + '</li>'; }).join('') +
            '  </ul>' +
            '  <a class="sc-cta-btn" href="scholarship-detail.html?program=' + s.program + '">View Details &nbsp;<i class="fas fa-arrow-right"></i></a>' +
            '</div>';
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    loadHeader();
    loadFooter();
    renderScholarshipCards();
});