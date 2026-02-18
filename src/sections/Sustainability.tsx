import { ArrowRight, Leaf, Recycle, Sun, Droplets, Heart, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/common/SectionHeader';
import { useScrollVisibility } from '@/hooks/useScrollVisibility';

const SUSTAINABILITY_PILLARS = [
  {
    icon: Leaf,
    title: 'Sustainable Farming',
    description: 'Promoting organic farming practices and reducing chemical usage across our partner farms.',
    stat: '5,000+',
    statLabel: 'Farmers Trained',
  },
  {
    icon: Recycle,
    title: 'Waste Reduction',
    description: 'Implementing circular economy principles to minimize agricultural waste.',
    stat: '40%',
    statLabel: 'Waste Reduced',
  },
  {
    icon: Sun,
    title: 'Renewable Energy',
    description: 'Investing in solar-powered irrigation and processing facilities.',
    stat: '60%',
    statLabel: 'Solar Powered',
  },
  {
    icon: Droplets,
    title: 'Water Conservation',
    description: 'Efficient water management systems for sustainable irrigation.',
    stat: '30%',
    statLabel: 'Water Saved',
  },
] as const;

const INITIATIVES = [
  'Farmer Education Programs',
  'Climate-Smart Agriculture',
  'Biodiversity Protection',
  'Carbon Footprint Reduction',
  'Community Development',
  'Fair Trade Practices',
] as const;

export default function Sustainability() {
  const [ref, isVisible] = useScrollVisibility<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="sustainability"
      ref={ref}
      className="section-padding bg-white overflow-hidden"
    >
      <div className="container-custom">
        {/* Header */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionHeader
            label="Sustainability"
            title={<>Caring for the <span className="text-agro-green">Communities</span> We Work With</>}
            description="Sustainability is key to our everyday decision making as a business. We share a sense of purpose that motivates our actions and supports our commitment to sustainable practices across West Africa."
          />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left - Image */}
          <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <img
                src="/sustainability.jpg"
                alt="Sustainable Agriculture"
                className="w-full rounded-2xl shadow-xl"
                loading="lazy"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-agro-green rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Our Commitment</p>
                    <p className="text-sm text-gray-600">
                      Building a sustainable future for West African agriculture
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`space-y-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Sustainability is at the Heart of Everything We Do
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We believe that sustainable agriculture is the foundation of a prosperous future. 
              Our dedicated sustainability team works closely with farmers and communities to 
              implement practices that protect the environment while improving livelihoods.
            </p>

            {/* Initiatives List */}
            <div className="grid sm:grid-cols-2 gap-3">
              {INITIATIVES.map((initiative, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="w-6 h-6 bg-agro-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-3 h-3 text-agro-green" />
                  </div>
                  <span className="text-gray-700 text-sm">{initiative}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button
                size="lg"
                className="bg-agro-green text-white hover:bg-agro-green-dark group"
              >
                Read More About Our Impact
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Sustainability Pillars */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {SUSTAINABILITY_PILLARS.map((pillar, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:bg-agro-green hover:text-white transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-agro-green/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                <pillar.icon className="w-6 h-6 text-agro-green group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-white">{pillar.title}</h4>
              <p className="text-gray-600 text-sm mb-4 group-hover:text-white/90">{pillar.description}</p>
              <div className="pt-4 border-t border-gray-200 group-hover:border-white/20">
                <p className="text-2xl font-bold text-agro-green group-hover:text-white">{pillar.stat}</p>
                <p className="text-xs text-gray-500 group-hover:text-white/70">{pillar.statLabel}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Global Impact Banner */}
        <div className={`mt-16 bg-agro-green rounded-2xl p-8 md:p-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-white text-xl font-semibold mb-1">Global Impact, Local Action</h4>
                <p className="text-white/80">Contributing to the UN Sustainable Development Goals</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-agro-green"
            >
              View Our Sustainability Report
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
