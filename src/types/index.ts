export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  about: AboutProps;
  education: EducationProps[];
  manuscripts: ManuscriptProps[];
  skills: SkillGroupProps[];
  awards: AwardProps[];
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
  type?: "research" | "industry" | "teaching";
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
  tech: string[];
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}

export interface SkillGroupProps {
  category: string;
  items: string[];
}

export interface ManuscriptProps {
  title: string;
  status: string;
  institution: string;
  year: string;
  summary: string[];
}

export interface EducationProps {
  institution: string;
  degree: string;
  cgpa: string;
  location: string;
  startDate: string;
  endDate: string;
}

export interface AwardProps {
  title: string;
  details?: string;
}

