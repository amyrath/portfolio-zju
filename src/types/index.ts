export interface VideoProject {
  id: string;
  number: string;
  title: string;
  organization: string;
  category: string;
  role: string;
  description: string;
  accentColor: string;
  facebookUrl?: string;
  youtubeId?: string;
  youtubeUrl?: string;
  badges: string[];
}

export interface EngagementExperience {
  title: string;
  organization: string;
  role: string;
  description: string;
  actions: string[];
  certificateTitle: string;
}

export interface StudyPlanAxis {
  number: string;
  title: string;
  description: string;
  color: string;
}

export interface StudyPlanInfo {
  officialTitle: string;
  program: string;
  university: string;
  department: string;
  location: string;
  coreTheme: string;
  problemStatement: string;
  approach: string;
  axes: StudyPlanAxis[];
}

export interface HobbyItem {
  title: string;
  description: string;
}
