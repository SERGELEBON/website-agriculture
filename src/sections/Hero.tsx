import { useEffect, useState } from 'react';
import { ArrowRight, Play, TrendingUp, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';
import { getWhatsAppLink } from '@/lib/emailService';

const STATS = [
  { icon: Globe, value: '15+', label: 'Countries Served' },
  { icon: Users, value: '5,000+', label: 'Farmers Partnered' },
  { icon: TrendingUp, value: '10+', label: 'Years Experience' },
] as const;



export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="West African Agriculture"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              <TrendingUp className="w-4 h-4 text-agro-gold" />
              <span>Leading Agricultural Commodities Company in West Africa</span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                We Are Re-imagining{' '}
                <span className="text-agro-gold">West African Agriculture</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
                Whether it's working with cocoa farmers in Ghana, growing corn in Nigeria, or 
                developing innovative agricultural solutions, we help our partners meet 
                increasing demands for sustainable sourcing and quality commodities.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {STATS.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-agro-green/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-agro-gold" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-white/70">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-agro-green text-white hover:bg-agro-green-dark group"
                onClick={() => scrollToSection('#services')}
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-agro-green-dark"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Right Content - West Africa Map */}
          <div className={`hidden lg:block transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <img
                src="/west-africa-map.jpg"
                alt="West Africa Agricultural Map"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                loading="eager"
              />
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-agro-green rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Export Growth</p>
                    <p className="text-xs text-gray-500">+25% this year</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-agro-gold rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">New Partners</p>
                    <p className="text-xs text-gray-500">+150 farmers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
