import { motion } from 'motion/react';
import { SearchBar } from './SearchBar';
import { Sparkles } from 'lucide-react';

export function SearchSection() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="font-medium">Trouvez votre logement idéal</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Réservez votre séjour de rêve
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Découvrez nos villas et appartements de prestige sur la Côte d'Azur
            </p>
          </div>

          <SearchBar />
        </motion.div>
      </div>
    </section>
  );
}