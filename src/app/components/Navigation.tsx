import { useState } from 'react';
import { Menu, X, Home, Users, Building2, Euro, Lightbulb, TrendingUp, ChevronDown, MapPin, CheckCircle, Sparkles, Phone } from 'lucide-react';

import { EstimationModal } from './EstimationModal';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [isEstimationModalOpen, setIsEstimationModalOpen] = useState(false);
  const currentPath = window.location.pathname;

  const isActive = (path: string) => {
    if (path === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(path);
  };

  const scrollToSection = (sectionId: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (currentPath === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (dropdown: string) => {
    setMobileDropdown(mobileDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50" role="navigation" aria-label="Navigation principale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <img 
                src="/logo.png"
                alt="Clés du Cabanon" 
                className="h-12 w-auto mix-blend-multiply"
              />
              <div>
                <div className="font-bold text-base leading-tight text-gray-900">CLÉS DU CABANON</div>
                <p className="text-xs text-gray-600 leading-tight">conciergerie</p>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              <a 
                href="/" 
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                  isActive('/') && currentPath === '/' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <Home className="w-4 h-4" />
                Accueil
              </a>
              
              <a 
                href="/#comment-ca-marche"
                onClick={(e) => scrollToSection('comment-ca-marche', e)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-gray-700 hover:text-blue-600"
              >
                <Lightbulb className="w-4 h-4" />
                Comment ça marche
              </a>

              {/* Dropdown: Nos Formules */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('formules')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-gray-700 hover:text-blue-600"
                >
                  <Euro className="w-4 h-4" />
                  Nos Formules
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'formules' ? 'rotate-180' : ''}`} />
                </button>
                
                {activeDropdown === 'formules' && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-gray-200 py-2 animate-fade-in">
                    <a 
                      href="/#tarifs"
                      onClick={(e) => scrollToSection('tarifs', e)}
                      className="block px-4 py-3 hover:bg-blue-50 transition-colors"
                    >
                      <div className="font-semibold text-gray-900 mb-1">Vue d'ensemble</div>
                      <div className="text-sm text-gray-600">Découvrir toutes nos formules</div>
                    </a>
                    <div className="border-t border-gray-100 my-1"></div>
                    <a 
                      href="/formule-premium-20"
                      className="block px-4 py-3 hover:bg-blue-50 transition-colors"
                    >
                      <div className="font-semibold text-blue-600 mb-1 flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Formule Premium 20%
                      </div>
                      <div className="text-sm text-gray-600">Gestion complète Sanary-Hyères</div>
                    </a>
                    <a 
                      href="/formule-digitale-180"
                      className="block px-4 py-3 hover:bg-blue-50 transition-colors"
                    >
                      <div className="font-semibold text-purple-600 mb-1 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Formule Digitale 180€
                      </div>
                      <div className="text-sm text-gray-600">Gestion digitale France & International</div>
                    </a>
                  </div>
                )}
              </div>

              {/* Dropdown: Zones d'intervention */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('zones')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-gray-700 hover:text-blue-600"
                >
                  <MapPin className="w-4 h-4" />
                  Zones
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'zones' ? 'rotate-180' : ''}`} />
                </button>
                
                {activeDropdown === 'zones' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 animate-fade-in">
                    <a 
                      href="/conciergerie-sanary-sur-mer"
                      className="block px-4 py-2.5 hover:bg-blue-50 transition-colors text-gray-700 hover:text-blue-600"
                    >
                      Conciergerie Sanary-sur-Mer
                    </a>
                    <a 
                      href="/conciergerie-six-fours"
                      className="block px-4 py-2.5 hover:bg-blue-50 transition-colors text-gray-700 hover:text-blue-600"
                    >
                      Conciergerie Six-Fours-les-Plages
                    </a>
                    <a 
                      href="/conciergerie-toulon"
                      className="block px-4 py-2.5 hover:bg-blue-50 transition-colors text-gray-700 hover:text-blue-600"
                    >
                      Conciergerie Toulon
                    </a>
                    <a 
                      href="/conciergerie-hyeres"
                      className="block px-4 py-2.5 hover:bg-blue-50 transition-colors text-gray-700 hover:text-blue-600"
                    >
                      Conciergerie Hyères / Giens
                    </a>
                    <div className="border-t border-gray-100 my-1"></div>
                    <a 
                      href="/villa-bord-de-mer"
                      className="block px-4 py-2.5 hover:bg-blue-50 transition-colors text-gray-700 hover:text-blue-600 font-medium"
                    >
                      Villa bord de mer
                    </a>
                  </div>
                )}
              </div>
              
              <a 
                href="/services" 
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                  isActive('/services') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <Building2 className="w-4 h-4" />
                Services
              </a>
              
              <a 
                href="/proprietaire" 
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                  isActive('/proprietaire') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <Users className="w-4 h-4" />
                Propriétaires
              </a>
              
              {/* Bouton Appeler */}
              <a
                href="tel:+33625401480"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-2.5 rounded-full hover:shadow-xl transition-all font-bold flex items-center gap-2 hover:scale-105 ml-2"
              >
                <Phone className="w-4 h-4" />
                Appeler
              </a>
              
              <button
                onClick={() => setIsEstimationModalOpen(true)}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-2.5 rounded-full hover:shadow-xl transition-all font-bold flex items-center gap-2 hover:scale-105"
              >
                <TrendingUp className="w-4 h-4" />
                Estimation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="px-4 py-4 space-y-2">
              {/* CTA Appeler en premier sur mobile */}
              <a
                href="tel:+33625401480"
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-full hover:shadow-xl transition-all font-bold mb-2"
              >
                <Phone className="w-5 h-5" />
                📞 Appeler maintenant
              </a>
              
              {/* CTA Estimation */}
              <button
                onClick={() => {
                  setIsEstimationModalOpen(true);
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-4 rounded-full hover:shadow-xl transition-all font-bold mb-3"
              >
                <TrendingUp className="w-5 h-5" />
                Estimation
              </button>
              
              <a
                href="/"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  currentPath === '/' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Home className="w-5 h-5" />
                Accueil
              </a>
              
              <a
                href="/#comment-ca-marche"
                onClick={(e) => { scrollToSection('comment-ca-marche', e); setIsOpen(false); }}
                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-700 hover:bg-gray-50"
              >
                <Lightbulb className="w-5 h-5" />
                Comment ça marche
              </a>

              {/* Mobile Dropdown: Nos Formules */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('formules')}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors text-gray-700 hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <Euro className="w-5 h-5" />
                    Nos Formules
                  </div>
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileDropdown === 'formules' ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdown === 'formules' && (
                  <div className="ml-8 mt-1 space-y-1">
                    <a
                      href="/#tarifs"
                      onClick={(e) => { scrollToSection('tarifs', e); setIsOpen(false); }}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                    >
                      Vue d'ensemble
                    </a>
                    <a
                      href="/formule-premium-20"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 rounded"
                    >
                      Formule Premium 20%
                    </a>
                    <a
                      href="/formule-digitale-180"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-sm text-purple-600 font-medium hover:bg-purple-50 rounded"
                    >
                      Formule Digitale 180€
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile Dropdown: Zones */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('zones')}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors text-gray-700 hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5" />
                    Zones d'intervention
                  </div>
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileDropdown === 'zones' ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdown === 'zones' && (
                  <div className="ml-8 mt-1 space-y-1">
                    <a
                      href="/conciergerie-sanary-sur-mer"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                    >
                      Sanary-sur-Mer
                    </a>
                    <a
                      href="/conciergerie-six-fours"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                    >
                      Six-Fours-les-Plages
                    </a>
                    <a
                      href="/conciergerie-toulon"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                    >
                      Toulon
                    </a>
                    <a
                      href="/conciergerie-hyeres"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                    >
                      Hyères / Giens
                    </a>
                    <a
                      href="/villa-bord-de-mer"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 font-medium hover:text-blue-600"
                    >
                      Villa bord de mer
                    </a>
                  </div>
                )}
              </div>
              
              <a
                href="/services"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive('/services') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Building2 className="w-5 h-5" />
                Services
              </a>
              
              <a
                href="/proprietaire"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive('/proprietaire') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Users className="w-5 h-5" />
                Propriétaires
              </a>
            </div>
          </div>
        )}
      </nav>
      <EstimationModal isOpen={isEstimationModalOpen} onClose={() => setIsEstimationModalOpen(false)} />
    </>
  );
}