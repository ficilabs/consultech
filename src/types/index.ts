/**
 * Common TypeScript types and interfaces for the Consultech project
 */

/**
 * Component props for sections
 */
export interface SectionProps {
  whatsappLink?: string;
  className?: string;
}

/**
 * Navigation item type
 */
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

/**
 * Service/Product offering
 */
export interface ServiceOffering {
  id: string;
  title: string;
  description: string;
  price?: number;
  features?: string[];
}

/**
 * Testimonial type
 */
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
  rating?: number;
}

/**
 * Portfolio project type
 */
export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  link?: string;
  technologies?: string[];
}
