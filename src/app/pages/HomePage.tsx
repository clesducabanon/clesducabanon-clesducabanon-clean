import { Hero } from '../components/Hero';
import { PlateformesPartenaires } from '../components/PlateformesPartenaires';
import { CommentCaMarche } from '../components/CommentCaMarche';
import { Services } from '../components/Services';
import { NotreHistoire } from '../components/NotreHistoire';
import { Partenaires } from '../components/Partenaires';
import { PagesLocalesCTA } from '../components/PagesLocalesCTA';
import { ZoneGeographique } from '../components/ZoneGeographique';
import { Tarifs } from '../components/Tarifs';
import { FAQ } from '../components/FAQ';
import { Temoignages } from '../components/Temoignages';
import { Contact } from '../components/Contact';
import { SEOHead, getLocalBusinessSchema } from '../components/SEOHead';

export function HomePage() {
  return (
    <>
      <SEOHead
        title="Conciergerie Airbnb Var | Villa 20% TTC · Appartement 25% TTC | Sanary à Hyères"
        description="Conciergerie haut de gamme Var. Gestion villa Airbnb 20% TTC et appartement 25% TTC, Sanary à Hyères. Revenus +35%. ⭐ 4.9/5"
        keywords="conciergerie Sanary-sur-Mer, conciergerie Hyères, conciergerie Toulon, conciergerie Six-Fours, gestion villa Airbnb Var, location saisonnière Sanary, gestion Airbnb Hyères, villa bord de mer Var, conciergerie Carqueiranne, gestion locative Var, Airbnb Sanary, Airbnb Hyères, conciergerie Le Pradet"
        canonicalUrl="https://www.clesducabanon.fr"
        structuredData={getLocalBusinessSchema()}
      />
      <Hero />
      <PlateformesPartenaires />
      <CommentCaMarche />
      <NotreHistoire />
      <Services />
      <Partenaires />
      <PagesLocalesCTA />
      <ZoneGeographique />
      <Tarifs />
      <FAQ />
      <Temoignages />
      <Contact />
    </>
  );
}