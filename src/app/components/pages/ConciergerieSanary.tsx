import { motion } from 'motion/react';
import { MapPin, TrendingUp, Shield, Award, Euro, CheckCircle, Star, Home, Users } from 'lucide-react';
import { SEOHead, getLocalBusinessSchema, getFAQSchema, getBreadcrumbSchema } from '../SEOHead';
import { Breadcrumb } from '../Breadcrumb';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ConciergerieSanaryProps {
  setCurrentPage: (page: string) => void;
}

const faqsSanary = [
  {
    question: 'Pourquoi choisir une conciergerie à Sanary-sur-Mer pour ma villa ?',
    answer: 'Sanary-sur-Mer est une destination prisée de la Côte d\'Azur Varoise avec une forte demande locative en haute saison. Une conciergerie locale experte maximise votre rentabilité grâce à une connaissance approfondie du marché, une tarification dynamique optimisée et une gestion professionnelle qui rassure les voyageurs haut de gamme.',
  },
  {
    question: 'Quelle rentabilité pour une villa à Sanary-sur-Mer en location saisonnière ?',
    answer: 'Une villa bord de mer ou avec piscine à Sanary génère en moyenne 30 000€ à 60 000€ de revenus annuels selon la capacité, l\'emplacement et les équipements. Notre tarification dynamique et notre expertise locale permettent d\'optimiser votre taux d\'occupation et vos revenus jusqu\'à +35% par rapport à une gestion en solo.',
  },
  {
    question: 'Quels sont vos honoraires de gestion à Sanary-sur-Mer ?',
    answer: 'Nous proposons 2 formules transparentes : 180€/mois TTC pour la gestion digitale (annonces, réservations, communication voyageurs) et 20% TTC pour la gestion complète Premium incluant remise des clés, états des lieux, ménage coordonné, maintenance et intervention terrain 7j/7. Les frais de ménage et blanchisserie sont payés directement par les voyageurs.',
  },
  {
    question: 'Comment sécurisez-vous ma villa pendant les locations ?',
    answer: 'Nous vérifions rigoureusement chaque voyageur, réalisons des états des lieux photo complets, utilisons Swikly pour le dépôt de garantie digital sécurisé, et sommes disponibles 24/7 pour toute intervention. Notre statut Superhôte Airbnb 4,9/5 garantit des voyageurs sélectionnés et respectueux.',
  },
  {
    question: 'Puis-je profiter de ma villa même si elle est en gestion locative ?',
    answer: 'Absolument ! Via votre espace propriétaire personnel, vous pouvez bloquer des dates à tout moment pour profiter de votre bien. Nous gérons votre calendrier en toute flexibilité selon vos besoins.',
  },
];

const breadcrumbItems = [
  { name: 'Accueil', onClick: () => {} },
  { name: 'Conciergerie Sanary-sur-Mer' },
];

