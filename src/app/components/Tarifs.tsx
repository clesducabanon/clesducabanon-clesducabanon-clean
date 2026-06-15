import { motion } from 'motion/react';
import { Check, Star, TrendingUp, MapPin, Users, Home, Smartphone, Key, Calendar, MessageCircle, Camera, DollarSign, FileText, Sparkles, AlertCircle } from 'lucide-react';

export function Tarifs() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    { icon: <Smartphone className="w-5 h-5" style={{ color: '#0AADA3' }} />, label: 'Diffusion Airbnb, Booking, VRBO...' },
    { icon: <DollarSign className="w-5 h-5" style={{ color: '#C9A84C' }} />, label: 'Tarification dynamique optimisée' },
    { icon: <MessageCircle className="w-5 h-5" style={{ color: '#0AADA3' }} />, label: 'Communication voyageurs 24h/24' },
    { icon: <Calendar className="w-5 h-5" style={{ color: '#C9A84C' }} />, label: 'Gestion calendrier synchronisé' },
    { icon: <Camera className="w-5 h-5" style={{ color: '#0AADA3' }} />, label: 'Photos professionnelles incluses' },
    { icon: <Key className="w-5 h-5" style={{ color: '#C9A84C' }} />, label: 'Boîte à clé / serrure connectée (obligatoire appart, demandée villa)' },
    { icon: <Home className="w-5 h-5" style={{ color: '#0AADA3' }} />, label: 'Ménage et blanchisserie coordonnés' },
    { icon: <FileText className="w-5 h-5" style={{ color: '#C9A84C' }} />, label: 'États des lieux détaillés' },
    { icon: <AlertCircle className="w-5 h-5" style={{ color: '#0AADA3' }} />, label: 'Intervention terrain 7j/7' },
    { icon: <FileText className="w-5 h-5" style={{ color: '#C9A84C' }} />, label: 'Rapport mensuel de performance' },
  ];

  return (
    <section id="tarifs" className="py-24" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8f6f0 100%)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-semibold"
            style={{ background: 'rgba(201,168,76,0.12)', color: '#A07D2A', border: '1px solid rgba(201,168,76,0.25)' }}
          >
            <TrendingUp className="w-4 h-4" />
            Notre Formule Premium
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1a2744' }}>
            Gestion Complète de Vos Biens
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
            Une seule formule, une gestion 100% clé en main — sans surprise, sans frais cachés.
          </p>
          <div
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm"
            style={{ background: 'rgba(10,173,163,0.10)', color: '#087A72', border: '1px solid rgba(10,173,163,0.25)' }}
          >
            <Users className="w-4 h-4" />
            <span>28 propriétaires nous font confiance sur la Côte Varoise</span>
          </div>
        </motion.div>

        {/* Two cards side by side */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">

          {/* Villa 20% */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
            style={{ boxShadow: '0 20px 60px rgba(201,168,76,0.18)', border: '1px solid rgba(201,168,76,0.3)' }}
          >
            {/* Gold header */}
            <div className="p-8 text-white" style={{ background: 'linear-gradient(135deg, #1a2744 0%, #2a3f6f 100%)' }}>
              <div
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold mb-4"
                style={{ background: 'rgba(201,168,76,0.25)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.4)' }}
              >
                <Star className="w-3 h-3 fill-[#C9A84C]" />
                FORMULE PREMIUM
              </div>
              <div className="flex items-center gap-3 mb-2">
                <Home className="w-7 h-7" style={{ color: '#C9A84C' }} />
                <h3 className="text-2xl font-bold">Villa</h3>
              </div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-7xl font-black" style={{ color: '#C9A84C' }}>20%</span>
                <span className="text-xl text-white/70">TTC</span>
              </div>
              <p className="text-white/70 text-sm mb-4">Commission sur vos revenus locatifs effectifs</p>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full w-fit text-sm" style={{ background: 'rgba(10,173,163,0.2)' }}>
                <MapPin className="w-4 h-4 text-[#4ECDC4]" />
                <span className="text-[#4ECDC4] font-medium">De Sanary à Hyères</span>
              </div>
            </div>

            {/* Example calculation */}
            <div className="px-8 py-4" style={{ background: 'rgba(201,168,76,0.06)', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
              <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#A07D2A' }}>Exemple</p>
              <p className="text-sm" style={{ color: '#1a2744' }}>
                1 000 € de revenus → <strong>200 € de commission</strong> → <strong style={{ color: '#087A72' }}>800 € pour vous</strong>
              </p>
            </div>

            {/* Services list */}
            <div className="p-8 bg-white">
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#0AADA3' }}>Inclus dans la formule</p>
              <ul className="space-y-3">
                {services.map((s, i) => (
                  <li key={i} className="flex items-center gap-3">
                    {s.icon}
                    <span className="text-sm" style={{ color: '#374151' }}>{s.label}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className="mt-8 w-full py-4 rounded-full font-bold text-white transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #A07D2A)', boxShadow: '0 8px 24px rgba(201,168,76,0.35)' }}
              >
                Demander un devis Villa
              </button>
            </div>
          </motion.div>

          {/* Appartement 25% */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative rounded-3xl overflow-hidden"
            style={{ boxShadow: '0 20px 60px rgba(10,173,163,0.15)', border: '1px solid rgba(10,173,163,0.3)' }}
          >
            {/* Turquoise header */}
            <div className="p-8 text-white" style={{ background: 'linear-gradient(135deg, #0AADA3 0%, #087A72 100%)' }}>
              <div
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold mb-4"
                style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}
              >
                <Sparkles className="w-3 h-3" />
                FORMULE PREMIUM
              </div>
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-7 h-7 text-white/80" />
                <h3 className="text-2xl font-bold">Appartement</h3>
              </div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-7xl font-black text-white">25%</span>
                <span className="text-xl text-white/70">TTC</span>
              </div>
              <p className="text-white/70 text-sm mb-4">Commission sur vos revenus locatifs effectifs</p>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full w-fit text-sm" style={{ background: 'rgba(201,168,76,0.25)' }}>
                <MapPin className="w-4 h-4 text-[#C9A84C]" />
                <span style={{ color: '#C9A84C' }} className="font-medium">De Sanary à Hyères</span>
              </div>
            </div>

            {/* Example calculation */}
            <div className="px-8 py-4" style={{ background: 'rgba(10,173,163,0.06)', borderBottom: '1px solid rgba(10,173,163,0.15)' }}>
              <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#087A72' }}>Exemple</p>
              <p className="text-sm" style={{ color: '#1a2744' }}>
                1 000 € de revenus → <strong>250 € de commission</strong> → <strong style={{ color: '#087A72' }}>750 € pour vous</strong>
              </p>
            </div>

            {/* Services list */}
            <div className="p-8 bg-white">
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#0AADA3' }}>Inclus dans la formule</p>
              <ul className="space-y-3">
                {services.map((s, i) => (
                  <li key={i} className="flex items-center gap-3">
                    {s.icon}
                    <span className="text-sm" style={{ color: '#374151' }}>{s.label}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className="mt-8 w-full py-4 rounded-full font-bold text-white transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #0AADA3, #087A72)', boxShadow: '0 8px 24px rgba(10,173,163,0.35)' }}
              >
                Demander un devis Appartement
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-3xl p-8 text-center text-white relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1a2744 0%, #2a3f6f 100%)' }}
        >
          <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}></div>
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full text-sm" style={{ background: 'rgba(201,168,76,0.15)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)' }}>
            <Star className="w-4 h-4 fill-[#C9A84C]" />
            Aucun frais de mise en service
          </div>
          <h3 className="text-2xl font-bold mb-2">Commencez sans investissement initial</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>
            Vous ne payez qu'à partir de vos revenus effectifs. Zéro risque, rentabilité maximale.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
