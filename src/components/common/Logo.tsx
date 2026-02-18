interface LogoProps {
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizes = {
  sm: { container: 'w-8 h-8', text: 'text-sm', subtext: 'text-[10px]' },
  md: { container: 'w-12 h-12', text: 'text-lg', subtext: 'text-xs' },
  lg: { container: 'w-16 h-16', text: 'text-xl', subtext: 'text-sm' },
};

export default function Logo({ showText = true, size = 'md', className = '' }: LogoProps) {
  const sizeClasses = sizes[size];

  return (
    <a href="#" className={`flex items-center gap-3 group ${className}`}>
      <div className={`relative ${sizeClasses.container} flex items-center justify-center`}>
        <svg viewBox="0 0 60 60" className="w-full h-full">
          {/* W Logo with agricultural design */}
          <path
            d="M10 15 L20 45 L30 25 L40 45 L50 15"
            fill="none"
            stroke="hsl(142 70% 35%)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Leaf elements */}
          <ellipse cx="15" cy="20" rx="8" ry="4" fill="hsl(142 70% 35%)" transform="rotate(-30 15 20)" />
          <ellipse cx="45" cy="20" rx="8" ry="4" fill="hsl(142 70% 35%)" transform="rotate(30 45 20)" />
        </svg>
      </div>
      {showText && (
        <div className="hidden sm:block">
          <h1 className={`font-bold leading-tight text-agro-green ${sizeClasses.text}`}>
            WEST AFRICA
          </h1>
          <span className={`block font-medium text-gray-600 ${sizeClasses.subtext}`}>
            AGRICULTURAL COMMODITIES LTD.
          </span>
        </div>
      )}
    </a>
  );
}
