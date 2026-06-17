const projects = [
  {
    id: "sae101",
    badge: "SAE 1.01",
    title: "Sensibilisation a l'hygiene informatique et a la cybersecurite",
    short: "Decouverte des bonnes pratiques de securite numerique, des risques courants et des reflexes de protection.",
    icon: "ti ti-shield-lock",
    theme: "sec",
    tags: ["Cybersecurite", "Hygiene numerique", "Risques"],
    description: "Projet centre sur les bases de la securite informatique : mots de passe, phishing, sauvegardes, mises a jour, protection des donnees et comportements responsables face aux risques numeriques.",
    screenshots: ["Support de sensibilisation", "Synthese des risques"],
    schema: ["Utilisateur", "Menaces", "Bonnes pratiques"],
    code: "Objectifs :\n- Identifier les risques courants\n- Appliquer les bonnes pratiques\n- Sensibiliser un public non specialiste",
    skills: ["Cybersécurité", "Sensibilisation au Risques", "Propreté d'un site"],
    docs: [
      { name: "Cours SAE 1.01", file: "../assets/docs/cours-sae11-2023.pdf", type: "PDF" }
    ]
  },
  {
    id: "sae102",
    badge: "SAE 1.02",
    title: "S'initier aux reseaux informatiques",
    short: "Premiers travaux sur l'adressage IP, les equipements reseau et les tests de connectivite.",
    icon: "ti ti-network",
    theme: "net",
    tags: ["Reseau", "Adressage IP", "Connectivite"],
    description: "Initiation aux fondamentaux des reseaux informatiques : role des equipements, configuration d'adresses IP, tests de communication et comprehension des premiers mecanismes d'echanges.",
    screenshots: ["Plan d'adressage", "Tests de connectivite"],
    schema: ["PC", "Switch", "Routeur"],
    code: "ipconfig /all\nping 192.168.1.1\ntracert 8.8.8.8",
    skills: ["Adressage IP", "Diagnostic réseau", "Topologie réseau"],
    docs: [
      { name: "Compte rendu SAE 1.02", file: "../assets/docs/SAE1.02.2024.pdf", type: "PDF" }
    ]
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
    skills: ["Mesurer un signal Wi-fi", "Analyser les transmissions", "Etudes des bandes de fréquences"],
    docs: []
  },
  {
    id: "sae104",
    badge: "SAE 1.04",
    title: "Se presenter sur Internet",
    short: "Creation d'une presence web personnelle pour presenter son profil, ses competences et ses projets.",
    icon: "ti ti-browser",
    theme: "web",
    tags: ["HTML", "CSS", "Portfolio"],
    description: "Conception d'une page web personnelle permettant de se presenter clairement en ligne. Le projet travaille la structuration HTML, la mise en forme CSS et l'organisation du contenu.",
    screenshots: ["Page d'accueil", "Section projets"],
    schema: ["Contenu", "HTML", "CSS"],
    code: "<section class=\"profile\">\n  <h1>Ewan</h1>\n  <p>Etudiant en BUT R&T</p>\n</section>",
    skills: ["HTML/CSS", "Design Web", "Présentation"],
    docs: [
      { name: "Sujet SAE 1.04", file: "../assets/docs/Sujet SAE 104.pdf", type: "PDF" }
    ]
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
    docs: [
      { name: "Sujet SAE 1.05", file: "../assets/docs/Sujet SAE 105.pdf", type: "PDF" }
    ]
  },
  {
    id: "sae201",
    badge: "SAE 2.01",
    title: "Construire un reseau informatique pour une petite structure",
    short: "Conception et mise en place d'un reseau adapte aux besoins d'une petite organisation.",
    icon: "ti ti-router",
    theme: "net",
    tags: ["LAN", "VLAN", "Adressage"],
    description: "Projet de conception d'un reseau pour une petite structure : analyse du besoin, plan d'adressage, choix d'une topologie, configuration des equipements et validation de la connectivite.",
    screenshots: ["Topologie reseau", "Tests de ping"],
    schema: ["Postes", "Switch", "Routeur", "Internet"],
    code: "interface vlan 10\n ip address 192.168.10.1 255.255.255.0\n no shutdown",
    skills: ["Conception LAN", "Configuration reseau", "Tests"],
    docs: []
  },
  {
    id: "sae202",
    badge: "SAE 2.02",
    title: "Mesurer et caracteriser un signal ou un systeme",
    short: "Mesures techniques pour decrire le comportement d'un signal ou d'un systeme de transmission.",
    icon: "ti ti-wave-sine",
    theme: "dat",
    tags: ["Signal", "Mesure", "Caracterisation"],
    description: "Travail de mesure et de caracterisation : relever des valeurs, observer l'evolution d'un signal, comparer les resultats et expliquer le comportement d'un systeme de transmission.",
    screenshots: ["Courbe de mesure", "Tableau de resultats"],
    schema: ["Signal d'entree", "Systeme", "Signal de sortie"],
    code: "Mesures :\n- amplitude\n- frequence\n- attenuation\n- rapport signal/bruit",
    skills: ["Instrumentation", "Analyse de mesures", "Interpretation"],
    docs: [
      { name: "Web Radio SAE 2.02", file: "../assets/docs/SAE202-Web_Radio (4).pdf", type: "PDF" }
    ]
  },
  {
    id: "sae203",
    badge: "SAE 2.03",
    title: "Mettre en place une solution informatique pour l'entreprise",
    short: "Installation et configuration d'une solution informatique repondant a un besoin professionnel.",
    icon: "ti ti-server-2",
    theme: "web",
    tags: ["Serveur", "Service", "Deploiement"],
    description: "Mise en place d'une solution informatique pour un contexte d'entreprise : installation du service, configuration, tests d'acces, documentation et verification du fonctionnement.",
    screenshots: ["Service installe", "Test d'acces"],
    schema: ["Client", "Serveur", "Service"],
    code: "sudo systemctl status service\nsudo systemctl enable service\nsudo systemctl restart service",
    skills: ["Administration systeme", "Deploiement", "Documentation"],
    docs: [
      { name: "Sujet RT13", file: "../assets/docs/sujet-RT13.pdf", type: "PDF" }
    ]
  },
  {
    id: "sae204",
    badge: "SAE 2.04",
    title: "Projet integratif de S2",
    short: "Projet transversal mobilisant les competences reseau, systeme, telecoms et methodologie.",
    icon: "ti ti-topology-star-3",
    theme: "net",
    tags: ["Integration", "Projet", "Methodologie"],
    description: "Projet de synthese du semestre 2 combinant plusieurs competences vues en BUT1 : analyse du besoin, realisation technique, tests, travail en equipe et presentation des resultats.",
    screenshots: ["Architecture globale", "Resultats de tests"],
    schema: ["Besoin", "Solution", "Validation"],
    code: "Livrables :\n- cahier des charges\n- realisation technique\n- tests\n- presentation",
    skills: ["Gestion de projet", "Integration technique", "Travail en equipe"],
    docs: [
      { name: "Projet integratif telephonie", file: "../assets/docs/SAE-ProjetIntegratif-PartieTelephonie-2026-2PagesFeuille.pdf", type: "PDF" }
    ]
  },
  {
    id: "sae205",
    badge: "SAE 2.05",
    title: "Portfolio",
    short: "Construction d'un portfolio pour valoriser les projets, competences et apprentissages de BUT1.",
    icon: "ti ti-id-badge-2",
    theme: "web",
    tags: ["Portfolio", "CV", "Valorisation"],
    description: "Creation et amelioration d'un portfolio personnel pour presenter les projets realises, expliquer les competences developpees et preparer une communication professionnelle coherente.",
    screenshots: ["Portfolio", "Presentation des SAE"],
    schema: ["Projets", "Competences", "CV"],
    code: "Objectif :\nmettre en valeur les projets BUT1\net expliquer les competences acquises.",
    skills: ["Valorisation du profil", "Redaction", "Web"],
    docs: [
      { name: "CV LEMASSON Ewan", file: "../assets/docs/CV LEMASSON Ewan.pdf", type: "PDF" }
    ]
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
  },
  "Instrumentation": {
    category: "Télécommunications",
    explanation: "Utiliser du materiel de mesure pour caracteriser un signal ou un systeme."
  },
  "Analyse de mesures": {
    category: "Télécommunications",
    explanation: "Interpreter des resultats de mesure pour en tirer des conclusions."
  },
  "Interpretation": {
    category: "Analyse",
    explanation: "Expliquer un phenomene technique a partir d'observations."
  }
};
