export interface Picture {
  date: number;
  id: string;
  metadata?: {
    description?: string;
    license?: string;
    location?: {
      latitude: number;
      longitude: number;
    };
  };
  name: string;
  url: string;
}

export interface Gallery {
  cover: string;
  id: string;
  metadata?: {
    date?: number;
    description?: string;
    location?: {
      latitude: number;
      longitude: number;
    };
  };
  pictures: Picture[];
  title: string;
}

interface Organisation {
  endDate?: number;
  jobTitle: string;
  startDate: number;
}

export interface Course extends Organisation {
  description?: string;
  location: string;
  organisationName: string;
}

export interface ExperienceFreelance extends Organisation {
  task: string[];
}

export interface Experience extends Organisation {
  location: string;
  organisationName: string;
  task: string[];
}

export function isExperience(
  exp: Course | Experience | ExperienceFreelance
): exp is Experience {
  return (
    (exp as Experience).organisationName !== undefined &&
    (exp as Experience).task !== undefined
  );
}

export function isExperienceFreelance(
  exp: Course | Experience | ExperienceFreelance
): exp is ExperienceFreelance {
  return (exp as Experience).organisationName === undefined;
}

export function isCourse(
  exp: Course | Experience | ExperienceFreelance
): exp is Course {
  return (
    (exp as Experience).organisationName !== undefined &&
    (exp as Experience).task === undefined
  );
}

export interface Project {
  description?: string;
  name: string;
  task: string[];
}

export interface SkillCategory {
  skills: string[];
  title: string;
}

export interface CV {
  course: Course[];
  education: Course[];
  experience: Array<Experience | ExperienceFreelance>;
  info: {
    addressLocality: string;
    postalCode: string;
    streetAddress: string;
    weblinks: Array<[string, string]>;
  };
  languages: Array<[string, string]>;
  projects: Project[];
  recreation: string[];
  skills: SkillCategory[];
}

export interface Link {
  description?: string;
  image?: string;
  order: number;
  title: string;
  url: string;
}

export interface Data {
  cv: CV;
  galleries: Gallery[];
  home: string;
  links: Link[];
}
