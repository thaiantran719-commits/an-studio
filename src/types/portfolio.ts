export type Language = 'vi' | 'en';

export type ActiveTab = 'work' | 'about' | 'contact';

export type ProjectCategory = 'all' | 'film' | 'photo' | 'color' | 'doc';

export interface Project {
  id: string;
  number: string;
  title: {
    vi: string;
    en: string;
  };
  category: ProjectCategory;
  categoryLabel: {
    vi: string;
    en: string;
  };
  typeBadge: {
    vi: string;
    en: string;
  };
  cameraMeta: string;
  durationMeta: {
    vi: string;
    en: string;
  };
  statusBadge: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
  tags: {
    vi: string[];
    en: string[];
  };
  imageUrl: string;
  imageAlt: string;
}

export interface FilmReelItem {
  id: string;
  expNumber: string;
  title: {
    vi: string;
    en: string;
  };
  cameraLens: string;
  imageUrl: string;
  imageAlt: string;
}

export interface GearItem {
  name: string;
  spec: string;
}

export interface GearCategory {
  title: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
  iconName: string;
  items: GearItem[];
}

export interface AwardItem {
  festival: string;
  honor: {
    vi: string;
    en: string;
  };
  year: string;
}

export interface ClientItem {
  name: string;
  scope: string;
}

export interface StatMetric {
  label: {
    vi: string;
    en: string;
  };
  value: string;
  description: {
    vi: string;
    en: string;
  };
  percentage: number;
  iconName: string;
}