export function ConciergerieSanary({ setCurrentPage }: ConciergerieSanaryProps) {
  const structuredData = {
    ...getLocalBusinessSchema(),
    ...getFAQSchema(faqsSanary),
    ...getBreadcrumbSchema([
      { name: 'Accueil', url: 'https://www.clesducabanon.fr' },
      { name: 'Conciergerie Sanary-sur-Mer', url: 'https://www.clesducabanon.fr/conciergerie-sanary' },
    ]),
  };

  breadcrumbItems[0].onClick = () => setCurrentPage('home');

  return (
    <div className="pt-20">
      <SEOHead
        title="Conciergerie Sanary | Gestion Villa Airbnb 20% Bord Mer"
        description="Conciergerie n°1 Sanary-sur-Mer. 16 villas gérées. Gestion Airbnb 20% TTC. Tarif dynamique, Superhôte 4.9/5. Estimation gratuite."
        keywords="conciergerie Sanary-sur-Mer, gestion villa Sanary, gestion Airbnb Sanary, location saisonnière Sanary, villa bord de mer Sanary, conciergerie prestige Var, Airbnb Sanary-sur-Mer"
        canonicalUrl="https://www.clesducabanon.fr/conciergerie-sanary"
        structuredData={structuredData}
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 text-white py-20">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Sanary-sur-Mer & Environs</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Conciergerie Airbnb Sanary-sur-Mer : Gestion Villa Bord de Mer 20%
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-4xl">
              <strong>Gestion complète de villas bord de mer et maisons avec piscine</strong>
            </p>

            <p className="text-lg text-blue-100 mb-8 max-w-3xl">
              Spécialistes de la location saisonnière haut de gamme à Sanary-sur-Mer. 
              Nous maximisons vos revenus locatifs et gérons votre propriété de prestige en toute sérénité.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="font-medium">Superhôte Airbnb 4,9/5</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="font-medium">Carte Professionnelle G</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 flex items-center gap-2">
                <Users className="w-5 h-5 text-pink-400" />
                <span className="font-medium">20+ villas gérées</span>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-10 py-5 rounded-full text-lg font-medium hover:shadow-2xl transition-all"
            >
              Demander une estimation gratuite
            </button>
          </motion.div>
        </div>
      </section>

      {/* Marché Local Sanary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pourquoi Sanary-sur-Mer est un Marché d'Exception pour la Location Saisonnière ?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Sanary-sur-Mer</strong>, perle de la Côte d'Azur Varoise, est l'une des destinations les plus prisées 
              du littoral méditerranéen. Son authenticité provençale, son port coloré classé, ses plages de sable fin et 
              son cadre de vie exceptionnel en font un <strong>marché ultra-dynamique pour la location saisonnière haut de gamme</strong>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Forte Demande Locative',
                description: 'Sanary-sur-Mer bénéficie d\'une demande soutenue toute l\'année, avec un pic en haute saison (juin-septembre). Les villas avec vue mer ou piscine affichent des taux d\'occupation supérieurs à 80% en été.',
              },
              {
                icon: Euro,
                title: 'Rentabilité Optimale',
                description: 'Les tarifs journaliers pour une villa de standing oscillent entre 200€ et 800€/nuit selon la saison et les équipements. Le rendement annuel peut atteindre 6% à 10% du capital investi.',
              },
              {
                icon: Home,
                title: 'Clientèle Haut de Gamme',
                description: 'Sanary attire une clientèle aisée (CSP+) française et européenne à la recherche de calme, d\'authenticité et de prestations premium : familles, couples seniors, groupes d\'amis exigeants.',
              },
              {
                icon: MapPin,
                title: 'Emplacement Stratégique',
                description: 'Située entre Toulon (15 min) et Bandol (5 min), Sanary offre un accès facile aux commerces, restaurants gastronomiques, activités nautiques et sites touristiques (calanques, vignobles, île de Porquerolles).',
              },
              {
                icon: Shield,
                title: 'Marché Sécurisé',
                description: 'La ville impose une réglementation stricte des locations saisonnières, favorisant les propriétaires en règle et les conciergeries professionnelles agréées comme Les Clés du Cabanon (carte G).',
              },
              {
                icon: Award,
                title: 'Valorisation Patrimoniale',
                description: 'Investir dans une villa à Sanary-sur-Mer, c\'est sécuriser un patrimoine dans une zone à forte attractivité avec une valorisation constante de l\'immobilier de prestige.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl border border-blue-100"
              >
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Expertise Sanary */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Notre Expertise de la Gestion de Villas à Sanary-sur-Mer
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              <strong>Conciergerie locale familiale</strong> basée sur le territoire, 
              nous connaissons parfaitement le marché sanaryen, ses spécificités, sa saisonnalité et sa clientèle.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Gestion Complète Clé en Main de Votre Villa
              </h3>
              <ul className="space-y-4">
                {[
                  'Création d\'annonces premium optimisées (photos pro, rédaction attractive)',
                  'Tarification dynamique selon la demande locale et les événements',
                  'Diffusion multi-plateformes : Airbnb, Booking, VRBO + jusqu\'à 50 sites',
                  'Gestion complète des réservations et communication 24/7 avec les voyageurs',
                  'Sélection rigoureuse des locataires (vérification identité, avis, solvabilité)',
                  'Accueil personnalisé et remise des clés sur place',
                  'États des lieux photo complets entrée/sortie',
                  'Ménage professionnel et blanchisserie haute qualité',
                  'Maintenance préventive et gestion des urgences',
                  'Reporting mensuel détaillé et accès à votre espace propriétaire 24/7',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-teal-900 p-10 rounded-3xl text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Nos Garanties à Sanary-sur-Mer</h3>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Star className="w-8 h-8 text-yellow-400" />
                    <span className="text-xl font-bold">Superhôte Airbnb 4,9/5</span>
                  </div>
                  <p className="text-blue-100">
                    Nos propriétés bénéficient de notre statut Superhôte, gage de qualité et de visibilité maximale
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-8 h-8 text-green-400" />
                    <span className="text-xl font-bold">Carte Professionnelle G</span>
                  </div>
                  <p className="text-blue-100">
                    Agrément officiel délivré par la CCI pour gérer légalement des biens immobiliers
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-8 h-8 text-pink-400" />
                    <span className="text-xl font-bold">Tarification Dynamique</span>
                  </div>
                  <p className="text-blue-100">
                    Optimisation tarifaire quotidienne pour maximiser vos revenus (haute saison, événements locaux, demande)
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-8 h-8 text-orange-400" />
                    <span className="text-xl font-bold">Sélection Voyageurs</span>
                  </div>
                  <p className="text-blue-100">
                    Vérification systématique : pièce d'identité, avis précédents, dépôt de garantie digital Swikly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Saisonnière vs Longue Durée */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Location Saisonnière vs Location Longue Durée à Sanary-sur-Mer
            </h2>
            <p className="text-lg text-gray-700">
              Quelle stratégie choisir pour rentabiliser votre villa à Sanary ? Comparaison détaillée.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Location Longue Durée */}
            <div className="bg-gray-100 p-8 rounded-3xl border-2 border-gray-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Location Longue Durée</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">1 200€/mois</div>
                  <div className="text-gray-600">Loyer moyen appartement T3</div>
                </div>
                
                <div className="border-t border-gray-300 pt-4">
                  <div className="font-bold text-gray-900 mb-3">✓ Avantages</div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Revenus stables et récurrents</li>
                    <li>• Gestion simplifiée</li>
                    <li>• Peu de rotation</li>
                  </ul>
                </div>

                <div className="border-t border-gray-300 pt-4">
                  <div className="font-bold text-gray-900 mb-3">✗ Inconvénients</div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Rentabilité limitée (3-4% brut)</li>
                    <li>• Risques d'impayés et procédures longues</li>
                    <li>• Usure du bien accélérée</li>
                    <li>• Blocage du bien sur le long terme</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl">
                <div className="font-bold text-gray-900 mb-2">Revenus annuels nets</div>
                <div className="text-3xl font-bold text-gray-900">≈ 11 400€</div>
              </div>
            </div>

            {/* Location Saisonnière */}
            <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-8 rounded-3xl text-white shadow-2xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold text-sm">
                  ✨ Recommandé
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6 mt-4">Location Saisonnière (Avec Nous)</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-3xl font-bold mb-2">85€ - 180€/nuit</div>
                  <div className="text-blue-100">Tarif selon saison et équipements</div>
                </div>
                
                <div className="border-t border-white/30 pt-4">
                  <div className="font-bold mb-3">✓ Avantages</div>
                  <ul className="space-y-2 text-blue-100">
                    <li>• Rentabilité stable toute l'année</li>
                    <li>• Tarification dynamique = revenus optimisés</li>
                    <li>• Vous gardez la possibilité d'utiliser votre bien</li>
                    <li>• Entretien régulier = valorisation du patrimoine</li>
                    <li>• Zéro gestion grâce à notre conciergerie</li>
                  </ul>
                </div>

                <div className="border-t border-white/30 pt-4">
                  <div className="font-bold mb-3">Gestion assurée par nous</div>
                  <ul className="space-y-2 text-blue-100">
                    <li>• Annonces + photos pro</li>
                    <li>• Réservations + voyageurs</li>
                    <li>• Ménage + maintenance</li>
                    <li>• Support 24/7</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-4 rounded-xl mb-4">
                <div className="font-bold mb-2">Revenus annuels bruts estimés</div>
                <div className="text-4xl font-bold">18 000€</div>
                <div className="text-sm text-blue-100 mt-1">Pour 150 nuits louées/an à 120€/nuit moyen</div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-4 rounded-xl">
                <div className="font-bold mb-2">Revenus nets (après notre commission 20%)</div>
                <div className="text-4xl font-bold">14 400€</div>
                <div className="text-green-300 font-bold text-lg mt-2">
                  + 3 000€ de plus qu'en location longue durée ! 🚀
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
            <p className="text-gray-800">
              <strong>💡 Exemple concret :</strong> Un T3 à Sanary-sur-Mer loué 950€/mois en longue durée rapporte 11 400€/an. 
              En location saisonnière avec notre gestion, vous générez <strong>jusqu'à 18 000€ brut</strong> (soit 14 400€ net après notre commission 20%), 
              tout en gardant la liberté de profiter de votre bien hors saison.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sanary */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Questions Fréquentes sur la Conciergerie à Sanary-sur-Mer
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqsSanary.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Confiez-nous Votre Villa à Sanary-sur-Mer
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Estimation gratuite, conseils personnalisés et accompagnement sur-mesure pour propriétaires exigeants
            </p>
            <button
              onClick={() => {
                setCurrentPage('home');
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 500);
              }}
              className="bg-white text-blue-600 px-10 py-5 rounded-full text-lg font-medium hover:shadow-2xl transition-all"
            >
              Demander mon estimation gratuite
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}