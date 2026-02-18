import { Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp, Mail, Phone } from 'lucide-react';
import Logo from './common/Logo';
import { scrollToSection, scrollToTop, COMPANY_INFO } from '@/lib/utils';
import { getWhatsAppLink } from '@/lib/emailService';

const FOOTER_LINKS = {
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Sustainability', href: '#sustainability' },
    { label: 'Careers', href: '#' },
  ],
  services: [
    { label: 'Import & Export', href: '#services' },
    { label: 'Agricultural Investment', href: '#services' },
    { label: 'Agricultural Finance', href: '#services' },
    { label: 'Farm Consultancy', href: '#services' },
  ],
  support: [
    { label: 'Contact Us', href: '#contact' },
    { label: 'WhatsApp Chat', href: getWhatsAppLink(), external: true },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Use', href: '#' },
  ],
};

const SOCIAL_LINKS = [
  { icon: Facebook, href: COMPANY_INFO.social.facebook, label: 'Facebook' },
  { icon: Twitter, href: COMPANY_INFO.social.twitter, label: 'Twitter' },
  { icon: Linkedin, href: COMPANY_INFO.social.linkedin, label: 'LinkedIn' },
  { icon: Instagram, href: COMPANY_INFO.social.instagram, label: 'Instagram' },
  { icon: Youtube, href: COMPANY_INFO.social.youtube, label: 'YouTube' },
];

export default function Footer() {
  const handleLinkClick = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, '_blank');
    } else if (href.startsWith('#')) {
      scrollToSection(href);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Subscribe to Our News Alerts</h3>
              <p className="text-gray-400 text-sm">Stay updated with the latest news and developments.</p>
            </div>
            <form 
              className="flex gap-3 w-full md:w-auto"
              onSubmit={(e) => {
                e.preventDefault();
                const email = (e.target as HTMLFormElement).email.value;
                window.open(`mailto:${COMPANY_INFO.email}?subject=Newsletter Subscription&body=Please subscribe me to your newsletter. Email: ${email}`, '_blank');
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-agro-green flex-1 md:w-64"
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-agro-green text-white rounded-lg hover:bg-agro-green-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Logo size="md" className="mb-6" />
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              A leading agricultural commodities company in West Africa, dedicated to 
              sustainable farming and quality produce export across the globe.
            </p>
            <div className="space-y-3">
              <a 
                href={`tel:${COMPANY_INFO.phones[0].replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-agro-green" />
                <span className="text-sm">{COMPANY_INFO.phones[0]} / {COMPANY_INFO.phones[1]}</span>
              </a>
              <a 
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-agro-green" />
                <span className="text-sm">{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h5 className="font-semibold mb-4">Company</h5>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h5 className="font-semibold mb-4">Services</h5>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h5 className="font-semibold mb-4">Support</h5>
            <ul className="space-y-3">
              {FOOTER_LINKS.support.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href, link.external)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} {COMPANY_INFO.name} All Rights Reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-agro-green hover:text-white transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              Back to Top
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
