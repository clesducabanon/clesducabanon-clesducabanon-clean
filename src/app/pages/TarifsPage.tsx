import { Tarifs } from '../components/Tarifs';
import { SEOHead } from '../components/SEOHead';

export function TarifsPage() {
  return (
    <>
      <SEOHead
        title="Tarifs Conciergerie Airbnb Var | Villa 20% TTC · Appartement 25% TTC | Sanary Hyères"
        description="Tarifs transparents : Formule Premium villa 20% TTC, appartement 25% TTC (Sanary à Hyères). Gestion complète clé en main. Estimation gratuite sans engagement."
        keywords="tarif conciergerie Var, prix gestion Airbnb villa, commission conciergerie 20%, tarif gestion villa Sanary, prix conciergerie Hyères, conciergerie appartement 25%"
        canonicalUrl="https://www.clesducabanon.fr/tarifs"
      />
      <div className="pt-20">
        <Tarifs />
      </div>
    </>
  );
}