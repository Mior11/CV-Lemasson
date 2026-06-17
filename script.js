const translations = {
  fr: {
    nav_home: "Accueil",
    nav_about: "A propos",
    nav_projects: "Mes projets",
    nav_contact: "Contact",
    nav_cv: "Telecharger CV",
    hero_tag: "BUT Reseaux & Telecoms - Annee 1",
    hero_sub: "Etudiant en Reseaux & Telecoms a l'IUT de Colmar. Passionne par la cybersécurité, l'administration réseau et le droit numériques .",
    hero_btn1: "Voir mes projets",
    hero_btn2: "Me contacter",
    stat1: "Projets",
    stat2: "Annee d'etudes",
    stat3: "Semestres BUT1",
    about_title: "A propos de <span>moi</span>",
    about_sub: "Un apercu de mon profil et des technologies que j'utilise.",
    ab1: "Profil",
    ab1b: "Etudiant en première année de BUT Réseaux & Télécommunications. J'aime comprendre comment les systèmes communiquent, monter des infrastructures serveur et résoudre les problèmes[...]",
    ab2: "Formation",
    ab2b: "- BUT Réseaux & Télécommunications - IUT de Colmar <br>Baccalaureat Technologique STI2D avec specialites SIN().",
    ab3: "Competences techniques",
    proj_title: "Mes <span>projets</span>",
    proj_sub: "Projets SAE de BUT1 Reseaux & Telecomunications",
    back_btn: "Retour aux projets",
    desc_title: "Description du projet",
    screenshots_title: "Captures & preuves",
    schema_title: "Schema d'architecture",
    code_title: "Extrait de code",
    skills_title: "Competences developpees",
    docs_title: "Documents & rapports",
    contact_title: "Me <span>contacter</span>",
    contact_sub: "Pour une alternance, un projet, une question ou simplement échanger.",
    ci1: "Email",
    ci2: "Localisation",
    cf1: "Votre nom",
    cf2: "Votre email",
    cf3: "Sujet",
    cf4: "Votre message...",
    cf5: "Envoyer le message",
    cf_status: "Votre logiciel mail va s'ouvrir avec le message prepare.",
    footer: "© 2026 LEMASSON Ewan - BUT Reseaux & Telecoms",
    see_more: "Voir details"
  },
  en: {
    nav_home: "Home",
    nav_about: "About me",
    nav_projects: "My projects",
    nav_contact: "Contact",
    nav_cv: "Download CV",
    hero_tag: "BUT Networks & Telecoms - Year 1",
    hero_sub: "Student in Networks & Telecoms at IUT. Passionate about cybersecurity, deployment, and making things work reliably.",
    hero_btn1: "See my projects",
    hero_btn2: "Get in touch",
    stat1: "Projects",
    stat2: "Degree year",
    stat3: "BUT1 semesters",
    about_title: "About <span>me</span>",
    about_sub: "A quick overview of who I am and what I work with.",
    ab1: "Profile",
    ab1b: "First-year student in the BUT Networks & Telecoms programme. I enjoy understanding how systems communicate, building server infrastructure and solving technical issues.",
    ab2: "Education",
    ab2b: "BUT Networks & Telecommunications - IUT<br>Baccalaureate with Mathematics and Digital Sciences specialisations.",
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
    footer: "© 2026 Ewan - BUT Networks & Telecoms",
    see_more: "View details"
  }
};

const CONTACT_EMAIL = "lemasson.ewan@gmail.com";
const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  const dark =
  document.body.dataset.theme === "dark";

  document.body.dataset.theme =
  dark ? "light" : "dark";

  localStorage.setItem(
    "theme",
    document.body.dataset.theme
  );

});

