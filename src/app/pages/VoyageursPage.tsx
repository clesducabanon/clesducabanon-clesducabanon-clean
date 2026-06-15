import { EspaceVoyageurs } from '../components/EspaceVoyageurs';
import { SEOHead } from '../components/SEOHead';

export function VoyageursPage() {
  return (
    <>
      <SEOHead
        title="Location Villa Var | Sanary Hyères Toulon Six-Fours | Villas Premium"
        description="Louez une villa ou un appartement de standing sur la Côte Varoise. Sanary-sur-Mer, Six-Fours-les-Plages, Toulon, Le Pradet, Carqueiranne, Hyères. Services premium, conciergerie 24/7."
        keywords="location villa Sanary, location villa Hyères, location villa Toulon, location vacances Var, villa bord de mer Var, appartement standing Sanary, location Airbnb Var, villa vacances Six-Fours"
        canonicalUrl="https://www.clesducabanon.fr/voyageurs"
      />
      <EspaceVoyageurs />
    </>
  );
}