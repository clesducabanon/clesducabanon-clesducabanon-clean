import { motion } from 'motion/react';
import { CheckCircle, TrendingUp, MapPin, Star, Phone, Anchor, Building2, Home, Clock, Users, Euro, Shield } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SEOHead } from '../components/SEOHead';
import { useState } from 'react';
import { EstimationModal } from '../components/EstimationModal';

const faqToulon = [
  {
    question: "Combien rapporte un appartement en location courte durée à Toulon ?",
    answer: "Un T2 (45m²) génère en moyenne 16 150€ bruts/an (12 920€ net après commission 20%). Un T3 vue mer au Mourillon peut atteindre 25 200€ bruts/an (20 160€ net). La demande est régulière toute l'année grâce à la clientèle affaires qui compense la saison touristique."
  },
  {
    question: "Quels sont les secteurs les plus rentables à Toulon pour l'Airbnb ?",
    answer: "Le Mourillon (plages), le centre-ville (proximité port/gare), et le quai Cronstadt (départ îles) sont les secteurs les plus demandés. Les appartements vue mer ou proches des plages se louent 30-40% plus cher que les autres quartiers."
  },
  {
    question: "La Formule Premium 20% est-elle rentable pour un petit appartement ?",
    answer: "Absolument ! Même pour un T2, nos services (ménage, linge, check-in, maintenance, tarification dynamique) augmentent vos revenus de 25-35% par rapport à une gestion seule. La commission de 20% est vite compensée par l'optimisation des réservations."
  },
  {
    question: "Comment gérez-vous les escales de croisières à Toulon ?",
    answer: "Nous suivons le calendrier des escales (+200/an) et ajustons automatiquement les tarifs à la hausse lors des pics de demande. Nous proposons aussi des check-in flexibles adaptés aux horaires des navires de croisière."
  },
  {
    question: "Gérez-vous aussi les locations pour clientèle affaires (marine, industrie) ?",
    answer: "Oui ! Nous avons l'habitude de gérer des locations moyennes durées pour professionnels (1-4 semaines). Nous adaptons les services (wifi performant, espace bureau, facturation entreprise) et optimisons les tarifs selon la demande professionnelle."
  }
];

