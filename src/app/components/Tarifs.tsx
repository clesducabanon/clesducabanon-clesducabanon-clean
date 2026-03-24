import { motion } from 'motion/react';
import { Check, Star, TrendingUp, Zap, MapPin, Users, Globe, Home, Smartphone, Key, Calendar, MessageCircle, Camera, DollarSign, FileText, Sparkles, AlertCircle } from 'lucide-react';

export function Tarifs() {
  return (
    <section id="tarifs" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full mb-4">
            <TrendingUp className="w-4 h-4" />
            Nos Offres
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            2 Formules Adaptées à Vos Besoins
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez la gestion qui correspond à votre situation géographique et vos attentes
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-bold">
            <Users className="w-5 h-5" />
            <span>585 propriétaires nous font confiance</span>
          </div>
        </motion.div>

        {/* Comparison Table - Desktop */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
          >
            {/* Header Row */}
            <div className="grid grid-cols-3 gap-0">
              <div className="p-8 bg-gray-50"></div>
              
              {/* Premium Header */}
              <div className="p-8 bg-gradient-to-br from-blue-500 to-teal-500 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-8 h-8 text-yellow-300" />
                  <span className="text-2xl font-bold">Formule Premium</span>
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-6xl font-bold">20%</span>
                  <span className="text-xl">TTC</span>
                </div>
                <p className="text-blue-100 text-sm mb-4">Commission sur vos revenus</p>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 w-fit mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">De Sanary à Hyères</span>
                </div>
                <div className="flex items-center gap-2 bg-yellow-400/30 backdrop-blur-sm rounded-full px-3 py-2 w-fit">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-bold">42 propriétaires</span>
                </div>
              </div>

              {/* Digitale Header */}
              <div className="p-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-yellow-300" />
                  <span className="text-2xl font-bold">Gestion Digitale</span>
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-6xl font-bold">180€</span>
                  <span className="text-xl">/mois</span>
                </div>
                <p className="text-purple-100 text-sm mb-4">Tarif mensuel fixe</p>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 w-fit mb-2">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">France & International</span>
                </div>
                <div className="flex items-center gap-2 bg-yellow-400/30 backdrop-blur-sm rounded-full px-3 py-2 w-fit">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-bold">543 propriétaires</span>
                </div>
              </div>
            </div>

            {/* Services Rows */}
            <div className="divide-y divide-gray-200">
              {/* Diffusion multi-plateformes */}
              <div className="grid grid-cols-3 gap-0">
                <div className="p-6 flex items-center gap-3 bg-gray-50">
                  <Smartphone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900">Diffusion Airbnb, Booking, etc.</span>
                </div>
                <div className="p-6 flex items-center justify-center bg-blue-50">
                  <Check className="w-8 h-8 text-blue-600" />
                </div>
                <div className="p-6 flex items-center justify-center bg-purple-50">
                  <Check className="w-8 h-8 text-purple-600" />
                </div>
              </div>

              {/* Tarification dynamique */}
              <div className="grid grid-cols-3 gap-0">
                <div className="p-6 flex items-center gap-3 bg-gray-50">
                  <DollarSign className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900">Tarification dynamique optimisée</span>
                </div>
                <div className="p-6 flex items-center justify-center bg-blue-50">
                  <Check className="w-8 h-8 text-blue-600" />
                </div>
                <div className="p-6 flex items-center justify-center bg-purple-50">
                  <Check className="w-8 h-8 text-purple-600" />
                </div>
              </div>

              {/* Communication voyageurs */}
              <div className="grid grid-cols-3 gap-0">
                <div className="p-6 flex items-center gap-3 bg-gray-50">
                  <MessageCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900">Communication voyageurs 24/7</span>
                </div>
                <div className="p-6 flex items-center justify-center bg-blue-50">
                  <Check className="w-8 h-8 text-blue-600" />
                </div>
                <div className="p-6 flex items-center justify-center bg-purple-50">
                  <Check className="w-8 h-8 text-purple-600" />
                </div>
              </div>

              {/* Gestion calendrier */}
              <div className="grid grid-cols-3 gap-0">
                <div className="p-6 flex items-center gap-3 bg-gray-50">
                  <Calendar className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900">Gestion calendrier synchronisé</span>
                </div>
                <div className="p-6 flex items-center justify-center bg-blue-50">
                  <Check className="w-8 h-8 text-blue-600" />
                </div>
                <div className="p-6 flex items-center justify-center bg-purple-50">
                  <Check className="w-8 h-8 text-purple-600" />
                </div>
              </div>

              {/* Photos pro */}
              <div className="grid grid-cols-3 gap-0">
                <div className="p-6 flex items-center gap-3 bg-gray-50">
                  <Camera className="w-6 h-6 text-pink-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900">Photos professionnelles</span>
                </div>
                <div className="p-6 flex items-center justify-center bg-blue-50">
                  <Check className="w-8 h-8 text-blue-600" />
                </div>
                <div className="p-6 flex items-center justify-center bg-purple-50">
                  <Check className="w-8 h-8 text-purple-600" />
                </div>
              </div>

              {/* Rapport mensuel */}
              <div className="grid grid-cols-3 gap-0">
                <div className="p-6 flex items-center gap-3 bg-gray-50">
                  <FileText className="w-6 h-6 text-orange-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900">Rapport mensuel détaillé</span>
                </div>
                <div className="p-6 flex items-center justify-center bg-blue-50">
                  <Check className="w-8 h-8 text-blue-600" />
                </div>
                <div className="p-6 flex items-center justify-center bg-purple-50">
                  <Check className="w-8 h-8 text-purple-600" />
                </div>
              </div>

              {/* DIVIDER - Services Terrain */}
              <div className="grid grid-cols-3 gap-0 bg-gradient-to-r from-blue-100 to-purple-100">
                <div className="p-4 col-span-3 flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-gray-900 text-lg">Services Terrain (Intervention Physique)</span>
                </div>
              </div>

              {/* Remise clés */}
              <div className="grid grid-cols-3 gap-0">
                <div className="p-6 flex items-center gap-3 bg-gray-50">
                  <Key className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900">Remise et récupération des clés</span>
                </div>
                <div className="p-6 flex items-center justify-center bg-blue-50">
                  <Check className="w-8 h-8 text-blue-600" />
                </div>
                <div className="p-6 flex items-center justify-center bg-purple-50">
                  <span className="text-2xl">❌</span>
                </div>
              </div>

              {/* États des lieux */}
              <div className="grid grid-cols-3 gap-0">
                <div className="p-6 flex items-center gap-3 bg-gray-50">
                  <FileText className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900">États des lieux détaillés</span>
                </div>
                <div className="p-6 flex items-center justify-center bg-blue-50">
                  <Check className="w-8 h-8 text-blue-600" />
                </div>
                <div className="p-6 flex items-center justify-center bg-purple-50">
                  <span className="text-2xl">❌</span>
                </div>
              </div>

              {/* Ménage coordonné */}
              <div className="grid grid-cols-3 gap-0">
                <div className="p-6 flex items-center gap-3 bg-gray-50">
                  <Home className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900">Ménage et blanchisserie coordonnés</span>
                </div>
                <div className="p-6 flex items-center justify-center bg-blue-50">
                  <Check className="w-8 h-8 text-blue-600" />
                </div>
                <div className="p-6 flex items-center justify-center bg-purple-50">
                  <span className="text-2xl">❌</span>
                </div>
              </div>

              {/* Intervention terrain */}
              <div className="grid grid-cols-3 gap-0">
                <div className="p-6 flex items-center gap-3 bg-gray-50">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900">Intervention sur place 7j/7</span>
                </div>
                <div className="p-6 flex items-center justify-center bg-blue-50">
                  <Check className="w-8 h-8 text-blue-600" />
                </div>
                <div className="p-6 flex items-center justify-center bg-purple-50">
                  <span className="text-2xl">❌</span>
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="grid grid-cols-3 gap-0">
              <div className="p-6 bg-gray-50"></div>
              <div className="p-6 bg-blue-50">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-4 rounded-full font-bold hover:from-blue-700 hover:to-teal-700 transition-all shadow-lg"
                >
                  Demander un devis Premium
                </button>
                <div className="mt-3 bg-yellow-400/20 border border-yellow-400/50 rounded-xl p-3 text-center">
                  <p className="text-xs text-gray-700">
                    💡 Ex: 1000€ revenus = 200€ commission + 800€ net pour vous
                  </p>
                </div>
              </div>
              <div className="p-6 bg-purple-50">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-full font-bold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
                >
                  Demander un devis Digitale
                </button>
                <div className="mt-3 bg-orange-400/20 border border-orange-400/50 rounded-xl p-3 text-center">
                  <p className="text-xs text-gray-700">
                    ⚠️ Vous gérez le terrain (clés, ménage, etc.)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {/* Premium Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-3xl p-8 text-white shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-8 h-8 text-yellow-300" />
              <span className="text-2xl font-bold">Formule Premium</span>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 w-fit mb-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">De Sanary à Hyères</span>
              </div>
              <div className="flex items-center gap-2 bg-yellow-400/30 backdrop-blur-sm rounded-full px-3 py-2 w-fit">
                <Users className="w-4 h-4" />
                <span className="text-sm font-bold">42 propriétaires</span>
              </div>
            </div>

            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-6xl font-bold">20%</span>
              <span className="text-xl">TTC</span>
            </div>
            <p className="text-blue-100 mb-6">Commission sur vos revenus locatifs</p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-4">
              <h3 className="font-bold mb-3">✨ Gestion 100% Complète :</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Diffusion + Tarification + Communication 24/7</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Remise clés + États des lieux</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Ménage et blanchisserie coordonnés</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Intervention terrain 7j/7</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Photos pro + Rapport mensuel</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-white text-blue-600 px-6 py-4 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg"
            >
              Demander un devis Premium
            </button>
          </motion.div>

          {/* Digitale Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-white shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-yellow-300" />
              <span className="text-2xl font-bold">Gestion Digitale</span>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 w-fit mb-2">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">France & International</span>
              </div>
              <div className="flex items-center gap-2 bg-yellow-400/30 backdrop-blur-sm rounded-full px-3 py-2 w-fit">
                <Users className="w-4 h-4" />
                <span className="text-sm font-bold">543 propriétaires</span>
              </div>
            </div>

            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-6xl font-bold">180€</span>
              <span className="text-xl">/mois</span>
            </div>
            <p className="text-purple-100 mb-6">Tarif mensuel fixe</p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-4">
              <h3 className="font-bold mb-3">📱 Services Digitaux :</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Diffusion + Tarification + Communication 24/7</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Gestion calendrier synchronisé</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Photos pro + Optimisation annonces</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Rapport mensuel + Support réactif</span>
                </div>
              </div>
            </div>

            <div className="bg-orange-400/20 backdrop-blur-sm border-2 border-orange-400/50 rounded-2xl p-3 mb-4">
              <p className="text-sm">
                ⚠️ <span className="font-bold">Sans intervention terrain :</span> Vous gérez les clés, ménage et états des lieux
              </p>
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-white text-purple-600 px-6 py-4 rounded-full font-bold hover:bg-purple-50 transition-all shadow-lg"
            >
              Demander un devis Digitale
            </button>
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-3">
            🎉 Aucun Frais de Mise en Service
          </h3>
          <p className="text-lg text-blue-100">
            Commencez sans investissement initial. Vous ne payez que sur vos revenus effectifs !
          </p>
        </motion.div>
      </div>
    </section>
  );
}