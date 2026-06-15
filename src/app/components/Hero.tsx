import { motion } from 'motion/react';
import { ArrowRight, Star, TrendingUp, CheckCircle, MapPin, Home, Shield, Award, Phone } from 'lucide-react';
import { useState } from 'react';
import { EstimationModal } from './EstimationModal';

interface HeroProps {
  setCurrentPage?: (page: string) => void;
}

export function Hero({ setCurrentPage }: HeroProps) {
  const [isEstimationModalOpen, setIsEstimationModalOpen] = useState(false);

  const scrollToTarifs = () => {
    const element = document.getElementById('tarifs');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header id="hero" className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-white">
      {/* Background décoratif — aucune image derrière le texte */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grand arc turquoise en haut à droite */}
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #0AADA3, transparent 70%)' }}
        />
        {/* Cercle doré en bas à gauche */}
        <div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-8"
          style={{ background: 'radial-gradient(circle, #C9A84C, transparent 70%)' }}
        />
        {/* Ligne dorée horizontale subtile */}
        <div
          className="absolute top-32 left-0 right-0 h-px opacity-20"
          style={{ background: 'linear-gradient(90deg, transparent, #C9A84C 30%, #C9A84C 70%, transparent)' }}
        />
        {/* Pattern points */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #1a2744 1.5px, transparent 1.5px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <div>
            {/* Rating badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-8"
              style={{ background: 'rgba(201,168,76,0.10)', border: '1px solid rgba(201,168,76,0.3)' }}
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C9A84C]" style={{ color: '#C9A84C' }} />
                ))}
              </div>
              <span className="font-bold text-sm" style={{ color: '#A07D2A' }}>4.9/5</span>
              <span className="text-sm" style={{ color: '#6b7280' }}>• 28 propriétaires satisfaits</span>
            </motion.div>

            {/* Main title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="font-extrabold leading-tight mb-6" style={{ color: '#1a2744', fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
                Conciergerie Airbnb
                <br />
                <span style={{ background: 'linear-gradient(90deg, #0AADA3, #087A72)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Haut de Gamme
                </span>
                <br />
                <span className="text-[#1a2744]">Sanary à Hyères</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg leading-relaxed mb-8"
              style={{ color: '#6b7280' }}
            >
              Maximisez vos revenus locatifs avec notre gestion complète clé en main.
              <br />
              <span className="font-semibold" style={{ color: '#C9A84C' }}>Villa 20% TTC</span>
              {' · '}
              <span className="font-semibold" style={{ color: '#0AADA3' }}>Appartement 25% TTC</span>
              {' '}— intervention terrain incluse.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsEstimationModalOpen(true)}
                className="px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-2 group text-white"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #A07D2A)', boxShadow: '0 8px 28px rgba(201,168,76,0.38)' }}
              >
                Estimer mes revenus gratuitement
                <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToTarifs}
                className="px-8 py-4 rounded-full font-semibold text-base flex items-center justify-center gap-2"
                style={{ background: 'rgba(10,173,163,0.08)', color: '#0AADA3', border: '2px solid rgba(10,173,163,0.35)' }}
              >
                Découvrir notre formule
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { icon: <Shield className="w-4 h-4" style={{ color: '#0AADA3' }} />, text: 'RC Professionnelle' },
                { icon: <Award className="w-4 h-4" style={{ color: '#C9A84C' }} />, text: 'Superhôte Airbnb' },
                { icon: <CheckCircle className="w-4 h-4" style={{ color: '#0AADA3' }} />, text: 'Service 7j/7' },
              ].map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
                  style={{ background: '#f8f6f0', color: '#374151', border: '1px solid rgba(201,168,76,0.15)' }}
                >
                  {b.icon}
                  <span>{b.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-5"
          >
            {/* Villa 20% */}
            <div
              className="col-span-2 rounded-3xl p-8 text-white text-center relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #1a2744 0%, #2a3f6f 100%)', boxShadow: '0 20px 60px rgba(26,39,68,0.18)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
              <div className="flex items-center justify-center gap-3 mb-2">
                <Home className="w-6 h-6" style={{ color: '#C9A84C' }} />
                <span className="font-bold text-white/80">Villa — Formule Premium</span>
              </div>
              <div className="text-6xl font-black" style={{ color: '#C9A84C' }}>20%</div>
              <div className="text-white/60 text-sm mt-1">TTC · Gestion complète terrain incluse</div>
            </div>

            {/* Appartement 25% */}
            <div
              className="rounded-3xl p-6 text-white text-center"
              style={{ background: 'linear-gradient(135deg, #0AADA3 0%, #087A72 100%)', boxShadow: '0 12px 40px rgba(10,173,163,0.22)' }}
            >
              <MapPin className="w-5 h-5 text-white/70 mx-auto mb-2" />
              <div className="text-4xl font-black text-white">25%</div>
              <div className="text-white/70 text-xs mt-1">Appartement TTC</div>
            </div>

            {/* +35% */}
            <div
              className="rounded-3xl p-6 text-center"
              style={{ background: '#f8f6f0', border: '1px solid rgba(201,168,76,0.25)', boxShadow: '0 4px 20px rgba(26,39,68,0.06)' }}
            >
              <TrendingUp className="w-5 h-5 mx-auto mb-2" style={{ color: '#0AADA3' }} />
              <div className="text-4xl font-black" style={{ color: '#1a2744' }}>+35%</div>
              <div className="text-xs mt-1" style={{ color: '#6b7280' }}>Revenus optimisés</div>
            </div>

            {/* 28 biens */}
            <div
              className="col-span-2 rounded-3xl p-5 flex items-center justify-between"
              style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)' }}
            >
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#C9A84C]" style={{ color: '#C9A84C' }} />
                  ))}
                </div>
                <div>
                  <div className="font-bold text-sm" style={{ color: '#1a2744' }}>4.9/5 • Superhôte Airbnb</div>
                  <div className="text-xs" style={{ color: '#6b7280' }}>28 biens gérés · dont 9 villas · Côte Varoise</div>
                </div>
              </div>
              <a
                href="tel:+33625401480"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-white hidden sm:flex"
                style={{ background: 'linear-gradient(135deg, #0AADA3, #087A72)', boxShadow: '0 4px 14px rgba(10,173,163,0.3)' }}
              >
                <Phone className="w-4 h-4" />
                Appeler
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <EstimationModal isOpen={isEstimationModalOpen} onClose={() => setIsEstimationModalOpen(false)} />
    </header>
  );
}
