import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export function Temoignages() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full mb-4">
            <Star className="w-5 h-5" />
            <span className="font-medium">Témoignages</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ils Nous Font Confiance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les avis authentiques de nos propriétaires et voyageurs satisfaits
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-3xl text-white text-center shadow-xl">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Star className="w-8 h-8 fill-current" />
              <div className="text-5xl font-bold">4.9</div>
            </div>
            <div className="text-xl font-bold mb-2">Note moyenne Google</div>
            <p className="text-yellow-100">Sur plus de 50 avis vérifiés</p>
          </div>

          <div className="bg-gradient-to-br from-pink-500 to-red-500 p-8 rounded-3xl text-white text-center shadow-xl">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Star className="w-8 h-8 fill-current" />
              <div className="text-5xl font-bold">100%</div>
            </div>
            <div className="text-xl font-bold mb-2">Superhôte Airbnb</div>
            <p className="text-pink-100">Maintenu depuis plusieurs années</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-3xl text-white text-center shadow-xl">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Quote className="w-8 h-8" />
              <div className="text-5xl font-bold">95%</div>
            </div>
            <div className="text-xl font-bold mb-2">Clients satisfaits</div>
            <p className="text-blue-100">Recommandent nos services</p>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              Avis de Nos Clients
            </h3>
            <p className="text-gray-600">
              Découvrez les expériences de nos propriétaires et voyageurs
            </p>
          </div>

          {/* Reviews */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-blue-300 mb-3" />
              <p className="text-gray-700 mb-4 italic">
                "Service impeccable ! Guillaume et Erika sont très professionnels et réactifs. 
                Mes revenus locatifs ont augmenté de 35% depuis que je leur ai confié mon bien."
              </p>
              <p className="font-bold text-gray-900">Sophie L.</p>
              <p className="text-sm text-gray-600">Propriétaire à Hyères</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-purple-300 mb-3" />
              <p className="text-gray-700 mb-4 italic">
                "Nous avons passé un séjour formidable ! L'accueil était chaleureux, le logement 
                impeccable et la conciergerie ultra disponible. On reviendra !"
              </p>
              <p className="font-bold text-gray-900">Marc & Julie D.</p>
              <p className="text-sm text-gray-600">Voyageurs - Août 2024</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-green-300 mb-3" />
              <p className="text-gray-700 mb-4 italic">
                "Enfin une conciergerie sérieuse ! Transparence totale, espace propriétaire 
                au top, et surtout des résultats. Je recommande à 100%."
              </p>
              <p className="font-bold text-gray-900">Jean-Pierre M.</p>
              <p className="text-sm text-gray-600">Propriétaire à Sanary</p>
            </div>
          </div>

          {/* Additional Reviews Row */}
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-2xl border border-orange-100">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-orange-300 mb-3" />
              <p className="text-gray-700 mb-4 italic">
                "Villa parfaitement entretenue, accueil chaleureux et communication rapide. 
                Un excellent séjour en famille sur la Côte d'Azur !"
              </p>
              <p className="font-bold text-gray-900">Catherine R.</p>
              <p className="text-sm text-gray-600">Voyageurs - Juillet 2024</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-2xl border border-indigo-100">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-indigo-300 mb-3" />
              <p className="text-gray-700 mb-4 italic">
                "Gestion professionnelle et sans stress. Les tableaux de bord sont clairs, 
                les paiements ponctuels. Je suis ravi d'avoir choisi Les Clés du Cabanon."
              </p>
              <p className="font-bold text-gray-900">Thomas B.</p>
              <p className="text-sm text-gray-600">Propriétaire à Bandol</p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-red-50 p-6 rounded-2xl border border-rose-100">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-rose-300 mb-3" />
              <p className="text-gray-700 mb-4 italic">
                "Location de qualité avec une vue imprenable. Le check-in était fluide et 
                toutes nos questions ont eu des réponses rapides. Parfait !"
              </p>
              <p className="font-bold text-gray-900">Alexandre & Emma P.</p>
              <p className="text-sm text-gray-600">Voyageurs - Septembre 2024</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}