export function ConciergerieToulonPage() {
  const [isEstimationModalOpen, setIsEstimationModalOpen] = useState(false);

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Conciergerie Toulon | Gestion Airbnb Villa 20% Premium"
        description="Conciergerie Toulon. 2 biens gérés centre et littoral. Gestion Airbnb 20% TTC. Mourillon, Porte d'Italie. Superhôte 4.9/5 ⭐"
        keywords="conciergerie Toulon, gestion Airbnb Toulon, location saisonnière Toulon, conciergerie Mourillon, Airbnb Toulon, gestion appartement Toulon, location meublée Toulon, conciergerie port Toulon, gestion locative Toulon, Airbnb centre Toulon"
        canonicalUrl="https://www.clesducabanon.fr/conciergerie-toulon"
      />

      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1574349453958-c4e2efbf7af3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3Vsb24lMjBmcmFuY2UlMjBoYXJib3IlMjBtZWRpdGVycmFuZWFufGVufDF8fHx8MTc3Mzc3NjA3OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Conciergerie Toulon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-teal-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-blue-400/20 backdrop-blur-sm border border-blue-400/40 px-4 py-2 rounded-full mb-6"
            >
              <MapPin className="w-5 h-5 text-blue-300" />
              <span className="text-blue-100 font-semibold">Toulon / Mourillon / Centre-ville</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
            >
              Conciergerie Airbnb Toulon
              <span className="block mt-2 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Formule Premium 20% TTC
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed"
            >
              Gestion <strong className="font-bold text-yellow-300">haut de gamme</strong> de vos appartements et villas à Toulon. 
              <span className="block mt-2 text-lg text-white/85">
                2 biens gérés • Note 4.9/5 • Intervention terrain complète
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => setIsEstimationModalOpen(true)}
                className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all flex items-center gap-2 hover:scale-105"
              >
                Estimer mes revenus
                <TrendingUp className="w-5 h-5" />
              </button>
              <a
                href="/formule-premium-20"
                className="bg-white/10 backdrop-blur-md border-2 border-white/40 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
              >
                Formule 20%
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chiffres clés Toulon */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-2xl text-center"
            >
              <Home className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">2 biens</div>
              <div className="text-sm text-gray-600">Appartements gérés à Toulon</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl text-center"
            >
              <Star className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">4.9/5</div>
              <div className="text-sm text-gray-600">Note moyenne voyageurs</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl text-center"
            >
              <TrendingUp className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">+35%</div>
              <div className="text-sm text-gray-600">Revenus vs gestion seule</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl text-center"
            >
              <Clock className="w-10 h-10 text-purple-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">0h</div>
              <div className="text-sm text-gray-600">De votre temps</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contenu SEO principal */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Conciergerie Airbnb Toulon : 2 appartements premium gérés
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Les Clés du Cabanon</strong> est votre <strong>conciergerie haut de gamme à Toulon</strong>. Nous gérons actuellement <strong>2 appartements de standing</strong> dans la ville maritime du Var avec notre <strong>Formule Premium à 20% TTC</strong> incluant intervention terrain complète (remise des clés, états des lieux, ménage coordonné, maintenance).
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Notre connaissance du marché toulonnais nous permet d'optimiser vos revenus locatifs toute l'année grâce à une <strong>tarification dynamique</strong> adaptée aux saisons touristiques, aux escales de croisières, aux événements nautiques (régates, départs Îles d'Or) et à la clientèle affaires (marine nationale, entreprises, congrès).
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Toulon : ville maritime dynamique et destination touristique toute l'année
            </h3>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Toulon</strong>, 3ème ville de la région Provence-Alpes-Côte d'Azur, attire chaque année des milliers de voyageurs grâce à son <strong>patrimoine maritime</strong>, son centre-ville provençal rénové, ses plages urbaines du Mourillon et sa proximité avec les <strong>Îles d'Or</strong> (Porquerolles, Port-Cros). La demande locative est <strong>forte et diversifiée</strong> toute l'année :
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Tourisme maritime</strong> : Port militaire, Musée national de la Marine, rade de Toulon</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Plages urbaines</strong> : Le Mourillon (4 plages), Anse Méjean, Magaud</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Proximité Îles d'Or</strong> : Départ bateau Porquerolles (45 min), Port-Cros, Levant</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Clientèle affaires</strong> : Marine nationale, industrie navale, entreprises, congrès</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Croisières</strong> : Terminal croisières avec +200 escales/an = afflux voyageurs</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Centre historique rénové</strong> : Opéra, marché Cours Lafayette, vieille ville provençale</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Revenus locatifs : combien rapporte un appartement à Toulon ?
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Le potentiel locatif à Toulon est <strong>solide toute l'année</strong> grâce à la diversité de la demande (touristes, professionnels marine/industrie, familles visitant les Îles d'Or). Voici nos estimations réalistes basées sur nos 2 biens gérés :
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="font-bold text-gray-900 mb-2">Appartement T2</div>
                  <div className="text-sm text-gray-600 mb-3">Centre-ville ou Mourillon, 45m²</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tarif moyen nuit</span>
                      <span className="font-semibold text-gray-900">95€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Nuits louées/an</span>
                      <span className="font-semibold text-gray-900">170</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 flex justify-between">
                      <span className="text-gray-900 font-bold">Revenus annuels bruts</span>
                      <span className="text-blue-600 font-bold text-lg">16 150€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Après commission 20%</span>
                      <span className="text-green-600 font-bold">12 920€ net</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="font-bold text-gray-900 mb-2">Appartement T3</div>
                  <div className="text-sm text-gray-600 mb-3">Mourillon vue mer, 70m²</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tarif moyen nuit</span>
                      <span className="font-semibold text-gray-900">140€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Nuits louées/an</span>
                      <span className="font-semibold text-gray-900">180</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 flex justify-between">
                      <span className="text-gray-900 font-bold">Revenus annuels bruts</span>
                      <span className="text-blue-600 font-bold text-lg">25 200€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Après commission 20%</span>
                      <span className="text-green-600 font-bold">20 160€ net</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>💡 Atout Toulon :</strong> La demande locative est <strong>régulière toute l'année</strong> (pas de saisonnalité marquée) grâce à la clientèle affaires (marine, industrie navale) qui compense les creux touristiques. Cela garantit des revenus stables et prévisibles.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Notre expertise locale Toulon : ce qui fait la différence
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Contrairement aux conciergeries généralistes, nous connaissons <strong>parfaitement les spécificités du marché toulonnais</strong>. Notre équipe sait quand ajuster les tarifs selon les escales de croisières, comment valoriser la proximité du Mourillon ou du port, et comment séduire autant les touristes que la clientèle professionnelle.
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Tarification dynamique locale</strong>
                  <p className="text-gray-600 text-sm mt-1">Nous augmentons les prix lors des escales de croisières (+200/an), événements nautiques, salons professionnels, et vacances scolaires. Nous ajustons aussi selon la météo et la demande en temps réel.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Annonces optimisées Toulon</strong>
                  <p className="text-gray-600 text-sm mt-1">Mise en avant des atouts : proximité Mourillon, vue mer, parking, climatisation, distance port/gare. Photos professionnelles valorisant l'emplacement et les équipements.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Check-in personnalisé flexible</strong>
                  <p className="text-gray-600 text-sm mt-1">Accueil adapté aux horaires de croisières, trains et avions. Livret d'accueil digital avec bonnes adresses (restaurants port, marché Cours Lafayette, départ bateau Porquerolles).</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Intervention rapide 7j/7</strong>
                  <p className="text-gray-600 text-sm mt-1">Équipe locale disponible en moins de 30 minutes sur tout Toulon pour résoudre tout problème (panne clim, fuite, problème serrure, wifi).</p>
                </div>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Formule Premium 20% : gestion complète clé en main à Toulon
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Notre <strong>Formule Premium à 20% TTC</strong> est la solution clé en main pour les propriétaires d'appartements à Toulon qui souhaitent <strong>zéro contrainte et revenus optimisés</strong>. Nous prenons en charge absolument tout :
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 border border-blue-200 rounded-xl p-6 mb-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Gestion voyageurs
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ Check-in personnalisé avec remise des clés</li>
                    <li>✓ Check-out et état des lieux photo complet</li>
                    <li>✓ Communication voyageurs 24/7 (FR/EN)</li>
                    <li>✓ Livret d'accueil digital Toulon</li>
                  </ul>
                </div>

                <div>
                  <div className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <Home className="w-5 h-5" />
                    Gestion du bien
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ Ménage professionnel après chaque départ</li>
                    <li>✓ Blanchisserie coordonnée (draps, serviettes)</li>
                    <li>✓ Maintenance préventive et curative</li>
                    <li>✓ Contrôle qualité systématique</li>
                  </ul>
                </div>

                <div>
                  <div className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <Euro className="w-5 h-5" />
                    Optimisation revenus
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ Diffusion multi-plateformes (Airbnb, Booking)</li>
                    <li>✓ Tarification dynamique temps réel</li>
                    <li>✓ Annonces SEO optimisées Toulon</li>
                    <li>✓ Photos professionnelles</li>
                  </ul>
                </div>

                <div>
                  <div className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Sécurité & légalité
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ Dépôt de garantie digital Swikly</li>
                    <li>✓ Vérification identité voyageurs</li>
                    <li>✓ Déclaration touristique Toulon</li>
                    <li>✓ Assurance RC pro 5M€</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Secteurs couverts : Mourillon, Centre-ville, Port, Corniche
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Nous intervenons sur l'<strong>ensemble de Toulon</strong>, avec une expertise particulière sur les secteurs recherchés par les voyageurs et la clientèle affaires :
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="font-bold text-gray-900 mb-2">🏖️ Le Mourillon</div>
                <p className="text-sm text-gray-600">4 plages urbaines, front de mer, restaurants. Quartier le plus demandé par les touristes.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="font-bold text-gray-900 mb-2">🏛️ Centre-ville historique</div>
                <p className="text-sm text-gray-600">Opéra, marché Cours Lafayette, vieille ville. Clientèle affaires et culturelle.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="font-bold text-gray-900 mb-2">⚓ Port / Quai Cronstadt</div>
                <p className="text-sm text-gray-600">Proximité départ Îles d'Or, restaurants, marina. Très prisé clientèle croisières.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="font-bold text-gray-900 mb-2">🌅 Corniche / Super-Toulon</div>
                <p className="text-sm text-gray-600">Vue panoramique rade, calme résidentiel. Familles et séjours longs.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Contactez votre conciergerie à Toulon
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Propriétaire d'un appartement ou d'une villa à Toulon ? Obtenez une <strong>estimation personnalisée gratuite</strong> de vos revenus locatifs en moins de 24h. Notre équipe se déplace pour visiter votre bien, analyser son potentiel et vous conseiller sur la meilleure stratégie de tarification adaptée au marché toulonnais.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl mb-8">
              <p className="text-gray-800">
                <strong>💡 Estimation gratuite :</strong> Remplissez le formulaire de contact ci-dessous ou appelez-nous directement. Nous vous proposons une visite de votre appartement à Toulon sous 48h avec simulation de revenus détaillée basée sur votre emplacement, surface et équipements.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 border border-blue-200 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">Pourquoi choisir Les Clés du Cabanon à Toulon ?</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ <strong>Équipe locale réactive</strong> : intervention en moins de 30 minutes sur tout Toulon</li>
                <li>✓ <strong>Connaissance marché local</strong> : tarification optimisée selon croisières, événements, saisons</li>
                <li>✓ <strong>Note 4.9/5</strong> : satisfaction voyageurs garantie = réservations récurrentes</li>
                <li>✓ <strong>Zéro contrainte</strong> : nous gérons TOUT de A à Z, vous recevez juste vos revenus</li>
                <li>✓ <strong>Transparence totale</strong> : reporting mensuel détaillé + accès calendrier temps réel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Toulon */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Questions fréquentes - Conciergerie Toulon
          </h2>
          
          <div className="space-y-4">
            {faqToulon.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{item.question}</h3>
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Propriétaire d'un appartement à Toulon ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Rejoignez nos propriétaires qui génèrent jusqu'à 35% de revenus en plus avec notre gestion Premium 20%
          </p>
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all inline-flex items-center gap-3 hover:scale-105"
          >
            Obtenir mon estimation gratuite
            <TrendingUp className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Estimation Modal */}
      <EstimationModal
        isOpen={isEstimationModalOpen}
        onClose={() => setIsEstimationModalOpen(false)}
      />
    </div>
  );
}