document.body.dataset.theme =
localStorage.getItem("theme") || "light";
const projects = [
  {
    id: "sae101",
    badge: "SAE 1.01",
    title: "Sensibilisation a l'hygiene informatique et a la cybersecurite",
    short: "Decouverte des bonnes pratiques de securite numerique, des risques courants et des reflexes de protection.",
    icon: "ti ti-shield-lock",
    theme: "sec",
    tags: ["Cybersecurite", "Hygiene numerique", "Risques"],
    description: "Projet centre sur les bases de la securite informatique : mots de passe, phishing, sauvegardes, mises a jour, protection des donnees et comportements responsables face aux risque[...]",
    screenshots: ["Support de sensibilisation", "Synthese des risques"],
    schema: ["Utilisateur", "Menaces", "Bonnes pratiques"],
    code: "Objectifs :\n- Identifier les risques courants\n- Appliquer les bonnes pratiques\n- Sensibiliser un public non specialiste",
skills: [
    "Cybersecurité",
    "Sensibilisation au Risques",
    "Propreté d'un site"
]
    docs: [["file": "assets/docs/cours-sae11-2023.pdf", "PDF"], ["file": "assets/docs/synthese-sae101.pdf", "PDF"]]
    
  },
  {
    id: "sae102",
    badge: "SAE 1.02",
    title: "S'initier aux reseaux informatiques",
    short: "Premiers travaux sur l'adressage IP, les equipements reseau et les tests de connectivite.",
    icon: "ti ti-network",
    theme: "net",
    tags: ["Reseau", "Adressage IP", "Connectivite"],
    description: "Initiation aux fondamentaux des reseaux informatiques : role des equipements, configuration d'adresses IP, tests de communication et comprehension des premiers mecanismes d'echa[...]",
    screenshots: ["Plan d'adressage", "Tests de connectivite"],
    schema: ["PC", "Switch", "Routeur"],
    code: "ipconfig /all\nping 192.168.1.1\ntracert 8.8.8.8",
    skills: [
    "Adressage IP",
    "Diagnostic réseau",
    "Topologie réseau"
]
    docs: [["Compte rendu SAE 1.02", "PDF"], ["Plan reseau", "PDF"]]
  },
    {
    id: "sae103",
    badge: "SAE 1.03",
    title: "Decouvrir un dispositif de transmission",
    short: "Etude d'un dispositif de transmission et observation des principes physiques d'un signal.",
    icon: "ti ti-antenna",
    theme: "dat",
    tags: ["Transmission", "Signal", "Mesures"],
    description: "Decouverte des notions de transmission dans les telecommunications : caracteristiques d'un signal, support de transmission, mesures et interpretation des resultats obtenus.",
    screenshots: ["Montage de mesure", "Resultats observes"],
    schema: ["Emetteur", "Support", "Recepteur"],
    code: "Grandeurs observees :\n- frequence\n- amplitude\n- attenuation\n- bruit",
    skills: [
     "Mesurer un signal Wi-fi",
     "Analyser les transmissions",
     "Etudes des bandes de fréquences"
   ]
    docs: [["Rapport SAE 1.03", "PDF"], ["Tableau de mesures", "PDF"]]
  },
  {
    id: "sae104",
    badge: "SAE 1.04",
    title: "Se presenter sur Internet",
    short: "Creation d'une presence web personnelle pour presenter son profil, ses competences et ses projets.",
    icon: "ti ti-browser",
    theme: "web",
    tags: ["HTML", "CSS", "Portfolio"],
    description: "Conception d'une page web personnelle permettant de se presenter clairement en ligne. Le projet travaille la structuration HTML, la mise en forme CSS, l'organisation du contenu [...]",
    screenshots: ["Page d'accueil", "Section projets"],
    schema: ["Contenu", "HTML", "CSS"],
    code: "<section class=\"profile\">\n  <h1>Ewan</h1>\n  <p>Etudiant en BUT R&T</p>\n</section>",
skills: [
    "HTML/CSS",
    "Design Web",
    "Présentation"
]
    docs: [["Portfolio SAE 1.04", "HTML"], ["Maquette", "PNG"]]
  },
  {
    id: "sae105",
    badge: "SAE 1.05",
    title: "Traiter des donnees",
    short: "Manipulation, organisation et analyse de donnees avec des outils informatiques.",
    icon: "ti ti-database",
    theme: "dat",
    tags: ["Donnees", "Analyse", "Tableur"],
    description: "Projet consacre au traitement de donnees : recuperation, nettoyage, organisation, calculs et presentation de resultats exploitables a partir d'un jeu de donnees.",
    screenshots: ["Jeu de donnees", "Resultats"],
    schema: ["Donnees brutes", "Traitement", "Synthese"],
    code: "Etapes :\n1. Importer les donnees\n2. Nettoyer les valeurs\n3. Produire une synthese",
    skills: ["Traitement de donnees", "Rigueur", "Synthese"],
    docs: [["Fichier de donnees", "XLSX"], ["Compte rendu", "PDF"]]
  },
  {
    id: "sae201",
    badge: "SAE 2.01",
    title: "Construire un reseau informatique pour une petite structure",
    short: "Conception et mise en place d'un reseau adapte aux besoins d'une petite organisation.",
    icon: "ti ti-router",
    theme: "net",
    tags: ["LAN", "VLAN", "Adressage"],
    description: "Projet de conception d'un reseau pour une petite structure : analyse du besoin, plan d'adressage, choix d'une topologie, configuration des equipements et validation de la connec[...]",
    screenshots: ["Topologie reseau", "Tests de ping"],
    schema: ["Postes", "Switch", "Routeur", "Internet"],
    code: "interface vlan 10\n ip address 192.168.10.1 255.255.255.0\n no shutdown",
    skills: ["Conception LAN", "Configuration reseau","Tests"],
    docs: [["Dossier SAE 2.01", "PDF"], ["Schema reseau", "PNG"]]
  },
  {
    id: "sae202",
    badge: "SAE 2.02",
    title: "Mesurer et caracteriser un signal ou un systeme",
    short: "Mesures techniques pour decrire le comportement d'un signal ou d'un systeme de transmission.",
    icon: "ti ti-wave-sine",
    theme: "dat",
    tags: ["Signal", "Mesure", "Caracterisation"],
    description: "Travail de mesure et de caracterisation : relever des valeurs, observer l'evolution d'un signal, comparer les resultats et expliquer le comportement d'un systeme de transmission[...]",
    screenshots: ["Courbe de mesure", "Tableau de resultats"],
    schema: ["Signal d'entree", "Systeme", "Signal de sortie"],
    code: "Mesures :\n- amplitude\n- frequence\n- attenuation\n- rapport signal/bruit",
    skills: ["Instrumentation", "Analyse de mesures", "Interpretation"],
    docs: [["Rapport SAE 2.02", "PDF"], ["Mesures", "CSV"]]
  },
    {
    id: "sae203",
    badge: "SAE 2.03",
    title: "Mettre en place une solution informatique pour l'entreprise",
    short: "Installation et configuration d'une solution informatique repondant a un besoin professionnel.",
    icon: "ti ti-server-2",
    theme: "web",
    tags: ["Serveur", "Service", "Deploiement"],
    description: "Mise en place d'une solution informatique pour un contexte d'entreprise : installation du service, configuration, tests d'acces, documentation et verification du fonctionnement [...]",
    screenshots: ["Service installe", "Test d'acces"],
    schema: ["Client", "Serveur", "Service"],
    code: "sudo systemctl status service\nsudo systemctl enable service\nsudo systemctl restart service",
    skills: ["Administration systeme", "Deploiement","Documentation"],
    docs: [["Procedure SAE 2.03", "PDF"], ["Compte rendu", "PDF"]]
  },
  {
    id: "sae204",
    badge: "SAE 2.04",
    title: "Projet integratif de S2",
    short: "Projet transversal mobilisant les competences reseau, systeme, telecoms et methodologie.",
    icon: "ti ti-topology-star-3",
    theme: "net",
    tags: ["Integration", "Projet", "Methodologie"],
    description: "Projet de synthese du semestre 2 combinant plusieurs competences vues en BUT1 : analyse du besoin, realisation technique, tests, travail en equipe et presentation des resultats.[...]",
    screenshots: ["Architecture globale", "Resultats de tests"],
    schema: ["Besoin", "Solution", "Validation"],
    code: "Livrables :\n- cahier des charges\n- realisation technique\n- tests\n- presentation",
    skills: ["Gestion de projet", "Integration technique","Travail en equipe"],
    docs: [["Dossier SAE 2.04", "PDF"], ["Presentation", "PDF"]]
  },
  {
    id: "sae205",
    badge: "SAE 2.05",
    title: "Portfolio",
    short: "Construction d'un portfolio pour valoriser les projets, competences et apprentissages de BUT1.",
    icon: "ti ti-id-badge-2",
    theme: "web",
    tags: ["Portfolio", "CV", "Valorisation"],
    description: "Creation et amelioration d'un portfolio personnel pour presenter les projets realises, expliquer les competences developpees et preparer une communication professionnelle cohere[...]",
    screenshots: ["Portfolio", "Presentation des SAE"],
    schema: ["Projets", "Competences", "CV"],
    code: "Objectif :\nmettre en valeur les projets BUT1\net expliquer les competences acquises.",
    skills: ["Valorisation du profil","Redaction", "Web"],
    docs: [["Portfolio", "HTML"], ["CV", "PDF"]]
  }
];
const skillDescriptions = {

  "Cybersécurité": {
    category: "Cybersécurité",
    explanation: "Protection des systèmes, réseaux et données contre les attaques informatiques."
  },

  "Sensibilisation au Risques": {
    category: "Cybersécurité",
    explanation: "Comprendre les dangers du numérique et adopter les bons réflexes."
  },

  "Propreté d'un site": {
    category: "Bonnes pratiques",
    explanation: "Respect des règles de sécurité, de confidentialité et d'organisation."
  },

  "Adressage IP": {
    category: "Réseau",
    explanation: "Attribuer une adresse unique à chaque équipement d'un réseau."
  },

  "Diagnostic réseau": {
    category: "Réseau",
    explanation: "Trouver l'origine d'un problème de connexion ou de communication."
  },

  "Topologie réseau": {
    category: "Réseau",
    explanation: "Comprendre comment les équipements sont reliés entre eux."
  },

  "Mesurer un signal Wi-fi": {
    category: "Télécommunications",
    explanation: "Observer la qualité et la puissance d'un signal sans fil."
  },

  "Analyser les transmissions": {
    category: "Télécommunications",
    explanation: "Étudier le trajet et le comportement des données transmises."
  },

  "Etudes des bandes de fréquences": {
    category: "Télécommunications",
    explanation: "Comprendre quelles fréquences sont utilisées pour transmettre des informations."
  },

  "HTML/CSS": {
    category: "Développement Web",
    explanation: "Créer la structure et l'apparence d'un site web."
  },

  "Design Web": {
    category: "Développement Web",
    explanation: "Concevoir une interface agréable et facile à utiliser."
  },

  "Présentation": {
    category: "Communication",
    explanation: "Mettre en valeur des informations de manière claire."
  },

  "Traitement de donnees": {
    category: "Données",
    explanation: "Collecter, organiser et analyser des informations."
  },

  "Rigueur": {
    category: "Compétence humaine",
    explanation: "Travailler avec précision et méthode."
  },

  "Synthese": {
    category: "Compétence humaine",
    explanation: "Résumer des informations complexes."
  },

  "Conception LAN": {
    category: "Réseau",
    explanation: "Concevoir un réseau local adapté aux besoins."
  },

  "Configuration reseau": {
    category: "Réseau",
    explanation: "Configurer les équipements réseau."
  },

  "Tests": {
    category: "Validation",
    explanation: "Vérifier le bon fonctionnement d'une solution."
  },

  "Administration systeme": {
    category: "Système",
    explanation: "Gérer et maintenir des serveurs."
  },

  "Deploiement": {
    category: "Système",
    explanation: "Installer et mettre en service une solution informatique."
  },

  "Documentation": {
    category: "Professionnel",
    explanation: "Produire des documents techniques compréhensibles."
  },

  "Gestion de projet": {
    category: "Organisation",
    explanation: "Planifier et suivre un projet."
  },

  "Integration technique": {
    category: "Technique",
    explanation: "Assembler plusieurs technologies dans une même solution."
  },

  "Travail en equipe": {
    category: "Compétence humaine",
    explanation: "Collaborer efficacement avec plusieurs personnes."
  },

  "Valorisation du profil": {
    category: "Communication",
    explanation: "Présenter ses compétences et réalisations."
  },

  "Redaction": {
    category: "Communication",
    explanation: "Rédiger des contenus clairs et professionnels."
  },

  "Web": {
    category: "Développement Web",
    explanation: "Créer et maintenir des projets web."
  }
};
let currentLang = "fr";

