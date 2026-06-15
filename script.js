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
   
sectionButtons.forEach((button) => {
  button.addEventListener("click", () => showSection(button.dataset.sectionLink));
});

document.querySelector("#backToProjects").addEventListener("click", () => showSection("projects"));

document.addEventListener("click", (event) => {
  const projectButton = event.target.closest("[data-project]");
  if (projectButton) openProject(projectButton.dataset.project);
});

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

document.querySelector("#contactForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const formData = new FormData(form);
  const name = formData.get("name").trim();
  const email = formData.get("email").trim();
  const subject = formData.get("subject").trim();
  const message = formData.get("message").trim();

  const mailSubject = `[Portfolio] ${subject}`;
  const mailBody = [
    `Nom : ${name}`,
    `Email : ${email}`,
    `Sujet : ${subject}`,
    "",
    "Message :",
    message
  ].join("\n");

  document.querySelector("#formStatus").textContent = translations[currentLang].cf_status;
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
});

renderProjects();
    ab4: "Competences humaines",
    ab5: "Loisirs",
    proj_title: "Mes <span>projets</span>",
    proj_sub: "Projets SAE de BUT1 Reseaux & Telecoms. Clique sur un projet pour voir les details.",
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
    see_more: "Voir details",
    skill_detail_title: "Detalle de la competence",
    close_modal: "Fermer"
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
    ab4: "Human skills",
    ab5: "Hobbies",
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
    see_more: "View details",
    skill_detail_title: "Skill details",
    close_modal: "Close"
  }
};

const CONTACT_EMAIL = "ewan@example.com";

