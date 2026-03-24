import { motion } from 'motion/react';
import { Home, TrendingUp, Shield, Award, Euro, Star, Waves, Users } from 'lucide-react';
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
        title="Gestion Villa Bord de Mer Sanary Giens | Airbnb Luxe 20% TTC"
        description="Expert gestion villas bord de mer prestige entre Sanary et Giens. Vue mer, piscine, pieds dans l'eau. Airbnb luxe 20% TTC. Clientèle CSP+, revenus optimisés +35%. Superhôte 4.9/5."
        keywords="villa bord de mer Sanary Giens, gestion villa prestige Var, location villa vue mer, conciergerie luxe Côte d'Azur, villa piscine vue mer Var, Airbnb villa luxe Sanary, gestion villa pieds dans l'eau"
        canonicalUrl="https://www.clesducabanon.fr/villa-bord-mer-sanary-giens"
        structuredData={structuredData}
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Ultra Premium */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-yellow-500/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30">
              <Waves className="w-6 h-6 text-blue-300" />
              <span className="font-medium text-lg">Villas d'Exception en Bord de Mer</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
              Gestion Premium de Villas<br />Bord de Mer Entre Sanary et Giens
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-6 max-w-4xl mx-auto leading-relaxed">
              Spécialistes de la <strong>gestion complète de propriétés de prestige</strong> :  
              villas vue mer panoramique, maisons avec piscine à débordement, propriétés pieds dans l'eau.
            </p>

            <p className="text-lg text-blue-200 mb-10 max-w-3xl mx-auto">
              De Sanary-sur-Mer à la presqu'île de Giens, nous maximisons la rentabilité de votre patrimoine 
              et attirons une clientèle haut de gamme internationale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl transition-all"
              >
                Estimation Gratuite Villa de Prestige
              </button>
              <button
                onClick={() => document.getElementById('marche')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-white/20 transition-all"
              >
                Découvrir le Marché Local
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pourquoi les Villas Bord de Mer Sont un Investissement d'Exception */}
      <section id="marche" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              Pourquoi les Villas Bord de Mer Entre Sanary et Giens<br />Sont un Investissement d'Exception ?
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-5xl mx-auto">
              Le littoral varois entre <strong>Sanary-sur-Mer et la presqu'île de Giens</strong> représente 
              l'un des marchés immobiliers les plus prisés et rentables de la <strong>Côte d'Azur</strong>.  
              Cette zone géographique unique combine authenticité provençale, paysages méditerranéens 
              préservés et infrastructures touristiques haut de gamme, attirant une clientèle fortunée 
              toute l'année.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Euro,
                title: 'Rentabilité Exceptionnelle',
                description: 'Les villas bord de mer affichent des taux de rentabilité de 7% à 12% bruts par an, soit 2 à 3 fois supérieurs à la location longue durée. En haute saison, les tarifs oscillent entre 400€ et 1 500€/nuit selon la capacité et les prestations.',
              },
              {
                icon: TrendingUp,
                title: 'Demande Constante CSP+',
                description: 'La clientèle cible est aisée (cadres supérieurs, professions libérales, entrepreneurs, retraités fortunés) et recherche des séjours exclusifs dans des propriétés d\'exception. La demande est forte en toutes saisons avec un pic juin-septembre.',
              },
              {
                icon: Waves,
                title: 'Localisation Stratégique Unique',
                description: 'Entre Sanary et Giens : accès direct aux plages de sable fin, calanques secrètes, ports de plaisance, vignobles AOC Bandol, île de Porquerolles accessible en 20 min. Aéroport Toulon-Hyères à 15 min.',
              },
              {
                icon: Home,
                title: 'Valorisation Patrimoniale',
                description: 'L\'immobilier de prestige en bord de mer dans le Var connaît une valorisation constante (+3% à +5%/an). Investir dans une villa vue mer, c\'est sécuriser un patrimoine rare dans une zone à forte attractivité.',
              },
              {
                icon: Shield,
                title: 'Marché Sécurisé et Réglementé',
                description: 'Les communes appliquent une réglementation stricte favorisant les propriétaires en règle et les conciergeries agréées (carte G). Cela garantit un marché sain et protège votre investissement.',
              },
              {
                icon: Award,
                title: 'Clientèle Internationale Premium',
                description: 'La Côte d\'Azur Varoise attire des voyageurs français, suisses, belges, allemands et britanniques à la recherche de calme, d\'authenticité et de prestations luxe : villas modernes, piscines chauffées, vue mer panoramique.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-200 hover:shadow-xl transition-all"
              >
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-5">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Chiffres Clés */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { value: '400€ - 1 500€', label: 'Tarif/nuit en haute saison' },
              { value: '7% - 12%', label: 'Rentabilité brute annuelle' },
              { value: '50 000€ - 120 000€', label: 'Revenus annuels moyens' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-600 to-teal-600 p-6 rounded-2xl text-white text-center shadow-xl"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Gestion Premium Villas Bord de Mer */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Gestion Clé en Main de Votre Villa de Prestige
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Service premium dédié aux propriétaires exigeants : rentabilité maximale, sécurité totale, 
              sérénité absolue.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Stratégie Marketing Haut de Gamme
                </h3>
                <ul className="space-y-4">
                  {[
                    'Photos et vidéos professionnelles par drone (vue aérienne mer/piscine)',
                    'Rédaction d\'annonces premium en français, anglais, allemand',
                    'Mise en valeur des atouts : vue mer panoramique, accès plage privé, piscine chauffée',
                    'Diffusion multi-plateformes ciblées luxe : Airbnb Luxe, Booking Premium, VRBO, Abritel + 50 sites',
                    'Badge Superhôte Airbnb 4,9/5 (vos biens bénéficient de notre notoriété)',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Tarification Dynamique Premium
                </h3>
                <p className="text-gray-700 mb-4">
                  Optimisation quotidienne des tarifs pour maximiser vos revenus selon :
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Saisonnalité haute/moyenne/basse saison</li>
                  <li>• Événements locaux (régates, festivals, vacances scolaires)</li>
                  <li>• Demande temps réel et taux de réservation</li>
                  <li>• Analyse concurrentielle villas similaires</li>
                  <li>• Tarifs dégressifs séjours longs (semaines/mois)</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Sélection Rigoureuse des Voyageurs
                </h3>
                <p className="text-gray-700 mb-4">
                  Protection maximale de votre villa de prestige :
                </p>
                <ul className="space-y-4">
                  {[
                    'Vérification systématique pièce d\'identité + visa si nécessaire',
                    'Analyse des avis précédents sur toutes les plateformes',
                    'Appel téléphonique de qualification pour grands groupes',
                    'Dépôt de garantie digital sécurisé Swikly (2 000€ à 5 000€)',
                    'Interdiction fêtes/événements non autorisés (clause contractuelle)',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Service Conciergerie Premium
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Accueil personnalisé et présentation détaillée de la villa</li>
                  <li>• Panier d\'accueil gourmand (produits locaux, vins AOC Bandol)</li>
                  <li>• Check-in/out flexibles adaptés aux vols/trains</li>
                  <li>• Support 24/7 français/anglais/allemand</li>
                  <li>• Services additionnels : chef à domicile, location bateau, baby-sitting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignage Propriétaire Villa Prestige */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 p-12 rounded-3xl text-white shadow-2xl"
          >
            <div className="flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            <blockquote className="text-2xl md:text-3xl font-medium mb-6 italic leading-relaxed">
              "Nous avons confié notre villa vue mer à Sanary aux Clés du Cabanon et les résultats 
              dépassent toutes nos attentes. En 1 an, nous avons généré <strong>68 000€ de revenus</strong>, 
              soit 3 fois plus qu'en location longue durée. 
              L'équipe est ultra professionnelle, les voyageurs respectueux, et nous gardons 
              notre villa 6 semaines par an pour nos vacances familiales."
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl">Famille Dubois</div>
                <div className="text-blue-200">Villa 5 chambres avec piscine à débordement vue mer • Sanary-sur-Mer</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final Premium */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Valorisez Votre Villa en Bord de Mer
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Estimation personnalisée gratuite et accompagnement sur-mesure pour propriétaires de villas de prestige
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  setCurrentPage('home');
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 500);
                }}
                className="bg-white text-purple-600 px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl transition-all"
              >
                Estimation Gratuite Villa de Prestige
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}