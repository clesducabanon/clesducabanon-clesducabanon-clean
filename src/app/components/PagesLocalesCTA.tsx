import { motion } from 'motion/react';
import { MapPin, ArrowRight, Home, Star } from 'lucide-react';

interface PagesLocalesCTAProps {
  setCurrentPage: (page: string) => void;
}

export function PagesLocalesCTA({ setCurrentPage }: PagesLocalesCTAProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-semibold" style={{ background: 'rgba(201,168,76,0.12)', color: '#A07D2A', border: '1px solid rgba(201,168,76,0.25)' }}>
            <Home className="w-4 h-4" />
            Formule Premium
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1a2744' }}>
            Une Formule Adaptée à Votre Bien
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
            Gestion 100% complète clé en main, de Sanary-sur-Mer à Hyères
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">

          {/* Villa 20% */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl text-white relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1a2744 0%, #2a3f6f 100%)', boxShadow: '0 20px 50px rgba(26,39,68,0.2)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}></div>

            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #C9A84C, #A07D2A)' }}>
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-bold" style={{ background: 'rgba(201,168,76,0.2)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.35)' }}>
                <Star className="w-3 h-3 fill-[#C9A84C]" />
                Premium
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2">Formule Villa</h3>
            <div className="text-5xl font-black mb-1" style={{ color: '#C9A84C' }}>20% TTC</div>
            <p className="text-white/60 text-sm mb-6">Commission sur revenus locatifs effectifs</p>

            <p className="text-white/75 text-base leading-relaxed mb-6">
              <strong className="text-white">Gestion 100% complète</strong> avec intervention terrain pour vos villas <strong className="text-white">de Sanary-sur-Mer à Hyères</strong>.
            </p>

            <div className="space-y-2 mb-8">
              {['Remise des clés & états des lieux', 'Coordination ménage & maintenance', 'Intervention 7j/7 sur place', 'Tous les services digitaux inclus'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/70 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#C9A84C' }}></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => { setCurrentPage('nos-services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 group transition-all hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, #C9A84C, #A07D2A)' }}
            >
              <span>En savoir plus</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Appartement 25% */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl border-2 bg-white"
            style={{ border: '2px solid rgba(10,173,163,0.3)', boxShadow: '0 8px 40px rgba(10,173,163,0.1)' }}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0AADA3, #087A72)' }}>
                <Home className="w-8 h-8 text-white" />
              </div>
              <div className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-bold" style={{ background: 'rgba(10,173,163,0.10)', color: '#087A72', border: '1px solid rgba(10,173,163,0.25)' }}>
                <Star className="w-3 h-3" />
                Premium
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2" style={{ color: '#1a2744' }}>Formule Appartement</h3>
            <div className="text-5xl font-black mb-1" style={{ color: '#0AADA3' }}>25% TTC</div>
            <p className="text-sm mb-6" style={{ color: '#6b7280' }}>Commission sur revenus locatifs effectifs</p>

            <p className="text-base leading-relaxed mb-6" style={{ color: '#374151' }}>
              <strong style={{ color: '#1a2744' }}>Gestion 100% complète</strong> avec intervention terrain pour vos appartements <strong style={{ color: '#1a2744' }}>de Sanary-sur-Mer à Hyères</strong>.
            </p>

            <div className="space-y-2 mb-8">
              {['Remise des clés & états des lieux', 'Coordination ménage & maintenance', 'Intervention 7j/7 sur place', 'Tous les services digitaux inclus'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm" style={{ color: '#6b7280' }}>
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#0AADA3' }}></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl p-4 mb-6 text-sm" style={{ background: 'rgba(10,173,163,0.06)', border: '1px solid rgba(10,173,163,0.2)' }}>
              <p style={{ color: '#374151' }}>
                <strong style={{ color: '#087A72' }}>Idéal pour :</strong> Appartements et studios de standing sur la Côte Varoise
              </p>
            </div>

            <button
              onClick={() => { setCurrentPage('nos-services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 group transition-all hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, #0AADA3, #087A72)' }}
            >
              <span>En savoir plus</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* CTA Général */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-3xl p-10 text-center text-white relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1a2744 0%, #0AADA3 100%)' }}
        >
          <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}></div>
          <h3 className="text-3xl font-bold mb-3">
            Villa ou Appartement ?
          </h3>
          <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
            Pas sûr de votre tarif ? Obtenez une estimation gratuite et des conseils personnalisés !
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full font-bold text-white transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #C9A84C, #A07D2A)', boxShadow: '0 8px 24px rgba(201,168,76,0.4)' }}
          >
            Estimation Gratuite
          </button>
        </motion.div>
      </div>
    </section>
  );
}
