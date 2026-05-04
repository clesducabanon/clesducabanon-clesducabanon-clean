import { motion } from 'motion/react';
import { CheckCircle, TrendingUp, MapPin, Star, Phone, Palmtree, Waves, Home, Clock, Users, Euro, Shield } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SEOHead } from '../components/SEOHead';
import { useState } from 'react';
import { EstimationModal } from '../components/EstimationModal';

const faqHyeres = [
  {
    question: "Combien rapporte une villa en location courte durée à Hyères/Giens ?",
    answer: "Une villa 4-6 personnes sans piscine génère en moyenne 25 200€ bruts/an (20 160€ net après commission 20%). Une villa avec piscine et vue mer peut atteindre 44 000€ bruts/an (35 200€ net). Les atouts Giens (plages, Porquerolles, spots nautiques) boostent les tarifs."
  },
  {
    question: "Giens vs Almanarre vs centre Hyères : quel secteur est le plus rentable ?",
    answer: "La presqu'île de Giens (vue mer, plages) génère +40% de revenus vs centre Hyères. Almanarre est aussi très demandé grâce au spot mondial de windsurf/kitesurf qui attire une clientèle internationale toute l'année. La Capte et Ayguade sont aussi premium."
  },
  {
    question: "La clientèle sportive (windsurf/kitesurf) est-elle rentable toute l'année ?",
    answer: "Oui ! Almanarre est un spot mondial avec des compétitions toute l'année. Cette clientèle sportive internationale génère des réservations régulières hors saison (octobre-avril), ce qui lisse vos revenus et évite les creux hivernaux."
  },
  {
    question: "Comment gérez-vous l'accès aux îles (Porquerolles, Port-Cros) ?",
    answer: "Nous fournissons dans le livret d'accueil tous les horaires et points de départ bateau (Tour Fondue 20 min), les tarifs, et même des conseils randonnées/plages. Nous pouvons aussi réserver des billets à l'avance sur demande voyageurs."
  },
  {
    question: "Ma villa a une piscine : est-ce un vrai atout à Giens ?",
    answer: "Absolument ! Une piscine privée augmente vos tarifs de 30-40% et booste le taux d'occupation. À Giens, familles et couples recherchent activement les villas avec piscine pour profiter du cadre méditerranéen sans quitter la propriété."
  }
];

