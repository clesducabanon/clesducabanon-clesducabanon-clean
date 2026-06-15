import { useState } from 'react';
import { Menu, X, Home, Users, Building2, Euro, Lightbulb, TrendingUp, ChevronDown, MapPin, Sparkles, Phone } from 'lucide-react';
import logoImage from 'logo.png';
import { EstimationModal } from './EstimationModal';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [isEstimationModalOpen, setIsEstimationModalOpen] = useState(false);
  const currentPath = window.location.pathname;

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
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

  const handleMouseEnter = (dropdown: string) => setActiveDropdown(dropdown);
  const handleMouseLeave = () => setActiveDropdown(null);
  const toggleMobileDropdown = (dropdown: string) => {
    setMobileDropdown(mobileDropdown === dropdown ? null : dropdown);
  };

  const navLinkClass = (path?: string) =>
    `flex items-center gap-2 px-3 py-2 rounded-lg transition-all text-sm font-medium ${
      path && isActive(path)
        ? 'text-[#0AADA3] bg-[#0AADA3]/8'
        : 'text-[#1a2744] hover:text-[#0AADA3]'
    }`;

  return (
    <>
      <nav
        className="fixed top-0 w-full bg-white/97 backdrop-blur-sm z-50"
        style={{ borderBottom: '1px solid rgba(201,168,76,0.2)', boxShadow: '0 2px 20px rgba(26,39,68,0.06)' }}
        role="navigation"
        aria-label="Navigation principale"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <img
                src={logoImage}
                alt="Clés du Cabanon"
                className="h-12 w-auto mix-blend-multiply"
              />
              <div>
                <div className="font-bold text-base leading-tight text-[#1a2744] tracking-wide">CLÉS DU CABANON</div>
                <p className="text-xs text-[#C9A84C] leading-tight font-medium tracking-widest uppercase">conciergerie</p>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              <a href="/" className={navLinkClass('/')}>
                <Home className="w-4 h-4" />
                Accueil
              </a>

              <a
                href="/#comment-ca-marche"
                onClick={(e) => scrollToSection('comment-ca-marche', e)}
                className={navLinkClass()}
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
                <button className={navLinkClass()}>
                  <Euro className="w-4 h-4" />
                  Nos Formules
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'formules' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'formules' && (
                  <div
                    className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl py-2 animate-fade-in"
                    style={{ boxShadow: '0 8px 30px rgba(26,39,68,0.12)', border: '1px solid rgba(201,168,76,0.2)' }}
                  >
                    <a
                      href="/#tarifs"
                      onClick={(e) => scrollToSection('tarifs', e)}
                      className="block px-4 py-3 hover:bg-[#0AADA3]/5 transition-colors"
                    >
                      <div className="font-semibold text-[#1a2744] mb-1">Vue d'ensemble</div>
                      <div className="text-sm text-gray-500">Découvrir notre formule</div>
                    </a>
                    <div className="border-t mx-4" style={{ borderColor: 'rgba(201,168,76,0.2)' }}></div>
                    <a
                      href="/formule-premium-20"
                      className="block px-4 py-3 hover:bg-[#0AADA3]/5 transition-colors"
                    >
                      <div className="font-semibold text-[#0AADA3] mb-1 flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Formule Premium
                      </div>
                      <div className="text-sm text-gray-500">Villa 20% TTC • Appartement 25% TTC</div>
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
                <button className={navLinkClass()}>
                  <MapPin className="w-4 h-4" />
                  Zones
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'zones' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'zones' && (
                  <div
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl py-2 animate-fade-in"
                    style={{ boxShadow: '0 8px 30px rgba(26,39,68,0.12)', border: '1px solid rgba(201,168,76,0.2)' }}
                  >
                    {[
                      { href: '/conciergerie-sanary-sur-mer', label: 'Conciergerie Sanary-sur-Mer' },
                      { href: '/conciergerie-six-fours', label: 'Conciergerie Six-Fours-les-Plages' },
                      { href: '/conciergerie-toulon', label: 'Conciergerie Toulon' },
                      { href: '/conciergerie-hyeres', label: 'Conciergerie Hyères / Giens' },
                    ].map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-[#1a2744] hover:text-[#0AADA3] hover:bg-[#0AADA3]/5 transition-colors text-sm"
                      >
                        {item.label}
                      </a>
                    ))}
                    <div className="border-t mx-4 my-1" style={{ borderColor: 'rgba(201,168,76,0.2)' }}></div>
                    <a
                      href="/villa-bord-de-mer"
                      className="block px-4 py-2.5 text-[#1a2744] hover:text-[#0AADA3] hover:bg-[#0AADA3]/5 transition-colors text-sm font-medium"
                    >
                      Villa bord de mer
                    </a>
                  </div>
                )}
              </div>

              <a href="/services" className={navLinkClass('/services')}>
                <Building2 className="w-4 h-4" />
                Services
              </a>

              <a href="/proprietaire" className={navLinkClass('/proprietaire')}>
                <Users className="w-4 h-4" />
                Propriétaires
              </a>

              {/* CTA Appeler */}
              <a
                href="tel:+33625401480"
                className="ml-2 flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #0AADA3, #087A72)', color: 'white', boxShadow: '0 4px 14px rgba(10,173,163,0.3)' }}
              >
                <Phone className="w-4 h-4" />
                Appeler
              </a>

              {/* CTA Estimation */}
              <button
                onClick={() => setIsEstimationModalOpen(true)}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #A07D2A)', color: 'white', boxShadow: '0 4px 14px rgba(201,168,76,0.35)' }}
              >
                <TrendingUp className="w-4 h-4" />
                Estimation gratuite
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-[#1a2744] hover:bg-[#0AADA3]/10 transition-colors"
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white max-h-[calc(100vh-5rem)] overflow-y-auto" style={{ borderTop: '1px solid rgba(201,168,76,0.2)' }}>
            <div className="px-4 py-4 space-y-2">
              <a
                href="tel:+33625401480"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-full font-bold mb-2 text-white"
                style={{ background: 'linear-gradient(135deg, #0AADA3, #087A72)' }}
              >
                <Phone className="w-5 h-5" />
                Appeler maintenant
              </a>

              <button
                onClick={() => { setIsEstimationModalOpen(true); setIsOpen(false); }}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-full font-bold mb-3 text-white"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #A07D2A)' }}
              >
                <TrendingUp className="w-5 h-5" />
                Estimation gratuite
              </button>

              {[
                { href: '/', label: 'Accueil', icon: <Home className="w-5 h-5" /> },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#1a2744] hover:bg-[#0AADA3]/8 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}

              <a
                href="/#comment-ca-marche"
                onClick={(e) => { scrollToSection('comment-ca-marche', e); setIsOpen(false); }}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#1a2744] hover:bg-[#0AADA3]/8 transition-colors"
              >
                <Lightbulb className="w-5 h-5" />
                Comment ça marche
              </a>

              {/* Mobile Dropdown: Nos Formules */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('formules')}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-[#1a2744] hover:bg-[#0AADA3]/8 transition-colors"
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
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-[#0AADA3]"
                    >
                      Vue d'ensemble
                    </a>
                    <a
                      href="/formule-premium-20"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-sm font-medium hover:bg-[#0AADA3]/5 rounded"
                      style={{ color: '#0AADA3' }}
                    >
                      Formule Premium — Villa 20% / Appart 25%
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile Dropdown: Zones */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('zones')}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-[#1a2744] hover:bg-[#0AADA3]/8 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5" />
                    Zones d'intervention
                  </div>
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileDropdown === 'zones' ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdown === 'zones' && (
                  <div className="ml-8 mt-1 space-y-1">
                    {[
                      { href: '/conciergerie-sanary-sur-mer', label: 'Sanary-sur-Mer' },
                      { href: '/conciergerie-six-fours', label: 'Six-Fours-les-Plages' },
                      { href: '/conciergerie-toulon', label: 'Toulon' },
                      { href: '/conciergerie-hyeres', label: 'Hyères / Giens' },
                      { href: '/villa-bord-de-mer', label: 'Villa bord de mer' },
                    ].map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-[#1a2744] hover:text-[#0AADA3]"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="/services"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#1a2744] hover:bg-[#0AADA3]/8 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Building2 className="w-5 h-5" />
                Services
              </a>

              <a
                href="/proprietaire"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#1a2744] hover:bg-[#0AADA3]/8 transition-colors"
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
