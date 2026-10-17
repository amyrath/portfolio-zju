export interface TranslationContent {
  meta: {
    title: string;
    description: string;
  };
  contactChannels: {
    personalEmail: string;
    personalEmailLabel: string;
    academicEmail: string;
    academicEmailLabel: string;
    emailNote: string;
    copyEmail: string;
    emailCopied: string;
    linkedIn: string;
    linkedInUrl: string;
    linkedInLabel: string;
    linkedInAction: string;
    whatsApp: string;
    whatsAppUrl: string;
    whatsAppLabel: string;
    whatsAppAction: string;
  };
  navbar: {
    brandSubtitle: string;
    links: {
      videos: string;
      engagement: string;
      studyPlan: string;
      terminal: string;
    };
    contactBtn: string;
    cvBtn: string;
    languageToggleTitle: string;
    themeToggleTitle: string;
  };
  contactModal: {
    kicker: string;
    title: string;
    subtitle: string;
    close: string;
  };
  hero: {
    programBadge: string;
    nameBadgePrompt: string;
    nameBadgeActive: string;
    titleWords: { text: string; isAccent?: boolean }[];
    subtitle: string;
    intro: string;
    ctaVideos: string;
    ctaStudyPlan: string;
    ctaCv: string;
    badges: {
      artDirection: string;
      impactFilm: string;
      afrikedutech: string;
    };
    photo: {
      frontRole: string;
      frontHint: string;
      backTitle: string;
      backRole: string;
    };
  };
  videos: {
    kicker: string;
    title: string;
    description: string;
    exactRoleLabel: string;
    project1: {
      number: string;
      tag: string;
      title: string;
      organization: string;
      category: string;
      role: string;
      description: string;
      badges: string[];
      button: string;
      facebookUrl: string;
      thumbnailUrl: string;
    };
    project2: {
      number: string;
      tag: string;
      title: string;
      organization: string;
      category: string;
      role: string;
      description: string;
      badges: string[];
      button: string;
      youtubeId: string;
      youtubeUrl: string;
    };
  };
  afrikedutech: {
    tag: string;
    title: string;
    organization: string;
    role: string;
    description: string;
    actionsHeading: string;
    actions: string[];
    button: string;
    badgeText: string;
    modal: {
      orgHeader: string;
      certTitle: string;
      awardedTo: string;
      recipientRole: string;
      workshopIntro: string;
      verificationTag: string;
      closeBtn: string;
    };
  };
  studyPlan: {
    tag: string;
    university: string;
    officialTitleLabel: string;
    officialTitle: string;
    program: string;
    themeLabel: string;
    theme: string;
    problemLabel: string;
    problemTitle: string;
    problemDesc: string;
    approachLabel: string;
    approachTitle: string;
    approachDesc: string;
    axesHeading: string;
    axesSubtitle: string;
    axes: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  terminal: {
    kicker: string;
    title: string;
    description: string;
    userPrompt: string;
    interactiveMode: string;
    shortcutsLabel: string;
    welcomeTitle: string;
    welcomeMsg: string;
    unknownCmd: string;
    hobbiesTitle: string;
    hobbiesList: {
      title: string;
      desc: string;
      linkText?: string;
      linkHref?: string;
    }[];
    videosTitle: string;
    contactTitle: string;
    studyPlanSummaryTitle: string;
    cvTitle: string;
    cvPillars: { label: string; text: string }[];
    cvDownloadLabel: string;
  };
  footer: {
    quote: string;
    candidateBadge: string;
    footnote: string;
  };
}

export const TRANSLATIONS: Record<'en' | 'fr', TranslationContent> = {
  en: {
    meta: {
      title: "Amyrath CHAKRAN Folabi · Creative Technologist & Visual Storyteller",
      description:
        "Portfolio & Research Study Plan of Amyrath CHAKRAN Folabi for the Master's Degree in Communication and Media at Zhejiang University (College of Media and International Culture).",
    },
    contactChannels: {
      personalEmail: 'amyrathc@gmail.com',
      personalEmailLabel: 'Personal Email',
      academicEmail: 'amyrath.chakran@epitech.eu',
      academicEmailLabel: 'Academic Email',
      emailNote: 'Available on both addresses for all academic correspondence.',
      copyEmail: 'Copy',
      emailCopied: 'Copied!',
      linkedIn: 'linkedin.com/in/amyrath',
      linkedInUrl: 'https://linkedin.com/in/amyrath',
      linkedInLabel: 'Professional LinkedIn Profile',
      linkedInAction: 'Open Profile',
      whatsApp: '+229 01 57 39 87 33',
      whatsAppUrl: 'https://wa.me/2290157398733',
      whatsAppLabel: 'Direct WhatsApp Line',
      whatsAppAction: 'Chat on WhatsApp',
    },
    navbar: {
      brandSubtitle: 'ZJU · MASTER IN COMMUNICATION & MEDIA',
      links: {
        videos: 'Screenings',
        engagement: 'AFRIKEDUTECH',
        studyPlan: 'ZJU Study Plan',
        terminal: 'Studio Terminal',
      },
      contactBtn: 'Contact',
      cvBtn: 'Resume',
      languageToggleTitle: 'Switch to French (FR)',
      themeToggleTitle: 'Toggle Day / Night Mode',
    },
    contactModal: {
      kicker: 'DIRECT CHANNELS',
      title: 'Get in touch with Amyrath',
      subtitle: "Master's Degree in Communication and Media · Zhejiang University (College of Media and International Culture)",
      close: 'Close',
    },
    hero: {
      programBadge: "Master's Degree in Communication and Media · Zhejiang University (College of Media and International Culture)",
      nameBadgePrompt: 'Click to flip photo',
      nameBadgeActive: 'Back side active',
      titleWords: [
        { text: 'Creative' },
        { text: 'Technologist' },
        { text: '&' },
        { text: 'Visual', isAccent: true }, // ONLY this word receives purple accent!
        { text: 'Architect' },
      ],
      subtitle: 'Bridging Generative AI, Visual Storytelling & Human Interaction.',
      intro:
        'Exploring the intersections of filmmaking, multimodal artificial intelligence, and civic design for universal information accessibility.',
      ctaVideos: 'View Video Works',
      ctaStudyPlan: 'ZJU Study Plan',
      ctaCv: 'Resume (PDF)',
      badges: {
        artDirection: 'Art Direction & AI',
        impactFilm: 'Impact Filmmaking',
        afrikedutech: 'AFRIKEDUTECH',
      },
      photo: {
        frontRole: 'Creative Technologist',
        frontHint: 'Click to flip in 3D',
        backTitle: 'Direction & Cinematography',
        backRole: 'Visual Storytelling',
      },
    },
    videos: {
      kicker: 'CINEMATOGRAPHIC WORKS & SCREENINGS',
      title: 'Screening Windows',
      description:
        'Two real audiovisual initiatives: reclaiming cultural heritage through generative AI and civic mobilization through live-action cinema.',
      exactRoleLabel: 'Exact Role :',
      project1: {
        number: 'Project 01',
        tag: 'Generative AI & Heritage',
        title: '"DANXOMÈ, le ventre du serpent"',
        organization: 'Epitech Hub & Amyrath CHAKRAN',
        category: 'Visual Generation & AI Art Direction',
        role: 'Produced with Epitech Hub · Visual Generation & AI Art Direction (Higgsfield AI)',
        description:
          'AI-generated historical short film depicting precolonial epic heritage and royal resistance. Produced in collaboration with Epitech Hub: complete art direction, prompt engineering, and visual rush creation.',
        badges: ['"DANXOMÈ"', 'Epitech Hub', 'AI Art Direction', 'Higgsfield AI'],
        button: 'Watch on Facebook ↗',
        facebookUrl: 'https://www.facebook.com/share/v/1B2aiY5Hwa/',
        thumbnailUrl: '/historical_film_preview.jpg',
      },
      project2: {
        number: 'Project 02',
        tag: 'Live-Action Production (No AI)',
        title: '"À tous les hommes" (To all men)',
        organization: 'Independent Live Production',
        category: 'Impact Cinema & Civic Awareness (No AI)',
        role: 'Awareness short film against street harassment & assault · Live-action cinematography, writing, framing & editing',
        description:
          'Impact short film tackling street harassment and verbal aggression in public spaces. Shot entirely in live action with real actors, from screenplay writing to camera framing and final editing (no AI).',
        badges: ['Live Action Cinematography', 'Screenwriting', 'Camera Framing', 'Real Editing (No AI)'],
        button: 'Watch on YouTube ↗',
        youtubeId: 'o5ITNClGOsA',
        youtubeUrl: 'https://youtu.be/o5ITNClGOsA?si=XITyQdHAAgNW2W9j',
      },
    },
    afrikedutech: {
      tag: 'DIGITAL INCLUSION & SOCIAL INNOVATION',
      title: 'Technology Transmission & Digital Literacy : AFRIKEDUTECH',
      organization: 'AFRIKEDUTECH (Digital Inclusion & Social Innovation Organization in Benin)',
      role: 'Volunteer Trainer in Digital Inclusion & Technologies',
      description:
        'Facilitating practical workshops open to rural youth and local communities to foster digital empowerment and equal access to technological opportunities.',
      actionsHeading: 'Concrete Field Actions & Workshops :',
      actions: [
        'Web research and digital tools initiation for rural youth.',
        'Practical discovery of administrative public e-services.',
        'Hands-on robotics and introductory AI workshops.',
      ],
      button: 'View Official Certificate',
      badgeText: 'Official Volunteer Certificate',
      modal: {
        orgHeader: 'SOCIAL INNOVATION ORGANIZATION FOR DIGITAL INCLUSION IN BENIN',
        certTitle: 'Official Certificate of Volunteer Engagement',
        awardedTo: 'Awarded in full recognition to :',
        recipientRole: 'Volunteer Trainer in Digital Inclusion & Technologies',
        workshopIntro: 'Hands-on workshops delivered to youth and rural communities :',
        verificationTag: 'Official Certificate Verified & Validated',
        closeBtn: 'Close',
      },
    },
    studyPlan: {
      tag: "STUDY PLAN · MASTER'S RESEARCH PROPOSAL",
      university: 'Zhejiang University (ZJU) · College of Media and International Culture',
      officialTitleLabel: "Official Master's Research Proposal Title :",
      officialTitle: 'CivicLens: Accessible Visual Media & Multilingual Information Systems',
      program: "Master's Degree in Communication and Media · Zhejiang University (College of Media and International Culture)",
      themeLabel: 'Research Scope & Linguistic Diversity',
      theme:
        "Accessibility of civic information through visual and audio interfaces tailored to Benin's linguistic diversity (French, Fon, Yoruba/Nago, and local dialects).",
      problemLabel: 'The Problem',
      problemTitle: 'Inaccessibility of Formal Legal Texts',
      problemDesc:
        'Complex legal frameworks and literacy barriers prevent underserved populations in West Africa from understanding their fundamental rights.',
      approachLabel: 'The Approach',
      approachTitle: 'Visual Signage & Multilingual Audio Systems',
      approachDesc:
        'Translating civic laws into accessible visual signage and multilingual audio micro-media tailored to national languages (Fon, Yoruba/Nago, French).',
      axesHeading: 'The Four Methodological Research Axes',
      axesSubtitle:
        'Visual semiotics, national language audio synthesis, mobile micro-media, and cognitive reception measurement.',
      axes: [
        {
          number: '01',
          title: 'Visual Semiotics & Universal Symbols',
          description:
            'Developing an intuitive visual lexicon enabling immediate comprehension of civic rights without formal literacy prerequisites.',
        },
        {
          number: '02',
          title: 'Linguistic Diversity & Multilingual Audio',
          description:
            'Integrating French and Benin’s national languages (Fon, Yoruba/Nago) with local dialect sound systems for civic diffusion.',
        },
        {
          number: '03',
          title: 'Mobile Micro-Media for Social & Community Channels',
          description:
            'Designing lightweight, modular visual formats optimized for mobile consultation and community sharing via WhatsApp.',
        },
        {
          number: '04',
          title: 'Cognitive Reception & Impact Assessment',
          description:
            'Evaluating comprehension and practical empowerment across target rural and semi-urban communities.',
        },
      ],
    },
    terminal: {
      kicker: 'INTERACTIVE CREATIVE CONSOLE',
      title: 'Studio Terminal',
      description: 'Explore my profile, video projects, real passions, and research study plan in an interactive shell.',
      userPrompt: 'amyrath@studio-terminal:~$',
      interactiveMode: 'Interactive Mode',
      shortcutsLabel: 'Shortcuts :',
      welcomeTitle: 'Studio Terminal · Amyrath CHAKRAN Folabi',
      welcomeMsg:
        'Welcome to the interactive console. Use the shortcut buttons above or type commands (e.g., hobbies, videos, study-plan, contact).',
      unknownCmd: 'Unrecognized command. Type "help" to see available options.',
      hobbiesTitle: 'REAL PASSIONS & BACKGROUND :',
      hobbiesList: [
        {
          title: '1. Cinematographic Directing & Camera Framing',
          desc: 'Passion for visual composition, natural lighting, editing rhythm, and narrative through pure imagery.',
        },
        {
          title: '2. Social Engagement & Technology Transmission',
          desc: 'Volunteer Trainer at AFRIKEDUTECH: spreading digital literacy, public e-services, and AI to rural communities.',
          linkText: 'View official AFRIKEDUTECH certificate ↗',
          linkHref: '#engagement',
        },
        {
          title: '3. Sports: Speed Roller Skating Athlete',
          desc: 'Former semi-pro athlete and speed roller skating competitor: athletic rigor, endurance, discipline, and perseverance.',
        },
        {
          title: '4. Dance & Musical Exploration',
          desc: 'Dance practice, exploration of polyrhythms, and sensitivity to acoustic textures applied to audiovisual storytelling.',
        },
      ],
      videosTitle: 'THE TWO VIDEO WORKS (CLICKABLE LINKS) :',
      contactTitle: 'CANDIDATE DIRECT CONTACT DETAILS :',
      studyPlanSummaryTitle: 'CivicLens Research Overview :',
      cvTitle: 'CURRICULUM VITAE (CV / RESUME) :',
      cvPillars: [
        { label: '1. Education', text: 'Epitech Bénin (Bachelor IT Expertise, Tek 3).' },
        { label: '2. Filmmaking & Creation', text: 'AI Art Direction & Independent Audiovisual Production.' },
        { label: '3. Social Engagement', text: 'AFRIKEDUTECH (Digital Inclusion in Rural Communities).' },
      ],
      cvDownloadLabel: '[ Open PDF Document ↗ ]',
    },
    footer: {
      quote: '“Telling stories through visuals, designing with empathy, connecting through interaction.”',
      candidateBadge: 'ZJU CANDIDATE',
      footnote:
        "Amyrath CHAKRAN Folabi · Candidate for the Master's Degree in Communication and Media · Zhejiang University (College of Media and International Culture)",
    },
  },
  fr: {
    meta: {
      title: "Amyrath CHAKRAN Folabi · Creative Technologist & Visual Storyteller",
      description:
        "Portfolio & Study Plan de recherche d'Amyrath CHAKRAN Folabi pour le Master's Degree in Communication and Media à l'Université de Zhejiang (College of Media and International Culture).",
    },
    contactChannels: {
      personalEmail: 'amyrathc@gmail.com',
      personalEmailLabel: 'Email personnel',
      academicEmail: 'amyrath.chakran@epitech.eu',
      academicEmailLabel: 'Email académique',
      emailNote: 'Disponible sur les deux adresses pour toute correspondance académique.',
      copyEmail: 'Copier',
      emailCopied: 'Copié !',
      linkedIn: 'linkedin.com/in/amyrath',
      linkedInUrl: 'https://linkedin.com/in/amyrath',
      linkedInLabel: 'Profil Professionnel LinkedIn',
      linkedInAction: 'Ouvrir le profil',
      whatsApp: '+229 01 57 39 87 33',
      whatsAppUrl: 'https://wa.me/2290157398733',
      whatsAppLabel: 'Ligne WhatsApp Directe',
      whatsAppAction: 'Discuter sur WhatsApp',
    },
    navbar: {
      brandSubtitle: 'ZJU · MASTER EN COMMUNICATION & MÉDIAS',
      links: {
        videos: 'Projections',
        engagement: 'AFRIKEDUTECH',
        studyPlan: 'Study Plan ZJU',
        terminal: 'Studio Terminal',
      },
      contactBtn: 'Contact',
      cvBtn: 'CV',
      languageToggleTitle: 'Passer en Anglais (EN)',
      themeToggleTitle: 'Basculer Mode Jour / Mode Nuit',
    },
    contactModal: {
      kicker: 'COMMUNICATION DIRECTE',
      title: 'Échanger avec Amyrath',
      subtitle: "Master en Communication & Médias · Université de Zhejiang (College of Media and International Culture)",
      close: 'Fermer',
    },
    hero: {
      programBadge: "Master en Communication & Médias · Université de Zhejiang (College of Media and International Culture)",
      nameBadgePrompt: 'Cliquer pour pivoter la photo',
      nameBadgeActive: 'Verso actif',
      titleWords: [
        { text: 'Creative' },
        { text: 'Technologist' },
        { text: '&' },
        { text: 'Visual', isAccent: true }, // UNIQUEMENT ce mot en violet !
        { text: 'Architect' },
      ],
      subtitle: "À l'intersection de l'IA Générative, du récit cinématographique et de l'interaction humaine.",
      intro:
        'Explorer les intersections entre réalisation cinématographique, intelligence artificielle multimodale et design civique pour l’accessibilité universelle de l’information.',
      ctaVideos: 'Voir les Réalisations Vidéo',
      ctaStudyPlan: 'Study Plan ZJU',
      ctaCv: 'Consulter le CV (PDF)',
      badges: {
        artDirection: 'Direction Artistique & IA',
        impactFilm: 'Réalisation d’Impact',
        afrikedutech: 'AFRIKEDUTECH',
      },
      photo: {
        frontRole: 'Creative Technologist',
        frontHint: 'Cliquer pour pivoter en 3D',
        backTitle: 'Direction & Cadrage',
        backRole: 'Storytelling Visuel',
      },
    },
    videos: {
      kicker: 'RÉALISATIONS CINÉMATOGRAPHIQUES & PROJECTIONS',
      title: 'Fenêtres de Projection',
      description:
        'Deux démarches audiovisuelles réelles : la réappropriation du patrimoine par l’IA générative et l’engagement citoyen par le cinéma réel.',
      exactRoleLabel: 'Mon rôle exact :',
      project1: {
        number: 'Projet 01',
        tag: 'IA & Direction Artistique',
        title: '"DANXOMÈ, le ventre du serpent"',
        organization: 'Hub Epitech & Amyrath CHAKRAN',
        category: 'Génération visuelle & Direction Artistique IA',
        role: 'Réalisé avec le Hub Epitech · Génération visuelle & Direction Artistique IA (Higgsfield AI)',
        description:
          'Court-métrage historique généré par IA retraçant l’épopée précoloniale et la résistance royale. Réalisé avec le Hub Epitech : direction artistique complète, conception des prompts et génération intégrale des rushs visuels.',
        badges: ['"DANXOMÈ"', 'Hub Epitech', 'Direction Artistique IA', 'Higgsfield AI'],
        button: 'Visionner sur Facebook ↗',
        facebookUrl: 'https://www.facebook.com/share/v/1B2aiY5Hwa/',
        thumbnailUrl: '/historical_film_preview.jpg',
      },
      project2: {
        number: 'Projet 02',
        tag: 'Prise de Vue Réelle (Sans IA)',
        title: '"À tous les hommes" (To all men)',
        organization: 'Production Cinématographique Indépendante',
        category: 'Court-métrage de sensibilisation · Prise de vue réelle',
        role: 'Court-métrage de sensibilisation contre les agressions et le harcèlement de rue · Prise de vue réelle, écriture, cadrage et montage',
        description:
          'Court-métrage de sensibilisation engagé contre les agressions et le harcèlement de rue. Réalisation en prise de vue réelle : écriture du scénario, tournage, cadrage caméra et montage final sans IA.',
        badges: ['Prise de Vue Réelle', 'Sensibilisation', 'Écriture & Scénario', 'Cadrage & Montage'],
        button: 'Visionner sur YouTube ↗',
        youtubeId: 'o5ITNClGOsA',
        youtubeUrl: 'https://youtu.be/o5ITNClGOsA?si=XITyQdHAAgNW2W9j',
      },
    },
    afrikedutech: {
      tag: 'INCLUSION NUMÉRIQUE & INNOVATION SOCIALE',
      title: 'Formation & Inclusion Numérique : AFRIKEDUTECH',
      organization: 'AFRIKEDUTECH (Organisation d’innovation sociale pour l’inclusion numérique au Bénin)',
      role: 'Formatrice bénévole en inclusion numérique & technologies',
      description:
        'Animation d’ateliers pratiques ouverts à l’ensemble des jeunes et communautés des zones rurales pour favoriser l’autonomie numérique et l’accès équitable aux opportunités technologiques.',
      actionsHeading: 'Actions concrètes menées sur le terrain :',
      actions: [
        'Initiation aux outils informatiques et à la recherche documentaire sur le web.',
        'Découverte des services publics et démarches administratives en ligne.',
        'Ateliers pratiques de robotique éducative et d’initiation à l’IA.',
      ],
      button: 'Consulter le certificat officiel',
      badgeText: 'Attestation officielle d’engagement',
      modal: {
        orgHeader: 'ORGANISATION D’INNOVATION SOCIALE POUR L’INCLUSION NUMÉRIQUE AU BÉNIN',
        certTitle: 'Certificat Officiel d’Engagement Bénévole',
        awardedTo: 'Décerné en bonne et due forme à :',
        recipientRole: 'Formatrice bénévole en inclusion numérique & technologies',
        workshopIntro: 'Ateliers pratiques animés auprès des jeunes et communautés des zones rurales :',
        verificationTag: 'Attestation officielle vérifiée & validée',
        closeBtn: 'Fermer',
      },
    },
    studyPlan: {
      tag: 'STUDY PLAN · PROPOSITION DE RECHERCHE MASTER',
      university: 'Université de Zhejiang (ZJU) · College of Media and International Culture',
      officialTitleLabel: 'Titre Officiel du Projet de Recherche Master :',
      officialTitle: 'CivicLens: Accessible Visual Media & Multilingual Information Systems',
      program: 'Master en Communication & Médias · Université de Zhejiang (College of Media and International Culture)',
      themeLabel: 'Sujet de recherche & Diversité Linguistique',
      theme:
        'Accessibilité de l’information civique par des interfaces visuelles et sonores adaptées à la diversité linguistique du Bénin (Français, dialectes et langues nationales : Fon, Yoruba/Nago, etc.).',
      problemLabel: 'Le Constat',
      problemTitle: 'L’Inaccessibilité des Textes Juridiques & Civiques',
      problemDesc:
        'La complexité des textes de loi et les disparités d\'alphabétisation privent une large partie des citoyens d\'Afrique de l\'Ouest de la compréhension de leurs droits.',
      approachLabel: 'La Démarche',
      approachTitle: 'Interfaces Visuelles & Audio Multilingue',
      approachDesc:
        'Traduire l\'information civique en signalétique visuelle universelle et en micro-médias audio adaptés aux langues nationales (Fon, Yoruba/Nago, Français).',
      axesHeading: 'Les Quatre Axes de Recherche',
      axesSubtitle:
        'Sémiotique visuelle, audio multilingue en langues nationales, micro-médias mobiles et réception cognitive.',
      axes: [
        {
          number: '01',
          title: 'Sémiotique Visuelle & Symboles Universels',
          description:
            'Création d’un répertoire visuel intuitif facilitant l’appropriation des concepts civiques sans prérequis de lecture formelle.',
        },
        {
          number: '02',
          title: 'Diversité Linguistique & Audio Multilingue',
          description:
            'Intégration du Français, des langues nationales du Bénin (Fon, Yoruba/Nago) et des dialectes locaux en formats sonores.',
        },
        {
          number: '03',
          title: 'Micro-Médias Mobiles pour Canaux Sociaux',
          description:
            'Formats visuels légers et modulaires, optimisés pour la consultation sur smartphone et le partage communautaire (WhatsApp).',
        },
        {
          number: '04',
          title: 'Clarté Cognitive & Mesure de Réception',
          description:
            'Mesure de l’impact réel et de l’intelligibilité des contenus auprès des communautés ciblées.',
        },
      ],
    },
    terminal: {
      kicker: 'CONSOLE CRÉATIVE INTERACTIVE',
      title: 'Studio Terminal',
      description: 'Explorez le parcours, les réalisations vidéo, les passions et le Study Plan dans un terminal interactif accessible.',
      userPrompt: 'amyrath@studio-terminal:~$',
      interactiveMode: 'Mode Interactif',
      shortcutsLabel: 'Raccourcis :',
      welcomeTitle: 'Studio Terminal · Amyrath CHAKRAN Folabi',
      welcomeMsg:
        'Bienvenue dans la console interactive. Utilisez les boutons raccourcis ou tapez des commandes (ex : hobbies, videos, study-plan, contact).',
      unknownCmd: 'Commande non reconnue. Tapez "help" pour voir la liste des commandes disponibles.',
      hobbiesTitle: 'CENTRES D’INTÉRÊT & PARCOURS RÉEL :',
      hobbiesList: [
        {
          title: '1. Réalisation et cadrage vidéo cinématographique',
          desc: 'Passion pour la composition visuelle, la lumière naturelle, le rythme du montage et la narration par l’image.',
        },
        {
          title: '2. Engagement social et transmission',
          desc: 'Formatrice bénévole chez AFRIKEDUTECH : transmission de la culture numérique, des e-services et de l’IA dans les zones rurales.',
          linkText: 'Consulter le certificat officiel AFRIKEDUTECH ↗',
          linkHref: '#engagement',
        },
        {
          title: '3. Sport : Ancienne athlète semi-pro / compétitrice de roller de vitesse',
          desc: 'Rigueur athlétique, endurance, discipline et dépassement de soi.',
        },
        {
          title: '4. Danse & exploration musicale',
          desc: 'Pratique de la danse, exploration des polyrythmies et sensibilité aux textures acoustiques appliquées au storytelling.',
        },
      ],
      videosTitle: 'LES DEUX PROJETS VIDÉO (LIENS CLIQUABLES) :',
      contactTitle: 'COORDONNÉES DU CANDIDAT :',
      studyPlanSummaryTitle: 'Aperçu du Study Plan CivicLens :',
      cvTitle: 'CURRICULUM VITAE (CV / RÉSUMÉ) :',
      cvPillars: [
        { label: '1. Formation', text: 'Epitech Bénin (Bachelor IT Expertise, Tek 3).' },
        { label: '2. Réalisation & Création', text: 'Direction Artistique IA & Production Audiovisuelle Indépendante.' },
        { label: '3. Engagement Social', text: 'AFRIKEDUTECH (Inclusion Numérique en Milieu Rural).' },
      ],
      cvDownloadLabel: '[ Consulter le document PDF ↗ ]',
    },
    footer: {
      quote: '« Raconter par l\'image, concevoir avec empathie, rassembler par l\'interaction. »',
      candidateBadge: 'ZJU CANDIDATE',
      footnote:
        "Amyrath CHAKRAN Folabi · Candidature Master en Communication & Médias · Université de Zhejiang (College of Media and International Culture)",
    },
  },
};
