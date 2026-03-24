import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  url?: string;
  onClick?: () => void;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const handleHomeClick = () => {
    if (items[0]?.onClick) {
      items[0].onClick();
    }
  };

  return (
    <nav aria-label="Fil d'Ariane" className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          <li>
            <button
              onClick={handleHomeClick}
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
              aria-label="Accueil"
            >
              <Home className="w-4 h-4" />
              <span>Accueil</span>
            </button>
          </li>
          
          {items.slice(1).map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-gray-400" />
              {item.onClick ? (
                <button
                  onClick={item.onClick}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {item.name}
                </button>
              ) : (
                <span className="text-gray-700 font-medium">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}