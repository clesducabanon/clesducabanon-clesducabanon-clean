import { motion } from 'motion/react';
import { CheckCircle, TrendingUp, MapPin, Star, Phone, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SEOHead } from '../components/SEOHead';
import { useState } from 'react';
import { EstimationModal } from '../components/EstimationModal';

export function ConciergerieSixFoursPage() {
  const [isEstimationModalOpen, setIsEstimationModalOpen] = useState(false);

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Conciergerie Six-Fours | Gestion Airbnb Villa 20% TTC"
        description="Conciergerie Six-Fours-les-Plages. 17 villas gérées. Gestion Airbnb 20%. Plages Le Brusc, Bonnegrâce. Superhôte 4.9/5 ⭐"
        keywords="conciergerie Six-Fours, gestion villa Six-Fours, gestion Airbnb Six-Fours-les-Plages, location saisonnière Six-Fours, villa Le Brusc, conciergerie prestige Var"
        canonicalUrl="https://www.clesducabanon.fr/conciergerie-six-fours"
      />
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1722515177905-930b3e2bcea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjByaXZpZXJhJTIwYmVhY2glMjBob3VzZXxlbnwxfHx8fDE3NzM3NzYwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Conciergerie Six-Fours-les-Plages"
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
              <span className="text-blue-100 font-semibold">Six-Fours-les-Plages</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
            >
              Conciergerie Six-Fours-les-Plages : Gestion Villa Airbnb 20%
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed"
            >
              Gestion <strong className="font-bold text-yellow-300">haut de gamme</strong> pour vos villas et appartements à Six-Fours-les-Plages. 
              <span className="block mt-2 text-lg text-white/85">
                Formule Premium 20% avec intervention terrain complète • 17 biens gérés
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
                Découvrir la formule 20%
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pourquoi Six-Fours */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Pourquoi Six-Fours-les-Plages ?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Des plages paradisiaques et un potentiel locatif exceptionnel
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: 'Plages de rêve',
                description: 'Brusc, Bonnegrâce, Coudoulière... Les plus belles plages du Var',
                stat: '12 plages'
              },
              {
                icon: TrendingUp,
                title: 'Fort taux d\'occupation',
                description: 'Destination prisée toute l\'année avec un taux d\'occupation moyen de 78%',
                stat: '78%'
              },
              {
                icon: Sparkles,
                title: 'Cadre préservé',
                description: 'Entre mer et collines, un environnement naturel exceptionnel',
                stat: 'Top 5 Var'
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-blue-100"
              >
                <div className="bg-gradient-to-br from-blue-400 to-teal-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black text-blue-600 mb-3">{item.stat}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Notre expertise à Six-Fours-les-Plages
            </h2>
            <p className="text-xl text-gray-700">
              12 biens gérés • Note moyenne 4.9/5 • Superhôte Airbnb
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              'Check-in/check-out personnalisés à votre villa',
              'Ménage professionnel après chaque départ',
              'Gestion complète Airbnb & Booking.com',
              'Tarification dynamique optimisée pour Six-Fours',
              'Intervention rapide 7j/7 en cas de besoin',
              'Photos professionnelles de votre bien',
              'Accueil chaleureux des voyageurs',
              'Conciergerie de luxe (courses, activités...)'
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-lg">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Votre villa à Six-Fours mérite le meilleur
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Estimation gratuite en moins de 24h
          </p>
          <button
            onClick={() => setIsEstimationModalOpen(true)}
            className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all inline-flex items-center gap-3 hover:scale-105"
          >
            Estimer mes revenus gratuitement
            <TrendingUp className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Conciergerie Airbnb Six-Fours-les-Plages : Gestion Premium 20% pour vos locations saisonnières
            </h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              La conciergerie de référence à Six-Fours-les-Plages
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les Clés du Cabanon est la <strong>conciergerie haut de gamme</strong> spécialisée dans la <strong>gestion Airbnb à Six-Fours-les-Plages</strong>. Avec <strong>12 villas et appartements gérés</strong> sur la commune, nous sommes experts du marché locatif local et connaissons parfaitement les attentes des voyageurs qui choisissent cette destination paradisiaque du Var.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Six-Fours-les-Plages : un potentiel locatif exceptionnel
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Avec ses <strong>12 plages de sable fin</strong> (Le Brusc, Bonnegrâce, La Coudoulière...), son cadre préservé entre mer et collines, et sa proximité avec Sanary-sur-Mer et Toulon, Six-Fours-les-Plages attire chaque année des milliers de voyageurs français et internationaux. Le <strong>taux d'occupation moyen</strong> des biens bien gérés atteint <strong>78%</strong>, avec des tarifs premium en haute saison.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Formule Premium 20% TTC : gestion complète avec intervention terrain
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Notre <strong>Formule Premium à 20% TTC</strong> comprend la gestion digitale complète (annonces Airbnb/Booking.com, messagerie 24/7, tarification dynamique) + l'intervention terrain (check-in/check-out personnalisés, ménage professionnel, conciergerie 7j/7). Vous ne faites rien, nous gérons absolument tout de A à Z.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Contactez votre conciergerie à Six-Fours-les-Plages
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Propriétaire d'une villa ou d'un appartement à Six-Fours-les-Plages ? Obtenez une <strong>estimation gratuite</strong> de vos revenus locatifs en moins de 24h. Notre équipe locale se déplace pour visiter votre bien et vous proposer une stratégie de location sur-mesure.
            </p>
          </div>
        </div>
      </section>

      {/* Estimation Modal */}
      <EstimationModal
        isOpen={isEstimationModalOpen}
        onClose={() => setIsEstimationModalOpen(false)}
        location="Six-Fours-les-Plages"
      />
    </div>
  );
}