const skillDefinitions = {
  fr: {
    "Cybersecurite de base": "Protection des systèmes informatiques contre les attaques et accès non autorisés. Incluant la sensibilisation aux risques, les bonnes pratiques et les outils de défense.",
    "Analyse des risques": "Identification et évaluation des menaces potentielles pour un système, et mise en place de mesures de mitigation appropriées.",
    "Communication": "Capacité à expliquer des concepts complexes à des personnes non spécialisées, et à transmettre clairement les informations.",
    "Adressage IP": "Attribution et gestion des adresses IP uniques permettant la communication entre les appareils sur un réseau.",
    "Diagnostic reseau": "Identification et résolution des problèmes de connectivité réseau à l'aide d'outils de test et d'analyse.",
    "Topologie": "Organisation et structure physique ou logique d'un réseau informatique.",
    "Mesure de signal": "Méthode pour quantifier et analyser les caractéristiques électroniques d'un signal de transmission.",
    "Analyse technique": "Décomposition et examination détaillée d'un système ou problème technique pour en comprendre le fonctionnement.",
    "Telecoms": "Télécommunications : ensemble des technologies et systèmes permettant la transmission d'informations à distance.",
    "HTML / CSS": "Langages fondamentaux du web permettant la création et la mise en forme de pages internet.",
    "Design web": "Art et technique de concevoir des interfaces web esthétiques, ergonomiques et fonctionnelles.",
    "Presentation": "Capacité à organiser et présenter des idées de manière claire et attrayante, oralement ou visuellement.",
    "Traitement de donnees": "Processus de collecte, nettoyage, organisation et analyse de données pour en extraire des insights.",
    "Rigueur": "Attention au détail et respect des processus pour assurer la qualité et la précision du travail.",
    "Synthese": "Capacité à résumer et condenser des informations complexes en éléments clés et essentiels.",
    "Conception LAN": "Planification et conception d'un réseau local répondant aux besoins spécifiques d'une organisation.",
    "Configuration reseau": "Mise en place et paramétrage des équipements réseau (routeurs, switchs, pare-feu) selon la topologie définie.",
    "Tests": "Vérification du bon fonctionnement d'un système à travers des tests planifiés et documentés.",
    "Instrumentation": "Utilisation d'équipements de mesure et d'appareils pour collecter des données techniques précises.",
    "Interpretation": "Analyse et compréhension des résultats de mesures ou de tests pour en tirer des conclusions valides.",
    "Administration systeme": "Gestion, maintenance et optimisation des serveurs et systèmes informatiques.",
    "Deploiement": "Mise en production et déploiement de solutions informatiques dans un environnement réel.",
    "Documentation": "Rédaction claire et structurée de la documentation technique et procédures.",
    "Gestion de projet": "Organisation, planification et suivi des tâches et ressources d'un projet.",
    "Integration technique": "Combinaison de plusieurs systèmes ou composants pour fonctionner ensemble harmonieusement.",
    "Travail en equipe": "Collaboration efficace avec d'autres personnes pour atteindre des objectifs communs.",
    "Valorisation du profil": "Présentation stratégique de ses compétences et réalisations pour mettre en avant ses qualités.",
    "Redaction": "Capacité à écrire de manière claire, concise et structurée pour communiquer efficacement par écrit.",
    "Web": "Ensemble des technologies, protocoles et outils liés à Internet et aux applications web."
  },
  en: {
    "Cybersecurite de base": "Protection of computer systems against attacks and unauthorized access. Including threat awareness, best practices and defense tools.",
    "Analyse des risques": "Identification and assessment of potential threats to a system, and implementation of appropriate mitigation measures.",
    "Communication": "Ability to explain complex concepts to non-specialized people and transmit information clearly.",
    "Adressage IP": "Assignment and management of unique IP addresses enabling communication between devices on a network.",
    "Diagnostic reseau": "Identification and resolution of network connectivity issues using testing and analysis tools.",
    "Topologie": "Organization and physical or logical structure of a computer network.",
    "Mesure de signal": "Method for quantifying and analyzing electronic characteristics of a transmission signal.",
    "Analyse technique": "Breakdown and detailed examination of a system or technical problem to understand how it works.",
    "Telecoms": "Telecommunications: set of technologies and systems enabling information transmission over distance.",
    "HTML / CSS": "Fundamental web languages enabling the creation and formatting of web pages.",
    "Design web": "Art and technique of designing aesthetic, ergonomic and functional web interfaces.",
    "Presentation": "Ability to organize and present ideas clearly and attractively, orally or visually.",
    "Traitement de donnees": "Process of collecting, cleaning, organizing and analyzing data to extract insights.",
    "Rigueur": "Attention to detail and respect for processes to ensure quality and accuracy of work.",
    "Synthese": "Ability to summarize and condense complex information into key and essential elements.",
    "Conception LAN": "Planning and design of a local network meeting specific organizational needs.",
    "Configuration reseau": "Implementation and configuration of network equipment (routers, switches, firewalls) according to the defined topology.",
    "Tests": "Verification of system functionality through planned and documented tests.",
    "Instrumentation": "Use of measurement equipment and devices to collect accurate technical data.",
    "Interpretation": "Analysis and understanding of measurement or test results to draw valid conclusions.",
    "Administration systeme": "Management, maintenance and optimization of servers and computer systems.",
    "Deploiement": "Production deployment and rollout of IT solutions in a real environment.",
    "Documentation": "Clear and structured writing of technical documentation and procedures.",
    "Gestion de projet": "Organization, planning and tracking of project tasks and resources.",
    "Integration technique": "Combination of multiple systems or components to work together harmoniously.",
    "Travail en equipe": "Effective collaboration with others to achieve common goals.",
    "Valorisation du profil": "Strategic presentation of skills and achievements to showcase qualities.",
    "Redaction": "Ability to write clearly, concisely and structurally to communicate effectively in writing.",
    "Web": "Set of technologies, protocols and tools related to the Internet and web applications."
  }
};

