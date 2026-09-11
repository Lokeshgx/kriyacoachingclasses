// ===== SCHOLARSHIP DETAIL PAGE DATA =====
'use strict';

const scholarships = {

  // ─── 1. Dr. Priya Iyer Memorial Scholarship (100% FREE) ─────────────────
  priya: {
    badge: '100% Free',
    badgeClass: 'badge-gold',
    title: 'Dr. Priya Iyer Memorial Scholarship',
    tagline: 'Honouring a life of compassion, inclusion and courageous advocacy.',
    heroClass: 'hero-priya',
    coverageText: 'Full Tuition — 100% Free',
    coveragePercent: 100,
    duration: '1 Academic Year',
    seats: '1 student per year',
    type: 'Memorial · Inclusive Support',
    scholarOf:'In Memory & Honour Of',
    courses: ['Science (Physics, Chemistry, Biology)', 'Mathematics', 'All standard subjects as required'],
    feeStructure: {
      waivedOf: '100% of all tuition fees',
      studentPays: 'Nothing — fully waived',
      notes: 'All tuition, study materials and assessments are completely covered. There is no financial burden on the selected student or their family.'
    },
    eligibility: [
      'Age: 13 to 18 years at the time of application',
      'Financial need is considered but is not the primary selection criterion',
      'Demonstrated genuine desire to learn and grow academically',
      'Submission of a personal statement and relevant supporting documents (medical or identity certificates as applicable)'
    ],
    selectionProcess: [
      { step: 1, title: 'Application Submission', desc: 'Complete the scholarship application form with a personal statement and supporting certificates.' },
      { step: 2, title: 'Initial Screening', desc: 'A dedicated panel reviews all applications for eligibility and completeness.' },
      { step: 3, title: 'Personal Interview', desc: 'Shortlisted candidates are invited for a warm, conversational interview with Kriya faculty.' },
      { step: 4, title: 'Final Selection & Announcement', desc: 'One deserving student is selected and the decision announced within 3 weeks of the application deadline.' }
    ],
    whyThisScholarship: 'Created in the fond memory of Dr. Priya Iyer by the Kriya team, this scholarship honours her lifelong commitment to inclusion, compassion and fighting for those the world often overlooks.',
    person: {
      name: 'Dr. Priya Iyer',
      photo: '../images/priya-iyer.jpg',
      role: 'Researcher \u00B7 Social Champion \u00B7 Friend',
      lifeStory: [
        "Dr. Priya Iyer was an extraordinary human being \u2014 a researcher by profession and a changemaker by heart. Blessed with a brilliant academic mind, she pursued her research with the same passion that she poured into every human connection she formed.",
        "What set Priya apart was not merely her academic accomplishments, but her profound empathy. She had a rare and beautiful soft corner for children with physical and mental challenges, and she was one of the earliest and most vocal advocates for the dignity and inclusion of the transgender community in India \u2014 long before it became a mainstream conversation.",
        "Priya believed that the world did not need pity for its most vulnerable people \u2014 it needed action, opportunity, and love. She channeled that belief into every space she occupied: her research, her friendships, her advocacy, and her quiet, everyday acts of kindness. She left an indelible mark on everyone who had the privilege of knowing her."
      ],
      achievements: [
        'Completed advanced academic research in her specialised field',
        'Actively advocated for the rights and inclusion of transgender individuals in Indian society',
        'Volunteered with organisations supporting children with special needs',
        'Inspired everyone around her to see the world through a lens of compassion and equity',
        'Left an indelible mark on the Kriya community as a beloved friend, advisor and inspiration'
      ],
      lifeLessons: [
        { icon: 'fas fa-heart', title: 'Compassion is a Superpower', lesson: 'Priya showed us that caring deeply about others \u2014 especially those the world ignores \u2014 is not a weakness. It is the greatest strength a human being can possess.' },
        { icon: 'fas fa-hands-helping', title: 'Inclusion is Non-Negotiable', lesson: 'Every person, regardless of their identity or challenge, deserves access to education, opportunity and dignity. Priya lived this truth every single day.' },
        { icon: 'fas fa-lightbulb', title: 'Research Must Serve People', lesson: 'Knowledge and research have no value unless they serve humanity. Priya never lost sight of the real-world human impact of her academic work.' }
      ],
      legacy: "Dr. Priya Iyer may no longer be with us, but her spirit lives on through this scholarship. Every year, one young person who belongs to the transgender community or lives with a physical or mental challenge will receive a full year of free education at Kriya \u2014 because of Priya's love for them. That is a legacy worth celebrating."
    }
  },

  // ─── 2. Smt. Kamala Saxena Scholarship ──────────────────────────────────
  kamala: {
    badge: '50% Support',
    badgeClass: 'badge-teal',
    title: 'Smt. Kamala Saxena Scholarship',
    tagline: 'For those who dare to restart, rebuild and rise \u2014 at any age.',
    heroClass: 'hero-kamala',
    coverageText: '75% Tuition Fee Support',
    coveragePercent: 75,
    duration: '1 Academic Year (Renewable)',
    seats: '1 student per year',
    type: 'Life Restart \u00B7 Partial Support',
    scholarOf: 'Honour Of',
    courses: ['All standard academic courses offered at Kriya', 'NIOS preparation', 'Competitive exam training'],
    feeStructure: {
      waivedOf: '75% of tuition fees',
      studentPays: '25% of tuition fees',
      notes: 'The remaining 50% can be paid in monthly instalments to ease the financial burden. Hardship waivers on the student share may be considered on a case-by-case basis.'
    },
    eligibility: [
      'Open to any age group \u2014 students, young adults and returning learners',
      'Must demonstrate a genuine need for a fresh start in education',
      'Any life circumstance that caused an education gap is valid (family hardship, illness, career change, etc.)',
      'Submission of a personal statement describing their journey and restart goal',
      'Basic academic assessment to identify the right course level'
    ],
    selectionProcess: [
      { step: 1, title: 'Application & Personal Statement', desc: 'Submit an application describing your background, the circumstances that interrupted your education, and your goals going forward.' },
      { step: 2, title: 'Document Verification', desc: 'Supporting documents reviewed by the scholarship committee.' },
      { step: 3, title: 'Counseling Session', desc: 'A one-on-one session with Kriya faculty to understand your learning needs and match you with the right course.' },
      { step: 4, title: 'Selection & Enrolment', desc: 'Selected candidates are notified and enrolled with 50% fee relief applied immediately.' }
    ],
    whyThisScholarship: 'Named after the grandmother of Kriya founder Nitin Saxena, this scholarship embodies Smt. Kamala Saxena\'s own life \u2014 a life of resilience, self-made strength, and the belief that it is never too late to learn.',
    person: {
      name: 'Smt. Kamala Saxena',
      photo: '../images/kamala.jpg',
      role: 'Self-Made Woman \u00B7 Single Mother \u00B7 Lifelong Learner',
      lifeStory: [
        "Smt. Kamala Saxena is a woman who was, by every measure, ahead of her century. At around the age of 25, life dealt her an unimaginable blow \u2014 she lost her husband, leaving her alone to raise six daughters in an era when a woman\'s independence was far from guaranteed.",
        "Rather than surrendering to circumstance, Kamala chose education. She educated herself, stood tall, and raised all six of her daughters to excellence \u2014 not just academically, but as complete, independent human beings. She not only supported their individual passions but stood firmly behind each daughter\'s life choices.",
        "As the years passed, Kamala extended her nurturing to her grandchildren as well, helping her daughters raise the next generation while they built their careers. A true feminist decades before the word became fashionable, she believed in equity of responsibility. Notably, she made sure that her grandson, Nitin Saxena (who would go on to found Kriya Coaching Classes), learned every life skill \u2014 cooking, cleaning, caregiving \u2014 that any of her granddaughters would be expected to know.",
        "Today, Nitin traces the values that define Kriya \u2014 empathy, discipline, equity, and the belief that every person deserves a chance \u2014 directly to the path that his grandmother walked. She is the foundation beneath everything Kriya stands for."
      ],
      achievements: [
        'Educated herself after the sudden loss of her husband at approximately age 25',
        'Raised six daughters single-handedly to become successful, independent individuals',
        'Supported each daughter in pursuing her individual passion without restriction',
        'Helped raise multiple grandchildren while her daughters built their careers',
        'Instilled the values of discipline, independence and equity across two generations',
        'Inspired the founding philosophy and values of Kriya Coaching Classes'
      ],
      lifeLessons: [
        { icon: 'fas fa-mountain', title: 'Resilience Has No Age Limit', lesson: 'Kamala lost the most important support in her life at 25 and chose to become her own pillar. Her story teaches us that a restart is always possible \u2014 regardless of age, circumstance or setback.' },
        { icon: 'fas fa-balance-scale', title: 'Equity Over Equality', lesson: 'She did not treat her grandson differently because of his gender. She ensured he learned the same life skills as her granddaughters. That quiet, radical act of equity is a lesson that resonates decades later.' },
        { icon: 'fas fa-graduation-cap', title: 'Education is the Ultimate Freedom', lesson: 'In an era when a widowed woman was expected to depend on others, Kamala chose the path of self-education and self-reliance. She demonstrated that knowledge is the one thing no one can take from you.' },
        { icon: 'fas fa-heart', title: 'Love Enables, Not Restricts', lesson: 'She gave each of her daughters the freedom to follow their passions rather than forcing them into prescribed roles. Her love was empowering, not confining.' }
      ],
      legacy: "Smt. Kamala Saxena\'s legacy is woven into the DNA of Kriya Coaching Classes. Every student who receives this scholarship and uses it to restart their educational journey is living proof that her spirit lives on \u2014 resilient, determined, and unstoppable."
    }
  },

  // ─── 3. Ms. Abha Saxena Scholarship ─────────────────────────────────────
  abha: {
    badge: '50% Support',
    badgeClass: 'badge-purple',
    title: 'Ms. Abha Saxena Scholarship',
    tagline: 'Celebrating the power of art, skill and the courage to pursue your true calling.',
    heroClass: 'hero-abha',
    coverageText: '75% Tuition Fee Support',
    coveragePercent: 75,
    duration: '1 Academic Year',
    seats: '1 student per year',
    type: 'Talent & Skill-Based \u00B7 Partial Support',
    scholarOf:'Honour Of',
    courses: ['All academic subjects at Kriya', 'Skill development modules', 'Language and communication courses', 'Personality development programs'],
    feeStructure: {
      waivedOf: '75% of tuition fees',
      studentPays: '25% of tuition fees',
      notes: 'The student\'s share can be paid in flexible monthly instalments. Students may also apply for an additional hardship consideration if financial need is significant.'
    },
    eligibility: [
      'Students and adults who are deeply passionate about a specific skill, art form or knowledge domain',
      'Must submit a portfolio or demonstration of their skill/passion (artwork, writing sample, performance video, etc.)',
      'Academic requirement: minimum 60% in most recent examination',
      'Age: 12 years and above (no upper age limit for adult learners)',
      'Personal statement explaining how the Kriya course will help them grow their talent'
    ],
    selectionProcess: [
      { step: 1, title: 'Application & Portfolio Submission', desc: 'Submit the application form along with a portfolio, demo or written description of your passion and skill.' },
      { step: 2, title: 'Portfolio Review', desc: 'A panel including Kriya faculty reviews the portfolio to assess the depth and authenticity of the passion.' },
      { step: 3, title: 'Presentation / Interview', desc: 'Shortlisted candidates present their work and vision in a brief, informal presentation or interview.' },
      { step: 4, title: 'Selection', desc: 'Two students are selected based on passion, potential and how the scholarship will accelerate their journey.' }
    ],
    whyThisScholarship: 'Named in honour of Ms. Abha Saxena, an internationally celebrated artist and teacher, this scholarship exists to nurture the kind of all-consuming passion for a craft that she herself embodied throughout her extraordinary life.',
    person: {
      name: 'Ms. Abha Saxena',
      photo: '../images/abha.jpg',
      role: 'World-Class Artist \u00B7 Master Teacher \u00B7 Cultural Icon',
      lifeStory: [
        "Ms. Abha Saxena is one of those rare individuals who devotes not just a part, but the entirety of her life to a single calling: art. Her work is recognised and celebrated not only across India but on international stages, a testament to the universality of her vision and craft.",
        "What makes Abha's story particularly powerful is that her artistry is never self-contained. She is, at her core, a teacher. Over the course of her life, she teaches more than 5,000 students the skills, discipline, and joy of various art forms. For her, teaching is not a profession \u2014 it is an extension of her art.",
        "Her choices are never guided by convention. She is meticulous, deeply particular, and possesses a global cultural sensibility that makes her work speak across borders and languages. Her personality, much like her art, speaks volumes of her immense calibre. To know Abha is to encounter someone who has found her purpose completely and lives it with every breath."
      ],
      achievements: [
        'Internationally acclaimed artist with work recognised across India and abroad',
        'Dedicated her entire life to the pursuit and teaching of art',
        'Taught and mentored over 5,000 students in various art disciplines',
        'Recognized for a meticulous global cultural sensibility in her work',
        'Served as a living bridge between traditional Indian art and international artistic expression'
      ],
      lifeLessons: [
        { icon: 'fas fa-palette', title: 'Passion Over Profession', lesson: 'Abha did not treat art as a career choice \u2014 she treated it as her identity. She teaches us that when you love what you do completely, excellence follows naturally.' },
        { icon: 'fas fa-chalkboard-teacher', title: 'True Mastery Multiplies', lesson: 'A master who keeps their knowledge to themselves has wasted half their gift. Abha shared her mastery with 5,000+ students, ensuring her art would live far beyond her.' },
        { icon: 'fas fa-globe', title: 'Authenticity Transcends Borders', lesson: 'Her work is deeply personal and rooted in her unique perspective \u2014 yet it resonated internationally. Authenticity, not imitation, is what creates work that the world remembers.' }
      ],
      legacy: "Ms. Abha Saxena\'s legacy is one of creative dedication. Through this scholarship, Kriya ensures that students who burn with passion for a skill or art form \u2014 but may lack the financial means to pursue it fully \u2014 get the support they need to let that fire grow."
    }
  },

  // ─── 4. Mrs. Manju Saxena Scholarship ───────────────────────────────────
  manju: {
    badge: '75% Support',
    badgeClass: 'badge-blue',
    title: 'Mrs. Manju Saxena Scholarship',
    tagline: 'For students who strive every day to be better than yesterday.',
    heroClass: 'hero-manju',
    coverageText: '75% Tuition Fee Support',
    coveragePercent: 75,
    duration: '1 Academic Year',
    seats: '1 student per year',
    type: 'Merit-Based \u00B7 Partial Support',
    scholarOf:'Honour Of',
    courses: ['All academic courses at Kriya', 'Science, Mathematics, Commerce, Humanities', 'Competitive exam preparation'],
    feeStructure: {
      waivedOf: '75% of tuition fees',
      studentPays: '25% of tuition fees',
      notes: 'The student has to pay 25% share at the time of admission.'
    },
    eligibility: [
      'Minimum 80% aggregate in the most recent board or school examination',
      'Consistent academic performance over the last 2 academic years',
      'Active participation in school or community activities',
      'Submission of a short essay on your academic goals and career vision',
      'Two teacher or mentor recommendations',
      'Interview with Kriya\'s selection committee'
    ],
    selectionProcess: [
      { step: 1, title: 'Online Application', desc: 'Complete the application with academic records, essay, and teacher recommendations.' },
      { step: 2, title: 'Merit Screening', desc: 'Academic records and essay reviewed by the scholarship panel for eligibility and quality.' },
      { step: 3, title: 'Selection Interview', desc: 'Top candidates interviewed to assess goals, commitment and character.' },
      { step: 4, title: 'Results & Enrolment', desc: 'Three students selected and notified. Fee relief applied from the first session.' }
    ],
    whyThisScholarship: 'Named in honour of Mrs. Manju Saxena, whose steadfast belief in the power of discipline and daily excellence serves as an inspiration to every serious student.',
    person: {
      name: 'Mrs. Manju Saxena',
      photo: '../images/manju.jpg',
      role: 'Pillar of Discipline \u00B7 Advocate of Academic Excellence',
      lifeStory: [
        "Mrs. Manju Saxena is a lively person and a true kindred spirit who has kept her inner child alive in this day and age.",
        "She is a true learner and never stops learning new things and trying out new ventures whenever feasible. Whether it is learning to use computers in the times when it was barely introduced in the country, with a one-year-old kid in her arms, or honing her entrepreneurial skills with her food enterprise, or just learning a new language at the age of 60, she never quits. She has lived her hardships with dignity and a smile. Even those hardships have not managed to fade away her childlike innocence and curiosity for the world.",
        "This scholarship is meant for anyone who holds the same zeal as her to learn something in life. Applicable to any kid or adult."
      ],
      achievements: [
        'A life defined by discipline, consistency and high personal standards',
        'Profound positive influence on the Kriya family and the values it upholds',
        'An inspiring model of how daily dedication creates lasting achievement',
        'A demonstration that quiet excellence often speaks louder than public acclaim'
      ],
      lifeLessons: [
        { icon: 'fas fa-calendar-check', title: 'Consistency is the Key', lesson: 'Excellence is not achieved in a single brilliant moment. It is built through small, disciplined actions repeated every single day. Mrs. Manju Saxena lived this truth.' },
        { icon: 'fas fa-star', title: 'Standards are Self-Set', lesson: 'Hold yourself to high standards not because someone is watching, but because you respect yourself. That internal drive is what separates good students from great ones.' },
        { icon: 'fas fa-seedling', title: 'Growth is a Daily Choice', lesson: 'Every day is an opportunity to become slightly better than the day before. This scholarship celebrates students who make that choice consciously and consistently.' }
      ],
      legacy: "The Mrs. Manju Saxena Scholarship stands as a recognition that merit is not just about marks \u2014 it is about character, commitment and the daily choice to strive for excellence. Her legacy lives in every student who receives this award."
    }
  },

  // ─── 5. Mr. Sanjeev Kumar Saxena Scholarship ────────────────────────────
  sanjeev: {
    badge: '75% Support',
    badgeClass: 'badge-orange',
    title: 'Mr. Sanjeev Kumar Saxena Scholarship',
    tagline: 'For ambitious minds who combine intellectual curiosity with the drive to achieve.',
    heroClass: 'hero-sanjeev',
    coverageText: '75% Tuition Fee Support',
    coveragePercent: 75,
    duration: '1 Academic Year',
    seats: '1 student per year',
    type: 'Merit & Ambition \u00B7 Partial Support',
    scholarOf:'Honour Of',
    courses: ['All academic courses at Kriya', 'STEM subjects', 'Commerce and Economics', 'Competitive exam coaching (JEE, NEET, KCET, UPSC preparation)'],
    feeStructure: {
      waivedOf: '75% of tuition fees',
      studentPays: '25% of tuition fees',
      notes: 'The student has to pay 25% share at the time of admission.'
    },
    eligibility: [
      'Minimum 80% in the most recent board or school examination',
      'Demonstrated ambition \u2014 a clear goal and a plan to achieve it',
      'Participation in extracurricular, competitive or community activities',
      'Submission of a vision statement: where you want to be in 5 years and how Kriya will help get you there',
      'Two recommendations from teachers or mentors',
      'Interview with the Kriya selection panel'
    ],
    selectionProcess: [
      { step: 1, title: 'Application & Vision Statement', desc: 'Submit the application with academic records, vision statement and recommendations.' },
      { step: 2, title: 'Aptitude & Academic Review', desc: 'Records and vision statement evaluated for merit and clarity of purpose.' },
      { step: 3, title: 'Panel Interview', desc: 'Candidates discuss their goals, strengths and study strategy with a Kriya panel.' },
      { step: 4, title: 'Final Selection', desc: 'Three students selected. Results shared within 3 weeks. Scholarship applied from first session.' }
    ],
    whyThisScholarship: 'Named in honour of Mr. Sanjeev Kumar Saxena, whose life has exemplified the belief that ambition, paired with hard work and integrity, can take a person as far as they dare to dream.',
    person: {
      name: 'Mr. Sanjeev Kumar Saxena',
      photo: '../images/sanjeev.jpg',
      role: 'Visionary \u00B7 Champion of Ambition \u00B7 Source of Inspiration',
      lifeStory: [
        "Mr. Sanjeev Kumar Saxena is living proof that education is not just schools and textbooks and that a well-educated man need not have read a thousand books. A self-made man, strong yet humble like a banyan tree.",
        "Mr. Sanjeev can amaze you with his “ahead by a century” open mindset and his love, affection, and warmth. A resilient family man who never shies away from a day of hard work. A kind-hearted man who can teach a lesson or two on what true manhood looks like. A feminist by nature, he values self-dependence for everyone equally.",
        "Therefore, in keeping with his principles, this scholarship is meant for anyone who wants to do something in their life. Applicable to any kid or adult."
      ],
      achievements: [
        'A life of purposeful ambition that has inspired those around him across generations',
        'Consistent advocate for marrying intellectual curiosity with practical drive',
        'Role model for setting clear goals and pursuing them with integrity',
        'Influential figure in the personal and professional journeys of many who know him'
      ],
      lifeLessons: [
        { icon: 'fas fa-crosshairs', title: 'Clarity of Purpose', lesson: 'Know exactly why you are studying and where you want to go. A student with a clear goal is ten times more effective than one who is merely going through the motions.' },
        { icon: 'fas fa-rocket', title: 'Ambition is Not Arrogance', lesson: 'Wanting more, achieving more and dreaming bigger is not arrogance \u2014 it is the engine of progress. Embrace your ambition and pair it with hard work.' },
        { icon: 'fas fa-compass', title: 'Values are the True Compass', lesson: 'Achievements built without integrity do not last. Mr. Saxena has shown that the greatest accomplishments are those that leave both a mark and a clean conscience.' }
      ],
      legacy: "Mr. Sanjeev Kumar Saxena\'s legacy is one of ambition with purpose. Through this scholarship, Kriya invests in the next generation of achievers \u2014 young people who carry both the drive to succeed and the values to make their success meaningful."
    }
  },

  // ─── 6. Mrs. Indu Saxena Scholarship ───────────────────────────────────
  indu: {
    badge: '75% Support',
    badgeClass: 'badge-blue',
    title: 'Mrs. Indu Saxena Scholarship',
    tagline: '',
    heroClass: 'hero-indu',
    coverageText: '75% Tuition Fee Support',
    coveragePercent: 75,
    duration: '1 Academic Year',
    seats: '1 student per year',
    type: 'Merit-Based \u00B7 Partial Support',
    scholarOf:'Honour Of',
    courses: ['All academic courses at Kriya', 'Science, Mathematics, Commerce, Humanities', 'Competitive exam preparation'],
    feeStructure: {
      waivedOf: '75% of tuition fees',
      studentPays: '25% of tuition fees',
      notes: 'The student has to pay 25% share at the time of admission.'
    },
    eligibility: [
      'Minimum 80% aggregate in the most recent board or school examination',
      'Consistent academic performance over the last 2 academic years',
      'Active participation in school or community activities',
      'Submission of a short essay on your academic goals and career vision',
      'Two teacher or mentor recommendations',
      'Interview with Kriya\'s selection committee'
    ],
    selectionProcess: [
      { step: 1, title: 'Online Application', desc: 'Complete the application with academic records, essay, and teacher recommendations.' },
      { step: 2, title: 'Merit Screening', desc: 'Academic records and essay reviewed by the scholarship panel for eligibility and quality.' },
      { step: 3, title: 'Selection Interview', desc: 'Top candidates interviewed to assess goals, commitment and character.' },
      { step: 4, title: 'Results & Enrolment', desc: 'Three students selected and notified. Fee relief applied from the first session.' }
    ],
    whyThisScholarship: 'Named in honour of Mrs. Indu Saxena, whose steadfast belief in the power of discipline and daily excellence serves as an inspiration to every serious student.',
    person: {
      name: 'Mrs. Indu Saxena',
      photo: '../images/Indu_saxena.jpg',
      role: 'Self-Driven \u00B7 Focused and positive Personality',
      lifeStory: [
        "Mrs. Indu Saxena is a self-driven person who despite the general stereotype at her time that women weren’t good at financial planning, managed her finances in a manner that made her financially independent very early in her life. She holds the zeal for life and the courage to withstand any challenge.",
        "The child in her heart is ever alive and even at the age of crossing 60’s, she can fill a room with positivity with her child-like innocent laughter. Despite many hardships, she has a very forward-looking outlook towards life.",
        "Hence, this scholarship is meant for someone who holds the positivity and courage to face the challenges offered by life."
      ],
      achievements: [
        'A life defined by discipline, consistency and high personal standards',
        'Profound positive influence on the Kriya family and the values it upholds',
        'An inspiring model of how daily dedication creates lasting achievement',
        'A demonstration that quiet excellence often speaks louder than public acclaim'
      ],
      lifeLessons: [
        { icon: 'fas fa-calendar-check', title: 'Consistency is the Key', lesson: 'Excellence is not achieved in a single brilliant moment. It is built through small, disciplined actions repeated every single day. Mrs. Indu Saxena lived this truth.' },
        { icon: 'fas fa-star', title: 'Standards are Self-Set', lesson: 'Hold yourself to high standards not because someone is watching, but because you respect yourself. That internal drive is what separates good students from great ones.' },
        { icon: 'fas fa-seedling', title: 'Growth is a Daily Choice', lesson: 'Every day is an opportunity to become slightly better than the day before. This scholarship celebrates students who make that choice consciously and consistently.' }
      ],
      legacy: "The Mrs. Indu Saxena Scholarship stands as a recognition that merit is not just about marks \u2014 it is about character, commitment and the daily choice to strive for excellence. Her legacy lives in every student who receives this award."
    }
  },

  // ─── 7. Ms. Chhavi Saxena Scholarship ───────────────────────────────────
  chhavi: {
    badge: '75% Support',
    badgeClass: 'badge-blue',
    title: 'Ms. Chhavi Saxena Scholarship',
    tagline: 'For students who strive every day to be better than yesterday.',
    heroClass: 'hero-chhavi',
    coverageText: '75% Tuition Fee Support',
    coveragePercent: 75,
    duration: '1 Academic Year',
    seats: '1 student per year',
    type: 'Merit-Based \u00B7 Partial Support',
    scholarOf:'Honour Of',
    courses: ['All academic courses at Kriya', 'Science, Mathematics, Commerce, Humanities', 'Competitive exam preparation'],
    feeStructure: {
      waivedOf: '75% of tuition fees',
      studentPays: '25% of tuition fees',
      notes: 'The student has to pay 25% share at the time of admission.'
    },
    eligibility: [
      'Minimum 80% aggregate in the most recent board or school examination',
      'Consistent academic performance over the last 2 academic years',
      'Active participation in school or community activities',
      'Submission of a short essay on your academic goals and career vision',
      'Two teacher or mentor recommendations',
      'Interview with Kriya\'s selection committee'
    ],
    selectionProcess: [
      { step: 1, title: 'Online Application', desc: 'Complete the application with academic records, essay, and teacher recommendations.' },
      { step: 2, title: 'Merit Screening', desc: 'Academic records and essay reviewed by the scholarship panel for eligibility and quality.' },
      { step: 3, title: 'Selection Interview', desc: 'Top candidates interviewed to assess goals, commitment and character.' },
      { step: 4, title: 'Results & Enrolment', desc: 'Three students selected and notified. Fee relief applied from the first session.' }
    ],
    whyThisScholarship: 'Named in honour of Ms. Chhavi Saxena, whose steadfast belief in the power of discipline and daily excellence serves as an inspiration to every serious student.',
    person: {
      name: 'Ms. Chhavi Saxena',
      photo: '../images/Chhavi_saxena.jpg',
      role: 'HR Leader in IT industry \u00B7 Managing business clients \u00B7 Kriya\'s guiding light',
      lifeStory: [
        "Ms. Chhavi Saxena is the founding brain behind Kriya, and she plays a vital role in the planning and management level decision making for the institute.",
        "Beyond her formal association with the institute, she is an incredibly inspirational human being. Her determination to achieve what others may define as unfathomable is beyond proportion. She has not heard the words “give up”. Be it academia, arts, professional career or just being a perfect sister, friend, daughter and other relations, she doesn’t give up until she has ensured perfection.",
        "For someone who is ready to show similar dedication to their goals, this scholarship is ideal for them to apply."
      ],
      achievements: [
        'A life defined by discipline, consistency and high personal standards',
        'Profound positive influence on the Kriya family and the values it upholds',
        'An inspiring model of how daily dedication creates lasting achievement',
        'A demonstration that quiet excellence often speaks louder than public acclaim'
      ],
      lifeLessons: [
        { icon: 'fas fa-calendar-check', title: 'Consistency is the Key', lesson: 'Excellence is not achieved in a single brilliant moment. It is built through small, disciplined actions repeated every single day. Ms. Chhavi Saxena lived this truth.' },
        { icon: 'fas fa-star', title: 'Standards are Self-Set', lesson: 'Hold yourself to high standards not because someone is watching, but because you respect yourself. That internal drive is what separates good students from great ones.' },
        { icon: 'fas fa-seedling', title: 'Growth is a Daily Choice', lesson: 'Every day is an opportunity to become slightly better than the day before. This scholarship celebrates students who make that choice consciously and consistently.' }
      ],
      legacy: "The Ms. Chhavi Saxena Scholarship stands as a recognition that merit is not just about marks \u2014 it is about character, commitment and the daily choice to strive for excellence. Her legacy lives in every student who receives this award."
    }
  },
};

