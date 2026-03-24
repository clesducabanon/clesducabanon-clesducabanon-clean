import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Shield, 
  Clock, 
  Euro, 
  CheckCircle, 
  AlertCircle,
  Calculator,
  Calendar,
  Zap,
  Award,
  Users,
  Building,
  X,
  Check,
  Star,
  Globe,
  MapPin,
  Camera,
  Key,
  Home,
  Smartphone
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const avantages = [
  {
    icon: Euro,
    title: 'Revenus Optimisés',
    description: 'Tarification dynamique selon la demande, les événements et la saisonnalité',
  },
  {
    icon: Shield,
    title: 'Exonération Taxe d\'Habitation',
    description: 'Possible pour les meublés de tourisme classés loués en courte durée (nous contacter pour étudier votre cas)',
  },
  {
    icon: Clock,
    title: 'Gain de Temps Total',
    description: 'Nous gérons 100% : messages, ménage, check-in/out, urgences',
  },
  {
    icon: CheckCircle,
    title: 'Paiements Sécurisés',
    description: 'Garantie de paiement et vérification systématique des voyageurs',
  },
  {
    icon: Calendar,
    title: 'Calendrier Synchronisé',
    description: 'Multi-plateformes (Airbnb, Booking, etc.) pour éviter les doubles réservations',
  },
  {
    icon: Award,
    title: 'Photos Professionnelles',
    description: 'Mise en valeur de votre bien avec shooting photo de qualité',
  },
];

