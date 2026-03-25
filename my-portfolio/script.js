// ================================
// APPLY THEME COLORS
// ================================
function applyColors() {
  const c = CONFIG.colors;
  document.documentElement.style.setProperty('--primary', c.primary);
  document.documentElement.style.setProperty('--secondary', c.secondary);
  document.documentElement.style.setProperty('--bg', c.background);
  document.documentElement.style.setProperty('--card-bg', c.cardBg);
  document.documentElement.style.setProperty('--text', c.text);
  document.documentElement.style.setProperty('--heading', c.heading);
}

// ================================
// POPULATE PAGE FROM CONFIG
// ================================
function populatePage() {
  // Nav
  document.getElementById('nav-name').textContent = CONFIG.name;

  // Hero
  document.getElementById('hero-image').src = CONFIG.profileImage;
  document.getElementById('hero-image').alt = CONFIG.name;
  document.getElementById('hero-name').textContent = CONFIG.name;
  document.getElementById('hero-title').textContent = CONFIG.title;
  document.getElementById('hero-tagline').textContent = CONFIG.tagline;

  if (CONFIG.resumeLink && CONFIG.resumeLink !== '#') {
    document.getElementById('hero-resume').href = CONFIG.resumeLink;
    document.getElementById('hero-resume').target = '_blank';
  } else {
    document.getElementById('hero-resume').style.display = 'none';
  }

  // About
  document.getElementById('about-text').textContent = CONFIG.aboutMe.trim();

  // Update page title
  document.title = `${CONFIG.name} — ${CONFIG.title}`;

  // Footer
  document.getElementById('footer-year').textContent = new Date().getFullYear();
  document.getElementById('footer-name').textContent = CONFIG.name;

  // Socials
  populateSocials('hero-socials');
  populateSocials('contact-socials');

  // Contact email
  if (CONFIG.socials.email) {
    document.getElementById('contact-email').href = `mailto:${CONFIG.socials.email}`;
  } else {
    document.getElementById('contact-email').style.display = 'none';
  }

  // Skills
  populateSkills();

  // Projects
  populateProjects();

  // Experience
  populateExperience();

  // Particles
  createParticles();
}

// ================================
// SOCIAL ICONS HELPER
// ================================
function populateSocials(containerId) {
  const container = document.getElementById(containerId);
  const s = CONFIG.socials;
  const icons = {
    github: 'fab fa-github',
    itchio: 'fab fa-itch-io',
    linkedin: 'fab fa-linkedin',
    twitter: 'fab fa-twitter',
    youtube: 'fab fa-youtube',
    email: 'fas fa-envelope',
  };

  Object.entries(s).forEach(([key, value]) => {
    if (!value) return;
    const a = document.createElement('a');
    a.href = key === 'email' ? `mailto:${value}` : value;
    a.target = key === 'email' ? '_self' : '_blank';
    a.rel = 'noopener noreferrer';
    a.setAttribute('aria-label', key);
    a.innerHTML = `<i class="${icons[key] || 'fas fa-link'}"></i>`;
    container.appendChild(a);
  });
}

// ================================
// SKILLS
// ================================
function populateSkills() {
  const grid = document.getElementById('skills-grid');
  CONFIG.skills.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'skill-card fade-in';
    card.innerHTML = `
      <div class="skill-name">
        <span>${skill.name}</span>
        <span>${skill.level}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-bar-fill" data-level="${skill.level}"></div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ================================
// PROJECTS
// ================================
function populateProjects() {
  const grid = document.getElementById('projects-grid');
  const filterContainer = document.getElementById('filter-buttons');

  // Gather all unique tags
  const allTags = new Set();
  CONFIG.projects.forEach(p => p.tags.forEach(t => allTags.add(t)));

  // Create filter buttons
  const allBtn = document.createElement('button');
  allBtn.className = 'filter-btn active';
  allBtn.textContent = 'All';
  allBtn.addEventListener('click', () => filterProjects('All'));
  filterContainer.appendChild(allBtn);

  allTags.forEach(tag => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.textContent = tag;
    btn.addEventListener('click', () => filterProjects(tag));
    filterContainer.appendChild(btn);
  });

  // Create project cards
  CONFIG.projects.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-tags', project.tags.join(','));

    let overlayLinks = '';
    if (project.liveLink) {
      overlayLinks += `<a href="${project.liveLink}" target="_blank" rel="noopener" title="Play/View"><i class="fas fa-play"></i></a>`;
    }
    if (project.codeLink) {
      overlayLinks += `<a href="${project.codeLink}" target="_blank" rel="noopener" title="Source Code"><i class="fas fa-code"></i></a>`;
    }
    if (project.videoLink) {
      overlayLinks += `<button onclick="openVideoModal('${project.videoLink}')" title="Watch Video"><i class="fas fa-video"></i></button>`;
    }

    const tagsHTML = project.tags.map(t => `<span>${t}</span>`).join('');

    card.innerHTML = `
      <div class="project-image-wrapper">
        <img src="${project.image}" alt="${project.title}" loading="lazy"
             onerror="this.style.display='none'" />
        <div class="project-overlay">
          ${overlayLinks}
        </div>
      </div>
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">${tagsHTML}</div>
      </div>
    `;
    grid.appendChild(card);

    // Stagger animation
    setTimeout(() => card.classList.add('visible'), 100 * (index + 1));
  });
}

function filterProjects(tag) {
  // Update active button
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent === tag);
  });

  // Filter cards
  document.querySelectorAll('.project-card').forEach(card => {
    const tags = card.getAttribute('data-tags');
    if (tag === 'All' || tags.includes(tag)) {
      card.style.display = '';
      setTimeout(() => card.classList.add('visible'), 100);
    } else {
      card.classList.remove('visible');
      card.style.display = 'none';
    }
  });
}

// ================================
// VIDEO MODAL
// ================================
function openVideoModal(url) {
  const modal = document.getElementById('videoModal');
  document.getElementById('modalVideo').src = url;
  modal.classList.add('active');
}

document.getElementById('modalClose').addEventListener('click', () => {
  const modal = document.getElementById('videoModal');
  modal.classList.remove('active');
  document.getElementById('modalVideo').src = '';
});

document.getElementById('videoModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    e.currentTarget.classList.remove('active');
    document.getElementById('modalVideo').src = '';
  }
});

// ================================
// EXPERIENCE
// ================================
function populateExperience() {
  const timeline = document.getElementById('timeline');
  CONFIG.experience.forEach(exp => {
    const item = document.createElement('div');
    item.className = 'timeline-item fade-in';
    item.innerHTML = `
      <h3>${exp.role}</h3>
      <div class="company">${exp.company}</div>
      <div class="period">${exp.period}</div>
      <p>${exp.description}</p>
    `;
    timeline.appendChild(item);
  });
}

// ================================
// PARTICLES
// ================================
function createParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = Math.random() * 6 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
    container.appendChild(particle);
  }
}

// ================================
// NAVBAR SCROLL & MOBILE TOGGLE
// ================================
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);

  // Animate elements on scroll
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add('visible');
    }
  });

  // Animate skill bars
  document.querySelectorAll('.skill-bar-fill').forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      bar.style.width = bar.getAttribute('data-level') + '%';
    }
  });

  // Active nav link
  const sections = document.querySelectorAll('section');
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

// Mobile menu toggle
document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// ================================
// INITIALIZE
// ================================
applyColors();
populatePage();

// Trigger scroll once for initial animations
window.dispatchEvent(new Event('scroll'));