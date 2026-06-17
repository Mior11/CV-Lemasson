const translations = {
  fr: {
    nav_home: "Accueil",
    nav_about: "A propos",
    nav_projects: "Mes projets",
    nav_contact: "Contact",
    nav_cv: "Telecharger CV",
    hero_tag: "BUT Reseaux & Telecoms - Annee 1",
    hero_sub: "Etudiant en Reseaux & Telecoms a l'IUT de Colmar. Passionne par la cybersécurité, l'administration réseau et le droit numérique.",
    hero_btn1: "Voir mes projets",
    hero_btn2: "Me contacter",
    stat1: "Projets SAE",
    stat2: "Annee d'etudes",
    stat3: "Semestres BUT1",
    about_title: "A propos de <span>moi</span>",
    about_sub: "Un apercu de mon profil et des technologies que j'utilise.",
    ab1: "Profil",
    ab1b: "Etudiant en première année de BUT Réseaux & Télécommunications. J'aime comprendre comment les systèmes communiquent, monter des infrastructures serveur et connaitre les droits numeriques.",
    ab2: "Formation",
    ab2b: "BUT Réseaux & Télécommunications - IUT de Colmar<br>Baccalaureat Technologique STI2D avec specialites SIN.",
    ab3: "Competences techniques",
    proj_title: "Mes <span>projets</span>",
    proj_sub: "Projets SAE de BUT1 Reseaux & Telecoms. Clique sur un projet pour voir les details.",
    back_btn: "Retour aux projets",
    desc_title: "Description du projet",
    screenshots_title: "Captures & preuves",
    schema_title: "Schema d'architecture",
    code_title: "Extrait de code",
    skills_title: "Competences developpees",
    docs_title: "Documents & rapports",
    skill_detail_title: "Competence <span>detaillee</span>",
    contact_title: "Me <span>contacter</span>",
    contact_sub: "Pour une alternance, un projet, une question ou simplement echanger.",
    ci1: "Email",
    ci2: "Localisation",
    cf1: "Votre nom",
    cf2: "Votre email",
    cf3: "Sujet",
    cf4: "Votre message...",
    cf5: "Envoyer le message",
    cf_status: "Votre logiciel mail va s'ouvrir avec le message prepare.",
    footer: "© 2026 LEMASSON Ewan - BUT Reseaux & Telecoms",
    see_more: "Voir details",
    no_docs: "Aucun document disponible pour ce projet."
  },
  en: {
    nav_home: "Home",
    nav_about: "About me",
    nav_projects: "My projects",
    nav_contact: "Contact",
    nav_cv: "Download CV",
    hero_tag: "BUT Networks & Telecoms - Year 1",
    hero_sub: "Student in Networks & Telecoms at IUT Colmar. Passionate about cybersecurity, network administration and digital law.",
    hero_btn1: "See my projects",
    hero_btn2: "Get in touch",
    stat1: "SAE projects",
    stat2: "Degree year",
    stat3: "BUT1 semesters",
    about_title: "About <span>me</span>",
    about_sub: "A quick overview of who I am and what I work with.",
    ab1: "Profile",
    ab1b: "First-year student in the BUT Networks & Telecoms programme. I enjoy understanding how systems communicate, building server infrastructure and learning about digital rights.",
    ab2: "Education",
    ab2b: "BUT Networks & Telecommunications - IUT Colmar<br>Baccalaureate STI2D with SIN specialisation.",
    ab3: "Technical skills",
    proj_title: "My <span>projects</span>",
    proj_sub: "SAE assignments from BUT1 Networks & Telecoms. Click a project to see the full details.",
    back_btn: "Back to projects",
    desc_title: "Project description",
    screenshots_title: "Screenshots & proofs",
    schema_title: "Architecture diagram",
    code_title: "Key code extract",
    skills_title: "Skills developed",
    docs_title: "Documents & reports",
    skill_detail_title: "Detailed <span>skill</span>",
    contact_title: "Get in <span>touch</span>",
    contact_sub: "For an apprenticeship, a project, a question, or a quick chat.",
    ci1: "Email",
    ci2: "Location",
    cf1: "Your name",
    cf2: "Your email",
    cf3: "Subject",
    cf4: "Your message...",
    cf5: "Send message",
    cf_status: "Your mail app will open with the prepared message.",
    footer: "© 2026 LEMASSON Ewan - BUT Networks & Telecoms",
    see_more: "View details",
    no_docs: "No documents available for this project."
  }
};

