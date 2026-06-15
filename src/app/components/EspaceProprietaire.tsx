import { motion } from 'motion/react';
import {
  TrendingUp,
  Shield,
  Clock,
  Euro,
  CheckCircle,
  Calculator,
  Calendar,
  Award,
  Users,
  Camera,
  Key,
  Home,
  Star,
  MapPin,
  Zap,
  Smartphone,
} from 'lucide-react';

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

const steps = [
  { step: '1', title: 'Contact & Estimation', description: 'Vous nous contactez, nous échangeons sur votre projet et estimons votre potentiel locatif', icon: Users },
  { step: '2', title: 'Visite Terrain & Photos Pro', description: 'Nous visitons votre bien et réalisons un shooting photo professionnel inclus dans nos services', icon: Camera },
  { step: '3', title: 'Mise en Ligne Premium', description: 'Annonces optimisées SEO sur 50+ plateformes avec tarification dynamique', icon: Zap },
  { step: '4', title: 'Gestion Complète', description: 'Réservations, communication, check-in/out via boîte à clé ou serrure connectée, états des lieux', icon: Key },
  { step: '5', title: 'Service Terrain 7j/7', description: 'Ménage coordonné, interventions urgentes, conciergerie sur place', icon: Home },
];

export function EspaceProprietaire() {
  return (
    <div className="pt-20">

      {/* Hero Section */}
      <section className="relative text-white py-24" style={{ background: 'linear-gradient(135deg, #1a2744 0%, #0AADA3 100%)' }}>
        <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}></div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.4) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium" style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.35)', color: '#C9A84C' }}>
              <Users className="w-5 h-5" />
              Espace Propriétaire
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Confiez-nous Votre Bien,<br />Profitez de Vos Revenus
            </h2>

            <p className="text-xl text-white/75 max-w-3xl mx-auto mb-8">
              Gestion haut de gamme 100% clé en main. <span style={{ color: '#C9A84C' }} className="font-semibold">Villa 20% TTC</span> · <span style={{ color: '#4ECDC4' }} className="font-semibold">Appartement 25% TTC</span> — de Sanary à Hyères.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #A07D2A)', boxShadow: '0 8px 24px rgba(201,168,76,0.4)' }}
              >
                Demander une estimation gratuite
              </button>
              <button
                onClick={() => document.getElementById('comparaison')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
                style={{ background: 'rgba(255,255,255,0.12)', border: '2px solid rgba(255,255,255,0.35)' }}
              >
                Voir la simulation
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1a2744' }}>
              Pourquoi Nous Confier Votre Bien ?
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
              Des avantages concrets pour optimiser vos revenus et simplifier votre gestion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {avantages.map((avantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="p-8 rounded-2xl border transition-all hover:-translate-y-1"
                style={{ background: 'linear-gradient(135deg, #f8f6f0 0%, #ffffff 100%)', border: '1px solid rgba(201,168,76,0.2)', boxShadow: '0 2px 16px rgba(26,39,68,0.05)' }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #0AADA3, #087A72)' }}>
                  <avantage.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#1a2744' }}>
                  {avantage.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                  {avantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparaison : Seul vs Clés du Cabanon */}
      <section id="comparaison" className="py-24" style={{ background: 'linear-gradient(180deg, #f8f6f0 0%, #ffffff 100%)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-semibold" style={{ background: 'rgba(10,173,163,0.10)', color: '#087A72', border: '1px solid rgba(10,173,163,0.25)' }}>
              <Calculator className="w-4 h-4" />
              Comparaison Détaillée
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1a2744' }}>
              Gérer Seul ou Avec Nous ?
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
              Simulation sur une villa à Sanary-sur-Mer — les chiffres parlent d'eux-mêmes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Gestion Seul */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl p-8 bg-white border-2"
              style={{ borderColor: 'rgba(220,38,38,0.25)', boxShadow: '0 4px 24px rgba(220,38,38,0.06)' }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full font-bold text-sm mb-6 text-white" style={{ background: '#ef4444' }}>
                Gestion Seul
              </div>
              <div className="text-4xl font-black mb-1" style={{ color: '#1a2744' }}>1 500€</div>
              <div className="text-sm mb-6" style={{ color: '#6b7280' }}>Revenus locatifs mensuels moyens</div>

              <div className="space-y-3 mb-6 text-sm">
                {[
                  { label: 'Tarif non optimisé', value: '– 300€', neg: true },
                  { label: 'Temps passé mensuel', value: '15h', neg: true },
                  { label: 'Gestion des urgences', value: 'À votre charge', neg: true },
                  { label: 'Optimisation tarifaire', value: 'Aucune', neg: true },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                    <span style={{ color: '#374151' }}>{row.label}</span>
                    <span className="font-semibold text-red-500">{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-xl p-4" style={{ background: '#fef2f2', border: '1px solid rgba(220,38,38,0.2)' }}>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm" style={{ color: '#1a2744' }}>Revenus nets annuels</span>
                  <span className="text-2xl font-black" style={{ color: '#1a2744' }}>18 000€</span>
                </div>
                <div className="text-xs mt-1" style={{ color: '#ef4444' }}>+ stress + 15h/mois + risques</div>
              </div>
            </motion.div>

            {/* Clés du Cabanon Premium */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl p-8 text-white relative"
              style={{ background: 'linear-gradient(135deg, #1a2744 0%, #2a3f6f 100%)', boxShadow: '0 20px 60px rgba(26,39,68,0.25)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}></div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm mb-6" style={{ background: 'rgba(201,168,76,0.2)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.4)' }}>
                <Star className="w-4 h-4 fill-[#C9A84C]" />
                Clés du Cabanon — Formule Premium
              </div>
              <div className="text-4xl font-black mb-1 text-white">2 100€</div>
              <div className="text-sm mb-6 text-white/60">Revenus mensuels optimisés (+40%)</div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full w-fit mb-6 text-sm" style={{ background: 'rgba(10,173,163,0.2)' }}>
                <MapPin className="w-3.5 h-3.5 text-[#4ECDC4]" />
                <span className="text-[#4ECDC4] font-medium">Sanary à Hyères</span>
              </div>

              <div className="space-y-3 mb-6 text-sm">
                {[
                  { label: 'Tarification dynamique', value: '+600€', pos: true },
                  { label: 'Votre temps mensuel', value: '0h', pos: true },
                  { label: 'Gestion urgences terrain', value: 'Inclus', pos: true },
                  { label: 'Communication 24h/24', value: 'Inclus', pos: true },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                    <span className="text-white/75">{row.label}</span>
                    <span className="font-semibold" style={{ color: '#4ECDC4' }}>{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-xl p-4 mb-4" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
                <div className="flex justify-between items-center mb-2 text-sm">
                  <span className="text-white/70">Revenus annuels</span>
                  <span className="font-bold text-white">25 200€</span>
                </div>
                <div className="flex justify-between items-center mb-3 text-sm">
                  <span className="text-white/70">Commission 20% villa</span>
                  <span className="font-bold text-white">– 5 040€</span>
                </div>
                <div className="border-t pt-3" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm text-white">Revenus nets annuels</span>
                    <span className="text-3xl font-black" style={{ color: '#C9A84C' }}>20 160€</span>
                  </div>
                  <div className="text-xs mt-1" style={{ color: '#4ECDC4' }}>+2 160€ vs gestion seule · 0h de votre temps</div>
                </div>
              </div>

              <div className="rounded-xl p-3 text-sm" style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)' }}>
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#C9A84C' }} />
                  <div style={{ color: '#C9A84C' }}>
                    <strong>Gestion 100% complète :</strong> clés, ménage, états des lieux, interventions 7j/7
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 rounded-2xl p-5 text-sm"
            style={{ background: 'rgba(10,173,163,0.06)', border: '1px solid rgba(10,173,163,0.2)' }}
          >
            <p style={{ color: '#374151' }}>
              <strong style={{ color: '#087A72' }}>Simulation basée sur :</strong> Villa 3 chambres à Sanary-sur-Mer, revenus moyens de 1 500€/mois en gestion autonome.
              Avec notre tarification dynamique : +40% de revenus mensuels. Les chiffres sont indicatifs.{' '}
              <strong style={{ color: '#087A72' }}>Contactez-nous pour une estimation personnalisée gratuite.</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Processus Premium */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1a2744' }}>
              Comment Ça Marche ?
            </h2>
            <p className="text-lg" style={{ color: '#6b7280' }}>5 étapes simples, une tranquillité totale</p>
          </motion.div>

          <div
            className="rounded-2xl px-6 py-4 mb-10 text-center text-white"
            style={{ background: 'linear-gradient(135deg, #0AADA3, #087A72)' }}
          >
            <div className="flex items-center justify-center gap-3">
              <Star className="w-7 h-7" style={{ color: '#C9A84C' }} />
              <h3 className="text-2xl font-bold">Formule Premium — Villa 20% TTC · Appartement 25% TTC</h3>
            </div>
            <p className="mt-1 text-sm text-white/75">De Sanary à Hyères · Gestion 100% terrain incluse</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div
                  className="p-6 rounded-2xl h-full border transition-all hover:-translate-y-1"
                  style={{ background: 'linear-gradient(135deg, #f8f6f0, #ffffff)', border: '1px solid rgba(201,168,76,0.2)', boxShadow: '0 2px 12px rgba(26,39,68,0.05)' }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-base font-bold mb-3 text-white"
                    style={{ background: 'linear-gradient(135deg, #C9A84C, #A07D2A)' }}
                  >
                    {item.step}
                  </div>
                  <item.icon className="w-7 h-7 mb-3" style={{ color: '#0AADA3' }} />
                  <h4 className="text-base font-bold mb-2" style={{ color: '#1a2744' }}>{item.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{item.description}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <span style={{ color: '#C9A84C', fontSize: '1.4rem' }}>→</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, #1a2744 0%, #2a3f6f 100%)' }}>
        <div className="absolute left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Prêt à Optimiser Vos Revenus ?
            </h2>
            <p className="text-xl mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Demandez votre estimation gratuite et découvrez le potentiel de votre bien
            </p>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 500);
              }}
              className="px-10 py-5 rounded-full text-white font-bold text-lg transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #C9A84C, #A07D2A)', boxShadow: '0 8px 32px rgba(201,168,76,0.4)' }}
            >
              Demander mon estimation gratuite
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
