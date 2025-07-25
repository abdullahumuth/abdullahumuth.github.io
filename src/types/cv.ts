export interface Experience {
  company: string;
  time: string;
  title: string;
  location?: string;
  description?: string;
}

export interface Education {
  school: string;
  time: string;
  degree: string;
  location?: string;
  description?: string;
}

export interface Workshop {
  title: string;
  organizer: string;
  time: string;
  location?: string;
  description?: string;
}

export interface Scholarship {
  name: string;
  amount: string;
  period: string;
  description?: string;
}

export interface Skill {
  title: string;
  description: string;
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  time: string;
  link?: string;
  abstract?: string;
}

// Type guards
export function isExperience(element: any): element is Experience {
  return 'title' in element && 'company' in element;
}

export function isEducation(element: any): element is Education {
  return 'school' in element && 'degree' in element;
}

export function isWorkshop(element: any): element is Workshop {
  return 'title' in element && 'organizer' in element;
}

export function isScholarship(element: any): element is Scholarship {
  return 'name' in element && 'amount' in element && 'period' in element;
}

export function isSkill(element: any): element is Skill {
  return 'title' in element && 'description' in element && !('authors' in element) && !('organizer' in element);
}

export function isPublication(element: any): element is Publication {
  return 'authors' in element && 'journal' in element;
}