const CONTACT_EMAIL = "lemasson.ewan@gmail.com";
const CV_PATH = "assets/docs/CV LEMASSON Ewan.pdf";
let currentLang = localStorage.getItem("lang") || "fr";

function initTheme() {
  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) return;

  document.body.dataset.theme = localStorage.getItem("theme") || "light";

  themeToggle.addEventListener("click", () => {
    const dark = document.body.dataset.theme === "dark";
    document.body.dataset.theme = dark ? "light" : "dark";
    localStorage.setItem("theme", document.body.dataset.theme);
  });
}

function applyTranslations() {
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-key]").forEach((element) => {
    const value = translations[currentLang][element.dataset.key];
    if (value) element.innerHTML = value;
  });

  document.querySelectorAll("[data-key-ph]").forEach((element) => {
    const value = translations[currentLang][element.dataset.keyPh];
    if (value) element.placeholder = value;
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLang);
  });
}

function initLanguage() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      currentLang = button.dataset.lang;
      localStorage.setItem("lang", currentLang);
      applyTranslations();
      if (document.body.dataset.page === "index") renderProjectCards();
      if (document.body.dataset.page === "sae") renderSaePage(document.body.dataset.project);
    });
  });

  applyTranslations();
}

function showSection(sectionName) {
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.toggle("active", section.id === `s-${sectionName}`);
  });

  document.querySelectorAll(".p-nav-links [data-section-link]").forEach((button) => {
    button.classList.toggle("active", button.dataset.sectionLink === sectionName);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderProjectCards() {
  const projectGrid = document.getElementById("projectGrid");
  if (!projectGrid || typeof projects === "undefined") return;

  projectGrid.innerHTML = projects.map((project) => `
    <a class="proj-card" href="saes/${project.id}.html">
      <span class="proj-banner ${project.theme}">
        <i class="${project.icon}" aria-hidden="true"></i>
      </span>
      <span class="proj-body">
        <span class="proj-badge">${project.badge}</span>
        <h3>${project.title}</h3>
        <p>${project.short}</p>
        <span class="proj-footer">
          <span class="proj-tag">${project.tags.join(" - ")}</span>
          <span class="see-more">${translations[currentLang].see_more}<i class="ti ti-arrow-right" aria-hidden="true"></i></span>
        </span>
      </span>
    </a>
  `).join("");
}

function renderDocs(project) {
  const docsContainer = document.getElementById("d-docs");
  if (!docsContainer) return;

  if (!project.docs.length) {
    docsContainer.innerHTML = `<p class="section-sub">${translations[currentLang].no_docs}</p>`;
    return;
  }

  docsContainer.innerHTML = project.docs.map((doc) => `
    <a class="pdf-btn" href="${doc.file}" target="_blank" rel="noreferrer" download aria-label="${doc.name}">
      <span class="pdf-icon"><i class="ti ti-file-type-pdf" aria-hidden="true"></i></span>
      <span><strong>${doc.name}</strong><span class="pdf-size">${doc.type}</span></span>
      <i class="ti ti-download pdf-download-icon" aria-hidden="true"></i>
    </a>
  `).join("");
}

function renderSkillDetail(skill) {
  const info = skillDescriptions[skill];
  const container = document.getElementById("skillsContent");
  if (!info || !container) return;

  container.innerHTML = `
    <article class="detail-card">
      <h3>${skill}</h3>
      <span class="skill-category">${info.category}</span>
      <p style="margin-top:15px;">${info.explanation}</p>
    </article>
  `;

  container.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderSaePage(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;

  document.title = `${project.badge} - Ewan.dev`;

  const icon = document.getElementById("d-icon");
  if (icon) {
    icon.className = `detail-icon ${project.theme}`;
    icon.innerHTML = `<i class="${project.icon}" aria-hidden="true"></i>`;
  }

  const badge = document.getElementById("d-badge");
  if (badge) badge.textContent = project.badge;

  const title = document.getElementById("d-title");
  if (title) title.textContent = project.title;

  const tags = document.getElementById("d-tags");
  if (tags) {
    tags.innerHTML = project.tags.map((tag) => `<span class="dtag">${tag}</span>`).join("");
  }

  const desc = document.getElementById("d-desc");
  if (desc) desc.textContent = project.description;

  const code = document.getElementById("d-code");
  if (code) code.textContent = project.code;

  const screenshots = document.getElementById("d-screenshots");
  if (screenshots) {
    screenshots.innerHTML = project.screenshots.map((name) => `
      <div class="screenshot">
        <span><i class="ti ti-photo" aria-hidden="true"></i>${name}</span>
      </div>
    `).join("");
  }

  const schema = document.getElementById("d-schema");
  if (schema) {
    schema.innerHTML = `
      <div class="schema-box">
        <div class="schema-row">
          ${project.schema.map((item, index) => `
            <span class="schema-vm"><strong>${item}</strong>Role ${index + 1}</span>
            ${index < project.schema.length - 1 ? '<span class="schema-arrow">-></span>' : ""}
          `).join("")}
        </div>
        <p class="schema-label">Flux simplifie de l'architecture</p>
      </div>
    `;
  }

  const skills = document.getElementById("d-skills");
  if (skills) {
    skills.innerHTML = project.skills.map((skill) => {
      const info = skillDescriptions[skill];
      return `
        <div class="skill-card">
          <span class="skill-category">${info?.category || "Competence"}</span>
          <button class="skill-link" type="button" data-skill="${skill}">${skill}</button>
        </div>
      `;
    }).join("");
  }

  renderDocs(project);

  const navButtons = document.getElementById("proj-nav-btns");
  if (navButtons) {
    navButtons.innerHTML = projects.map((item) => `
      <a class="nav-proj-btn ${item.id === project.id ? "active-nav" : ""}" href="${item.id}.html">
        ${item.badge}<small>${item.title}</small>
      </a>
    `).join("");
  }
}

function initIndexPage() {
  document.querySelectorAll("[data-section-link]").forEach((button) => {
    button.addEventListener("click", () => {
      showSection(button.dataset.sectionLink);
    });
  });

  const hash = window.location.hash.replace("#", "");
  if (hash && document.getElementById(`s-${hash}`)) {
    showSection(hash);
  }

  window.addEventListener("hashchange", () => {
    const section = window.location.hash.replace("#", "");
    if (section && document.getElementById(`s-${section}`)) {
      showSection(section);
    }
  });

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(contactForm);
      const subject = encodeURIComponent(data.get("subject"));
      const body = encodeURIComponent(
        `Nom: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      const status = document.getElementById("formStatus");
      if (status) status.textContent = translations[currentLang].cf_status;
    });
  }

  const cvLink = document.querySelector(".p-cv-btn");
  if (cvLink) cvLink.setAttribute("href", CV_PATH);

  renderProjectCards();
}

function initSaePage() {
  const projectId = document.body.dataset.project;
  renderSaePage(projectId);

  document.addEventListener("click", (event) => {
    const skillButton = event.target.closest(".skill-link");
    if (!skillButton) return;
    renderSkillDetail(skillButton.dataset.skill);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();

  if (document.body.dataset.page === "sae") {
    initSaePage();
  } else {
    initIndexPage();
  }
});
