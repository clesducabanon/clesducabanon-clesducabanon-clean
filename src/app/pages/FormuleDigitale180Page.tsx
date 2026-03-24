import { motion } from 'motion/react';
import { CheckCircle, TrendingUp, Globe, Shield, Star, Laptop, Euro, Clock, Zap, BarChart3, MessageSquare, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function FormuleDigitale180Page() {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1662116137244-b7c6fdc1ac35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYXB0b3AlMjBkaWdpdGFsJTIwbm9tYWQlMjBiZWFjaHxlbnwxfHx8fDE3NzM3NzU5MTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Gestion digitale Airbnb partout en France"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-pink-800/85 to-purple-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-purple-400/20 backdrop-blur-sm border border-purple-400/40 px-4 py-2 rounded-full mb-6"
            >
              <Globe className="w-5 h-5 text-purple-300" />
              <span className="text-purple-100 font-semibold">Formule Digitale</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
            >
              Gestion Digitale 180€/mois
              <span className="block mt-2 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                France & International
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed"
            >
              <strong className="font-bold text-purple-300">Gestion 100% digitale</strong> de votre bien situé partout en France ou à l'international. 
              <span className="block mt-2 text-lg text-white/85">
                Tarif fixe mensuel, idéal si vous ne souhaitez pas d'intervention terrain ou si votre bien est hors zone Premium.
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
                className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all flex items-center gap-2 hover:scale-105"
              >
                Démarrer maintenant
                <Zap className="w-5 h-5" />
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

      {/* Tarif simple et transparent */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Un tarif simple et transparent
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Pas de pourcentage sur vos revenus, juste un tarif fixe mensuel
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border-4 border-purple-200 p-10 text-center">
              <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
                <Euro className="w-5 h-5 text-purple-600" />
                <span className="text-purple-900 font-semibold">Prix fixe</span>
              </div>
              
              <div className="mb-6">
                <div className="text-7xl font-black text-gray-900 mb-2">180€</div>
                <div className="text-2xl text-gray-600">par mois TTC</div>
              </div>

              <div className="bg-purple-50 rounded-2xl p-6 mb-8">
                <div className="text-lg text-gray-700 mb-4">
                  <strong className="text-purple-700">543 propriétaires</strong> en France et à l'international nous font confiance
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="font-bold text-gray-900">4.9/5</span>
                </div>
              </div>

              <ul className="text-left space-y-3 mb-8">
                {[
                  'Aucune commission sur vos revenus',
                  'Engagement mensuel sans tacite reconduction',
                  'Résiliation possible à tout moment',
                  'Tous les services digitaux inclus'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all"
              >
                Commencer dès maintenant
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services inclus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Tout est inclus dans les 180€/mois
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Une gestion digitale complète pour maximiser vos revenus sans intervention terrain
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Laptop,
                title: 'Gestion complète Airbnb & Booking.com',
                description: 'Création et optimisation des annonces, photos professionnelles, synchronisation calendriers',
                color: 'purple'
              },
              {
                icon: MessageSquare,
                title: 'Messagerie voyageurs 24/7',
                description: 'Réponses automatiques et personnalisées en français, anglais, italien, espagnol',
                color: 'pink'
              },
              {
                icon: BarChart3,
                title: 'Tarification dynamique intelligente',
                description: 'Algorithme propriétaire pour ajuster vos tarifs en temps réel selon le marché',
                color: 'blue'
              },
              {
                icon: Calendar,
                title: 'Gestion du calendrier',
                description: 'Synchronisation multi-plateformes, éviter les doubles réservations',
                color: 'teal'
              },
              {
                icon: Shield,
                title: 'Assurance & Garanties',
                description: 'Vérification des profils voyageurs, gestion des litiges et réclamations',
                color: 'green'
              },
              {
                icon: TrendingUp,
                title: 'Rapports mensuels détaillés',
                description: 'Statistiques de performance, taux d\'occupation, revenus optimisés',
                color: 'orange'
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

      {/* Qui peut bénéficier */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">
              Pour qui est faite la Formule Digitale ?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Cette formule s'adresse aux propriétaires dans ces situations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Bien hors zone Premium',
                description: 'Votre villa ou appartement est situé en dehors de notre zone d\'intervention terrain (Sanary-Hyères)',
                icon: Globe
              },
              {
                title: 'Gestion autonome du terrain',
                description: 'Vous gérez vous-même le ménage et l\'accueil, mais souhaitez déléguer la partie digitale',
                icon: Laptop
              },
              {
                title: 'Propriétaire à l\'international',
                description: 'Votre bien est situé en France ou à l\'étranger, vous ne pouvez pas gérer au quotidien',
                icon: Globe
              },
              {
                title: 'Optimisation des revenus',
                description: 'Vous voulez bénéficier de notre tarification dynamique pour maximiser vos gains',
                icon: TrendingUp
              },
              {
                title: 'Gain de temps',
                description: 'Vous n\'avez plus le temps de gérer les messages, calendriers et annonces',
                icon: Clock
              },
              {
                title: 'Multi-propriétés',
                description: 'Vous avez plusieurs biens et souhaitez centraliser la gestion digitale',
                icon: BarChart3
              },
            ].map((cas, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
              >
                <cas.icon className="w-12 h-12 text-purple-300 mb-4" />
                <h3 className="font-bold text-xl mb-3">{cas.title}</h3>
                <p className="text-white/80">{cas.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparaison formules */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Formule Digitale vs Formule Premium
            </h2>
            <p className="text-xl text-gray-700">Quelle formule choisir ?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Formule Digitale */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
                  <Laptop className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-900 font-semibold">Digitale</span>
                </div>
                <div className="text-5xl font-black text-gray-900 mb-2">180€</div>
                <div className="text-gray-600">par mois TTC</div>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Gestion digitale complète</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Messagerie 24/7</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Tarification dynamique</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">France & International</span>
                </li>
                <li className="flex items-start gap-3 opacity-40">
                  <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">Pas d'intervention terrain</span>
                </li>
              </ul>
            </div>

            {/* Formule Premium */}
            <div className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl shadow-xl border-2 border-yellow-400 p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <div className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                  POPULAIRE
                </div>
              </div>
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                  <Star className="w-5 h-5 text-yellow-300" />
                  <span className="text-white font-semibold">Premium</span>
                </div>
                <div className="text-5xl font-black text-white mb-2">20%</div>
                <div className="text-white/90">de vos revenus TTC</div>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Gestion digitale complète</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Check-in/out personnalisés</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Ménage professionnel</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Conciergerie 7j/7</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Zone Sanary-Hyères uniquement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Démarrez votre gestion digitale dès aujourd'hui
          </h2>
          <p className="text-xl text-white/90 mb-8">
            180€/mois tout compris • Sans engagement • Résiliation à tout moment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-white text-purple-600 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-3 hover:scale-105"
            >
              Commencer maintenant
              <Zap className="w-5 h-5" />
            </button>
            <a
              href="/#tarifs"
              className="bg-white/10 backdrop-blur-md border-2 border-white/40 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3"
            >
              Comparer les formules
            </a>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Gestion Airbnb digitale 180€/mois : La solution pour propriétaires partout en France et à l'international
            </h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Qu'est-ce que la Formule Digitale ?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Notre <strong>Formule Digitale à 180€/mois TTC</strong> est la solution idéale pour les propriétaires qui souhaitent déléguer la <strong>gestion digitale complète</strong> de leur bien Airbnb sans intervention terrain. Avec plus de <strong>543 biens gérés</strong> partout en France et à l'international, nous sommes experts de la gestion locative à distance.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Pourquoi choisir un tarif fixe plutôt qu'un pourcentage ?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Contrairement aux conciergeries traditionnelles qui prélèvent 20% à 35% de vos revenus, notre <strong>tarif fixe de 180€/mois</strong> vous permet de garder 100% de vos revenus locatifs (hors nos honoraires fixes). Plus vous louez cher, plus vous gagnez, sans augmentation de nos frais.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Services inclus dans la gestion digitale
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              La Formule Digitale inclut la <strong>création et optimisation des annonces Airbnb et Booking.com</strong>, la <strong>messagerie voyageurs 24/7</strong> multilingue (français, anglais, italien, espagnol), la <strong>tarification dynamique</strong> pour maximiser vos revenus, la synchronisation des calendriers, et des rapports mensuels détaillés. Tout est géré à distance par notre équipe d'experts.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Pour quels types de biens ?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              La Formule Digitale est parfaite pour les <strong>appartements, maisons et villas</strong> situés partout en France (Paris, Lyon, Marseille, Bordeaux, Nice, Toulouse...) ou à l'international. Si votre bien est dans le Var entre Sanary et Hyères, découvrez plutôt notre <strong>Formule Premium 20%</strong> avec intervention terrain complète.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function X({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