export function ConciergerieHyeresPage() {
  const [isEstimationModalOpen, setIsEstimationModalOpen] = useState(false);

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Conciergerie Hyères Giens | Gestion Villa Airbnb 20%"
        description="Conciergerie Hyères et Giens. 7 villas gérées. Gestion Airbnb 20%. Plage Almanarre, Ayguade. Superhôte 4.9/5. Estimation gratuite."
        keywords="conciergerie Hyères, conciergerie Giens, gestion villa Hyères, location saisonnière Giens, Airbnb Hyères, gestion Airbnb Giens, villa presqu'île Giens, conciergerie La Capte, conciergerie Almanarre, location villa Hyères, gestion locative Hyères, Airbnb presqu'île Giens"
        canonicalUrl="https://www.clesducabanon.fr/conciergerie-hyeres"
      />

      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1635343826162-5842629b68fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeWVyZXMlMjBnaWVucyUyMGZyYW5jZSUyMGJlYWNoJTIwdmlsbGF8ZW58MXx8fHwxNzczNzc2MDgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Conciergerie Hyères Giens"
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
              <span className="text-blue-100 font-semibold">Hyères / Giens / La Capte / Almanarre</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
            >
              Conciergerie Airbnb Hyères
              <span className="block mt-2 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                & Presqu'île de Giens
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed"
            >
              Gestion <strong className="font-bold text-yellow-300">haut de gamme</strong> de vos villas sur la presqu'île de Giens. 
              <span className="block mt-2 text-lg text-white/85">
                7 biens gérés • Note 4.9/5 • Formule Premium 20% TTC
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToContact}
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

      {/* Chiffres clés Hyères */}
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
              <div className="text-3xl font-bold text-gray-900 mb-1">7 biens</div>
              <div className="text-sm text-gray-600">Villas gérées à Hyères/Giens</div>
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
              Conciergerie Airbnb Hyères & Giens : 7 villas d'exception gérées
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Les Clés du Cabanon</strong> est votre <strong>conciergerie haut de gamme à Hyères et sur la presqu'île de Giens</strong>. Nous gérons actuellement <strong>7 villas et maisons de standing</strong> avec notre <strong>Formule Premium à 20% TTC</strong> incluant intervention terrain complète (remise des clés, états des lieux, ménage coordonné, maintenance).
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Notre expertise du marché local Hyères/Giens nous permet d'optimiser vos revenus locatifs toute l'année grâce à une <strong>tarification dynamique adaptée</strong> aux saisons touristiques, aux événements nautiques (Funboard Tour, régates) et à la clientèle internationale de sportifs (windsurf, kitesurf, paddle).
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Hyères et la presqu'île de Giens : paradis méditerranéen premium
            </h3>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              La <strong>presqu'île de Giens</strong> est l'une des destinations les plus recherchées du Var pour les voyageurs en quête d'<strong>authenticité, de nature préservée et d'activités nautiques</strong>. Reliée au continent par deux cordons de sable (la Route du Sel et la Route de la Madrague), Giens offre un cadre d'exception avec :
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Plages sauvages</strong> : Plage de la Bergerie, La Madrague, La Capte, Almanarre</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Spots nautiques mondiaux</strong> : Almanarre (windsurf/kitesurf), La Madrague (paddle)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Proximité Îles d'Or</strong> : Porquerolles (20 min bateau), Port-Cros, Île du Levant</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Sentier du littoral</strong> : randonnées côtières exceptionnelles (Tour Fondue, Darboussière)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Nature protégée</strong> : Parc National de Port-Cros, salines des Pesquiers</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Revenus locatifs : combien rapporte une villa à Hyères/Giens ?
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Le potentiel locatif à Hyères et Giens est <strong>premium</strong> grâce à une demande forte et diversifiée (familles, sportifs, randonneurs, clientèle internationale). Voici nos estimations réalistes basées sur nos 7 biens gérés :
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="font-bold text-gray-900 mb-2">Villa 4-6 personnes</div>
                  <div className="text-sm text-gray-600 mb-3">Sans piscine, 300m plage</div>
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

                <div>
                  <div className="font-bold text-gray-900 mb-2">Villa 6-8 personnes</div>
                  <div className="text-sm text-gray-600 mb-3">Avec piscine, vue mer</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tarif moyen nuit</span>
                      <span className="font-semibold text-gray-900">220€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Nuits louées/an</span>
                      <span className="font-semibold text-gray-900">200</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 flex justify-between">
                      <span className="text-gray-900 font-bold">Revenus annuels bruts</span>
                      <span className="text-blue-600 font-bold text-lg">44 000€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Après commission 20%</span>
                      <span className="text-green-600 font-bold">35 200€ net</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Notre expertise locale Hyères/Giens : ce qui fait la différence
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Contrairement aux conciergeries généralistes, nous connaissons <strong>parfaitement le marché local</strong> d'Hyères et de la presqu'île de Giens. Notre équipe sait quand ajuster les tarifs selon les événements nautiques, comment valoriser la proximité des plages (Almanarre, La Capte, Bergerie), et comment séduire la clientèle premium internationale.
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Tarification dynamique locale</strong>
                  <p className="text-gray-600 text-sm mt-1">Nous ajustons les prix selon les compétitions nautiques (Funboard Tour), vacances scolaires, ponts, et même la météo pour maximiser vos revenus sans perdre de réservations.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Photos professionnelles valorisantes</strong>
                  <p className="text-gray-600 text-sm mt-1">Mise en avant des atouts Giens : vue mer, proximité plages, jardin méditerranéen, terrasse, piscine. Photos drone pour les villas premium.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Conciergerie haut de gamme</strong>
                  <p className="text-gray-600 text-sm mt-1">Location matériel nautique (paddle, planche windsurf), réservation restaurant La Tour Fondue, courses livrées, activités (randonnée sentier littoral, excursion Porquerolles).</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Intervention rapide 7j/7</strong>
                  <p className="text-gray-600 text-sm mt-1">Équipe locale disponible en moins de 30 minutes sur tout le secteur Hyères/Giens pour résoudre tout problème (panne clim, fuite, serrure bloquée).</p>
                </div>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Formule Premium 20% : gestion complète de A à Z à Hyères
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Notre <strong>Formule Premium à 20% TTC</strong> est la solution clé en main pour les propriétaires de villas à Hyères et Giens qui souhaitent <strong>zéro contrainte et revenus maximisés</strong>. Nous prenons en charge absolument tout :
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 border border-blue-200 rounded-xl p-6 mb-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Gestion voyageurs
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ Check-in personnalisé avec remise des clés sur place</li>
                    <li>✓ Check-out et état des lieux photo complet</li>
                    <li>✓ Communication voyageurs 24/7 (FR/EN)</li>
                    <li>✓ Livret d'accueil digital (bonnes adresses Giens)</li>
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
                    <li>✓ Contrôle qualité après chaque ménage</li>
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
                    <li>✓ Annonces SEO optimisées</li>
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
                    <li>✓ Déclaration touristique Hyères</li>
                    <li>✓ Assurance RC pro 5M€</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Secteurs couverts : La Capte, Almanarre, Giens village, Ayguade
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Nous intervenons sur l'<strong>ensemble de la commune d'Hyères et de la presqu'île de Giens</strong>, avec une expertise particulière sur les secteurs premium recherchés par les voyageurs :
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="font-bold text-gray-900 mb-2">🏖️ La Capte</div>
                <p className="text-sm text-gray-600">Plages familiales, vue mer, proximité Port Saint-Pierre. Idéal familles et retraités.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="font-bold text-gray-900 mb-2">🏄 Almanarre</div>
                <p className="text-sm text-gray-600">Spot mondial windsurf/kitesurf. Clientèle sportive internationale toute l'année.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="font-bold text-gray-900 mb-2">🏡 Giens Village</div>
                <p className="text-sm text-gray-600">Charme provençal, calme, villas avec vue mer panoramique. Clientèle premium.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="font-bold text-gray-900 mb-2">⚓ Ayguade / Madrague</div>
                <p className="text-sm text-gray-600">Plages protégées, départ Porquerolles. Familles et amoureux de la nature.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Contactez votre conciergerie à Hyères et Giens
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Propriétaire d'une villa ou maison à Hyères, Giens, La Capte ou Almanarre ? Obtenez une <strong>estimation personnalisée gratuite</strong> de vos revenus locatifs en moins de 24h. Notre équipe se déplace pour visiter votre bien, analyser son potentiel et vous conseiller sur la meilleure stratégie de tarification.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl mb-8">
              <p className="text-gray-800">
                <strong>💡 Estimation gratuite :</strong> Remplissez le formulaire de contact ci-dessous ou appelez-nous directement. Nous vous proposons une visite de votre villa à Hyères/Giens sous 48h avec simulation de revenus détaillée basée sur le marché local actuel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Hyères */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Questions fréquentes - Conciergerie Hyères & Giens
          </h2>
          
          <div className="space-y-4">
            {faqHyeres.map((item, index) => (
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
            Propriétaire d'une villa à Hyères ou Giens ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Rejoignez nos 7 propriétaires qui nous font confiance et génèrent jusqu'à 35% de revenus en plus
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