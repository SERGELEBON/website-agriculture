import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/utils';

interface ContactItemProps {
  icon: LucideIcon;
  title: string;
  details: readonly string[];
  href?: string;
  delay?: number;
  isVisible?: boolean;
}

function ContactItem({ icon: Icon, title, details, href, delay = 0, isVisible = true }: ContactItemProps) {
  const content = (
    <div
      className={`flex items-start gap-4 p-4 rounded-xl hover:bg-agro-green-light transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 bg-agro-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-agro-green" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
        {details.map((detail, idx) => (
          <p key={idx} className="text-gray-600 text-sm">{detail}</p>
        ))}
      </div>
    </div>
  );

  if (href && href !== '#') {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}

interface ContactInfoProps {
  isVisible?: boolean;
  showMap?: boolean;
}

export default function ContactInfo({ isVisible = true, showMap = true }: ContactInfoProps) {
  const contactItems: ContactItemProps[] = [
    {
      icon: Phone,
      title: 'Phone',
      details: COMPANY_INFO.phones,
      href: `tel:${COMPANY_INFO.phones[0].replace(/\s/g, '')}`,
      delay: 300,
    },
    {
      icon: Mail,
      title: 'Email',
      details: COMPANY_INFO.displayEmails,
      href: `mailto:${COMPANY_INFO.displayEmails[0]}`,
      delay: 400,
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['West Africa Region', 'Ghana, Nigeria, Ivory Coast'],
      delay: 500,
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [COMPANY_INFO.businessHours.weekday, COMPANY_INFO.businessHours.weekend],
      delay: 600,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
        <p className="text-gray-600">
          Our team is ready to assist you with any inquiries about our services,
          products, or partnership opportunities.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {contactItems.map((item, index) => (
          <ContactItem key={index} {...item} isVisible={isVisible} />
        ))}
      </div>

      {showMap && (
        <div className="relative h-64 bg-gray-100 rounded-xl overflow-hidden">
          <img
            src="/west-africa-map.jpg"
            alt="West Africa Map"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-agro-green/10 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
              <p className="text-sm font-medium text-gray-900">Serving West Africa Region</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
