export interface Certificate {
  id: string;
  title: string;
  subtitle?: string;
  category: 'academic' | 'competition' | 'social' | 'english' | 'work';
  awardLevel: string;
  issuer: string;
  date: string;
  certNo?: string;
  groupName?: string;
  teamMembers?: string[];
  instructor?: string;
  summary: string;
  highlights?: string[];
  paperId?: string; // Optional reference to a paper
  realImage?: string; // Optional path to real certificate image
  realPdf?: string; // Optional path to associated PDF paper/document
}

export interface Paper {
  id: string;
  title: string;
  category: string;
  contest: string;
  award: string;
  team: string[];
  avatar?: string;
  summary: string;
  sections: {
    title: string;
    content: string;
    formulas?: string[];
    metrics?: { label: string; value: string }[];
  }[];
  conclusions: string[];
  certificateId?: string;
  realPdf?: string; // Optional path to real PDF paper
}

export interface Project {
  id: string;
  title: string;
  award: string;
  instructor: string;
  role: string;
  team: string[];
  summary: string;
  features: {
    name: string;
    desc: string;
  }[];
  techStack: string[];
  metrics: { label: string; value: string; desc: string }[];
  certificateId?: string;
  liveUrl?: string; // Optional live link to deployed web system
}

export interface Experience {
  id: string;
  type: 'internship' | 'practice' | 'leadership';
  title: string;
  unit: string;
  duration: string;
  role: string;
  stamps?: string[]; // Verification stamp texts
  summary: string;
  points: string[];
}
