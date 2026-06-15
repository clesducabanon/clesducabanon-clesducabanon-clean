import { motion } from 'motion/react';
import { ArrowRight, Star, TrendingUp, MapPin, Home } from 'lucide-react';

export function FormuleDigitale180Page() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20" style={{ background: 'linear-gradient(135deg, #f8f6f0 0%, #ffffff 100%)' }}>
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8" style={{ background: 'linear-gradient(135deg, #0AADA3, #087A72)' }}>
            <Star className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-4xl font-bold mb-4" style={{ color: '#1a2744' }}>
            Notre Offre a Évolué
          </h1>
          <p className="text-lg mb-8" style={{ color: '#6b7280' }}>
            Nous proposons désormais une seule formule Premium, plus complète et plus avantageuse, adaptée à votre type de bien.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10 text-left">
            <div className="p-6 rounded-2xl text-white" style={{ background: 'linear-gradient(135deg, #1a2744, #2a3f6f)', border: '1px solid rgba(201,168,76,0.3)' }}>
              <div className="flex items-center gap-2 mb-2">
                <Home className="w-5 h-5" style={{ color: '#C9A84C' }} />
                <span className="font-bold text-white">Villa</span>
              </div>
              <div className="text-5xl font-black mb-1" style={{ color: '#C9A84C' }}>20%</div>
              <div className="text-white/60 text-sm">TTC · Gestion complète</div>
            </div>
            <div className="p-6 rounded-2xl text-white" style={{ background: 'linear-gradient(135deg, #0AADA3, #087A72)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-white/80" />
                <span className="font-bold text-white">Appartement</span>
              </div>
              <div className="text-5xl font-black text-white mb-1">25%</div>
              <div className="text-white/60 text-sm">TTC · Gestion complète</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/formule-premium-20"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #C9A84C, #A07D2A)', boxShadow: '0 8px 24px rgba(201,168,76,0.4)' }}
            >
              Découvrir la Formule Premium
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/tarifs"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold transition-all hover:scale-105"
              style={{ background: 'rgba(10,173,163,0.10)', color: '#087A72', border: '2px solid rgba(10,173,163,0.3)' }}
            >
              <TrendingUp className="w-5 h-5" />
              Voir nos tarifs
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
