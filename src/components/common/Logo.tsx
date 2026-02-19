interface LogoProps {
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizes = {
  sm: { img: 'h-10 w-auto', text: 'text-sm', subtext: 'text-[10px]' },
  md: { img: 'h-14 w-auto', text: 'text-lg', subtext: 'text-xs' },
  lg: { img: 'h-18 w-auto', text: 'text-xl', subtext: 'text-sm' },
};

export default function Logo({ showText = true, size = 'md', className = '' }: LogoProps) {
  const sizeClasses = sizes[size];

  return (
    <a href="#" className={`flex items-center gap-3 group ${className}`}>
      <img
        src="/logoagr.png"
        alt="West Africa Agricultural Commodities Ltd. Logo"
        className={`${sizeClasses.img} object-contain`}
      />
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
