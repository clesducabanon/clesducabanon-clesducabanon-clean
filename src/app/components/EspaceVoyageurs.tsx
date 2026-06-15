import { motion } from 'motion/react';
import { 
  Coffee,
  Wine,
  Ship,
  Bike,
  UtensilsCrossed,
  Palmtree,
  Car,
  Baby,
  ChefHat,
  Waves,
  Mountain,
  Music,
  Camera,
  MapPin,
  Star,
  CheckCircle,
  Heart,
  Clock,
  ShoppingBag,
  Sailboat,
  Building
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

const upsells = [
  {
    icon: Coffee,
    title: 'Petit-Déjeuner Premium',
    description: 'Panier gourmand avec produits locaux livrés le matin',
    price: 'À partir de 25€',
  },
  {
    icon: Wine,
    title: 'Cave à Vin',
    description: 'Sélection de vins de Provence pour votre séjour',
    price: 'À partir de 35€',
  },
  {
    icon: ChefHat,
    title: 'Chef à Domicile',
    description: 'Un chef vient cuisiner chez vous pour une soirée mémorable',
    price: 'Sur devis',
  },
  {
    icon: Clock,
    title: 'Check-in / Check-out Tardif',
    description: 'Arrivée dès 14h (au lieu de 16h) ou départ à 12h (au lieu de 10h)',
    price: '20€',
  },
  {
    icon: Car,
    title: 'Location de Véhicule',
    description: 'Voiture, scooter ou vélo électrique pour vos déplacements',
    price: 'À partir de 40€/jour',
  },
  {
    icon: Baby,
    title: 'Équipement Bébé',
    description: 'Lit bébé, chaise haute, baignoire, jouets',
    price: '15€/séjour',
  },
  {
    icon: Ship,
    title: 'Sortie en Bateau',
    description: 'Excursion privée sur la Méditerranée',
    price: 'À partir de 200€',
  },
];

const zones = [
  {
    name: 'Sanary-sur-Mer',
    image: 'https://images.unsplash.com/photo-1658155058554-c05b030fc142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5hcnklMjBzdXIlMjBtZXIlMjBwb3J0JTIwaGFyYm9yfGVufDF8fHx8MTc3MTYwMDQzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Village provençal authentique avec son port de pêche coloré',
    activities: [
      { icon: Waves, text: 'Plages de sable fin' },
      { icon: UtensilsCrossed, text: 'Restaurants fruits de mer' },
      { icon: ShoppingBag, text: 'Marché provençal' },
      { icon: Camera, text: 'Port pittoresque' },
    ],
  },
  {
    name: 'Bandol',
    image: 'https://images.unsplash.com/photo-1763243273557-d176d102bb15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBoYXJib3IlMjBjb2FzdGFsJTIwdG93bnxlbnwxfHx8fDE3NzE2MDA0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Célèbre pour ses vins AOC et ses plages magnifiques',
    activities: [
      { icon: Wine, text: 'Dégustation de vins' },
      { icon: Waves, text: 'Plages de Renécros' },
      { icon: Sailboat, text: 'Sports nautiques' },
      { icon: UtensilsCrossed, text: 'Gastronomie' },
    ],
  },
  {
    name: 'Six-Fours & La Seyne',
    image: 'https://images.unsplash.com/photo-1630512996510-c6a301d874cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGVycmFuZWFuJTIwc2FpbGluZyUyMGJvYXQlMjB0dXJxdW9pc2V8ZW58MXx8fHwxNzcxNjAwNDM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Côte sauvage et authentique avec vues panoramiques',
    activities: [
      { icon: Mountain, text: 'Randonnées côtières' },
      { icon: Waves, text: 'Criques sauvages' },
      { icon: Sailboat, text: 'Plongée sous-marine' },
      { icon: Camera, text: 'Points de vue' },
    ],
  },
  {
    name: 'Toulon',
    image: 'https://images.unsplash.com/photo-1758538005259-9b29292204ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWFjaCUyMHByb3BlcnR5JTIwbWVkaXRlcnJhbmVhbiUyMHNlYXxlbnwxfHx8fDE3NzE2MDA0MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Ville dynamique entre mer et montagne',
    activities: [
      { icon: UtensilsCrossed, text: 'Gastronomie' },
      { icon: ShoppingBag, text: 'Shopping' },
      { icon: Building, text: 'Culture & musées' },
      { icon: Waves, text: 'Plages du Mourillon' },
    ],
  },
  {
    name: 'Hyères & Îles d\'Or',
    image: 'https://images.unsplash.com/photo-1581945495314-2acec0994197?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JxdWVyb2xsZXMlMjBpc2xhbmQlMjBiZWFjaCUyMHBhcmFkaXNlfGVufDF8fHx8MTc3MTYwMDQzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Paradis méditerranéen avec les îles de Porquerolles et Port-Cros',
    activities: [
      { icon: Palmtree, text: 'Îles paradisiaques' },
      { icon: Bike, text: 'Vélo à Porquerolles' },
      { icon: Waves, text: 'Plages de rêve' },
      { icon: Mountain, text: 'Randonnées nature' },
    ],
  },
];

export function EspaceVoyageurs() {
  const [selectedZone, setSelectedZone] = useState(0);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-900 via-blue-900 to-purple-900 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Heart className="w-5 h-5" />
              <span className="font-medium">Espace Voyageurs</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Vivez un Séjour<br />Inoubliable sur la Côte d'Azur
            </h2>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Découvrez nos logements premium et profitez de services sur-mesure pour 
              transformer vos vacances en expérience exceptionnelle.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="font-medium">Logements 5 étoiles</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="font-medium">Conciergerie 24/7</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-red-400" />
                  <span className="font-medium">Emplacements premium</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services & Upsells */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full mb-4">
              <Star className="w-5 h-5" />
              <span className="font-medium">Services Premium</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sublimez Votre Séjour
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous vous proposons une gamme de services exclusifs pour rendre votre séjour encore plus mémorable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upsells.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-teal-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-teal-600 font-bold">{service.price}</span>
                  <button className="text-sm text-gray-500 hover:text-teal-600 transition-colors">
                    En savoir plus →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-3">
              🎁 Services Personnalisés
            </h3>
            <p className="text-lg text-purple-100 mb-4">
              Vous avez une demande spéciale ? Anniversaire, demande en mariage, surprise ?<br />
              Contactez notre conciergerie, nous réalisons tous vos souhaits !
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-medium hover:shadow-xl transition-all"
            >
              Contactez la conciergerie
            </button>
          </motion.div>
        </div>
      </section>

      {/* Zones Géographiques & Activités */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Destinations</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Découvrez Nos Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De Sanary à Hyères, chaque ville offre son charme unique et ses activités
            </p>
          </motion.div>

          {/* Zone Selector */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {zones.map((zone, index) => (
              <button
                key={index}
                onClick={() => setSelectedZone(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedZone === index
                    ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {zone.name}
              </button>
            ))}
          </div>

          {/* Selected Zone Display */}
          <motion.div
            key={selectedZone}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
              <ImageWithFallback
                src={zones[selectedZone].image}
                alt={zones[selectedZone].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-4xl font-bold text-white mb-2">
                  {zones[selectedZone].name}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {zones[selectedZone].description}
              </p>

              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                Activités & Attractions
              </h4>

              <div className="grid grid-cols-2 gap-4">
                {zones[selectedZone].activities.map((activity, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-gradient-to-br from-blue-50 to-teal-50 p-4 rounded-xl border border-blue-100"
                  >
                    <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <activity.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-900">{activity.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                <p className="text-gray-800">
                  <strong>💡 Conseil local :</strong> Demandez à notre conciergerie 
                  les meilleures adresses et bons plans de la région !
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expérience Client */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              L'Expérience Les Clés du Cabanon
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ce qui nous différencie des autres
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Check-in Flexible
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Arrivée possible dès 14h et départ jusqu'à 11h. 
                Check-in tardif sur demande sans frais supplémentaires.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Propreté Irréprochable
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Chaque logement est nettoyé en profondeur par des professionnels 
                avec des produits écologiques.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Assistance 24/7
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Une question ? Un problème ? Notre équipe est disponible 
                à tout moment pour vous aider.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final - Removed booking buttons, keeping contact CTA only if needed */}
    </div>
  );
}