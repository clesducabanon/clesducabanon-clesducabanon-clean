import { motion } from 'motion/react';
import { MapPin, Anchor, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const cities = [
  'Sanary-sur-Mer',
  'Bandol',
  'Six-Fours-les-Plages',
  'La Seyne-sur-Mer',
  'Toulon',
  'La Garde',
  'Le Pradet',
  'Carqueiranne',
  'Hyères',
];

export function ZoneGeographique() {
  return (
    <section id="zone" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-semibold" style={{ background: 'rgba(201,168,76,0.12)', color: '#A07D2A', border: '1px solid rgba(201,168,76,0.25)' }}>
              <Star className="w-4 h-4" />
              Formule Premium
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1a2744' }}>
              La Côte Varoise,<br />de Sanary à Hyères
            </h2>

            <p className="text-lg mb-8 leading-relaxed" style={{ color: '#6b7280' }}>
              <strong style={{ color: '#0AADA3' }}>Intervention terrain complète</strong> : nous intervenons physiquement sur toute la Côte Varoise pour une gestion 100% clé en main. <span style={{ color: '#C9A84C' }} className="font-semibold">Villa 20% TTC · Appartement 25% TTC</span>.
            </p>

            {/* Cities List */}
            <div className="space-y-2.5 mb-8">
              {cities.map((city, index) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3 group"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ background: index % 2 === 0 ? 'linear-gradient(135deg, #0AADA3, #087A72)' : 'linear-gradient(135deg, #C9A84C, #A07D2A)' }}
                  >
                    <Anchor className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-base font-medium" style={{ color: '#374151' }}>{city}</span>
                </motion.div>
              ))}
            </div>

            <div
              className="p-5 rounded-xl"
              style={{ background: 'rgba(10,173,163,0.06)', borderLeft: '4px solid #0AADA3' }}
            >
              <p style={{ color: '#374151' }}>
                <span className="font-bold" style={{ color: '#087A72' }}>Votre ville n'est pas dans la liste ?</span>
                <br />
                Contactez-nous ! Nous étudions toutes les demandes dans la région.
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1757264119016-7e6b568b810d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGVycmFuZWFuJTIwdmlsbGElMjBwb29sJTIwbHV4dXJ5fGVufDF8fHx8MTc3MzY5MjcyNnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Villa avec piscine vue mer Côte d'Azur"
                className="w-full h-[560px] object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,39,68,0.5), transparent)' }}></div>
              {/* Gold accent line */}
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}></div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl max-w-xs"
              style={{ boxShadow: '0 12px 40px rgba(26,39,68,0.15)', border: '1px solid rgba(201,168,76,0.2)' }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl" style={{ background: 'linear-gradient(135deg, #0AADA3, #087A72)' }}>
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{ color: '#1a2744' }}>50+ km</div>
                  <div className="text-sm" style={{ color: '#6b7280' }}>de côte couverte</div>
                </div>
              </div>
            </motion.div>

            {/* Floating tariff badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-4 -right-4 p-4 rounded-2xl text-center"
              style={{ background: 'linear-gradient(135deg, #C9A84C, #A07D2A)', boxShadow: '0 8px 24px rgba(201,168,76,0.4)' }}
            >
              <div className="text-white font-black text-2xl">20%</div>
              <div className="text-white/80 text-xs font-medium">Villa TTC</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