const humanSkills = {
  fr: [
    { name: "Communication", icon: "ti ti-message" },
    { name: "Travail en équipe", icon: "ti ti-users" },
    { name: "Résolution de problèmes", icon: "ti ti-bulb" },
    { name: "Adaptabilité", icon: "ti ti-refresh" },
    { name: "Rigueur", icon: "ti ti-clipboard-check" },
    { name: "Curiosité", icon: "ti ti-search" }
  ],
  en: [
    { name: "Communication", icon: "ti ti-message" },
    { name: "Teamwork", icon: "ti ti-users" },
    { name: "Problem solving", icon: "ti ti-bulb" },
    { name: "Adaptability", icon: "ti ti-refresh" },
    { name: "Rigor", icon: "ti ti-clipboard-check" },
    { name: "Curiosity", icon: "ti ti-search" }
  ]
};

const hobbies = {
  fr: [
    { name: "Écouter de la musique", icon: "ti ti-music" },
    { name: "S'informer sur l'actualité", icon: "ti ti-newspaper" },
    { name: "Jouer aux échecs", icon: "ti ti-chess" }
  ],
  en: [
    { name: "Listening to music", icon: "ti ti-music" },
    { name: "Stay informed", icon: "ti ti-newspaper" },
    { name: "Play chess", icon: "ti ti-chess" }
  ]
};

