import { motion } from 'motion/react';
import { Home, TrendingUp, Shield, Award, Euro, Star, Waves, Users, MapPin } from 'lucide-react';
import { SEOHead, getLocalBusinessSchema, getBreadcrumbSchema } from '../SEOHead';
import { Breadcrumb } from '../Breadcrumb';

interface VillaBordDeMerProps {
  setCurrentPage: (page: string) => void;
}

const breadcrumbItems = [
  { name: 'Accueil', onClick: () => {} },
  { name: 'Gestion Villa Bord de Mer' },
];

export function VillaBordDeMer({ setCurrentPage }: VillaBordDeMerProps) {
  const structuredData = {
    ...getLocalBusinessSchema(),
    ...getBreadcrumbSchema([
      { name: 'Accueil', url: 'https://www.clesducabanon.fr' },
      { name: 'Gestion Villa Bord de Mer Sanary Giens', url: 'https://www.clesducabanon.fr/villa-bord-mer-sanary-giens' },
    ]),
  };

  breadcrumbItems[0].onClick = () => setCurrentPage('home');

  return (
    <div className="pt-20">
      <SEOHead
        title="Gestion Villa Bord de Mer Sanary Giens | Villa 20% TTC · Appart 25% TTC"
        description="Expert gestion villas bord de mer prestige entre Sanary et Giens. Vue mer, piscine, pieds dans l'eau. Villa 20% TTC · Appartement 25% TTC. Clientèle CSP+, revenus optimisés +35%. Superhôte 4.9/5."
        keywords="villa bord de mer Sanary Giens, gestion villa prestige Var, location villa vue mer, conciergerie luxe Côte d'Azur, villa piscine vue mer Var, Airbnb villa luxe Sanary"
        canonicalUrl="https://www.clesducabanon.fr/villa-bord-mer-sanary-giens"
        structuredData={structuredData}
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero — fond blanc, pas d'image */}
      <section className="relative pt-16 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-8" style={{ background: 'radial-gradient(circle, #0AADA3, transparent 65%)' }} />
          <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full opacity-6" style={{ background: 'radial-gradient(circle, #C9A84C, transparent 65%)' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 text-sm font-semibold"
              style={{ background: 'rgba(10,173,163,0.10)', color: '#087A72', border: '1px solid rgba(10,173,163,0.25)' }}
            >
              <Waves className="w-5 h-5" />
              Villas d'Exception en Bord de Mer
            </div>

            <h1 className="font-bold mb-6 leading-tight" style={{ color: '#1a2744', fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
              Gestion Premium de Villas<br />
              <span style={{ color: '#C9A84C' }}>Bord de Mer</span> Entre Sanary et Giens
            </h1>

            <p className="text-lg mb-4 max-w-3xl mx-auto leading-relaxed" style={{ color: '#6b7280' }}>
              Spécialistes de la gestion complète de propriétés de prestige : villas vue mer, maisons avec piscine à débordement, propriétés pieds dans l'eau.
            </p>

            <p className="text-base mb-6 max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
              <span style={{ color: '#C9A84C' }} className="font-semibold">Villa 20% TTC</span>
              {' · '}
              <span style={{ color: '#0AADA3' }} className="font-semibold">Appartement 25% TTC</span>
              {' '}— Clientèle haut de gamme, revenus maximisés.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 rounded-full text-base font-bold text-white hover:scale-105 transition-all"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #A07D2A)', boxShadow: '0 8px 28px rgba(201,168,76,0.38)' }}
              >
                Estimation Gratuite Villa de Prestige
              </button>
              <button
                onClick={() => document.getElementById('marche')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 rounded-full text-base font-semibold hover:scale-105 transition-all"
                style={{ background: 'rgba(10,173,163,0.08)', color: '#0AADA3', border: '2px solid rgba(10,173,163,0.3)' }}
              >
                Découvrir le Marché Local
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section style={{ background: '#f8f6f0' }} className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-5">
            {[
              { value: '400€ - 1 500€', label: 'Tarif/nuit en haute saison' },
              { value: '7% - 12%', label: 'Rentabilité brute annuelle' },
              { value: '50 000€ - 120 000€', label: 'Revenus annuels moyens' },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl text-white text-center"
                style={{ background: index % 2 === 0 ? 'linear-gradient(135deg, #0AADA3, #087A72)' : 'linear-gradient(135deg, #C9A84C, #A07D2A)', boxShadow: '0 4px 20px rgba(26,39,68,0.1)' }}
              >
                <div className="text-xl md:text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-white/75">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi les Villas Bord de Mer */}
      <section id="marche" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1a2744' }}>
              Pourquoi les Villas Bord de Mer<br />Entre Sanary et Giens Sont un Investissement d'Exception ?
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#6b7280' }}>
              Le littoral varois combine authenticité provençale, paysages méditerranéens préservés et infrastructures touristiques haut de gamme.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Euro, title: 'Rentabilité Exceptionnelle', description: 'Les villas bord de mer affichent des taux de rentabilité de 7% à 12% bruts par an, soit 2 à 3 fois supérieurs à la location longue durée.', gold: true },
              { icon: TrendingUp, title: 'Demande Constante CSP+', description: 'Clientèle aisée (cadres, professions libérales, entrepreneurs) recherchant des séjours exclusifs dans des propriétés d\'exception.', gold: false },
              { icon: Waves, title: 'Localisation Stratégique', description: 'Accès direct plages, calanques, ports de plaisance, vignobles AOC Bandol. Île de Porquerolles à 20 min. Aéroport Toulon à 15 min.', gold: true },
              { icon: Home, title: 'Valorisation Patrimoniale', description: 'L\'immobilier de prestige dans le Var connaît une valorisation constante (+3% à +5%/an). Un patrimoine rare dans une zone à forte attractivité.', gold: false },
              { icon: Shield, title: 'Marché Sécurisé', description: 'Réglementation stricte favorisant les propriétaires en règle et conciergeries agréées (carte G). Investissement protégé.', gold: true },
              { icon: Award, title: 'Clientèle Internationale', description: 'Voyageurs français, suisses, belges, allemands et britanniques recherchant calme, authenticité et prestations luxe.', gold: false },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="rounded-2xl p-7 transition-all hover:-translate-y-1"
                style={{ background: 'linear-gradient(135deg, #f8f6f0, #ffffff)', border: '1px solid rgba(201,168,76,0.18)', boxShadow: '0 2px 16px rgba(26,39,68,0.05)' }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: item.gold ? 'linear-gradient(135deg, #C9A84C, #A07D2A)' : 'linear-gradient(135deg, #0AADA3, #087A72)' }}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#1a2744' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gestion premium */}
      <section className="py-24" style={{ background: '#f8f6f0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-3" style={{ color: '#1a2744' }}>Gestion Clé en Main de Votre Villa de Prestige</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
              Service premium dédié aux propriétaires exigeants : rentabilité maximale, sécurité totale.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1a2744' }}>Stratégie Marketing Haut de Gamme</h3>
                <ul className="space-y-3">
                  {[
                    'Photos et vidéos professionnelles par drone (vue aérienne mer/piscine)',
                    'Rédaction d\'annonces premium en français, anglais, allemand',
                    'Mise en valeur des atouts : vue mer panoramique, accès plage, piscine chauffée',
                    'Diffusion multi-plateformes luxe : Airbnb Luxe, Booking Premium, VRBO + 50 sites',
                    'Badge Superhôte Airbnb 4,9/5 (vos biens bénéficient de notre notoriété)',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Star className="w-5 h-5 flex-shrink-0 mt-0.5 fill-[#C9A84C]" style={{ color: '#C9A84C' }} />
                      <span className="text-sm" style={{ color: '#374151' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1a2744' }}>Tarification Dynamique Premium</h3>
                <ul className="space-y-2 text-sm" style={{ color: '#6b7280' }}>
                  {['Saisonnalité haute/moyenne/basse saison', 'Événements locaux (régates, festivals, vacances scolaires)', 'Demande temps réel et taux de réservation', 'Analyse concurrentielle villas similaires', 'Tarifs dégressifs séjours longs'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#0AADA3' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1a2744' }}>Sélection Rigoureuse des Voyageurs</h3>
                <ul className="space-y-3">
                  {[
                    'Vérification systématique pièce d\'identité',
                    'Analyse des avis précédents sur toutes les plateformes',
                    'Appel téléphonique de qualification pour grands groupes',
                    'Dépôt de garantie digital sécurisé Swikly (2 000€ à 5 000€)',
                    'Interdiction fêtes/événements non autorisés (clause contractuelle)',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#0AADA3' }} />
                      <span className="text-sm" style={{ color: '#374151' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1a2744' }}>Service Conciergerie Premium</h3>
                <ul className="space-y-2 text-sm" style={{ color: '#6b7280' }}>
                  {['Accueil personnalisé et présentation détaillée', 'Panier d\'accueil gourmand (produits locaux, vins AOC Bandol)', 'Check-in/out flexibles adaptés aux vols/trains', 'Support 24/7 français/anglais/allemand', 'Services additionnels : chef à domicile, location bateau, baby-sitting'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#C9A84C' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-10 text-white relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1a2744 0%, #2a3f6f 100%)', boxShadow: '0 20px 60px rgba(26,39,68,0.2)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
            <div className="flex items-center gap-1 mb-5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-[#C9A84C]" style={{ color: '#C9A84C' }} />)}
            </div>
            <blockquote className="text-lg md:text-xl font-medium mb-6 italic leading-relaxed text-white/90">
              "Nous avons confié notre villa vue mer à Sanary aux Clés du Cabanon et les résultats dépassent toutes nos attentes. En 1 an, nous avons généré <strong className="text-white">68 000€ de revenus</strong>, soit 3 fois plus qu'en location longue durée. L'équipe est ultra professionnelle, les voyageurs respectueux, et nous gardons notre villa 6 semaines par an pour nos vacances familiales."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="rounded-full w-14 h-14 flex items-center justify-center" style={{ background: 'rgba(201,168,76,0.2)', border: '2px solid rgba(201,168,76,0.4)' }}>
                <Users className="w-7 h-7" style={{ color: '#C9A84C' }} />
              </div>
              <div>
                <div className="font-bold text-white">Famille Dubois</div>
                <div className="text-sm text-white/60">Villa 5 chambres avec piscine à débordement vue mer · Sanary-sur-Mer</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20" style={{ background: '#f8f6f0' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold"
              style={{ background: 'rgba(201,168,76,0.12)', color: '#A07D2A', border: '1px solid rgba(201,168,76,0.25)' }}
            >
              <MapPin className="w-4 h-4" />
              Villa 20% TTC · Appartement 25% TTC
            </div>
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1a2744' }}>
              Valorisez Votre Villa en Bord de Mer
            </h2>
            <p className="text-lg mb-8" style={{ color: '#6b7280' }}>
              Estimation personnalisée gratuite et accompagnement sur-mesure pour propriétaires de villas de prestige
            </p>
            <button
              onClick={() => {
                setCurrentPage('home');
                setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 500);
              }}
              className="px-10 py-5 rounded-full text-base font-bold text-white hover:scale-105 transition-all"
              style={{ background: 'linear-gradient(135deg, #C9A84C, #A07D2A)', boxShadow: '0 8px 28px rgba(201,168,76,0.38)' }}
            >
              Estimation Gratuite Villa de Prestige
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
