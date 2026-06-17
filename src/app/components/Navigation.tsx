import { useState } from 'react';
import { Menu, X, Home, Users, Building2, Euro, Lightbulb, TrendingUp, MapPin, Phone } from 'lucide-react';
import { EstimationModal } from './EstimationModal';

const logoImage = '/logo.png';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEstimationModalOpen, setIsEstimationModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/97 backdrop-blur-sm z-50 border-b border-[#C9A84C]/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="/" className="flex items-center gap-3">
              <img src={logoImage} alt="Clés du Cabanon" className="h-12 w-auto" />
              <div>
                <div className="font-bold text-base text-[#1a2744]">CLÉS DU CABANON</div>
                <p className="text-xs text-[#C9A84C] uppercase tracking-widest">Conciergerie</p>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-4">
              <a href="/" className="flex items-center gap-2 text-[#1a2744] hover:text-[#0AADA3]">
                <Home className="w-4 h-4" /> Accueil
              </a>
              <a href="/#comment-ca-marche" className="flex items-center gap-2 text-[#1a2744] hover:text-[#0AADA3]">
                <Lightbulb className="w-4 h-4" /> Comment ça marche
              </a>
              <a href="/#tarifs" className="flex items-center gap-2 text-[#1a2744] hover:text-[#0AADA3]">
                <Euro className="w-4 h-4" /> Nos Formules
              </a>
              <a href="/#zones" className="flex items-center gap-2 text-[#1a2744] hover:text-[#0AADA3]">
                <MapPin className="w-4 h-4" /> Zones
              </a>
              <a href="/services" className="flex items-center gap-2 text-[#1a2744] hover:text-[#0AADA3]">
                <Building2 className="w-4 h-4" /> Services
              </a>
              <a href="/proprietaire" className="flex items-center gap-2 text-[#1a2744] hover:text-[#0AADA3]">
                <Users className="w-4 h-4" /> Propriétaires
              </a>

              <a href="tel:+33625401480" className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#0AADA3] text-white font-semibold">
                <Phone className="w-4 h-4" /> Appeler
              </a>

              <button
                onClick={() => setIsEstimationModalOpen(true)}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#C9A84C] text-white font-semibold"
              >
                <TrendingUp className="w-4 h-4" /> Estimation gratuite
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-[#1a2744]"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-white border-t border-[#C9A84C]/20">
            <div className="px-4 py-4 space-y-3">
              <a href="tel:+33625401480" className="flex justify-center gap-2 px-6 py-4 rounded-full bg-[#0AADA3] text-white font-bold">
                <Phone className="w-5 h-5" /> Appeler maintenant
              </a>

              <button
                onClick={() => {
                  setIsEstimationModalOpen(true);
                  setIsOpen(false);
                }}
                className="w-full flex justify-center gap-2 px-6 py-4 rounded-full bg-[#C9A84C] text-white font-bold"
              >
                <TrendingUp className="w-5 h-5" /> Estimation gratuite
              </button>

              <a href="/" className="flex gap-3 px-4 py-3 text-[#1a2744]"><Home className="w-5 h-5" /> Accueil</a>
              <a href="/#comment-ca-marche" className="flex gap-3 px-4 py-3 text-[#1a2744]"><Lightbulb className="w-5 h-5" /> Comment ça marche</a>
              <a href="/#tarifs" className="flex gap-3 px-4 py-3 text-[#1a2744]"><Euro className="w-5 h-5" /> Nos Formules</a>
              <a href="/#zones" className="flex gap-3 px-4 py-3 text-[#1a2744]"><MapPin className="w-5 h-5" /> Zones d'intervention</a>
              <a href="/services" className="flex gap-3 px-4 py-3 text-[#1a2744]"><Building2 className="w-5 h-5" /> Services</a>
              <a href="/proprietaire" className="flex gap-3 px-4 py-3 text-[#1a2744]"><Users className="w-5 h-5" /> Propriétaires</a>
            </div>
          </div>
        )}
      </nav>

      <EstimationModal
        isOpen={isEstimationModalOpen}
        onClose={() => setIsEstimationModalOpen(false)}
      />
    </>
  );
}