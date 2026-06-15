import { EspaceProprietaire } from '../components/EspaceProprietaire';
import { SEOHead } from '../components/SEOHead';

export function ProprietairePage() {
  return (
    <>
      <SEOHead
        title="Propriétaire Villa ou Appartement Airbnb | Sanary à Hyères | Villa 20% · Appart 25%"
        description="Propriétaire de villa ou appartement entre Sanary-sur-Mer et Hyères ? Formule Premium : Villa 20% TTC · Appartement 25% TTC. Gestion complète clé en main. Revenus +35%. Estimation gratuite."
        keywords="propriétaire villa Sanary, propriétaire villa Hyères, gestion Airbnb propriétaire Var, commission conciergerie Var, tarif gestion Airbnb, revenus villa Sanary, propriétaire Airbnb Hyères, gestion locative propriétaire Var, propriétaire villa Toulon, propriétaire villa Six-Fours"
        canonicalUrl="https://www.clesducabanon.fr/proprietaire"
      />
      <EspaceProprietaire />
    </>
  );
}