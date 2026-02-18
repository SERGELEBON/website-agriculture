import { ArrowRight, CheckCircle, Award, Target, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollVisibility } from '@/hooks/useScrollVisibility';
import { scrollToSection } from '@/lib/utils';

const FEATURES = [
  'Import and Export of Agricultural Commodities',
  'Agricultural Investment Solutions',
  'Agricultural Finance Services',
  'Sustainable Farming Partnerships',
  'Quality Assurance & Certification',
  'Supply Chain Management',
] as const;

const TRUST_INDICATORS = [
  { icon: Award, label: 'Certified Quality' },
  { icon: Target, label: 'Market Leader' },
  { icon: Leaf, label: 'Sustainable Practices' },
] as const;

export default function About() {
  const [ref, isVisible] = useScrollVisibility<HTMLElement>({ threshold: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding bg-white overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <img
                src="/farmers-community.jpg"
                alt="West African Farming Community"
                className="w-full rounded-2xl shadow-xl"
                loading="lazy"
              />
              {/* Experience Badge */}
              <div className="absolute -bottom-8 -right-8 bg-agro-green text-white rounded-2xl p-6 shadow-xl">
                <p className="text-5xl font-bold">10+</p>
                <p className="text-sm opacity-90">Years of Excellence</p>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-agro-gold/20 rounded-full -z-10" />
              <div className="absolute -bottom-4 right-20 w-16 h-16 bg-agro-green/20 rounded-full -z-10" />
            </div>
          </div>

          {/* Right - Content */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 text-agro-green font-medium">
              <div className="w-8 h-0.5 bg-agro-green" />
              <span>About Our Company</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              We are a leading agricultural commodities company in{' '}
              <span className="text-agro-green">West Africa</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              West Africa Agricultural Commodities Ltd. is a premier agricultural enterprise 
              dedicated to transforming the agricultural landscape across West Africa. We supply 
              quality agricultural commodities to customers worldwide, ranging from multinational 
              organizations to small family-run businesses.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our mission is to bridge the gap between local farmers and global markets, ensuring 
              fair trade practices while maintaining the highest standards of quality and sustainability. 
              We work directly with over 5,000 farmers across the region, providing them with access 
              to better markets, financing, and agricultural expertise.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {FEATURES.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-agro-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <Button
                size="lg"
                className="bg-agro-green text-white hover:bg-agro-green-dark group"
                onClick={() => scrollToSection('#services')}
              >
                Discover Our Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-8 border-t">
              {TRUST_INDICATORS.map((indicator, index) => (
                <div key={index} className="flex items-center gap-2">
                  <indicator.icon className="w-5 h-5 text-agro-gold" />
                  <span className="text-sm text-gray-600">{indicator.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
