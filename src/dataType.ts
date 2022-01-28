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

export interface CVSection {
  content: string;
  order: number;
  title: string;
}

export interface Link {
  description?: string;
  image?: string;
  order: number;
  title: string;
  url: string;
}

export interface Data {
  cv: CVSection[];
  galleries: Gallery[];
  home: string;
  links: Link[];
}