const sectionButtons = document.querySelectorAll("[data-section-link]");
const navButtons = document.querySelectorAll(".p-nav-links [data-section-link]");
const sections = document.querySelectorAll(".section");
const projectGrid = document.querySelector("#projectGrid");

function showSection(sectionName) {
  sections.forEach((section) => {
    section.classList.toggle("active", section.id === `s-${sectionName}`);
  });

  navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.sectionLink === sectionName);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderProjects() {
  projectGrid.innerHTML = projects.map((project) => `
    <button class="proj-card" type="button" data-project="${project.id}">
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
    </button>
  `).join("");
}

function openProject(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;
  document.addEventListener("click", (e) => {

  if (!e.target.classList.contains("skill-link")) return;

  const skill = e.target.dataset.skill;

  const info = skillDescriptions[skill];

  if (!info) return;

  document.querySelector("#skillsContent").innerHTML = `

    <div class="detail-card">

      <h3>${skill}</h3>

      <span class="skill-category">
        ${info.category}
      </span>

      <p style="margin-top:15px;">
        ${info.explanation}
      </p>

    </div>

  `;

  showSection("skills");

});
  document.querySelector("#d-icon").className = `detail-icon ${project.theme}`;
  document.querySelector("#d-icon").innerHTML = `<i class="${project.icon}" aria-hidden="true"></i>`;
  document.querySelector("#d-badge").textContent = project.badge;
  document.querySelector("#d-title").textContent = project.title;
  document.querySelector("#d-tags").innerHTML = project.tags.map((tag) => `<span class="dtag">${tag}</span>`).join("");
  document.querySelector("#d-desc").textContent = project.description;
  document.querySelector("#d-code").textContent = project.code;

  document.querySelector("#d-screenshots").innerHTML = project.screenshots.map((name) => `
    <div class="screenshot">
      <span><i class="ti ti-photo" aria-hidden="true"></i>${name}</span>
    </div>
  `).join("");

  document.querySelector("#d-schema").innerHTML = `
    <div class="schema-box">
      <div class="schema-row">
        ${project.schema.map((item, index) => `
          <span class="schema-vm"><strong>${item}</strong>Role ${index + 1}</span>
          ${index < project.schema.length - 1 ? '<span class="schema-arrow">-></span>' : ''}
        `).join("")}
      </div>
      <p class="schema-label">Flux simplifie de l'architecture</p>
    </div>
  `;

document.querySelector("#d-skills").innerHTML =
project.skills.map(skill => {

  const info = skillDescriptions[skill];

  return `
    <div class="skill-card">

      <span class="skill-category">
        ${info?.category || "Compétence"}
      </span>

      <button
        class="skill-link"
        data-skill="${skill}">
        ${skill}
      </button>

    </div>
  `;
}).join("");

  document.querySelector("#d-docs").innerHTML = project.docs.map(([name, type]) => `
    <a class="pdf-btn" href="#" aria-label="${name}">
      <span class="pdf-icon"><i class="ti ti-file-type-pdf" aria-hidden="true"></i></span>
      <span><strong>${name}</strong><span class="pdf-size">${type}</span></span>
      <i class="ti ti-download pdf-download-icon" aria-hidden="true"></i>
    </a>
  `).join("");

  document.querySelector("#proj-nav-btns").innerHTML = projects.map((item) => `
    <button class="nav-proj-btn ${item.id === project.id ? "active-nav" : ""}" type="button" data-project="${item.id}">
      ${item.badge}<small>${item.title}</small>
    </button>
  `).join("");

  showSection("detail");
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-key]").forEach((element) => {
    const value = translations[lang][element.dataset.key];
    if (value) element.innerHTML = value;
  });

  document.querySelectorAll("[data-key-ph]").forEach((element) => {
    const value = translations[lang][element.dataset.keyPh];
    if (value) element.placeholder = value;
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  renderProjects();
}
