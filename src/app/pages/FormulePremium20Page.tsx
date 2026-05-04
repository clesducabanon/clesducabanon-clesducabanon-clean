import { motion } from 'motion/react';
import { CheckCircle, TrendingUp, MapPin, Shield, Star, Users, Euro, Clock, Phone, Award, Sparkles, Home } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';
import { EstimationModal } from '../components/EstimationModal';

export function FormulePremium20Page() {
  const [isEstimationModalOpen, setIsEstimationModalOpen] = useState(false);

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1683135595153-9b621c152fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMHNhbmFyeSUyMGZyYW5jZSUyMG1lZGl0ZXJyYW5lYW58ZW58MXx8fHwxNzczNzc1ODMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Villa de luxe avec piscine Sanary-sur-Mer"
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
              className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/40 px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-yellow-100 font-semibold">Formule Premium</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
            >
              Gestion Conciergerie 20%
              <span className="block mt-2 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Sanary-sur-Mer à Hyères
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed"
            >
              Gestion <strong className="font-bold text-yellow-300">100% complète</strong> de votre villa ou appartement de standing avec intervention terrain. 
              <span className="block mt-2 text-lg text-white/85">
                De Sanary-sur-Mer à Hyères en passant par Toulon, Six-Fours-les-Plages et la presqu'île de Giens.
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
                href="/#tarifs"
                className="bg-white/10 backdrop-blur-md border-2 border-white/40 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
              >
                Comparer les formules
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="text-blue-900 font-semibold">Zone d'intervention Premium</span>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Expertise locale du Var
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Notre équipe intervient dans les zones les plus prisées de la Côte Méditerranéenne varoise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { ville: 'Sanary-sur-Mer', description: 'Port provençal authentique', biens: '16 biens' },
              { ville: 'Six-Fours-les-Plages', description: 'Plages paradisiaques', biens: '17 biens' },
              { ville: 'Toulon', description: 'Ville maritime dynamique', biens: '2 biens' },
              { ville: 'Hyères / Giens', description: 'Presqu\'île préservée', biens: '7 biens' },
            ].map((zone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-blue-100"
              >
                <MapPin className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-lg text-gray-900 mb-2">{zone.ville}</h3>
                <p className="text-gray-600 text-sm mb-3">{zone.description}</p>
                <div className="bg-blue-50 rounded-full px-3 py-1 inline-block">
                  <span className="text-blue-700 font-semibold text-xs">{zone.biens}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services inclus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Tout est inclus dans les 20%
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Aucun frais caché, aucune mauvaise surprise. 20% TTC de vos revenus locatifs pour une gestion 100% clé en main.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: 'Check-in / Check-out personnalisés',
                description: 'Accueil chaleureux de vos voyageurs avec remise des clés et visite du bien',
                color: 'blue'
              },
              {
                icon: Users,
                title: 'Ménage professionnel après chaque départ',
                description: 'Équipe dédiée avec protocole de nettoyage 5 étoiles',
                color: 'teal'
              },
              {
                icon: Shield,
                title: 'Gestion complète Airbnb, Booking.com',
                description: 'Optimisation des annonces, photos pro, réponses 24/7',
                color: 'green'
              },
              {
                icon: TrendingUp,
                title: 'Tarification dynamique intelligente',
                description: 'Algorithme propriétaire pour maximiser vos revenus',
                color: 'orange'
              },
              {
                icon: Clock,
                title: 'Conciergerie 7j/7',
                description: 'Intervention rapide en cas de problème ou demande voyageur',
                color: 'purple'
              },
              {
                icon: Award,
                title: 'Assurance & Garanties',
                description: 'RC pro + garantie dommages incluses',
                color: 'pink'
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:scale-105"
              >
                <div className={`bg-gradient-to-br from-${service.color}-400 to-${service.color}-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi 20% */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">
              Pourquoi choisir la formule 20% ?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Le meilleur rapport qualité-prix pour une gestion sans contrainte
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
            >
              <div className="text-6xl font-black text-yellow-300 mb-4">+35%</div>
              <h3 className="font-bold text-xl mb-3">Revenus optimisés</h3>
              <p className="text-white/80">
                Grâce à notre tarification dynamique et notre expertise du marché local, nos propriétaires gagnent en moyenne 35% de revenus supplémentaires.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
            >
              <div className="text-6xl font-black text-yellow-300 mb-4">0h</div>
              <h3 className="font-bold text-xl mb-3">Temps passé</h3>
              <p className="text-white/80">
                Nous gérons absolument tout de A à Z. Vous n'avez rien à faire, juste à recevoir vos revenus chaque mois.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
            >
              <div className="text-6xl font-black text-yellow-300 mb-4">4.9</div>
              <h3 className="font-bold text-xl mb-3">Note moyenne</h3>
              <p className="text-white/80">
                Nos biens obtiennent systématiquement le statut Superhôte Airbnb grâce à notre service d'excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-xl text-gray-700">42 propriétaires en Formule Premium</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sophie M.',
                ville: 'Sanary-sur-Mer',
                type: 'Villa 4 chambres',
                avis: 'En 6 mois, mes revenus ont augmenté de 40% par rapport à ma gestion en direct. L\'équipe est ultra réactive et professionnelle.',
                note: 5
              },
              {
                name: 'Jean-Luc P.',
                ville: 'Six-Fours',
                type: 'Appartement vue mer',
                avis: 'Je vis à Paris, impossible pour moi de gérer. Les Clés du Cabanon s\'occupent de tout, je reçois mes revenus sans stress.',
                note: 5
              },
              {
                name: 'Marie D.',
                ville: 'Hyères',
                type: 'Villa piscine',
                avis: 'Superhôte depuis 2 ans grâce à leur gestion impeccable. Les voyageurs adorent l\'accueil personnalisé.',
                note: 5
              },
            ].map((temoignage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(temoignage.note)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{temoignage.avis}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-bold text-gray-900">{temoignage.name}</div>
                  <div className="text-sm text-gray-600">{temoignage.type} • {temoignage.ville}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Prêt à maximiser vos revenus locatifs ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Obtenez une estimation gratuite et personnalisée en moins de 24h
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsEstimationModalOpen(true)}
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-3 hover:scale-105"
            >
              Estimer mes revenus gratuitement
              <TrendingUp className="w-5 h-5" />
            </button>
            <a
              href="tel:+33612345678"
              className="bg-white/10 backdrop-blur-md border-2 border-white/40 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Nous appeler
            </a>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Conciergerie 20% TTC : La formule premium pour villas et appartements de standing Sanary-Hyères
            </h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Gestion Airbnb complète avec intervention terrain dans le Var
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Notre <strong>formule Premium à 20% TTC</strong> est spécialement conçue pour les propriétaires de <strong>villas bord de mer</strong>, appartements de standing et biens d'exception situés entre <strong>Sanary-sur-Mer et Hyères</strong>. Avec plus de <strong>42 biens gérés</strong> dans le Var, nous sommes la conciergerie de référence pour la gestion locative haut de gamme sur la Côte Méditerranéenne.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Pourquoi choisir notre gestion Airbnb à 20% ?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Contrairement aux agences traditionnelles qui facturent 25% à 35%, notre commission de <strong>20% TTC</strong> inclut TOUS les services : check-in/check-out personnalisés, ménage professionnel, gestion des annonces Airbnb et Booking.com, tarification dynamique, conciergerie 7j/7, assurances et garanties. Aucun frais supplémentaire, aucune mauvaise surprise.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Zone d'intervention : Sanary-sur-Mer, Six-Fours, Toulon, Hyères et Giens
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Notre équipe locale intervient dans les zones les plus prisées du Var : le charmant port de <strong>Sanary-sur-Mer</strong>, les plages paradisiaques de <strong>Six-Fours-les-Plages</strong>, la ville maritime de <strong>Toulon</strong> et la presqu'île préservée d'<strong>Hyères / Giens</strong>. Cette expertise locale nous permet d'optimiser vos tarifs et d'offrir un service d'accueil irréprochable.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              +35% de revenus locatifs en moyenne
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Grâce à notre <strong>tarification dynamique</strong> basée sur l'analyse en temps réel du marché local (événements, météo, concurrence), nos propriétaires génèrent en moyenne <strong>35% de revenus supplémentaires</strong> par rapport à une gestion en direct. Notre objectif : maximiser votre taux d'occupation et vos revenus tout en maintenant une note moyenne de 4.9/5.
            </p>
          </div>
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