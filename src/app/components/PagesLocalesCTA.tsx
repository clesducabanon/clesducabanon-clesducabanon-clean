import { motion } from 'motion/react';
import { MapPin, ArrowRight, Globe, Home } from 'lucide-react';

interface PagesLocalesCTAProps {
  setCurrentPage: (page: string) => void;
}

export function PagesLocalesCTA({ setCurrentPage }: PagesLocalesCTAProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
            <Home className="w-5 h-5" />
            <span className="font-medium">2 Formules Adaptées</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choisissez La Formule Qui Vous Correspond
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Gestion locale complète ou gestion digitale à distance : trouvez la solution parfaite pour votre bien
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Formule Premium 20% - Local */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600 to-teal-600 p-8 rounded-3xl shadow-2xl text-white"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center border border-white/30">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="bg-yellow-400 text-gray-900 px-4 py-1.5 rounded-full text-sm font-bold">
                ⭐ Premium
              </div>
            </div>
            
            <h3 className="text-3xl font-bold mb-3">
              Formule Premium
            </h3>
            
            <div className="text-4xl font-black mb-6 text-yellow-300">
              20% TTC
            </div>
            
            <p className="text-blue-100 text-lg leading-relaxed mb-6">
              <strong className="text-white">Gestion 100% complète</strong> avec intervention terrain pour vos biens <strong className="text-white">de Sanary-sur-Mer à Hyères</strong> (toute la Côte Varoise).
            </p>

            <div className="space-y-2 mb-8">
              <div className="flex items-center gap-2 text-blue-100">
                <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                <span>Remise des clés & états des lieux</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                <span>Coordination ménage & maintenance</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                <span>Intervention 7j/7 sur place</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                <span>+ Tous les services digitaux</span>
              </div>
            </div>

            <button
              onClick={() => {
                setCurrentPage('nos-services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full bg-white text-blue-600 px-6 py-4 rounded-xl font-bold hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
            >
              <span>En savoir plus</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Formule Digitale 180€ - France */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-3xl shadow-2xl border-2 border-gray-200"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold">
                🌍 France
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              Formule Digitale
            </h3>
            
            <div className="text-4xl font-black mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              180€/mois
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              <strong className="text-gray-900">Gestion digitale complète</strong> pour vos biens partout en <strong className="text-gray-900">France et à l'international</strong>. Vous gérez le terrain.
            </p>

            <div className="space-y-2 mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                <span>Annonces optimisées multi-plateformes</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                <span>Tarification dynamique</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                <span>Communication voyageurs 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                <span>Calendrier synchronisé</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-4 mb-6">
              <p className="text-sm text-gray-700">
                <strong className="text-purple-700">Idéal si :</strong> Vous habitez proche de votre bien ou avez déjà un prestataire ménage local
              </p>
            </div>

            <button
              onClick={() => {
                setCurrentPage('nos-services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-xl font-bold hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
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
          className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-3xl p-10 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Quelle Formule Pour Votre Bien ?
          </h3>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Pas sûr de la formule adaptée à votre situation ? Obtenez une estimation gratuite et des conseils personnalisés !
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all"
          >
            Estimation Gratuite
          </button>
        </motion.div>
      </div>
    </section>
  );
}