import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for merging Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Smooth scroll to section
export function scrollToSection(href: string) {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Scroll to top
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Format phone number for display
export function formatPhone(phone: string): string {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
}

// Company information (single source of truth)
export const COMPANY_INFO = {
  name: 'West Africa Agricultural Commodities Ltd.',
  shortName: 'WEST AFRICA',
  phones: ['053 836 1679', '020 067 4743'],
  email: 'westafricaagrocommoltd@gmail.com', // Email for backend/sending
  displayEmails: ['info@westafricaagrocommoltd.com', 'contacts@westafricaagrocommolt.com'], // Emails for display
  whatsapp: '233538361679', // Format international sans le +
  location: 'West Africa Region (Ghana, Nigeria, Ivory Coast)',
  businessHours: {
    weekday: 'Monday - Friday: 8AM - 6PM',
    weekend: 'Saturday: 9AM - 2PM',
  },
  social: {
    facebook: '#',
    twitter: '#',
    linkedin: '#',
    instagram: '#',
    youtube: '#',
  },
} as const;

// Navigation items (single source of truth)
export const NAV_ITEMS = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Contact', href: '#contact' },
] as const;

// Animation variants for Framer Motion (if needed)
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};
