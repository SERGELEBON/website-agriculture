import { ArrowRight, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/common/SectionHeader';
import { useScrollVisibility } from '@/hooks/useScrollVisibility';
import { getWhatsAppLink } from '@/lib/emailService';

const PRODUCTS = [
  {
    name: 'Cocoa Beans',
    description: 'Premium quality cocoa beans sourced directly from Ghana and Ivory Coast farms.',
    image: '/products-range.jpg',
    origin: 'Ghana & Ivory Coast',
    certification: 'UTZ, Rainforest Alliance',
  },
  {
    name: 'Palm Oil',
    description: 'Sustainably produced palm oil meeting international quality standards.',
    image: '/commodities-export.jpg',
    origin: 'Nigeria & Ghana',
    certification: 'RSPO Certified',
  },
  {
    name: 'Corn & Grains',
    description: 'High-quality corn and grain products for food and feed applications.',
    image: '/farmers-community.jpg',
    origin: 'Nigeria & Burkina Faso',
    certification: 'Organic Available',
  },
  {
    name: 'Rice',
    description: 'Premium long-grain rice varieties cultivated in optimal conditions.',
    image: '/sustainability.jpg',
    origin: 'Senegal & Mali',
    certification: 'Quality Assured',
  },
] as const;

export default function Products() {
  const [ref, isVisible] = useScrollVisibility<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="section-padding bg-gray-50 overflow-hidden"
    >
      <div className="container-custom">
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-2xl">
            <SectionHeader
              label="Our Products"
              title={<>Explore Our <span className="text-agro-green">Product Range</span></>}
              description="From farm to market, we deliver quality agricultural commodities that meet international standards and exceed customer expectations."
              centered={false}
            />
          </div>
          <Button
            size="lg"
            className="bg-agro-green text-white hover:bg-agro-green-dark group w-fit"
          >
            View All Products
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-block bg-agro-gold text-white text-xs px-2 py-1 rounded">
                    {product.certification}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-xs text-agro-green font-medium mb-1">{product.origin}</p>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h4>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <a
                  href={getWhatsAppLink(`Hello! I am interested in ${product.name}. Can you provide more information?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-agro-green hover:text-agro-green-dark text-sm font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className={`mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-agro-green/10 rounded-xl flex items-center justify-center">
                <ShoppingCart className="w-8 h-8 text-agro-green" />
              </div>
              <div>
                <h4 className="text-gray-900 text-xl font-semibold mb-1">Looking for Custom Orders?</h4>
                <p className="text-gray-600">We can source and supply specific agricultural commodities to meet your needs.</p>
              </div>
            </div>
            <a
              href={getWhatsAppLink('Hello! I would like to request a quote for custom agricultural commodities.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-agro-green text-white hover:bg-agro-green-dark"
              >
                Request a Quote
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
