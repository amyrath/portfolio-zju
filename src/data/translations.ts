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
    titleWords: { text: string; isAccent?: boolean; isPeach?: boolean }[];
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
  ticker: string[];
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
    actions: {
      title: string;
      description: string;
    }[];
    galleryHeading: string;
    galleryTitle: string;
    gallerySubtitle: string;
    photos: {
      id: string;
      label: string;
      fileName: string;
      imageSrc: string;
      alt: string;
    }[];
    badgeText: string;
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
    shortcutsList: string[];
    welcomeTitle: string;
    welcomeMsg: string;
    unknownCmd: string;
    availableCmdsHeading: string;
    availableCmdsList: {
      cmd: string;
      desc: string;
    }[];
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
    afrikedutechTitle: string;
    afrikedutechRoleLabel: string;
    exploreEngagementBtn: string;
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
      emailNote: 'Available on both addresses for all academic or professional correspondence.',
      copyEmail: 'Copy',
      emailCopied: 'Copied!',
      linkedIn: 'linkedin.com/in/amyrath-chakran',
      linkedInUrl: 'https://www.linkedin.com/in/amyrath-chakran',
      linkedInLabel: 'Official LinkedIn Profile',
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
        { text: 'Technologist', isPeach: true },
        { text: '&' },
        { text: 'Visual', isAccent: true },
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
        afrikedutech: 'AFRIKEDUTECH · Tech Trainer',
      },
      photo: {
        frontRole: 'Creative Technologist',
        frontHint: 'Click to flip in 3D',
        backTitle: 'Direction & Cinematography',
        backRole: 'Visual Storytelling',
      },
    },
    ticker: [
      'CREATIVE TECHNOLOGIST',
      'VISUAL ARCHITECT',
      'GENERATIVE AI & FILMMAKING',
      'CIVICLENS · ZHEJIANG UNIVERSITY',
      'TECH TRAINER · AFRIKEDUTECH',
      'HUMAN-CENTERED DESIGN',
      'MULTIMODAL AI & STORYTELLING',
    ],
    videos: {
      kicker: 'CINEMATOGRAPHIC WORKS & SCREENINGS',
      title: 'Screening Windows',
      description:
        'Two authentic audiovisual initiatives: reclaiming cultural heritage through generative AI and civic mobilization through live-action cinema.',
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
      tag: 'DIGITAL INCLUSION & FIELD TECH TRAINING',
      title: 'Technology Transmission & Educational Robotics : AFRIKEDUTECH',
      organization: 'AFRIKEDUTECH (Digital Inclusion & Social Innovation Organization in Benin)',
      role: 'Volunteer Tech Trainer · Educational Robotics & Digital Tools',
      description:
        'Hands-on field workshops delivered to youth and rural communities across Benin. Our mission: breaking technological barriers through practical robotics education, computer literacy, and AI discovery.',
      actionsHeading: 'Concrete Field Actions & Workshops :',
      actions: [
        {
          title: 'Educational Robotics & Prototyping',
          description: 'Hands-on assembly, microcontroller programming, and algorithmic problem-solving workshops for youth.',
        },
        {
          title: 'Computer Literacy & E-Services',
          description: 'Practical introduction to computer fundamentals, web research, and access to public online administrative services.',
        },
        {
          title: 'AI Demystification & Tech Horizons',
          description: 'Introducing emergent technologies and practical digital opportunities tailored to local community contexts.',
        },
      ],
      galleryHeading: 'FIELD GALLERY',
      galleryTitle: 'Field Immersion & AFRIKEDUTECH Workshops',
      gallerySubtitle: 'Moments of hands-on training, digital inclusion, and community empowerment with youth in rural Benin.',
      photos: [
        {
          id: 'terrain-1',
          label: '',
          fileName: 'photo-terrain-1.jpg',
          imageSrc: '/photo-terrain-1.jpg',
          alt: 'Educational robotics and digital literacy workshop with youth',
        },
        {
          id: 'terrain-2',
          label: '',
          fileName: 'photo-terrain-2.jpg',
          imageSrc: '/photo-terrain-2.jpg',
          alt: 'Hands-on learning session with educational robotics kits',
        },
        {
          id: 'terrain-3',
          label: '',
          fileName: 'photo-terrain-3.jpg',
          imageSrc: '/photo-terrain-3.jpg',
          alt: 'Digital empowerment and community technology transmission',
        },
      ],
      badgeText: 'Tech Trainer Experience',
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
      description: 'Explore my profile, video projects, authentic passions, and research study plan in an interactive shell.',
      userPrompt: 'amyrath@studio-terminal:~$',
      interactiveMode: 'Interactive Mode',
      shortcutsLabel: 'Shortcuts :',
      shortcutsList: ['cv', 'hobbies', 'videos', 'study-plan', 'afrikedutech', 'contact', 'help', 'clear'],
      welcomeTitle: 'Studio Terminal · Amyrath CHAKRAN Folabi',
      welcomeMsg:
        'Welcome to the interactive console. Use the shortcut buttons above or type commands (e.g., hobbies, videos, study-plan, afrikedutech, contact).',
      unknownCmd: 'Unrecognized command. Type "help" to see available options.',
      availableCmdsHeading: 'Available Commands :',
      availableCmdsList: [
        { cmd: 'cv', desc: 'Academic resume summary & interactive PDF viewer' },
        { cmd: 'hobbies', desc: 'Authentic passions (Directing, Speed skating & Long-distance running, Dance)' },
        { cmd: 'videos', desc: 'Two video projects with direct screening links' },
        { cmd: 'study-plan', desc: 'ZJU Master proposal (CivicLens, Linguistic diversity)' },
        { cmd: 'afrikedutech', desc: 'Community robotics & digital empowerment workshops' },
        { cmd: 'contact', desc: 'Direct emails (Gmail, Epitech), LinkedIn & WhatsApp' },
        { cmd: 'clear', desc: 'Clear console screen' },
      ],
      hobbiesTitle: 'AUTHENTIC PASSIONS & BACKGROUND :',
      hobbiesList: [
        {
          title: '1. Cinematographic Directing & Camera Framing',
          desc: 'Passion for visual composition, natural lighting, editing rhythm, and narrative through pure imagery.',
        },
        {
          title: '2. Sports: Speed Roller Skating & Long-Distance Running',
          desc: 'Former semi-pro speed roller skating competitor and long-distance runner: athletic rigor, mental stamina, discipline, and endurance.',
        },
        {
          title: '3. Dance & Musical Exploration',
          desc: 'Dance practice, exploration of polyrhythms, and sensitivity to acoustic textures applied to audiovisual storytelling.',
        },
      ],
      videosTitle: 'THE TWO VIDEO WORKS (CLICKABLE LINKS) :',
      contactTitle: 'CANDIDATE DIRECT CONTACT DETAILS :',
      studyPlanSummaryTitle: 'CivicLens Research Overview :',
      afrikedutechTitle: 'EDUCATIONAL ROBOTICS & DIGITAL EMPOWERMENT :',
      afrikedutechRoleLabel: 'Role :',
      exploreEngagementBtn: 'Explore field workshops ↗',
      cvTitle: 'CURRICULUM VITAE (CV / RESUME) :',
      cvPillars: [
        { label: '1. Education', text: 'Epitech Bénin (Bachelor IT Expertise, Tek 3).' },
        { label: '2. Filmmaking & Creation', text: 'AI Art Direction & Independent Audiovisual Production.' },
        { label: '3. Social Engagement', text: 'AFRIKEDUTECH (Tech Trainer in Rural Communities).' },
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
      title: "Amyrath CHAKRAN Folabi · Spécialiste en Technologie Créative & Visual Storyteller",
      description:
        "Portfolio et projet de recherche d’Amyrath CHAKRAN Folabi pour le Master en Communication et Médias de l’Université de Zhejiang (College of Media and International Culture).",
    },
    contactChannels: {
      personalEmail: 'amyrathc@gmail.com',
      personalEmailLabel: 'Email personnel',
      academicEmail: 'amyrath.chakran@epitech.eu',
      academicEmailLabel: 'Email académique',
      emailNote: 'Joignable sur ces deux adresses pour toute correspondance académique ou professionnelle.',
      copyEmail: 'Copier',
      emailCopied: 'Copié !',
      linkedIn: 'linkedin.com/in/amyrath-chakran',
      linkedInUrl: 'https://www.linkedin.com/in/amyrath-chakran',
      linkedInLabel: 'Profil LinkedIn Officiel',
      linkedInAction: 'Consulter le profil',
      whatsApp: '+229 01 57 39 87 33',
      whatsAppUrl: 'https://wa.me/2290157398733',
      whatsAppLabel: 'Ligne WhatsApp',
      whatsAppAction: 'Échanger sur WhatsApp',
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
      kicker: 'CONTACT DIRECT',
      title: 'Entrer en contact avec Amyrath',
      subtitle: "Master en Communication & Médias · Université de Zhejiang (College of Media and International Culture)",
      close: 'Fermer',
    },
    hero: {
      programBadge: "Master en Communication & Médias · Université de Zhejiang (College of Media and International Culture)",
      nameBadgePrompt: 'Cliquer pour retourner la photo',
      nameBadgeActive: 'Verso actif',
      titleWords: [
        { text: 'Spécialiste' },
        { text: 'en' },
        { text: 'Technologie', isPeach: true },
        { text: 'Créative' },
        { text: '&' },
        { text: 'Architecte' },
        { text: 'Visuelle', isAccent: true },
      ],
      subtitle: "À la croisée de l’intelligence artificielle générative, de l’écriture visuelle et de l’expérience humaine.",
      intro:
        'Développer des passerelles concrètes entre réalisation cinématographique, intelligence artificielle multimodale et design civique pour rendre l’information accessible à tous.',
      ctaVideos: 'Voir les Réalisations Vidéo',
      ctaStudyPlan: 'Study Plan ZJU',
      ctaCv: 'Consulter le CV (PDF)',
      badges: {
        artDirection: 'Direction Artistique & IA',
        impactFilm: 'Cinéma d’Impact',
        afrikedutech: 'AFRIKEDUTECH · Formatrice Tech',
      },
      photo: {
        frontRole: 'Spécialiste en Technologie Créative',
        frontHint: 'Cliquer pour retourner en 3D',
        backTitle: 'Réalisation & Cadrage',
        backRole: 'Récit Visuel',
      },
    },
    ticker: [
      'SPÉCIALISTE EN TECHNOLOGIE CRÉATIVE',
      'ARCHITECTE VISUELLE',
      'IA GÉNÉRATIVE & RÉALISATION',
      'CIVICLENS · UNIVERSITÉ DE ZHEJIANG',
      'FORMATRICE TECH · AFRIKEDUTECH',
      'DESIGN CIVIQUE & ACCESSIBILITÉ',
      'ROBOTIQUE & INCLUSION NUMÉRIQUE',
    ],
    videos: {
      kicker: 'PROJECTIONS & CRÉATIONS AUDIOVISUELLES',
      title: 'Fenêtres de Projection',
      description:
        'Deux démarches audiovisuelles concrètes : la réappropriation du patrimoine précolonial par l’IA générative et l’engagement citoyen par la prise de vue réelle.',
      exactRoleLabel: 'Rôle précis :',
      project1: {
        number: 'Projet 01',
        tag: 'IA Générative & Patrimoine',
        title: '"DANXOMÈ, le ventre du serpent"',
        organization: 'Hub Epitech & Amyrath CHAKRAN',
        category: 'Génération visuelle & Direction artistique IA',
        role: 'Projet mené avec le Hub Epitech · Direction artistique IA & génération visuelle (Higgsfield AI)',
        description:
          'Court-métrage historique généré par IA retraçant l’épopée précoloniale et la résistance royale. Réalisé avec le Hub Epitech : direction artistique complète, élaboration des prompts et génération intégrale des rushs visuels.',
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
        role: 'Court-métrage engagé contre le harcèlement de rue · Prise de vue réelle, écriture, cadrage et montage',
        description:
          'Court-métrage de sensibilisation contre les agressions et le harcèlement dans l’espace public. Réalisation intégrale en prise de vue réelle avec des comédiens : écriture du scénario, tournage, cadrage caméra et montage final sans IA.',
        badges: ['Prise de Vue Réelle', 'Sensibilisation', 'Écriture & Scénario', 'Cadrage & Montage'],
        button: 'Visionner sur YouTube ↗',
        youtubeId: 'o5ITNClGOsA',
        youtubeUrl: 'https://youtu.be/o5ITNClGOsA?si=XITyQdHAAgNW2W9j',
      },
    },
    afrikedutech: {
      tag: 'INCLUSION NUMÉRIQUE & FORMATION DE TERRAIN',
      title: 'Transmission Technologique & Robotique : AFRIKEDUTECH',
      organization: 'AFRIKEDUTECH (Organisation d’innovation sociale pour l’inclusion numérique au Bénin)',
      role: 'Formatrice Tech bénévole · Robotique éducative & Outils numériques',
      description:
        'Animation d’ateliers pratiques de terrain auprès des jeunes et des communautés rurales au Bénin. Notre mission : décloisonner l’accès à la technologie par l’apprentissage concret de la robotique, l’usage autonome des outils numériques et la découverte des opportunités de l’intelligence artificielle.',
      actionsHeading: 'Actions & Ateliers de Formation de Terrain :',
      actions: [
        {
          title: 'Robotique Éducative & Prototypage',
          description: 'Ateliers pratiques d’assemblage, programmation de micro-contrôleurs et logique algorithmique avec les jeunes.',
        },
        {
          title: 'Outils Informatiques & E-Services',
          description: 'Initiation à la navigation web, recherche documentaire et appropriation des démarches administratives en ligne.',
        },
        {
          title: 'Démystification de l’IA & Perspectives Tech',
          description: 'Sensibilisation aux technologies émergentes et opportunités numériques adaptées aux réalités locales.',
        },
      ],
      galleryHeading: 'GALERIE DE TERRAIN',
      galleryTitle: 'Immersion & Ateliers AFRIKEDUTECH',
      gallerySubtitle: 'Moments d’échange, de formation pratique et d’initiation technologique auprès des communautés et des jeunes au Bénin.',
      photos: [
        {
          id: 'terrain-1',
          label: '',
          fileName: 'photo-terrain-1.jpg',
          imageSrc: '/photo-terrain-1.jpg',
          alt: 'Atelier d’initiation à la robotique et aux technologies numériques',
        },
        {
          id: 'terrain-2',
          label: '',
          fileName: 'photo-terrain-2.jpg',
          imageSrc: '/photo-terrain-2.jpg',
          alt: 'Session pratique avec les kits de robotique et les jeunes',
        },
        {
          id: 'terrain-3',
          label: '',
          fileName: 'photo-terrain-3.jpg',
          imageSrc: '/photo-terrain-3.jpg',
          alt: 'Inclusion numérique et transmission technologique de terrain',
        },
      ],
      badgeText: 'Expérience Formatrice Tech',
    },
    studyPlan: {
      tag: 'STUDY PLAN · PROPOSITION DE RECHERCHE MASTER',
      university: 'Université de Zhejiang (ZJU) · College of Media and International Culture',
      officialTitleLabel: 'Titre Officiel du Projet de Recherche Master :',
      officialTitle: 'CivicLens: Accessible Visual Media & Multilingual Information Systems',
      program: 'Master en Communication & Médias · Université de Zhejiang (College of Media and International Culture)',
      themeLabel: 'Sujet de Recherche & Diversité Linguistique',
      theme:
        'Accessibilité de l’information civique par des interfaces visuelles et sonores adaptées à la diversité linguistique du Bénin (Français, langues nationales : Fon, Yoruba/Nago, et dialectes locaux).',
      problemLabel: 'Le Constat',
      problemTitle: 'L’Inaccessibilité des Textes Juridiques & Civiques',
      problemDesc:
        'La complexité formelle des textes de loi et les disparités d’alphabétisation privent une large partie des citoyens d’Afrique de l’Ouest de la compréhension effective de leurs droits fondamentaux.',
      approachLabel: 'La Démarche',
      approachTitle: 'Interfaces Visuelles & Audio Multilingue',
      approachDesc:
        'Traduire l’information civique en signalétique visuelle universelle et en micro-médias sonores adaptés aux langues nationales (Fon, Yoruba/Nago, Français).',
      axesHeading: 'Les Quatre Axes de Recherche',
      axesSubtitle:
        'Sémiotique visuelle, audio multilingue en langues nationales, micro-médias mobiles et réception cognitive.',
      axes: [
        {
          number: '01',
          title: 'Sémiotique Visuelle & Symboles Universels',
          description:
            'Conception d’un répertoire visuel intuitif facilitant l’appropriation des concepts civiques sans prérequis de lecture formelle.',
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
            'Création de formats visuels légers et modulaires, optimisés pour la consultation sur smartphone et le partage communautaire (WhatsApp).',
        },
        {
          number: '04',
          title: 'Clarté Cognitive & Mesure de Réception',
          description:
            'Évaluation de l’impact concret et du niveau de compréhension des contenus auprès des communautés ciblées.',
        },
      ],
    },
    terminal: {
      kicker: 'CONSOLE CRÉATIVE INTERACTIVE',
      title: 'Studio Terminal',
      description: 'Explorez mon parcours, mes réalisations vidéo, mes passions et mon Study Plan dans un terminal interactif accessible.',
      userPrompt: 'amyrath@studio-terminal:~$',
      interactiveMode: 'Mode Interactif',
      shortcutsLabel: 'Raccourcis :',
      shortcutsList: ['cv', 'passions', 'projets', 'recherche', 'afrikedutech', 'contact', 'aide', 'effacer'],
      welcomeTitle: 'Studio Terminal · Amyrath CHAKRAN Folabi',
      welcomeMsg:
        'Bienvenue dans la console interactive. Cliquez sur les raccourcis ci-dessus ou saisissez une commande (ex : passions, projets, recherche, afrikedutech, contact).',
      unknownCmd: 'Commande non reconnue. Tapez "aide" pour afficher la liste des commandes disponibles.',
      availableCmdsHeading: 'Commandes Disponibles :',
      availableCmdsList: [
        { cmd: 'cv', desc: 'Synthèse du parcours académique et consultation du CV (PDF)' },
        { cmd: 'passions', desc: 'Centres d’intérêt réels (Réalisation, Sport & Course de fond, Danse)' },
        { cmd: 'projets', desc: 'Les 2 projets vidéo avec liens de visionnage direct' },
        { cmd: 'recherche', desc: 'Proposition de recherche Master ZJU (CivicLens, Diversité linguistique)' },
        { cmd: 'afrikedutech', desc: 'Ateliers de robotique et inclusion numérique de terrain' },
        { cmd: 'contact', desc: 'Coordonnées directes (Gmail, Epitech), LinkedIn & WhatsApp' },
        { cmd: 'effacer', desc: 'Réinitialiser la console' },
      ],
      hobbiesTitle: 'PASSIONS & CENTRES D’INTÉRÊT :',
      hobbiesList: [
        {
          title: '1. Réalisation & Cadrage Cinématographique',
          desc: 'Passion pour la composition visuelle, la lumière naturelle, le rythme du montage et la narration par l’image.',
        },
        {
          title: '2. Sports : Roller de vitesse & Course de fond',
          desc: 'Ancienne athlète semi-pro de roller de vitesse et adepte de la course de fond : rigueur athlétique, endurance mentale, discipline et dépassement de soi.',
        },
        {
          title: '3. Danse & Exploration Musicale',
          desc: 'Pratique de la danse, exploration des polyrythmies et sensibilité aux textures acoustiques appliquées au storytelling.',
        },
      ],
      videosTitle: 'LES DEUX PROJETS VIDÉO (LIENS CLIQUABLES) :',
      contactTitle: 'COORDONNÉES DIRECTES DU CANDIDAT :',
      studyPlanSummaryTitle: 'Aperçu du Study Plan CivicLens :',
      afrikedutechTitle: 'ROBOTIQUE ÉDUCATIVE & INCLUSION NUMÉRIQUE :',
      afrikedutechRoleLabel: 'Rôle :',
      exploreEngagementBtn: 'Découvrir les ateliers de terrain ↗',
      cvTitle: 'CURRICULUM VITAE (CV) :',
      cvPillars: [
        { label: '1. Formation', text: 'Epitech Bénin (Bachelor IT Expertise, Tek 3).' },
        { label: '2. Réalisation & Création', text: 'Direction Artistique IA & Production Audiovisuelle Indépendante.' },
        { label: '3. Engagement de Terrain', text: 'AFRIKEDUTECH (Formatrice Tech en Milieu Rural).' },
      ],
      cvDownloadLabel: '[ Consulter le document PDF ↗ ]',
    },
    footer: {
      quote: '« Raconter par l’image, concevoir avec empathie, rassembler par l’interaction. »',
      candidateBadge: 'CANDIDATE ZJU',
      footnote:
        "Amyrath CHAKRAN Folabi · Candidature Master en Communication & Médias · Université de Zhejiang (College of Media and International Culture)",
    },
  },
};