export function EspaceProprietaire() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Users className="w-5 h-5" />
              <span className="font-medium">Espace Propriétaire</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Confiez-nous Votre Bien,<br />Profitez de Vos Revenus
            </h2>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Gestion professionnelle avec 2 formules adaptées : Premium 20% pour la Côte Varoise (Sanary à Hyères) ou Digitale 180€/mois partout en France.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:shadow-2xl transition-all"
              >
                Demander une estimation
              </button>
              <button
                onClick={() => document.getElementById('comparaison')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all"
              >
                Voir la comparaison
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Avantages Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pourquoi Nous Confier Votre Bien ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des avantages concrets pour optimiser vos revenus et simplifier votre gestion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {avantages.map((avantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all"
              >
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <avantage.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {avantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {avantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparaison 3 Colonnes : Seul vs Premium 20% vs Digitale 180€ */}
      <section id="comparaison" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full mb-4">
              <Calculator className="w-5 h-5" />
              <span className="font-medium">Comparaison Détaillée</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quelle Formule Choisir ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exemple concret pour un appartement 2 chambres à Sanary-sur-Mer
            </p>
          </motion.div>

          {/* Desktop: 3 Columns */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Colonne 1: Gestion Seul */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border-2 border-red-200 rounded-3xl p-6 relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <div className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                  Gestion Seul
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">1 500€</div>
                  <div className="text-sm text-gray-600">Revenus locatifs mensuels moyens</div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-start">
                      <span className="text-gray-700">Tarif fixe (non optimisé)</span>
                      <span className="text-red-600 font-medium">-300€</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-gray-700">Temps passé</span>
                      <span className="text-red-600 font-medium">15h/mois</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-gray-700">Annulations</span>
                      <span className="text-red-600 font-medium">Risque</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-gray-700">Services terrain</span>
                      <Check className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-gray-900 text-sm">Revenus nets annuels</span>
                    <span className="text-2xl font-bold text-gray-900">18 000€</span>
                  </div>
                  <div className="text-xs text-red-700">
                    + Stress + Temps perdu + Risques
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Colonne 2: Premium 20% */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-3xl p-6 text-white relative shadow-2xl transform scale-105"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold flex items-center gap-2 text-sm">
                  <Star className="w-4 h-4" />
                  Premium 20%
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <div className="text-3xl font-bold mb-2">2 100€</div>
                  <div className="text-sm text-blue-100">Revenus mensuels optimisés</div>
                </div>

                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 w-fit text-xs">
                  <MapPin className="w-3 h-3" />
                  <span>Sanary & Hyères</span>
                </div>

                <div className="border-t border-white/20 pt-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-start">
                      <span className="text-blue-50">Tarification dynamique</span>
                      <span className="text-green-300 font-medium">+600€</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-blue-50">Temps passé</span>
                      <span className="text-green-300 font-medium">0h</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-blue-50">Paiements garantis</span>
                      <Check className="w-5 h-5 text-green-300" />
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-blue-50">Services terrain</span>
                      <Check className="w-5 h-5 text-green-300" />
                    </div>
                  </div>
                </div>

                <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4">
                  <div className="mb-3 text-sm">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-blue-100">Revenus annuels</span>
                      <span className="font-bold">25 200€</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-100">Commission 20%</span>
                      <span className="font-bold">- 5 040€</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-white/30 pt-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-sm">Revenus nets annuels</span>
                      <span className="text-3xl font-bold">20 160€</span>
                    </div>
                    <div className="text-xs text-green-300 font-medium">
                      +2 160€ vs gestion seule
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-400/20 border border-yellow-400/50 rounded-xl p-3">
                  <div className="flex items-start gap-2 text-xs">
                    <TrendingUp className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                    <div>
                      <strong>Gestion 100% complète :</strong> Clés, ménage, états des lieux, intervention 7j/7
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Colonne 3: Digitale 180€ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-6 text-white relative shadow-2xl"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <div className="bg-white text-purple-600 px-4 py-2 rounded-full font-bold flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4" />
                  Digitale 180€
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <div className="text-3xl font-bold mb-2">2 100€</div>
                  <div className="text-sm text-purple-100">Revenus mensuels optimisés</div>
                </div>

                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 w-fit text-xs">
                  <Globe className="w-3 h-3" />
                  <span>France & International</span>
                </div>

                <div className="border-t border-white/20 pt-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-start">
                      <span className="text-purple-50">Tarification dynamique</span>
                      <span className="text-green-300 font-medium">+600€</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-purple-50">Temps passé digital</span>
                      <span className="text-green-300 font-medium">0h</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-purple-50">Paiements garantis</span>
                      <Check className="w-5 h-5 text-green-300" />
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-purple-50">Services terrain</span>
                      <X className="w-5 h-5 text-gray-300" />
                    </div>
                  </div>
                </div>

                <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4">
                  <div className="mb-3 text-sm">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-purple-100">Revenus annuels</span>
                      <span className="font-bold">25 200€</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-purple-100">180€ x 12 mois</span>
                      <span className="font-bold">- 2 160€</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-white/30 pt-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-sm">Revenus nets annuels</span>
                      <span className="text-3xl font-bold">23 040€</span>
                    </div>
                    <div className="text-xs text-green-300 font-medium">
                      +5 040€ vs gestion seule
                    </div>
                  </div>
                </div>

                <div className="bg-orange-400/20 border border-orange-400/50 rounded-xl p-3">
                  <div className="flex items-start gap-2 text-xs">
                    <AlertCircle className="w-5 h-5 text-orange-300 flex-shrink-0" />
                    <div>
                      <strong>À votre charge :</strong> Remise clés, ménage, états des lieux
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile: Stacked Cards */}
          <div className="lg:hidden space-y-6">
            {/* Gestion Seul - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-red-200 rounded-3xl p-6"
            >
              <div className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm text-center mb-6 w-fit mx-auto">
                Gestion Seul
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2 text-center">1 500€/mois</div>
              <div className="text-sm text-gray-600 text-center mb-6">Revenus moyens</div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">18 000€/an</div>
                  <div className="text-xs text-red-700">+ Stress + 15h/mois</div>
                </div>
              </div>
            </motion.div>

            {/* Premium 20% - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-3xl p-6 text-white shadow-2xl"
            >
              <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm text-center mb-6 w-fit mx-auto flex items-center gap-2">
                <Star className="w-4 h-4" />
                Premium 20%
              </div>
              <div className="text-3xl font-bold mb-2 text-center">2 100€/mois</div>
              <div className="text-sm text-blue-100 text-center mb-4">Sanary & Hyères</div>
              <div className="bg-white/20 border border-white/30 rounded-xl p-4">
                <div className="text-center mb-3">
                  <div className="text-2xl font-bold mb-1">20 160€/an</div>
                  <div className="text-xs text-green-300">+2 160€ vs seul · 0h de votre temps</div>
                </div>
                <div className="text-xs text-center">Gestion 100% complète avec terrain</div>
              </div>
            </motion.div>

            {/* Digitale 180€ - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-6 text-white shadow-2xl"
            >
              <div className="bg-white text-purple-600 px-4 py-2 rounded-full font-bold text-sm text-center mb-6 w-fit mx-auto flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Digitale 180€
              </div>
              <div className="text-3xl font-bold mb-2 text-center">2 100€/mois</div>
              <div className="text-sm text-purple-100 text-center mb-4">France & International</div>
              <div className="bg-white/20 border border-white/30 rounded-xl p-4">
                <div className="text-center mb-3">
                  <div className="text-2xl font-bold mb-1">23 040€/an</div>
                  <div className="text-xs text-green-300">+5 040€ vs seul · 0h digital</div>
                </div>
                <div className="text-xs text-center">Vous gérez clés & ménage</div>
              </div>
            </motion.div>
          </div>

          {/* Note explicative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-6"
          >
            <p className="text-sm text-gray-700">
              <strong>📊 Simulation basée sur :</strong> Appartement 2 chambres à Sanary-sur-Mer, 70m², revenus moyens de 2 000€/mois en gestion autonome. 
              Avec notre tarification dynamique : +40% de revenus mensuels (2 800€). Les chiffres sont indicatifs et dépendent de nombreux facteurs (emplacement, équipements, saison, etc.). 
              <strong> Contactez-nous pour une estimation personnalisée gratuite de votre bien.</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notre processus */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comment Ça Marche ?
            </h2>
            <p className="text-xl text-gray-600">
              Deux processus adaptés selon votre formule
            </p>
          </motion.div>

          {/* Premium Process */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-4 rounded-2xl mb-8 text-center"
            >
              <div className="flex items-center justify-center gap-3">
                <Star className="w-8 h-8 text-yellow-300" />
                <h3 className="text-3xl font-bold">Formule Premium 20% - Sanary & Hyères</h3>
              </div>
              <p className="mt-2 text-blue-100">Gestion 100% complète avec intervention terrain</p>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-6">
              {[
                {
                  step: '1',
                  title: 'Contact & Estimation',
                  description: 'Vous nous contactez, nous échangeons sur votre projet et estimons votre potentiel locatif',
                  icon: Users,
                },
                {
                  step: '2',
                  title: 'Visite Terrain & Photos Pro',
                  description: 'Nous visitons votre bien et réalisons un shooting photo professionnel (170€ en option)',
                  icon: Camera,
                },
                {
                  step: '3',
                  title: 'Mise en Ligne Premium',
                  description: 'Annonces optimisées SEO sur 50+ plateformes avec tarification dynamique',
                  icon: Zap,
                },
                {
                  step: '4',
                  title: 'Gestion Complète',
                  description: 'Réservations, communication, check-in/out, remise clés, états des lieux',
                  icon: Key,
                },
                {
                  step: '5',
                  title: 'Service Terrain 7j/7',
                  description: 'Ménage coordonné, interventions urgentes, conciergerie sur place',
                  icon: Home,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-2xl border border-blue-200 h-full">
                    <div className="bg-gradient-to-br from-blue-500 to-teal-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-3">
                      {item.step}
                    </div>
                    <item.icon className="w-8 h-8 text-blue-600 mb-3" />
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <div className="text-blue-300 text-2xl">→</div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Digital Process */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-2xl mb-8 text-center"
            >
              <div className="flex items-center justify-center gap-3">
                <Zap className="w-8 h-8 text-yellow-300" />
                <h3 className="text-3xl font-bold">Formule Digitale 180€ - France & International</h3>
              </div>
              <p className="mt-2 text-purple-100">Gestion digitale optimisée, vous gérez le terrain</p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: '1',
                  title: 'Contact & Dossier',
                  description: 'Vous nous contactez et envoyez vos photos + description de votre bien',
                  icon: Users,
                },
                {
                  step: '2',
                  title: 'Photos Pro (optionnel)',
                  description: 'Shooting photo professionnel disponible en option à 170€ selon votre localisation',
                  icon: Camera,
                },
                {
                  step: '3',
                  title: 'Mise en Ligne & Optimisation',
                  description: 'Création d\'annonces premium sur 50+ plateformes avec tarification dynamique',
                  icon: Zap,
                },
                {
                  step: '4',
                  title: 'Gestion Digitale',
                  description: 'Communication 24/7, réservations, calendrier. Vous gérez clés, ménage, check-in/out',
                  icon: Smartphone,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200 h-full">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-3">
                      {item.step}
                    </div>
                    <item.icon className="w-8 h-8 text-purple-600 mb-3" />
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <div className="text-purple-300 text-2xl">→</div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à Optimiser Vos Revenus ?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Demandez votre estimation gratuite et découvrez le potentiel de votre bien
            </p>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
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