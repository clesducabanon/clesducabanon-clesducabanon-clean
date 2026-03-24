import { Contact } from '../components/Contact';
import { SEOHead } from '../components/SEOHead';

export function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact | Les Clés du Cabanon - Conciergerie Sanary Hyères Var"
        description="Contactez notre conciergerie haut de gamme pour la gestion de votre villa ou appartement entre Sanary-sur-Mer et Hyères. Estimation gratuite sous 24h. Tél, Email, Formulaire."
        keywords="contact conciergerie Sanary, contact conciergerie Hyères, estimation gratuite villa Var, devis gestion Airbnb, contact gestion locative Var"
        canonicalUrl="https://www.clesducabanon.fr/contact"
      />
      <div className="pt-20">
        <Contact />
      </div>
    </>
  );
}