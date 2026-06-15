import { motion } from 'motion/react';
import { Star, MapPin, Users, Key, Home, MessageCircle, Camera, Calendar, Shield, DollarSign, Sparkles, Smartphone } from 'lucide-react';

const serviceItems = [
  { icon: Smartphone, title: 'Diffusion Multi-Plateformes', desc: 'Airbnb, Booking.com, VRBO et plus' },
  { icon: DollarSign, title: 'Tarification Dynamique', desc: 'Prix optimisés en temps réel' },
  { icon: MessageCircle, title: 'Communication 24/7', desc: 'Réponses rapides aux voyageurs' },
  { icon: Camera, title: 'Photos Professionnelles', desc: 'Shooting photo inclus' },
  { icon: Calendar, title: 'Calendrier Synchronisé', desc: 'Gestion automatisée multi-plateformes' },
  { icon: Shield, title: 'Vérification Voyageurs', desc: 'Sécurité et sérénité maximales' },
  { icon: Sparkles, title: 'Optimisation Annonces', desc: 'SEO et visibilité maximale' },
  { icon: Users, title: 'Rapport Mensuel', desc: 'Suivi détaillé de vos performances' },
];

export function Services() {
  return (
    <section id="services" className="py-24" style={{ background: 'linear-gradient(180deg, #f8f6f0 0%, #ffffff 100%)' }} aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-semibold" style={{ background: 'rgba(10,173,163,0.10)', color: '#087A72', border: '1px solid rgba(10,173,163,0.25)' }}>
            Nos Services
          </div>
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1a2744' }}>
            Formule Premium — Gestion Clé en Main
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
            Une formule complète pour villas et appartements, de Sanary-sur-Mer à Hyères
          </p>
        </motion.div>

        {/* Two Main Offers */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">

          {/* Villa 20% */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 text-white relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1a2744 0%, #2a3f6f 100%)', boxShadow: '0 20px 60px rgba(26,39,68,0.2)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}></div>
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full -mr-24 -mt-24" style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.08), transparent)' }}></div>

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-9 h-9" style={{ color: '#C9A84C' }} />
                <span className="text-2xl font-bold">Formule Premium</span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-7xl font-black" style={{ color: '#C9A84C' }}>20%</span>
                <span className="text-2xl text-white/70">TTC</span>
              </div>
              <p className="text-white/60 text-sm mb-4">Commission sur revenus locatifs effectifs</p>

              <div className="flex items-center gap-2 px-4 py-2 rounded-full w-fit mb-6 text-sm" style={{ background: 'rgba(10,173,163,0.2)' }}>
                <MapPin className="w-4 h-4 text-[#4ECDC4]" />
                <span className="font-medium text-[#4ECDC4]">Villa · De Sanary à Hyères</span>
              </div>

              <h3 className="font-bold mb-4 text-white">Gestion 100% Complète</h3>
              <div className="space-y-3 mb-6">
                {[
                  { label: 'Services Digitaux Complets', desc: 'Diffusion, tarification dynamique, communication 24/7' },
                  { label: 'Intervention Terrain', desc: 'Remise clés, états des lieux, coordination ménage' },
                  { label: 'Zéro Stress Garanti', desc: 'On s\'occupe de TOUT de A à Z' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(201,168,76,0.2)' }}>
                      <span style={{ color: '#C9A84C', fontSize: '0.75rem' }}>✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{item.label}</p>
                      <p className="text-xs text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl p-3 mb-6 text-sm" style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.25)' }}>
                <div className="flex items-center gap-2" style={{ color: '#C9A84C' }}>
                  <Users className="w-4 h-4" />
                  <span className="font-bold">28 propriétaires nous font confiance</span>
                </div>
              </div>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-4 rounded-full font-bold text-white transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #A07D2A)', boxShadow: '0 8px 24px rgba(201,168,76,0.3)' }}
              >
                Demander un devis Villa
              </button>
            </div>
          </motion.div>

          {/* Appartement 25% */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl p-8 text-white relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0AADA3 0%, #087A72 100%)', boxShadow: '0 20px 60px rgba(10,173,163,0.2)' }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full -mr-24 -mt-24" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.08), transparent)' }}></div>

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <Home className="w-9 h-9 text-white/80" />
                <span className="text-2xl font-bold">Formule Premium</span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-7xl font-black text-white">25%</span>
                <span className="text-2xl text-white/70">TTC</span>
              </div>
              <p className="text-white/60 text-sm mb-4">Commission sur revenus locatifs effectifs</p>

              <div className="flex items-center gap-2 px-4 py-2 rounded-full w-fit mb-6 text-sm" style={{ background: 'rgba(201,168,76,0.25)' }}>
                <MapPin className="w-4 h-4" style={{ color: '#C9A84C' }} />
                <span className="font-medium" style={{ color: '#C9A84C' }}>Appartement · De Sanary à Hyères</span>
              </div>

              <h3 className="font-bold mb-4 text-white">Gestion 100% Complète</h3>
              <div className="space-y-3 mb-6">
                {[
                  { label: 'Services Digitaux Complets', desc: 'Diffusion, tarification dynamique, communication 24/7' },
                  { label: 'Intervention Terrain', desc: 'Remise clés, états des lieux, coordination ménage' },
                  { label: 'Zéro Stress Garanti', desc: 'On s\'occupe de TOUT de A à Z' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(255,255,255,0.15)' }}>
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{item.label}</p>
                      <p className="text-xs text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl p-3 mb-6 text-sm" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>
                <div className="flex items-center gap-2 text-white/90">
                  <Users className="w-4 h-4" />
                  <span className="font-bold">28 propriétaires nous font confiance</span>
                </div>
              </div>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-4 rounded-full font-bold text-[#087A72] bg-white transition-all hover:scale-105"
                style={{ boxShadow: '0 8px 24px rgba(255,255,255,0.25)' }}
              >
                Demander un devis Appartement
              </button>
            </div>
          </motion.div>
        </div>

        {/* Services Communs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-3xl p-8"
          style={{ background: 'white', border: '1px solid rgba(201,168,76,0.2)', boxShadow: '0 4px 24px rgba(26,39,68,0.06)' }}
        >
          <h3 className="text-xl font-bold mb-6 text-center" style={{ color: '#1a2744' }}>
            Services inclus dans la Formule Premium
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {serviceItems.map((item, i) => (
              <div key={i} className="text-center p-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: i % 2 === 0 ? 'linear-gradient(135deg, #0AADA3, #087A72)' : 'linear-gradient(135deg, #C9A84C, #A07D2A)' }}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-sm mb-1" style={{ color: '#1a2744' }}>{item.title}</h4>
                <p className="text-xs" style={{ color: '#6b7280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div
            className="rounded-3xl p-12 text-white relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1a2744 0%, #0AADA3 100%)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}></div>
            <h3 className="text-3xl font-bold mb-4">
              Quelle Formule pour Votre Bien ?
            </h3>
            <p className="text-xl mb-8 text-white/70 max-w-2xl mx-auto">
              Contactez-nous pour une estimation gratuite et découvrez le potentiel de votre propriété
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-full font-bold text-white transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #A07D2A)', boxShadow: '0 8px 24px rgba(201,168,76,0.4)' }}
              >
                Demander une estimation gratuite
              </button>
              <button
                onClick={() => document.getElementById('tarifs')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-full font-bold text-white transition-all hover:scale-105"
                style={{ background: 'rgba(255,255,255,0.12)', border: '2px solid rgba(255,255,255,0.35)' }}
              >
                Voir les tarifs
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
