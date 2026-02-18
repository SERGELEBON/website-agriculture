import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './common/Logo';
import { scrollToSection, COMPANY_INFO, NAV_ITEMS } from '@/lib/utils';
import { useScrollPosition } from '@/hooks/useScrollVisibility';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScrollPosition(100);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className={`bg-agro-green-dark text-white py-2 transition-all duration-300 ${isScrolled ? 'hidden' : 'block'}`}>
        <div className="container-custom flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${COMPANY_INFO.phones[0].replace(/\s/g, '')}`}
              className="flex items-center gap-1 hover:text-agro-gold transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>{COMPANY_INFO.phones[0]}</span>
            </a>
            <span className="text-white/50">/</span>
            <a 
              href={`tel:${COMPANY_INFO.phones[1].replace(/\s/g, '')}`}
              className="hover:text-agro-gold transition-colors"
            >
              {COMPANY_INFO.phones[1]}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-1 hover:text-agro-gold transition-colors"
            >
              <Mail className="w-3 h-3" />
              <span className="hidden sm:inline">{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg py-2'
            : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo size="md" />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-medium text-gray-700 hover:text-agro-green transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-agro-green transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="outline"
                className="border-agro-green text-agro-green hover:bg-agro-green hover:text-white"
                onClick={() => handleNavClick('#contact')}
              >
                Contact Us
              </Button>
              <Button
                className="bg-agro-green text-white hover:bg-agro-green-dark"
                onClick={() => handleNavClick('#services')}
              >
                Our Services
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-agro-green transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <nav className="container-custom py-4 flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-left py-3 px-4 text-gray-700 hover:bg-agro-green-light hover:text-agro-green rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
              <Button
                variant="outline"
                className="border-agro-green text-agro-green hover:bg-agro-green hover:text-white w-full"
                onClick={() => handleNavClick('#contact')}
              >
                Contact Us
              </Button>
              <Button
                className="bg-agro-green text-white hover:bg-agro-green-dark w-full"
                onClick={() => handleNavClick('#services')}
              >
                Our Services
              </Button>
            </div>
            <div className="mt-4 pt-4 border-t text-sm text-gray-600">
              <a 
                href={`tel:${COMPANY_INFO.phones[0].replace(/\s/g, '')}`}
                className="flex items-center gap-2 py-2"
              >
                <Phone className="w-4 h-4 text-agro-green" />
                {COMPANY_INFO.phones[0]} / {COMPANY_INFO.phones[1]}
              </a>
              <a 
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 py-2"
              >
                <Mail className="w-4 h-4 text-agro-green" />
                {COMPANY_INFO.email}
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