const projects = [\n  {\n    id: \"sae101\",\n    badge: \"SAE 1.01\",\n    title: \"Sensibilisation a l'hygiene informatique et a la cybersecurite\",\n    short: \"Decouverte des bonnes pratiques de securite numerique, des risques courants et des reflexes de protection.\",\n    icon: \"ti ti-shield-lock\",\n    theme: \"sec\",\n    tags: [\"Cybersecurite\", \"Hygiene numerique\", \"Risques\"],\n    description: \"Projet centre sur les bases de la securite informatique : mots de passe, phishing, sauvegardes, mises a jour, protection des donnees et comportements responsables face aux risque[...]\",\n    screenshots: [\"Support de sensibilisation\", \"Synthese des risques\"],\n    schema: [\"Utilisateur\", \"Menaces\", \"Bonnes pratiques\"],\n    code: \"Objectifs :\\n- Identifier les risques courants\\n- Appliquer les bonnes pratiques\\n- Sensibiliser un public non specialiste\",\n    skills: [\n      { category: \"Cybersécurité\", items: [\"Cybersecurite de base\", \"Analyse des risques\"] },\n      { category: \"Transversales\", items: [\"Communication\"] }\n    ],\n    docs: [[\"Support SAE 1.01\", \"PDF\"], [\"Synthese personnelle\", \"PDF\"]]\n  },\n  {\n    id: \"sae102\",\n    badge: \"SAE 1.02\",\n    title: \"S'initier aux reseaux informatiques\",\n    short: \"Premiers travaux sur l'adressage IP, les equipements reseau et les tests de connectivite.\",\n    icon: \"ti ti-network\",\n    theme: \"net\",\n    tags: [\"Reseau\", \"Adressage IP\", \"Connectivite\"],\n    description: \"Initiation aux fondamentaux des reseaux informatiques : role des equipements, configuration d'adresses IP, tests de communication et comprehension des premiers mecanismes d'echa[...]\",\n    screenshots: [\"Plan d'adressage\", \"Tests de connectivite\"],\n    schema: [\"PC\", \"Switch\", \"Routeur\"],\n    code: \"ipconfig /all\\nping 192.168.1.1\\ntracert 8.8.8.8\",\n    skills: [\n      { category: \"Réseaux\", items: [\"Adressage IP\", \"Diagnostic reseau\", \"Topologie\"] },\n      { category: \"Transversales\", items: [\"Tests\"] }\n    ],\n    docs: [[\"Compte rendu SAE 1.02\", \"PDF\"], [\"Plan reseau\", \"PDF\"]]\n  },\n  {\n    id: \"sae103\",\n    badge: \"SAE 1.03\",\n    title: \"Decouvrir un dispositif de transmission\",\n    short: \"Etude d'un dispositif de transmission et observation des principes physiques d'un signal.\",\n    icon: \"ti ti-antenna\",\n    theme: \"dat\",\n    tags: [\"Transmission\", \"Signal\", \"Mesures\"],\n    description: \"Decouverte des notions de transmission dans les telecommunications : caracteristiques d'un signal, support de transmission, mesures et interpretation des resultats obtenus.\",\n    screenshots: [\"Montage de mesure\", \"Resultats observes\"],\n    schema: [\"Emetteur\", \"Support\", \"Recepteur\"],\n    code: \"Grandeurs observees :\\n- frequence\\n- amplitude\\n- attenuation\\n- bruit\",\n    skills: [\n      { category: \"Télécommunications\", items: [\"Mesure de signal\", \"Analyse technique\", \"Telecoms\"] },\n      { category: \"Transversales\", items: [\"Interpretation\"] }\n    ],\n    docs: [[\"Rapport SAE 1.03\", \"PDF\"], [\"Tableau de mesures\", \"PDF\"]]\n  },\n  {\n    id: \"sae104\",\n    badge: \"SAE 1.04\",\n    title: \"Se presenter sur Internet\",\n    short: \"Creation d'une presence web personnelle pour presenter son profil, ses competences et ses projets.\",\n    icon: \"ti ti-browser\",\n    theme: \"web\",\n    tags: [\"HTML\", \"CSS\", \"Portfolio\"],\n    description: \"Conception d'une page web personnelle permettant de se presenter clairement en ligne. Le projet travaille la structuration HTML, la mise en forme CSS, l'organisation du contenu [...]\",\n    screenshots: [\"Page d'accueil\", \"Section projets\"],\n    schema: [\"Contenu\", \"HTML\", \"CSS\"],\n    code: \"<section class=\\\"profile\\\">\\n  <h1>Ewan</h1>\\n  <p>Etudiant en BUT R&T</p>\\n</section>\",\n    skills: [\n      { category: \"Web\", items: [\"HTML / CSS\", \"Design web\"] },\n      { category: \"Transversales\", items: [\"Presentation\"] }\n    ],\n    docs: [[\"Portfolio SAE 1.04\", \"HTML\"], [\"Maquette\", \"PNG\"]]\n  },\n  {\n    id: \"sae105\",\n    badge: \"SAE 1.05\",\n    title: \"Traiter des donnees\",\n    short: \"Manipulation, organisation et analyse de donnees avec des outils informatiques.\",\n    icon: \"ti ti-database\",\n    theme: \"dat\",\n    tags: [\"Donnees\", \"Analyse\", \"Tableur\"],\n    description: \"Projet consacre au traitement de donnees : recuperation, nettoyage, organisation, calculs et presentation de resultats exploitables a partir d'un jeu de donnees.\",\n    screenshots: [\"Jeu de donnees\", \"Resultats\"],\n    schema: [\"Donnees brutes\", \"Traitement\", \"Synthese\"],\n    code: \"Etapes :\\n1. Importer les donnees\\n2. Nettoyer les valeurs\\n3. Produire une synthese\",\n    skills: [\n      { category: \"Données\", items: [\"Traitement de donnees\"] },\n      { category: \"Transversales\", items: [\"Rigueur\", \"Synthese\"] }\n    ],\n    docs: [[\"Fichier de donnees\", \"XLSX\"], [\"Compte rendu\", \"PDF\"]]\n  },\n  {\n    id: \"sae201\",\n    badge: \"SAE 2.01\",\n    title: \"Construire un reseau informatique pour une petite structure\",\n    short: \"Conception et mise en place d'un reseau adapte aux besoins d'une petite organisation.\",\n    icon: \"ti ti-router\",\n    theme: \"net\",\n    tags: [\"LAN\", \"VLAN\", \"Adressage\"],\n    description: \"Projet de conception d'un reseau pour une petite structure : analyse du besoin, plan d'adressage, choix d'une topologie, configuration des equipements et validation de la connec[...]\",\n    screenshots: [\"Topologie reseau\", \"Tests de ping\"],\n    schema: [\"Postes\", \"Switch\", \"Routeur\", \"Internet\"],\n    code: \"interface vlan 10\\n ip address 192.168.10.1 255.255.255.0\\n no shutdown\",\n    skills: [\n      { category: \"Réseaux avancés\", items: [\"Conception LAN\", \"Configuration reseau\"] },\n      { category: \"Transversales\", items: [\"Tests\"] }\n    ],\n    docs: [[\"Dossier SAE 2.01\", \"PDF\"], [\"Schema reseau\", \"PNG\"]]\n  },\n  {\n    id: \"sae202\",\n    badge: \"SAE 2.02\",\n    title: \"Mesurer et caracteriser un signal ou un systeme\",\n    short: \"Mesures techniques pour decrire le comportement d'un signal ou d'un systeme de transmission.\",\n    icon: \"ti ti-wave-sine\",\n    theme: \"dat\",\n    tags: [\"Signal\", \"Mesure\", \"Caracterisation\"],\n    description: \"Travail de mesure et de caracterisation : relever des valeurs, observer l'evolution d'un signal, comparer les resultats et expliquer le comportement d'un systeme de transmission[...]\",\n    screenshots: [\"Courbe de mesure\", \"Tableau de resultats\"],\n    schema: [\"Signal d'entree\", \"Systeme\", \"Signal de sortie\"],\n    code: \"Mesures :\\n- amplitude\\n- frequence\\n- attenuation\\n- rapport signal/bruit\",\n    skills: [\n      { category: \"Instrumentation\", items: [\"Instrumentation\", \"Analyse de mesures\"] },\n      { category: \"Transversales\", items: [\"Interpretation\"] }\n    ],\n    docs: [[\"Rapport SAE 2.02\", \"PDF\"], [\"Mesures\", \"CSV\"]]\n  },\n  {\n    id: \"sae203\",\n    badge: \"SAE 2.03\",\n    title: \"Mettre en place une solution informatique pour l'entreprise\",\n    short: \"Installation et configuration d'une solution informatique repondant a un besoin professionnel.\",\n    icon: \"ti ti-server-2\",\n    theme: \"web\",\n    tags: [\"Serveur\", \"Service\", \"Deploiement\"],\n    description: \"Mise en place d'une solution informatique pour un contexte d'entreprise : installation du service, configuration, tests d'acces, documentation et verification du fonctionnement [...]\",\n    screenshots: [\"Service installe\", \"Test d'acces\"],\n    schema: [\"Client\", \"Serveur\", \"Service\"],\n    code: \"sudo systemctl status service\\nsudo systemctl enable service\\nsudo systemctl restart service\",\n    skills: [\n      { category: \"Systèmes\", items: [\"Administration systeme\", \"Deploiement\"] },\n      { category: \"Transversales\", items: [\"Documentation\"] }\n    ],\n    docs: [[\"Procedure SAE 2.03\", \"PDF\"], [\"Compte rendu\", \"PDF\"]]\n  },\n  {\n    id: \"sae204\",\n    badge: \"SAE 2.04\",\n    title: \"Projet integratif de S2\",\n    short: \"Projet transversal mobilisant les competences reseau, systeme, telecoms et methodologie.\",\n    icon: \"ti ti-topology-star-3\",\n    theme: \"net\",\n    tags: [\"Integration\", \"Projet\", \"Methodologie\"],\n    description: \"Projet de synthese du semestre 2 combinant plusieurs competences vues en BUT1 : analyse du besoin, realisation technique, tests, travail en equipe et presentation des resultats.[...]\",\n    screenshots: [\"Architecture globale\", \"Resultats de tests\"],\n    schema: [\"Besoin\", \"Solution\", \"Validation\"],\n    code: \"Livrables :\\n- cahier des charges\\n- realisation technique\\n- tests\\n- presentation\",\n    skills: [\n      { category: \"Gestion\", items: [\"Gestion de projet\", \"Integration technique\"] },\n      { category: \"Transversales\", items: [\"Travail en equipe\"] }\n    ],\n    docs: [[\"Dossier SAE 2.04\", \"PDF\"], [\"Presentation\", \"PDF\"]]\n  },\n  {\n    id: \"sae205\",\n    badge: \"SAE 2.05\",\n    title: \"Portfolio\",\n    short: \"Construction d'un portfolio pour valoriser les projets, competences et apprentissages de BUT1.\",\n    icon: \"ti ti-id-badge-2\",\n    theme: \"web\",\n    tags: [\"Portfolio\", \"CV\", \"Valorisation\"],\n    description: \"Creation et amelioration d'un portfolio personnel pour presenter les projets realises, expliquer les competences developpees et preparer une communication professionnelle cohere[...]\",\n    screenshots: [\"Portfolio\", \"Presentation des SAE\"],\n    schema: [\"Projets\", \"Competences\", \"CV\"],\n    code: \"Objectif :\\nmettre en valeur les projets BUT1\\net expliquer les competences acquises.\",\n    skills: [\n      { category: \"Web & Design\", items: [\"Valorisation du profil\", \"Redaction\", \"Web\"] }\n    ],\n    docs: [[\"Portfolio\", \"HTML\"], [\"CV\", \"PDF\"]]\n  }\n];\n\nlet currentLang = \"fr\";\nlet darkMode = false;\n\nconst sectionButtons = document.querySelectorAll(\"[data-section-link]\");\nconst navButtons = document.querySelectorAll(\".p-nav-links [data-section-link]\");\nconst sections = document.querySelectorAll(\".section\");\nconst projectGrid = document.querySelector(\"#projectGrid\");\n\nfunction toggleDarkMode() {\n  darkMode = !darkMode;\n  document.documentElement.setAttribute(\"data-theme\", darkMode ? \"dark\" : \"light\");\n  localStorage.setItem(\"darkMode\", darkMode);\n  document.querySelectorAll(\".theme-toggle\").forEach(btn => {\n    btn.classList.toggle(\"active\", darkMode);\n  });\n}\n\nfunction showSection(sectionName) {\n  sections.forEach((section) => {\n    section.classList.toggle(\"active\", section.id === `s-${sectionName}`);\n  });\n\n  navButtons.forEach((button) => {\n    button.classList.toggle(\"active\", button.dataset.sectionLink === sectionName);\n  });\n\n  window.scrollTo({ top: 0, behavior: \"smooth\" });\n}\n\nfunction renderProjects() {\n  projectGrid.innerHTML = projects.map((project) => `\n    <button class=\"proj-card\" type=\"button\" data-project=\"${project.id}\">\n      <span class=\"proj-banner ${project.theme}\">\n        <i class=\"${project.icon}\" aria-hidden=\"true\"></i>\n      </span>\n      <span class=\"proj-body\">\n        <span class=\"proj-badge\">${project.badge}</span>\n        <h3>${project.title}</h3>\n        <p>${project.short}</p>\n        <span class=\"proj-footer\">\n          <span class=\"proj-tag\">${project.tags.join(\" - \")}</span>\n          <span class=\"see-more\">${translations[currentLang].see_more}<i class=\"ti ti-arrow-right\" aria-hidden=\"true\"></i></span>\n        </span>\n      </span>\n    </button>\n  `).join(\"\");\n}\n\nfunction openSkillDetail(skillName) {\n  const definition = skillDefinitions[currentLang][skillName] || \"Information non disponible\";\n  const modal = document.createElement(\"div\");\n  modal.className = \"modal-overlay\";\n  modal.innerHTML = `\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h2>${skillName}</h2>\n        <button class=\"modal-close\" type=\"button\">×</button>\n      </div>\n      <div class=\"modal-body\">\n        <p>${definition}</p>\n      </div>\n    </div>\n  `;\n  \n  document.body.appendChild(modal);\n  \n  modal.querySelector(\".modal-close\").addEventListener(\"click\", () => modal.remove());\n  modal.addEventListener(\"click\", (e) => {\n    if (e.target === modal) modal.remove();\n  });\n}\n\nfunction openProject(projectId) {\n  const project = projects.find((item) => item.id === projectId);\n  if (!project) return;\n\n  document.querySelector(\"#d-icon\").className = `detail-icon ${project.theme}`;\n  document.querySelector(\"#d-icon\").innerHTML = `<i class=\"${project.icon}\" aria-hidden=\"true\"></i>`;\n  document.querySelector(\"#d-badge\").textContent = project.badge;\n  document.querySelector(\"#d-title\").textContent = project.title;\n  document.querySelector(\"#d-tags\").innerHTML = project.tags.map((tag) => `<span class=\"dtag\">${tag}</span>`).join(\"\");\n  document.querySelector(\"#d-desc\").textContent = project.description;\n  document.querySelector(\"#d-code\").textContent = project.code;\n\n  document.querySelector(\"#d-screenshots\").innerHTML = project.screenshots.map((name) => `\n    <div class=\"screenshot\">\n      <span><i class=\"ti ti-photo\" aria-hidden=\"true\"></i>${name}</span>\n    </div>\n  `).join(\"\");\n\n  document.querySelector(\"#d-schema\").innerHTML = `\n    <div class=\"schema-box\">\n      <div class=\"schema-row\">\n        ${project.schema.map((item, index) => `\n          <span class=\"schema-vm\"><strong>${item}</strong>Role ${index + 1}</span>\n          ${index < project.schema.length - 1 ? '<span class=\"schema-arrow\">-></span>' : ''}\n        `).join(\"\")}\n      </div>\n      <p class=\"schema-label\">Flux simplifie de l'architecture</p>\n    </div>\n  `;\n\n  document.querySelector(\"#d-skills\").innerHTML = project.skills.map(({ category, items }) => `\n    <div class=\"skill-category\">\n      <h4>${category}</h4>\n      <div class=\"skill-items\">\n        ${items.map(skill => `\n          <button class=\"skill-tag\" type=\"button\" data-skill=\"${skill}\">\n            ${skill}\n            <i class=\"ti ti-info-circle\" aria-hidden=\"true\"></i>\n          </button>\n        `).join(\"\")}\n      </div>\n    </div>\n  `).join(\"\");\n\n  document.querySelector(\"#d-docs\").innerHTML = project.docs.map(([name, type]) => `\n    <a class=\"pdf-btn\" href=\"#\" aria-label=\"${name}\">\n      <span class=\"pdf-icon\"><i class=\"ti ti-file-type-pdf\" aria-hidden=\"true\"></i></span>\n      <span><strong>${name}</strong><span class=\"pdf-size\">${type}</span></span>\n      <i class=\"ti ti-download pdf-download-icon\" aria-hidden=\"true\"></i>\n    </a>\n  `).join(\"\");\n\n  document.querySelector(\"#proj-nav-btns\").innerHTML = projects.map((item) => `\n    <button class=\"nav-proj-btn ${item.id === project.id ? \"active-nav\" : \"\"}\" type=\"button\" data-project=\"${item.id}\">\n      ${item.badge}<small>${item.title}</small>\n    </button>\n  `).join(\"\");\n\n  setTimeout(() => {\n    document.querySelectorAll(\".skill-tag\").forEach(btn => {\n      btn.addEventListener(\"click\", (e) => {\n        e.stopPropagation();\n        openSkillDetail(btn.dataset.skill);\n      });\n    });\n  }, 0);\n\n  showSection(\"detail\");\n}\n\nfunction renderAboutSkills() {\n  const skillsContainer = document.querySelector(\"#about-skills\");\n  if (!skillsContainer) return;\n\n  const lang = currentLang;\n  const techSkills = document.querySelector(\"#tech-skills\");\n  const humanSkillsDiv = document.querySelector(\"#human-skills\");\n  const hobbiesDiv = document.querySelector(\"#hobbies\");\n\n  if (techSkills) {\n    techSkills.innerHTML = `\n      <div class=\"skills-wrap\">\n        ${[\n          \"Linux / Ubuntu Server\", \"VirtualBox\", \"Django\", \"Python\",\n          \"MariaDB / MySQL\", \"Nginx\", \"NAT / intnet\", \"TCP/IP\",\n          \"HTML / CSS\", \"Git\", \"Bash scripting\", \"Wireshark\"\n        ].map(skill => `<span>${skill}</span>`).join(\"\")}\n      </div>\n    `;\n  }\n\n  if (humanSkillsDiv) {\n    humanSkillsDiv.innerHTML = `\n      <div class=\"human-skills-grid\">\n        ${humanSkills[lang].map(skill => `\n          <div class=\"human-skill-item\">\n            <i class=\"${skill.icon}\" aria-hidden=\"true\"></i>\n            <span>${skill.name}</span>\n          </div>\n        `).join(\"\")}\n      </div>\n    `;\n  }\n\n  if (hobbiesDiv) {\n    hobbiesDiv.innerHTML = `\n      <div class=\"hobbies-grid\">\n        ${hobbies[lang].map(hobby => `\n          <div class=\"hobby-item\">\n            <i class=\"${hobby.icon}\" aria-hidden=\"true\"></i>\n            <span>${hobby.name}</span>\n          </div>\n        `).join(\"\")}\n      </div>\n    `;\n  }\n}\n\nfunction setLanguage(lang) {\n  currentLang = lang;\n  document.documentElement.lang = lang;\n\n  document.querySelectorAll(\"[data-key]\").forEach((element) => {\n    const value = translations[lang][element.dataset.key];\n    if (value) element.innerHTML = value;\n  });\n\n  document.querySelectorAll(\"[data-key-ph]\").forEach((element) => {\n    const value = translations[lang][element.dataset.keyPh];\n    if (value) element.placeholder = value;\n  });\n\n  document.querySelectorAll(\"[data-lang]\").forEach((button) => {\n    button.classList.toggle(\"active\", button.dataset.lang === lang);\n  });\n\n  renderProjects();\n  renderAboutSkills();\n}\n\nsectionButtons.forEach((button) => {\n  button.addEventListener(\"click\", () => showSection(button.dataset.sectionLink));\n});\n\ndocument.querySelector(\"#backToProjects\").addEventListener(\"click\", () => showSection(\"projects\"));\n\ndocument.addEventListener(\"click\", (event) => {\n  const projectButton = event.target.closest(\"[data-project]\");\n  if (projectButton) openProject(projectButton.dataset.project);\n});\n\ndocument.querySelectorAll(\"[data-lang]\").forEach((button) => {\n  button.addEventListener(\"click\", () => setLanguage(button.dataset.lang));\n});\n\ndocument.querySelectorAll(\".theme-toggle\").forEach(btn => {\n  btn.addEventListener(\"click\", toggleDarkMode);\n});\n\ndocument.querySelector(\"#contactForm\").addEventListener(\"submit\", (event) => {\n  event.preventDefault();\n\n  const form = event.currentTarget;\n  if (!form.checkValidity()) {\n    form.reportValidity();\n    return;\n  }\n\n  const formData = new FormData(form);\n  const name = formData.get(\"name\").trim();\n  const email = formData.get(\"email\").trim();\n  const subject = formData.get(\"subject\").trim();\n  const message = formData.get(\"message\").trim();\n\n  const mailSubject = `[Portfolio] ${subject}`;\n  const mailBody = [\n    `Nom : ${name}`,\n    `Email : ${email}`,\n    `Sujet : ${subject}`,\n    \"\",\n    \"Message :\",\n    message\n  ].join(\"\\n\");\n\n  document.querySelector(\"#formStatus\").textContent = translations[currentLang].cf_status;\n  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;\n});\n\n// Load dark mode preference\nif (localStorage.getItem(\"darkMode\") === \"true\") {\n  darkMode = true;\n  document.documentElement.setAttribute(\"data-theme\", \"dark\");\n  document.querySelectorAll(\".theme-toggle\").forEach(btn => btn.classList.add(\"active\"));\n}\n\nrenderProjects();\nrenderAboutSkills();
