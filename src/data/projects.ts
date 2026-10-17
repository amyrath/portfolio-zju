export interface VideoProject {
  id: string;
  number: string;
  title: string;
  organization: string;
  category: string;
  role: string;
  description: string;
  accentColor: string;
  pastelBg: string;
  facebookUrl?: string;
  youtubeId?: string;
  youtubeUrl?: string;
  badges: string[];
}

export const VIDEO_PROJECTS: VideoProject[] = [
  {
    id: 'historical-ai-film',
    number: 'Projet 01',
    title: '"DANXOMÈ, le ventre du serpent"',
    organization: 'Hub Epitech & Amyrath CHAKRAN',
    category: 'Génération visuelle & Direction Artistique IA',
    role: 'Réalisé avec le Hub Epitech · Génération visuelle & Direction Artistique IA (Higgsfield AI)',
    description:
      'Court-métrage historique généré par IA retraçant l’épopée précoloniale et la résistance royale. Réalisé avec le Hub Epitech : direction artistique complète, conception des prompts et génération intégrale des rushs visuels.',
    badges: ['DANXOMÈ', 'Hub Epitech', 'Direction Artistique IA', 'Higgsfield AI'],
    accentColor: '#FF8B71',
    pastelBg: '#FFF0ED',
    facebookUrl: 'https://www.facebook.com/share/v/1B2aiY5Hwa/',
  },
  {
    id: 'social-harassment-film',
    number: 'Projet 02',
    title: '"À tous les hommes" (To all men)',
    organization: 'Production Cinématographique Indépendante',
    category: 'Court-métrage de sensibilisation · Prise de vue réelle',
    role: 'Court-métrage de sensibilisation contre les agressions et le harcèlement de rue · Prise de vue réelle, écriture, cadrage et montage',
    description:
      'Court-métrage de sensibilisation engagé contre les agressions et le harcèlement de rue. Réalisation en prise de vue réelle : écriture du scénario, tournage, cadrage caméra et montage final sans IA.',
    badges: ['Prise de Vue Réelle', 'Sensibilisation', 'Écriture & Scénario', 'Cadrage & Montage'],
    accentColor: '#E9D5FF',
    pastelBg: '#FAF5FF',
    youtubeId: 'o5ITNClGOsA',
    youtubeUrl: 'https://youtu.be/o5ITNClGOsA?si=XITyQdHAAgNW2W9j',
  },
];

export const ENGAGEMENT_AFRIKEDUTECH = {
  title: 'Formation & Inclusion Numérique : AFRIKEDUTECH',
  organization: 'AFRIKEDUTECH (Organisation d’innovation sociale pour l’inclusion numérique au Bénin)',
  role: 'Formatrice bénévole en inclusion numérique & technologies',
  description:
    'Animation d’ateliers pratiques ouverts à l’ensemble des jeunes et communautés des zones rurales pour favoriser l’autonomie numérique et l’accès équitable aux opportunités technologiques.',
  actions: [
    'Initiation aux outils informatiques et à la recherche documentaire sur le web.',
    'Découverte des e-services (services publics et démarches en ligne).',
    'Introduction pratique aux outils d’Intelligence Artificielle et robotique éducative.',
  ],
  certificateTitle: 'Certificat Officiel d’Engagement : AFRIKEDUTECH',
  certificateStatus: 'Certificat officiel d’engagement bénévole validé',
};

// Alias de compatibilité pour éviter tout conflit de cache ou d'import résiduel
export const ENGAGEMENT_AFRIKEDUCTEK = ENGAGEMENT_AFRIKEDUTECH;

export const OFFICIAL_PROGRAM_TITLE =
  "Master's Degree in Communication and Media · Zhejiang University (College of Media and International Culture)";

export const OFFICIAL_RESEARCH_TITLE =
  'CivicLens: Accessible Visual Media & Multilingual Information Systems';

export const STUDY_PLAN_DATA = {
  officialTitle: OFFICIAL_RESEARCH_TITLE,
  program: OFFICIAL_PROGRAM_TITLE,
  university: 'Zhejiang University (ZJU)',
  department: 'College of Media and International Culture',
  location: 'Hangzhou',
  coreTheme:
    'Accessibilité de l’information civique par des interfaces visuelles et sonores adaptées à la diversité linguistique du Bénin (Français, dialectes et langues nationales : Fon, Yoruba/Nago, etc.).',
  problemStatement:
    'La complexité formelle des textes juridiques et civiques et les barrières d’alphabétisation privent une large part des citoyens de la compréhension de leurs droits fondamentaux au Bénin.',
  approach:
    'Concevoir des interfaces visuelles intuitives, une signalétique accessible et des synthèses audio multilingues pour transformer des informations complexes en micro-médias mobiles universellement intelligibles.',
  axes: [
    {
      number: '01',
      title: 'Sémiotique Visuelle & Symboles Universels',
      description: 'Création d’un répertoire visuel intuitif facilitant l’appropriation des concepts civiques sans prérequis de lecture formelle.',
      color: '#FF8B71',
    },
    {
      number: '02',
      title: 'Diversité Linguistique & Audio Multilingue',
      description: 'Intégration du Français, des langues nationales du Bénin (Fon, Yoruba/Nago) et des dialectes locaux en formats sonores.',
      color: '#8B5CF6',
    },
    {
      number: '03',
      title: 'Micro-Médias Mobiles pour Canaux Sociaux',
      description: 'Formats visuels légers et modulaires, optimisés pour la consultation sur smartphone et le partage communautaire (WhatsApp, etc.).',
      color: '#10B981',
    },
    {
      number: '04',
      title: 'Évaluation de la Clarté Cognitive & Réception',
      description: 'Mesure de l’impact réel et de l’intelligibilité des contenus auprès des communautés ciblées.',
      color: '#470E0B',
    },
  ],
};

export const HOBBIES_DATA = [
  {
    title: 'Réalisation & Cadrage Cinématographique',
    description: 'Passion pour la composition visuelle, la lumière naturelle, le rythme du montage et la narration par l’image.',
  },
  {
    title: 'Engagement Social & Transmission',
    description: 'Formatrice bénévole chez AFRIKEDUTECH : transmission de la culture numérique, des e-services et de l’IA dans les zones rurales.',
  },
  {
    title: 'Sport : Roller de Vitesse',
    description: 'Ancienne athlète semi-pro / compétitrice de roller de vitesse : rigueur athlétique, endurance, discipline et dépassement de soi.',
  },
  {
    title: 'Danse & Exploration Musicale',
    description: 'Pratique de la danse, exploration des polyrythmies et sensibilité aux textures acoustiques appliquées au storytelling.',
  },
];

