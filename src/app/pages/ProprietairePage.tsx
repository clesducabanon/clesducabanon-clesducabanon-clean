import { EspaceProprietaire } from '../components/EspaceProprietaire';
import { SEOHead } from '../components/SEOHead';

export function ProprietairePage() {
  return (
    <>
      <SEOHead
        title="Propriétaire Villa Airbnb de Sanary à Hyères | Gestion 20% ou 180€/mois"
        description="Propriétaire de villa entre Sanary-sur-Mer et Hyères (Six-Fours, Toulon, Le Pradet, Carqueiranne) ? Comparez nos 3 formules : Gestion seule, Premium 20% TTC (Côte Varoise), Digitale 180€/mois (France). Revenus optimisés +35%. Estimation gratuite."
        keywords="propriétaire villa Sanary, propriétaire villa Hyères, gestion Airbnb propriétaire Var, commission conciergerie Var, tarif gestion Airbnb, revenus villa Sanary, propriétaire Airbnb Hyères, gestion locative propriétaire Var, propriétaire villa Toulon, propriétaire villa Six-Fours"
        canonicalUrl="https://www.clesducabanon.fr/proprietaire"
      />
      <EspaceProprietaire />
    </>
  );
}