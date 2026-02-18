import { useState } from 'react';
import { ArrowRight, Ship, TrendingUp, DollarSign, Sprout, Package, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/common/SectionHeader';
import { useScrollVisibility } from '@/hooks/useScrollVisibility';
import { getWhatsAppLink } from '@/lib/emailService';

const MAIN_SERVICES = [
  {
    icon: Ship,
    title: 'Import & Export',
    description: 'Comprehensive import and export services for agricultural commodities including cocoa, corn, palm oil, rice, and vegetables across West Africa and beyond.',
    image: '/commodities-export.jpg',
    features: ['Global Shipping Network', 'Customs Clearance', 'Quality Inspection', 'Documentation Support'],
  },
  {
    icon: TrendingUp,
    title: 'Agricultural Investment',
    description: 'Strategic investment opportunities in agricultural projects, farm development, and value chain enhancement across West Africa.',
    image: '/agricultural-investment.jpg',
    features: ['Project Financing', 'Farm Development', 'Value Chain Investment', 'Risk Management'],
  },
  {
    icon: DollarSign,
    title: 'Agricultural Finance',
    description: 'Tailored financial solutions for farmers and agricultural businesses, including loans, credit facilities, and working capital.',
    image: '/agricultural-finance.jpg',
    features: ['Farmer Loans', 'Working Capital', 'Equipment Financing', 'Trade Finance'],
  },
] as const;

const ADDITIONAL_SERVICES = [
  {
    icon: Sprout,
    title: 'Farm Consultancy',
    description: 'Expert advice on modern farming techniques and crop management.',
  },
  {
    icon: Package,
    title: 'Storage Solutions',
    description: 'State-of-the-art warehousing and storage facilities.',
  },
  {
    icon: Handshake,
    title: 'Partnership Programs',
    description: 'Collaborative programs with farmers and cooperatives.',
  },
] as const;

export default function Services() {
  const [ref, isVisible] = useScrollVisibility<HTMLElement>({ threshold: 0.1 });
  const [activeService, setActiveService] = useState(0);

  return (
    <section
      id="services"
      ref={ref}
      className="section-padding bg-gray-50 overflow-hidden"
    >
      <div className="container-custom">
        {/* Header */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionHeader
            label="Our Services"
            title={<>Comprehensive Agricultural <span className="text-agro-green">Solutions</span></>}
            description="We offer end-to-end agricultural services, from commodity trading to investment and financing, supporting farmers and businesses across West Africa."
          />
        </div>

        {/* Main Services */}
        <div className={`grid lg:grid-cols-2 gap-8 mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Service Tabs */}
          <div className="space-y-4">
            {MAIN_SERVICES.map((service, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeService === index
                    ? 'bg-agro-green text-white shadow-lg'
                    : 'bg-white hover:bg-agro-green-light text-gray-800'
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activeService === index ? 'bg-white/20' : 'bg-agro-green/10'
                  }`}>
                    <service.icon className={`w-6 h-6 ${activeService === index ? 'text-white' : 'text-agro-green'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className={`text-sm ${activeService === index ? 'text-white/90' : 'text-gray-600'}`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Service Image & Details */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={MAIN_SERVICES[activeService].image}
                alt={MAIN_SERVICES[activeService].title}
                className="w-full h-80 object-cover transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-white text-xl font-semibold mb-3">
                  {MAIN_SERVICES[activeService].title} Features
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {MAIN_SERVICES[activeService].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-white/90 text-sm">
                      <div className="w-1.5 h-1.5 bg-agro-gold rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className={`grid md:grid-cols-3 gap-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {ADDITIONAL_SERVICES.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-agro-green/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-agro-green transition-colors">
                <service.icon className="w-7 h-7 text-agro-green group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href={getWhatsAppLink('Hello! I would like to get a quote for your services.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-agro-green text-white hover:bg-agro-green-dark group"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
