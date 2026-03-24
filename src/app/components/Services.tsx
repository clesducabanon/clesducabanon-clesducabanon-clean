import { motion } from 'motion/react';
import { Star, Zap, MapPin, Users, Globe, Key, Home, MessageCircle, Camera, Calendar, Shield, DollarSign, Sparkles, Smartphone } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
            Nos Services
          </div>
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            2 Formules pour Tous les Propriétaires
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Que vous soyez à Sanary, Hyères ou partout en France, nous avons la solution adaptée à votre situation
          </p>
        </motion.div>

        {/* Two Main Offers */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Premium 20% */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-10 h-10 text-yellow-300" />
                <span className="text-3xl font-bold">Formule Premium</span>
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-6xl font-bold">20%</span>
                <span className="text-2xl">TTC</span>
              </div>

              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 w-fit mb-6">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">De Sanary à Hyères</span>
              </div>

              <h3 className="text-xl font-bold mb-4">🏆 Gestion 100% Complète</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold">Services Digitaux Complets</p>
                    <p className="text-sm text-blue-100">Diffusion, tarification dynamique, communication 24/7</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <Key className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold">+ Intervention Terrain</p>
                    <p className="text-sm text-blue-100">Remise clés, états des lieux, coordination ménage</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold">Zéro Stress</p>
                    <p className="text-sm text-blue-100">On s'occupe de TOUT de A à Z</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5" />
                  <span className="font-bold">42 propriétaires nous font confiance</span>
                </div>
              </div>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-white text-blue-600 px-6 py-4 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg"
              >
                Demander un devis Premium
              </button>
            </div>
          </motion.div>

          {/* Gestion Digitale 180€ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-10 h-10 text-yellow-300" />
                <span className="text-3xl font-bold">Gestion Digitale</span>
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-6xl font-bold">180€</span>
                <span className="text-2xl">/mois</span>
              </div>

              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 w-fit mb-6">
                <Globe className="w-4 h-4" />
                <span className="font-medium">France & International</span>
              </div>

              <h3 className="text-xl font-bold mb-4">🌐 Gestion à Distance Performante</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold">Services Digitaux Complets</p>
                    <p className="text-sm text-purple-100">Diffusion, tarification dynamique, communication 24/7</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <DollarSign className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold">Optimisation Revenus</p>
                    <p className="text-sm text-purple-100">Prix dynamiques et stratégie de diffusion</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <Home className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold">Vous Gérez le Terrain</p>
                    <p className="text-sm text-purple-100">Remise clés et ménage à votre charge</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5" />
                  <span className="font-bold">543 propriétaires nous font confiance</span>
                </div>
              </div>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-white text-purple-600 px-6 py-4 rounded-full font-bold hover:bg-purple-50 transition-all shadow-lg"
              >
                Demander un devis Digitale
              </button>
            </div>
          </motion.div>
        </div>

        {/* Detailed Services Common to Both */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            📱 Services Digitaux Inclus dans les 2 Formules
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Smartphone className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Diffusion Multi-Plateformes</h4>
              <p className="text-sm text-gray-600">Airbnb, Booking.com, et autres</p>
            </div>

            <div className="text-center p-4">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Tarification Dynamique</h4>
              <p className="text-sm text-gray-600">Prix optimisés en temps réel</p>
            </div>

            <div className="text-center p-4">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Communication 24/7</h4>
              <p className="text-sm text-gray-600">Réponses rapides aux voyageurs</p>
            </div>

            <div className="text-center p-4">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Camera className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Photos Pro</h4>
              <p className="text-sm text-gray-600">Option à partir de 170€</p>
            </div>

            <div className="text-center p-4">
              <div className="bg-gradient-to-br from-indigo-500 to-blue-500 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Calendrier Synchronisé</h4>
              <p className="text-sm text-gray-600">Gestion automatisée</p>
            </div>

            <div className="text-center p-4">
              <div className="bg-gradient-to-br from-teal-500 to-cyan-500 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Vérification Voyageurs</h4>
              <p className="text-sm text-gray-600">Sécurité maximale</p>
            </div>

            <div className="text-center p-4">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Optimisation Annonces</h4>
              <p className="text-sm text-gray-600">Maximisation visibilité</p>
            </div>

            <div className="text-center p-4">
              <div className="bg-gradient-to-br from-pink-500 to-rose-500 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Rapport Mensuel</h4>
              <p className="text-sm text-gray-600">Suivi détaillé performances</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Quelle Formule pour Votre Bien ?
            </h3>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Contactez-nous pour une estimation gratuite et découvrez la formule adaptée à votre situation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all"
              >
                Demander une estimation gratuite
              </button>
              <button
                onClick={() => document.getElementById('tarifs')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all"
              >
                Comparer les formules
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}