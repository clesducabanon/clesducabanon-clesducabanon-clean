import { motion } from 'motion/react';
import { MapPin, Anchor, Globe, Star, Zap } from 'lucide-react';
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

const digitalZones = [
  { region: 'France Métropolitaine', clients: 420, color: 'from-blue-500 to-purple-500', emoji: '🇫🇷' },
  { region: 'DOM-TOM', clients: 95, color: 'from-teal-500 to-cyan-500', emoji: '🌴' },
  { region: 'Maroc', clients: 28, color: 'from-orange-500 to-red-500', emoji: '🇲🇦' },
];

export function ZoneGeographique() {
  return (
    <section id="zone" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Zone */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-600 px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4" />
              <span className="font-medium">Formule Premium 20%</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              La Côte Varoise, de Sanary-sur-Mer à Hyères
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              <strong className="text-blue-600">Intervention terrain complète</strong> : nous intervenons physiquement sur toute la Côte Varoise (Sanary, Six-Fours, Toulon, Le Pradet, Carqueiranne, Hyères) pour une gestion 100% clé en main.
            </p>

            {/* Cities List */}
            <div className="space-y-3 mb-8">
              {cities.map((city, index) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Anchor className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg text-gray-700 font-medium">{city}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
              <p className="text-gray-700">
                <span className="font-bold text-blue-600">Votre ville n'est pas dans la liste ?</span>
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
                src="https://images.unsplash.com/photo-1757264119016-7e6b568b810d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGVycmFuZWFuJTIwdmlsbGElMjBwb29sJTIwbHV4dXJ5fGVufDF8fHx8MTc3MzY5MjcyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Villa avec piscine vue mer Côte d'Azur"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">50+ km</div>
                  <div className="text-gray-600">de côte couverte</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Digital Zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full mb-4">
              <Zap className="w-4 h-4" />
              <span className="font-medium">Formule Digitale 180€</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              France & International
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Gestion digitale optimisée <strong className="text-purple-600">partout dans le monde</strong> : vous gérez le terrain, nous gérons le digital.
            </p>

            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold">
              <Globe className="w-5 h-5" />
              <span>543 propriétaires nous font confiance</span>
            </div>
          </div>

          {/* Zones Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {digitalZones.map((zone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border-2 border-purple-200 rounded-3xl p-8 hover:shadow-2xl transition-all"
              >
                <div className={`bg-gradient-to-br ${zone.color} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto`}>
                  {zone.emoji}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {zone.region}
                </h3>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {zone.clients}
                  </div>
                  <div className="text-sm text-gray-600">
                    propriétaires actifs
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-2xl p-8"
          >
            <div className="flex items-start gap-4">
              <Globe className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Votre bien est à l'étranger ou hors zone Premium ?
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Optez pour notre <strong>Formule Digitale à 180€/mois</strong> : nous gérons l'intégralité de la partie digitale 
                  (diffusion, tarification dynamique, communication voyageurs 24/7, calendrier, annonces optimisées) 
                  tandis que vous gérez localement la remise des clés et le ménage. 
                  <strong> Idéal pour la France métropolitaine, DOM-TOM, Maroc et partout dans le monde !</strong>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}