// ── Helper utilities ─────────────────────────────────────────────────────────
function html(id) { return document.getElementById(id); }
function setHTML(id, content) { const el = html(id); if (el) el.innerHTML = content; }
function setText(id, content) { const el = html(id); if (el) el.textContent = content; }

// ── Render all sections ──────────────────────────────────────────────────────
function renderScholarshipDetail(data) {
    document.title = data.title + ' - Kriya Coaching Classes';

    // Hero
    const heroEl = document.getElementById('sd-hero');
    if (heroEl) heroEl.classList.add(data.heroClass);

    setHTML('sd-badge', '<span class="sd-badge ' + data.badgeClass + '">' + data.badge + '</span>');
    setText('sd-title', data.title);
    setText('sd-tagline', data.tagline);
    setText('sd-breadcrumb', data.title);
    setText('sd-stat-coverage', data.coverageText);
    setText('sd-stat-duration', data.duration);
    setText('sd-stat-seats', data.seats);
    setText('sd-stat-type', data.type);
    setText('sd-heading-scholar-of', data.scholarOf);

    // Mirror stats into sidebar
    setText('sb-coverage', data.coverageText);
    setText('sb-duration', data.duration);
    setText('sb-seats', data.seats);
    setText('sb-type', data.type);

    // Why this scholarship
    setHTML('sd-why', data.whyThisScholarship);

    // Courses
    const coursesEl = html('sd-courses');
    if (coursesEl) coursesEl.innerHTML = data.courses.map(c =>
        '<li><i class="fas fa-check-circle"></i><span>' + c + '</span></li>'
    ).join('');

    // Fee structure
    setText('sd-fee-kriya', data.feeStructure.waivedOf);
    setText('sd-fee-student', data.feeStructure.studentPays);
    setText('sd-fee-notes', data.feeStructure.notes);

    // Eligibility
    const eligEl = html('sd-eligibility');
    if (eligEl) eligEl.innerHTML = data.eligibility.map(e =>
        '<li><i class="fas fa-user-check"></i><span>' + e + '</span></li>'
    ).join('');

    // Selection process
    const procEl = html('sd-process');
    if (procEl) procEl.innerHTML = data.selectionProcess.map(s =>
        '<div class="proc-step"><div class="proc-num">' + s.step + '</div>' +
        '<div><h5>' + s.title + '</h5><p>' + s.desc + '</p></div></div>'
    ).join('');

    // Person section
    const p = data.person;
    const imgEl = html('sd-person-photo');
    if (imgEl) { imgEl.src = p.photo; imgEl.alt = p.name; }
    setText('sd-person-name', p.name);
    setText('sd-person-role', p.role);
    setText('sd-person-era', p.era);

    if(p.name === 'Dr. Priya Iyer') {
        const priyaEl = html('sd-priya');
        if (priyaEl) priyaEl.innerHTML = '<div class="why-pullquote" data-aos="fade-up">'+
                    '<i class="fas fa-quote-left why-quote-icon"></i>'+
                    '<cite>&mdash; A personal note from founder...</cite><br/>'+
                    '<p>&ldquo;In physics, during the school days, we were taught about photons. Compact packets of energy which together form the illuminating and life-giving light which surrounds us all. I guess, there is no better way to describe Priya other than that. A single person can be many things for many people but Priya played several roles in each of our lives.</p>'+
                        '<p>She was my close friend, collaborator, gardening enthusiast, writing buddy, travel companion and a great mentor and counsellor. From the very first day that we met four years ago to the very last moment, her motivational energy, her excitement for science, fondness for nature and empathy for everyone she knew remained beyond measure. She was among the kindest persons that I have known in my life. She always used to go to great lengths to help every other person who would have come into her contact. There was no judgment, bias or favouritism in her mind when it came to helping others.</p>'+
                        '<p>A brilliant academician as she was, her teaching skills and her zeal to promote positive science culture were also incomparable. She was an amazing multi-tasker who would somehow manage to juggle more than four to five full-fledged research projects, her family, and her students and yet will have time to listen to her friends and help them in any way possible. Every time I felt low or under confident about myself or my work or I was procrastinating, she would come forward with her warmth and support to lift me up and get me going. She maintained her child-like curiosity for the world and therefore everything around her used to excite or impact her greatly. Her laughter like herself was so pure and filled with life that it used to light up the whole place.&rdquo;</p>'+
                        '</div>';
    }

    const storyEl = html('sd-life-story');
    if (storyEl) storyEl.innerHTML = p.lifeStory.map(para =>
        '<p>' + para + '</p>'
    ).join('');

    const achEl = html('sd-achievements');
    if (achEl) achEl.innerHTML = p.achievements.map(a =>
        '<li><i class="fas fa-trophy"></i><span>' + a + '</span></li>'
    ).join('');

    const lessonsEl = html('sd-lessons');
    if (lessonsEl) lessonsEl.innerHTML = p.lifeLessons.map(l =>
        '<div class="lesson-card">' +
        '<div class="lesson-icon"><i class="' + l.icon + '"></i></div>' +
        '<div><h5>' + l.title + '</h5><p>' + l.lesson + '</p></div>' +
        '</div>'
    ).join('');

    setHTML('sd-legacy', p.legacy);
}

document.addEventListener('DOMContentLoaded', function () {
    loadHeader();
    loadFooter();
    const params = new URLSearchParams(window.location.search);
    const key = (params.get('program') || 'priya').toLowerCase();
    const data = scholarships[key] || scholarships.priya;
    renderScholarshipDetail(data);
});