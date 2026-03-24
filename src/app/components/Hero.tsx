import { motion } from 'motion/react';
import { ArrowRight, Star, TrendingUp, CheckCircle, MapPin, Euro, Shield, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { EstimationModal } from './EstimationModal';

interface HeroProps {
  setCurrentPage?: (page: string) => void;
}

export function Hero({ setCurrentPage }: HeroProps) {
  const [isEstimationModalOpen, setIsEstimationModalOpen] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTarifs = () => {
    const element = document.getElementById('tarifs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="hero" className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image avec overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1690832307571-d78b5d346651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMHBvb2wlMjBtZWRpdGVycmFuZWFuJTIwc2VhfGVufDF8fHx8MTc3Mzc3NTM2NHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Villa de luxe avec piscine sur la Côte Méditerranéenne"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/80 to-teal-900/85"></div>
      </div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-transparent to-pink-500/20 animate-pulse z-[1]"></div>

      {/* Pattern overlay - simplified */}
      <div className="absolute inset-0 opacity-5 z-[1]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-40 left-20 w-40 h-40 bg-teal-300/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 15, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-1/3 left-1/3 w-24 h-24 bg-purple-300/10 rounded-full blur-2xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge Avis Clients */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/30 px-6 py-3 rounded-full mb-8"
          >
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            </div>
            <span className="font-bold text-white">4.9/5</span>
            <span className="text-white/90">• 585 propriétaires satisfaits</span>
          </motion.div>
          
          {/* Title - Orienté Bénéfice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Conciergerie Airbnb Sanary-sur-Mer à Hyères
              <span className="block mt-2 bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
                Gestion Villa et Appartement 20% ou 180€/mois
              </span>
            </h1>
          </motion.div>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed font-light max-w-4xl mx-auto"
          >
            <strong className="font-bold text-yellow-300">Conciergerie haut de gamme</strong> pour vos villas et appartements de standing.
            <br />
            Gagnez du temps, de l'argent et de la sérénité avec <span className="font-semibold text-teal-300">nos 2 formules adaptées</span>.
          </motion.p>

          {/* CTA Buttons - Style Guest-Adom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-16 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsEstimationModalOpen(true)}
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-3 group"
            >
              Estimer mes revenus gratuitement
              <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTarifs}
              className="bg-white/10 backdrop-blur-md border-2 border-white/40 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3"
            >
              Découvrir nos formules
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Key Info Stats - 3 Boxes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12"
          >
            {/* Premium 20% Sanary-Hyères */}
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white/15 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl"
            >
              <div className="bg-gradient-to-br from-blue-400 to-teal-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-black text-white mb-3">20%</div>
              <div className="text-white/90 font-bold mb-2">Formule Premium</div>
              <div className="text-white/75 text-sm leading-relaxed">
                Gestion 100% complète avec intervention terrain (Sanary-sur-Mer, Toulon, Hyères...)
              </div>
              <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-xs text-white font-medium">
                42 biens gérés
              </div>
            </motion.div>

            {/* Digitale 180€ France */}
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white/15 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl"
            >
              <div className="bg-gradient-to-br from-purple-400 to-pink-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                <Euro className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-black text-white mb-3">180€</div>
              <div className="text-white/90 font-bold mb-2">Formule Digitale</div>
              <div className="text-white/75 text-sm leading-relaxed">
                Gestion digitale optimisée partout en France & International
              </div>
              <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-xs text-white font-medium">
                543 biens gérés
              </div>
            </motion.div>

            {/* +35% Revenus */}
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white/15 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl"
            >
              <div className="bg-gradient-to-br from-green-400 to-emerald-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-black text-white mb-3">+35%</div>
              <div className="text-white/90 font-bold mb-2">Revenus Optimisés</div>
              <div className="text-white/75 text-sm leading-relaxed">
                Grâce à notre tarification dynamique et notre expertise locale
              </div>
              <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-xs text-white font-medium flex items-center justify-center gap-2">
                <Star className="w-3 h-3 text-yellow-300 fill-yellow-300" />
                Note 4.9/5
              </div>
            </motion.div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6 text-white/90"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="w-5 h-5 text-green-300" />
              <span className="text-sm font-medium">Assurance responsabilité civile</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Award className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-medium">Superhôte Airbnb</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle className="w-5 h-5 text-blue-300" />
              <span className="text-sm font-medium">Service 24/7</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </motion.div>
      </motion.div>

      {/* Estimation Modal */}
      <EstimationModal isOpen={isEstimationModalOpen} onClose={() => setIsEstimationModalOpen(false)} />
    </header>
  );
}