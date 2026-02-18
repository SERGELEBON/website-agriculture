interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  centered = true,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} max-w-3xl ${centered ? 'mx-auto' : ''} mb-12 ${className}`}>
      <div className={`inline-flex items-center gap-2 text-agro-green font-medium mb-4 ${centered ? '' : ''}`}>
        <div className="w-8 h-0.5 bg-agro-green" />
        <span>{label}</span>
        {centered && <div className="w-8 h-0.5 bg-agro-green" />}
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
