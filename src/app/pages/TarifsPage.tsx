import { Tarifs } from '../components/Tarifs';
import { SEOHead } from '../components/SEOHead';

export function TarifsPage() {
  return (
    <>
      <SEOHead
        title="Tarifs Conciergerie Airbnb Var | 20% ou 180€/mois | Sanary Hyères"
        description="Tarifs transparents : Formule Premium 20% TTC (Sanary à Hyères), Gestion Digitale 180€/mois (France entière), ou Gestion seule. Estimation gratuite sans engagement."
        keywords="tarif conciergerie Var, prix gestion Airbnb, commission conciergerie 20%, gestion Airbnb 180 euros, tarif gestion villa Sanary, prix conciergerie Hyères"
        canonicalUrl="https://www.clesducabanon.fr/tarifs"
      />
      <div className="pt-20">
        <Tarifs />
      </div>
    </>
  );
}