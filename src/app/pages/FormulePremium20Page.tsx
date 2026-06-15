import { motion } from 'motion/react';
import { CheckCircle, TrendingUp, MapPin, Shield, Star, Users, Clock, Phone, Award, Sparkles, Home } from 'lucide-react';
import { useState } from 'react';
import { EstimationModal } from '../components/EstimationModal';

export function FormulePremium20Page() {
  const [isEstimationModalOpen, setIsEstimationModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section — sans image de fond */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-white">
        {/* Décor géométrique */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-8" style={{ background: 'radial-gradient(circle, #0AADA3, transparent 65%)' }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-6" style={{ background: 'radial-gradient(circle, #C9A84C, transparent 65%)' }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #1a2744 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold"
                style={{ background: 'rgba(201,168,76,0.12)', color: '#A07D2A', border: '1px solid rgba(201,168,76,0.3)' }}
              >
                <Sparkles className="w-4 h-4" />
                Formule Premium — Gestion Clé en Main
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-extrabold leading-tight mb-4"
                style={{ color: '#1a2744', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                Conciergerie Airbnb
                <br />
                <span style={{ color: '#C9A84C' }}>Villa 20% TTC</span>
                {' · '}
                <span style={{ color: '#0AADA3' }}>Appart 25% TTC</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg leading-relaxed mb-8"
                style={{ color: '#6b7280' }}
              >
                Gestion <strong style={{ color: '#1a2744' }}>100% complète</strong> de votre villa ou appartement de standing avec intervention terrain complète.
                De Sanary-sur-Mer à Hyères.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => setIsEstimationModalOpen(true)}
                  className="px-8 py-4 rounded-full font-bold text-base text-white hover:scale-105 transition-all flex items-center gap-2"
                  style={{ background: 'linear-gradient(135deg, #C9A84C, #A07D2A)', boxShadow: '0 8px 28px rgba(201,168,76,0.38)' }}
                >
                  Estimer mes revenus
                  <TrendingUp className="w-5 h-5" />
                </button>
                <a
                  href="tel:+33625401480"
                  className="px-8 py-4 rounded-full font-semibold text-base flex items-center gap-2 hover:scale-105 transition-all"
                  style={{ background: 'rgba(10,173,163,0.08)', color: '#0AADA3', border: '2px solid rgba(10,173,163,0.3)' }}
                >
                  <Phone className="w-5 h-5" />
                  Nous appeler
                </a>
              </motion.div>
            </div>

            {/* Right: tarif cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="rounded-3xl p-8 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a2744, #2a3f6f)', boxShadow: '0 20px 60px rgba(26,39,68,0.2)' }}>
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
                <div className="flex items-center gap-3 mb-3">
                  <Home className="w-6 h-6" style={{ color: '#C9A84C' }} />
                  <span className="font-bold text-white/80">Villa · Formule Premium</span>
                </div>
                <div className="text-7xl font-black" style={{ color: '#C9A84C' }}>20%</div>
                <div className="text-white/60 text-sm mt-1">TTC sur vos revenus locatifs effectifs</div>
                <div className="mt-4 text-xs text-white/50">Ex: 1 000€ → 200€ commission → <strong className="text-white/80">800€ pour vous</strong></div>
              </div>
              <div className="rounded-3xl p-8 text-white" style={{ background: 'linear-gradient(135deg, #0AADA3, #087A72)', boxShadow: '0 12px 40px rgba(10,173,163,0.22)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-white/80" />
                  <span className="font-bold text-white/80">Appartement · Formule Premium</span>
                </div>
                <div className="text-7xl font-black text-white">25%</div>
                <div className="text-white/60 text-sm mt-1">TTC sur vos revenus locatifs effectifs</div>
                <div className="mt-4 text-xs text-white/50">Ex: 1 000€ → 250€ commission → <strong className="text-white/80">750€ pour vous</strong></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-16" style={{ background: '#f8f6f0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-semibold"
              style={{ background: 'rgba(10,173,163,0.10)', color: '#087A72', border: '1px solid rgba(10,173,163,0.25)' }}
            >
              <MapPin className="w-4 h-4" />
              Zone d'intervention Premium
            </div>
            <h2 className="text-3xl font-extrabold mb-3" style={{ color: '#1a2744' }}>Expertise locale du Var</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
              Notre équipe intervient dans les zones les plus prisées de la Côte Méditerranéenne
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { ville: 'Sanary-sur-Mer', description: 'Port provençal authentique', biens: '16 biens' },
              { ville: 'Six-Fours-les-Plages', description: 'Plages paradisiaques', biens: '17 biens' },
              { ville: 'Toulon', description: 'Ville maritime dynamique', biens: '2 biens' },
              { ville: 'Hyères / Giens', description: "Presqu'île préservée", biens: '7 biens' },
            ].map((zone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 transition-all hover:-translate-y-1"
                style={{ border: '1px solid rgba(201,168,76,0.2)', boxShadow: '0 2px 16px rgba(26,39,68,0.06)' }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: 'linear-gradient(135deg, #0AADA3, #087A72)' }}>
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-base mb-1" style={{ color: '#1a2744' }}>{zone.ville}</h3>
                <p className="text-sm mb-3" style={{ color: '#6b7280' }}>{zone.description}</p>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'rgba(201,168,76,0.12)', color: '#A07D2A' }}>
                  {zone.biens}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services inclus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold mb-3" style={{ color: '#1a2744' }}>
              Tout inclus dans la Formule Premium
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
              Aucun frais caché, aucune mauvaise surprise —{' '}
              <span style={{ color: '#C9A84C' }} className="font-semibold">Villa 20% TTC</span>
              {' · '}
              <span style={{ color: '#0AADA3' }} className="font-semibold">Appartement 25% TTC</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Home, title: 'Check-in / Check-out sécurisés', description: 'Boîte à clé ou serrure connectée : obligatoire pour appartements, demandée pour villas. Accès autonome et sécurisé 24h/24.', gold: true },
              { icon: Users, title: 'Ménage professionnel après chaque départ', description: 'Équipe dédiée avec protocole de nettoyage 5 étoiles', gold: false },
              { icon: Shield, title: 'Gestion complète Airbnb, Booking.com', description: 'Optimisation des annonces, photos pro, réponses 24/7', gold: true },
              { icon: TrendingUp, title: 'Tarification dynamique intelligente', description: 'Algorithme propriétaire pour maximiser vos revenus', gold: false },
              { icon: Clock, title: 'Conciergerie 7j/7', description: 'Intervention rapide en cas de problème ou demande voyageur', gold: true },
              { icon: Award, title: 'Assurance & Garanties', description: 'RC pro + garantie dommages incluses', gold: false },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="rounded-2xl p-7 transition-all hover:-translate-y-1"
                style={{ background: 'linear-gradient(135deg, #f8f6f0, #ffffff)', border: '1px solid rgba(201,168,76,0.18)', boxShadow: '0 2px 16px rgba(26,39,68,0.05)' }}
              >
                <div
                  className="w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: service.gold ? 'linear-gradient(135deg, #C9A84C, #A07D2A)' : 'linear-gradient(135deg, #0AADA3, #087A72)' }}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: '#1a2744' }}>{service.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi la Formule Premium — fond navy premium */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a2744 0%, #0AADA3 100%)' }}>
        <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-white mb-3">
              Pourquoi choisir la Formule Premium ?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Le meilleur rapport qualité-prix pour une gestion sans contrainte
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { value: '+35%', label: 'Revenus optimisés', desc: 'Grâce à notre tarification dynamique et notre expertise du marché local.' },
              { value: '0h', label: 'Votre temps passé', desc: 'Nous gérons absolument tout de A à Z. Juste recevoir vos revenus.' },
              { value: '4.9/5', label: 'Note moyenne', desc: 'Nos biens obtiennent systématiquement le statut Superhôte Airbnb.' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl p-8"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(201,168,76,0.25)' }}
              >
                <div className="text-6xl font-black mb-3" style={{ color: '#C9A84C' }}>{stat.value}</div>
                <h3 className="font-bold text-lg text-white mb-2">{stat.label}</h3>
                <p className="text-white/65 text-sm">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20" style={{ background: '#f8f6f0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold mb-2" style={{ color: '#1a2744' }}>Ils nous font confiance</h2>
            <p className="text-lg" style={{ color: '#6b7280' }}>28 propriétaires en Formule Premium</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Sophie M.', ville: 'Sanary-sur-Mer', type: 'Villa 4 chambres', avis: 'En 6 mois, mes revenus ont augmenté de 40%. L\'équipe est ultra réactive et professionnelle.' },
              { name: 'Jean-Luc P.', ville: 'Six-Fours', type: 'Appartement vue mer', avis: 'Je vis à Paris, impossible pour moi de gérer. Les Clés du Cabanon s\'occupent de tout, je reçois mes revenus sans stress.' },
              { name: 'Marie D.', ville: 'Hyères', type: 'Villa piscine', avis: 'Superhôte depuis 2 ans grâce à leur gestion impeccable. Les voyageurs adorent l\'accueil personnalisé.' },
            ].map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-7"
                style={{ border: '1px solid rgba(201,168,76,0.18)', boxShadow: '0 2px 16px rgba(26,39,68,0.06)' }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#C9A84C]" style={{ color: '#C9A84C' }} />)}
                </div>
                <p className="text-sm italic mb-5 leading-relaxed" style={{ color: '#374151' }}>"{t.avis}"</p>
                <div className="border-t pt-4" style={{ borderColor: 'rgba(201,168,76,0.2)' }}>
                  <div className="font-bold text-sm" style={{ color: '#1a2744' }}>{t.name}</div>
                  <div className="text-xs" style={{ color: '#6b7280' }}>{t.type} · {t.ville}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div
            className="rounded-3xl p-12 text-white relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1a2744 0%, #2a3f6f 100%)', boxShadow: '0 20px 60px rgba(26,39,68,0.2)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
            <h2 className="text-3xl font-extrabold text-white mb-3">
              Prêt à maximiser vos revenus ?
            </h2>
            <p className="text-white/70 mb-8">
              Estimation gratuite et personnalisée en moins de 24h —{' '}
              <span style={{ color: '#C9A84C' }}>Villa 20%</span> · <span style={{ color: '#4ECDC4' }}>Appartement 25%</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsEstimationModalOpen(true)}
                className="px-10 py-4 rounded-full font-bold text-white hover:scale-105 transition-all flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #A07D2A)', boxShadow: '0 8px 28px rgba(201,168,76,0.4)' }}
              >
                Estimation gratuite
                <TrendingUp className="w-5 h-5" />
              </button>
              <a
                href="tel:+33625401480"
                className="px-10 py-4 rounded-full font-semibold text-white hover:scale-105 transition-all flex items-center justify-center gap-2"
                style={{ background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.3)' }}
              >
                <Phone className="w-5 h-5" />
                06 25 40 14 80
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#1a2744' }}>
              Conciergerie Premium : Villa 20% TTC · Appartement 25% TTC — Sanary à Hyères
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#6b7280' }}>
              Notre <strong style={{ color: '#1a2744' }}>Formule Premium</strong> est spécialement conçue pour les propriétaires de <strong>villas</strong> (20% TTC) et d'<strong>appartements</strong> (25% TTC) de standing situés entre <strong>Sanary-sur-Mer et Hyères</strong>. Avec plus de <strong>28 biens gérés</strong> dans le Var, nous sommes la conciergerie de référence pour la gestion locative haut de gamme sur la Côte Méditerranéenne.
            </p>
            <p className="leading-relaxed" style={{ color: '#6b7280' }}>
              Notre commission inclut TOUS les services : check-in/check-out personnalisés, ménage professionnel, gestion des annonces Airbnb et Booking.com, tarification dynamique, conciergerie 7j/7, assurances et garanties. Aucun frais supplémentaire, aucune mauvaise surprise.
            </p>
          </div>
        </div>
      </section>

      <EstimationModal isOpen={isEstimationModalOpen} onClose={() => setIsEstimationModalOpen(false)} />
    </div>
  );
}
