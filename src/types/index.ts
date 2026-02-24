// 공통 타입 정의

export interface NavItem {
  name: string;
  url: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface JobExperience {
  company: string;
  title: string;
  range: string;
  url: string;
  responsibilities: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  external?: string;
  image?: string;
}
