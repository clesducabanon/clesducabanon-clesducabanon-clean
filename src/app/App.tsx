import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProprietairePage } from './pages/ProprietairePage';
import { VoyageursPage } from './pages/VoyageursPage';
import { ContactPage } from './pages/ContactPage';
import { ServicesPage } from './pages/ServicesPage';
import { TarifsPage } from './pages/TarifsPage';
import { ConciergerieSanaryPage } from './pages/ConciergerieSanaryPage';
import { ConciergerieSixFoursPage } from './pages/ConciergerieSixFoursPage';
import { ConciergerieToulonPage } from './pages/ConciergerieToulonPage';
import { ConciergerieHyeresPage } from './pages/ConciergerieHyeresPage';
import { VillaBordDeMerPage } from './pages/VillaBordDeMerPage';
import { BlogPage } from './pages/BlogPage';
import { GestionDigitaleVillesFrancePage } from './pages/blog/GestionDigitaleVillesFrancePage';
import { MentionsLegalesPage } from './pages/MentionsLegalesPage';
import { CGVPage } from './pages/CGVPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { FormulePremium20Page } from './pages/FormulePremium20Page';
import { FormuleDigitale180Page } from './pages/FormuleDigitale180Page';

// Initialiser EmailJS au démarrage de l'application
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '8Hd8vWA0ZQZAe9VTF';
emailjs.init(publicKey);
console.log('✅ EmailJS initialisé avec la clé publique');

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Simple client-side routing
  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  // Listen to browser back/forward buttons
  window.onpopstate = () => {
    setCurrentPath(window.location.pathname);
  };

  // Route matching
  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/proprietaire':
        return <ProprietairePage />;
      case '/voyageurs':
        return <VoyageursPage />;
      case '/contact':
        return <ContactPage />;
      case '/services':
        return <ServicesPage />;
      case '/tarifs':
        return <TarifsPage />;
      case '/conciergerie-sanary-sur-mer':
        return <ConciergerieSanaryPage />;
      case '/conciergerie-six-fours':
        return <ConciergerieSixFoursPage />;
      case '/conciergerie-toulon':
        return <ConciergerieToulonPage />;
      case '/conciergerie-hyeres':
        return <ConciergerieHyeresPage />;
      case '/villa-bord-de-mer':
        return <VillaBordDeMerPage />;
      case '/blog':
        return <BlogPage />;
      case '/blog/gestion-digitale-villes-france':
        return <GestionDigitaleVillesFrancePage />;
      case '/mentions-legales':
        return <MentionsLegalesPage />;
      case '/cgv':
        return <CGVPage />;
      case '/formule-premium-20':
        return <FormulePremium20Page />;
      case '/formule-digitale-180':
        return <FormuleDigitale180Page />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main id="main-content" role="main">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}