import { motion } from 'motion/react';
import { ArrowLeft, Check, X, Star, Zap, MapPin, Users, Globe, Key, Home, MessageCircle, Camera, Calendar, Shield, DollarSign, Sparkles, Smartphone, TrendingUp, AlertCircle } from 'lucide-react';
import { SEOHead } from '../SEOHead';

interface NosServicesProps {
  setCurrentPage: (page: string) => void;
}

export function NosServices({ setCurrentPage }: NosServicesProps) {
  return (
    <>
      <SEOHead
        title="Nos Services Conciergerie Airbnb | Premium 20% vs Digitale 180€"
        description="Comparez nos 2 formules de gestion Airbnb : Premium 20% TTC (Sanary/Hyères) avec gestion terrain complète, ou Digitale 180€/mois (France) pour gestion à distance. 585 clients satisfaits."
        canonicalUrl="https://www.clesducabanon.fr/services"
      />

      <div className="pt-20">
        {/* Back Button */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <button
              onClick={() => setCurrentPage('home')}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour à l'accueil
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-5 h-5" />
                Nos Formules
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                2 Formules Adaptées à Vos Besoins
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Que vous soyez à Sanary, Hyères ou partout en France, nous avons la solution pour maximiser vos revenus locatifs
              </p>
              <div className="mt-8 inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm px-6 py-3 rounded-full font-bold">
                <Users className="w-5 h-5" />
                <span>585 propriétaires nous font confiance</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Detailed Comparison Table */}
        <section id="comparison" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Tableau Comparatif Détaillé
              </h2>
              <p className="text-xl text-gray-600">
                Tous les services en un coup d'œil
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
            >
              {/* Header Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                <div className="hidden lg:block p-8 bg-gray-50"></div>
                
                {/* Premium Header */}
                <div className="p-8 bg-gradient-to-br from-blue-500 to-teal-500 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="w-8 h-8 text-yellow-300" />
                    <span className="text-2xl font-bold">Premium 20%</span>
                  </div>
                  <div className="text-sm opacity-90 mb-2">Sanary & Hyères</div>
                  <div className="text-xs opacity-75">42 propriétaires</div>
                </div>

                {/* Digitale Header */}
                <div className="p-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-8 h-8 text-yellow-300" />
                    <span className="text-2xl font-bold">Digitale 180€</span>
                  </div>
                  <div className="text-sm opacity-90 mb-2">France & International</div>
                  <div className="text-xs opacity-75">543 propriétaires</div>
                </div>
              </div>

              {/* Services Rows */}
              <div className="divide-y divide-gray-200">
                {/* Section: Services Digitaux */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 bg-gradient-to-r from-blue-50 to-purple-50">
                  <div className="p-4 lg:col-span-3 flex items-center justify-center gap-2">
                    <Smartphone className="w-5 h-5 text-blue-600" />
                    <span className="font-bold text-gray-900 text-lg">Services Digitaux (Communs aux 2 formules)</span>
                  </div>
                </div>

                {[
                  { icon: Smartphone, label: 'Diffusion multi-plateformes 50+ sites' },
                  { icon: DollarSign, label: 'Tarification dynamique optimisée' },
                  { icon: MessageCircle, label: 'Communication voyageurs 24/7' },
                  { icon: Calendar, label: 'Gestion calendrier synchronisé' },
                  { icon: Camera, label: 'Photos professionnelles (170€ option)' },
                  { icon: Shield, label: 'Vérification des voyageurs' },
                  { icon: TrendingUp, label: 'Rapport mensuel détaillé' },
                ].map((service, index) => (
                  <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    <div className="p-6 flex items-center gap-3 bg-gray-50">
                      <service.icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <span className="font-medium text-gray-900">{service.label}</span>
                    </div>
                    <div className="p-6 flex items-center justify-center bg-blue-50">
                      <Check className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="p-6 flex items-center justify-center bg-purple-50">
                      <Check className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>
                ))}

                {/* Section: Services Terrain */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 bg-gradient-to-r from-orange-50 to-red-50">
                  <div className="p-4 lg:col-span-3 flex items-center justify-center gap-2">
                    <Key className="w-5 h-5 text-orange-600" />
                    <span className="font-bold text-gray-900 text-lg">Services Terrain (Intervention Physique)</span>
                  </div>
                </div>

                {[
                  { icon: Key, label: 'Remise et récupération des clés' },
                  { icon: Home, label: 'États des lieux détaillés' },
                  { icon: Sparkles, label: 'Coordination ménage et blanchisserie' },
                  { icon: AlertCircle, label: 'Intervention sur place 7j/7' },
                ].map((service, index) => (
                  <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    <div className="p-6 flex items-center gap-3 bg-gray-50">
                      <service.icon className="w-6 h-6 text-orange-600 flex-shrink-0" />
                      <span className="font-medium text-gray-900">{service.label}</span>
                    </div>
                    <div className="p-6 flex items-center justify-center bg-blue-50">
                      <Check className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="p-6 flex items-center justify-center bg-purple-50">
                      <X className="w-8 h-8 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 bg-gray-50">
                <div className="hidden lg:block p-6"></div>
                <div className="p-6 bg-blue-50">
                  <button
                    onClick={() => {
                      setCurrentPage('home');
                      setTimeout(() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-4 rounded-full font-bold hover:shadow-2xl transition-all"
                  >
                    Choisir Premium
                  </button>
                </div>
                <div className="p-6 bg-purple-50">
                  <button
                    onClick={() => {
                      setCurrentPage('home');
                      setTimeout(() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-full font-bold hover:shadow-2xl transition-all"
                  >
                    Choisir Digitale
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SEO Enriched Content Sections */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                Pourquoi Choisir Les Clés du Cabanon pour la Gestion de Votre Location Saisonnière ?
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Premium 20% Détails */}
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-10 rounded-3xl border border-blue-200">
                  <div className="flex items-center gap-3 mb-6">
                    <Star className="w-10 h-10 text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      Formule Premium 20% - Sanary-sur-Mer & Hyères
                    </h3>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Notre <strong>formule Premium à 20% TTC</strong> est conçue pour les propriétaires de <strong>villas et appartements haut de gamme entre Sanary-sur-Mer et Hyères</strong> 
                    qui souhaitent une <strong>gestion 100% clé en main</strong> sans aucune charge mentale.
                  </p>

                  <h4 className="font-bold text-gray-900 mb-4">✨ Ce qui est inclus :</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span><strong>Shooting photo professionnel</strong> en option à 170€ pour mettre en valeur votre bien bord de mer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span><strong>Diffusion multi-plateformes</strong> : création et optimisation d'annonces sur 50+ sites (plateformes de réservation, Office du Tourisme)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span><strong>Tarification dynamique intelligente</strong> basée sur la demande locale, les événements Var (Voiles de Toulon, Festival de Hyères) et la saison</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span><strong>Communication voyageurs 24/7</strong> en français, anglais, allemand pour maximiser vos réservations internationales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span><strong>Remise des clés physique</strong>, check-in/out personnalisé avec accueil des voyageurs sur place</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span><strong>États des lieux entrée/sortie</strong> détaillés avec photos pour protéger votre bien</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span><strong>Coordination ménage et blanchisserie</strong> avec notre réseau de professionnels agréés Var</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span><strong>Intervention d'urgence 7j/7</strong> : plomberie, électricité, serrurerie sur toute la Côte Varoise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span><strong>Rapport mensuel détaillé</strong> avec statistiques, revenus et recommandations d'optimisation</span>
                    </li>
                  </ul>

                  <div className="mt-8 bg-blue-100 border-l-4 border-blue-600 p-6 rounded-r-xl">
                    <p className="text-gray-900">
                      <strong>🎯 Résultat garanti :</strong> +35% de revenus en moyenne vs gestion autonome grâce à notre expertise du marché local Sanary-Hyères.
                    </p>
                  </div>
                </div>

                {/* Digitale 180€ Détails */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-10 rounded-3xl border border-purple-200">
                  <div className="flex items-center gap-3 mb-6">
                    <Zap className="w-10 h-10 text-purple-600" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      Formule Digitale 180€ - France & International
                    </h3>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Notre <strong>formule Digitale à 180€/mois</strong> s'adresse aux propriétaires partout en <strong>France métropolitaine, DOM-TOM, Maroc et International</strong> 
                    qui préfèrent gérer eux-mêmes le terrain tout en bénéficiant d'une <strong>optimisation digitale professionnelle</strong>.
                  </p>

                  <h4 className="font-bold text-gray-900 mb-4">🌐 Ce qui est inclus :</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                      <span><strong>Shooting photo professionnel optionnel</strong> à 170€ selon votre localisation (disponible dans toute la France)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                      <span><strong>Création et optimisation annonces</strong> sur 50+ plateformes avec descriptions SEO multilingues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                      <span><strong>Tarification dynamique</strong> adaptée à votre marché local (Paris, Lyon, Bordeaux, Marseille, Martinique, Marrakech...)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                      <span><strong>Gestion complète du calendrier</strong> synchronisé multi-plateformes pour éviter les surréservations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                      <span><strong>Communication voyageurs 24/7</strong> : réponse aux messages, gestion des demandes, support multilangue</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                      <span><strong>Vérification des voyageurs</strong> : contrôle identité, historique, solvabilité pour votre sécurité</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                      <span><strong>Gestion des réservations</strong> : confirmations, paiements, annulations selon les règles de chaque plateforme</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                      <span><strong>Rapport mensuel détaillé</strong> avec analyse performance et recommandations tarifaires</span>
                    </li>
                  </ul>

                  <div className="mt-8 bg-orange-100 border-l-4 border-orange-600 p-6 rounded-r-xl">
                    <p className="text-gray-900 mb-2">
                      <strong>⚠️ À votre charge :</strong>
                    </p>
                    <ul className="text-gray-800 text-sm space-y-1">
                      <li>• Remise et récupération des clés</li>
                      <li>• Ménage et blanchisserie</li>
                      <li>• États des lieux entrée/sortie</li>
                      <li>• Interventions terrain si nécessaire</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SEO FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                Questions Fréquentes sur Nos Formules de Gestion
              </h2>

              <div className="space-y-6">
                {[
                  {
                    q: 'Quelle formule choisir entre Premium 20% et Digitale 180€ ?',
                    a: 'Si votre bien se situe entre Sanary-sur-Mer et Hyères et que vous souhaitez une gestion 100% sans intervention de votre part, choisissez la <strong>Premium 20%</strong>. Si vous êtes ailleurs en France/International et préférez gérer le terrain vous-même, optez pour la <strong>Digitale 180€</strong>.',
                  },
                  {
                    q: 'Comment est calculée la commission de 20% ?',
                    a: 'Les 20% TTC sont calculés sur vos revenus locatifs mensuels <strong>après déduction des frais Airbnb/Booking</strong>. Exemple : pour 3 000€ de réservations après commissions plateformes, vous versez 600€ et conservez 2 400€ nets.',
                  },
                  {
                    q: 'La formule Digitale 180€ est-elle vraiment valable partout ?',
                    a: 'Oui ! Nous gérons des biens en <strong>France métropolitaine</strong> (Paris, Lyon, Bordeaux, Marseille, Nice...), <strong>DOM-TOM</strong> (Martinique, Guadeloupe, Réunion...) et <strong>Maroc</strong> (Marrakech, Essaouira...). La gestion digitale fonctionne de la même façon partout.',
                  },
                  {
                    q: 'Les photos professionnelles sont-elles obligatoires ?',
                    a: 'Non, elles sont <strong>optionnelles à 170€</strong>. Cependant, nous les recommandons fortement car elles augmentent en moyenne de +45% le taux de réservation. Nos photographes sont spécialisés en immobilier haut de gamme et valorisation bord de mer.',
                  },
                  {
                    q: 'Puis-je bloquer mon logement quand je veux pour usage personnel ?',
                    a: 'Absolument ! Avec les 2 formules, vous accédez à un <strong>espace propriétaire</strong> où vous pouvez bloquer vos dates à tout moment. Vous restez maître de votre calendrier.',
                  },
                  {
                    q: 'Comment se passe le changement de formule ?',
                    a: 'Vous pouvez passer de Digitale à Premium (ou inversement) à tout moment avec un préavis de 30 jours. Contactez-nous pour adapter votre contrat selon l\'évolution de vos besoins.',
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                      <span className="text-blue-600 text-2xl">Q</span>
                      {faq.q}
                    </h3>
                    <p 
                      className="text-gray-700 leading-relaxed pl-10"
                      dangerouslySetInnerHTML={{ __html: faq.a }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Témoignages rapides */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                Ils Ont Choisi Nos Services
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: 'Marie L.',
                    location: 'Villa 4 chambres, Sanary-sur-Mer',
                    formule: 'Premium 20%',
                    testimonial: 'Formule Premium parfaite ! Je ne m\'occupe plus de rien. Mes revenus ont augmenté de 40% la première année. L\'équipe gère absolument tout.',
                    color: 'from-blue-500 to-teal-500',
                  },
                  {
                    name: 'Thomas D.',
                    location: 'Appartement 2 chambres, Paris 11ème',
                    formule: 'Digitale 180€',
                    testimonial: 'Avec la formule Digitale, je gère les clés et le ménage, mais tout le reste est optimisé. Mon taux d\'occupation est passé de 60% à 92% !',
                    color: 'from-purple-500 to-pink-500',
                  },
                  {
                    name: 'Sophie M.',
                    location: 'Villa bord de mer, Hyères',
                    formule: 'Premium 20%',
                    testimonial: 'Les photos professionnelles ont fait toute la différence. Ma villa se loue maintenant 450€/nuit en haute saison vs 280€ avant. Investissement rentabilisé !',
                    color: 'from-blue-500 to-teal-500',
                  },
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-3xl border border-gray-200"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6 italic">
                      "{testimonial.testimonial}"
                    </p>

                    <div className="border-t border-gray-300 pt-4">
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.location}</div>
                      <div className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${testimonial.color}`}>
                        {testimonial.formule}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Besoin d'Aide pour Choisir ?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contactez-nous pour une estimation gratuite et un conseil personnalisé
            </p>
            <button
              onClick={() => {
                setCurrentPage('home');
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all"
            >
              Demander un devis gratuit
            </button>
          </div>
        </section>
      </div>
    </>
  );
}