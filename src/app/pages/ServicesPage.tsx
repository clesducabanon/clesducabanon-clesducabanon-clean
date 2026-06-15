import { Services } from '../components/Services';
import { SEOHead } from '../components/SEOHead';

export function ServicesPage() {
  return (
    <>
      <SEOHead
        title="Services Conciergerie Airbnb | Villa 20% TTC · Appartement 25% TTC | Sanary Hyères"
        description="Formule Premium clé en main : Villa 20% TTC, Appartement 25% TTC. Gestion complète terrain incluse : diffusion, tarification dynamique, remise clés, ménage, intervention 7j/7. De Sanary à Hyères."
        keywords="services conciergerie Var, gestion villa Airbnb 20%, gestion appartement 25%, conciergerie Sanary, conciergerie Hyères, services location saisonnière Var"
        canonicalUrl="https://www.clesducabanon.fr/services"
      />
      <div className="pt-20">
        <Services />
      </div>
    </>
  );
}
