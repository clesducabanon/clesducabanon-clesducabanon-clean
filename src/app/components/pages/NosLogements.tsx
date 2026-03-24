import { motion } from 'motion/react';
import { Users, BedDouble, Bath, MapPin, Star, Search, Home } from 'lucide-react';
import { Breadcrumb } from '../Breadcrumb';
import { SEOHead } from '../SEOHead';
import { SearchBar } from '../SearchBar';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface LogementProps {
  setCurrentPage?: (page: string) => void;
}

interface Property {
  id: string;
  name: string;
  location: string;
  type: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  amenities: string[];
  image: string;
  price: string;
  reservationUrl: string;
}

const properties: Property[] = [
  {
    id: '1',
    name: 'O Terracotta - Studio Bord de Mer',
    location: 'La Capte - Hyères',
    type: 'Studio avec terrasse',
    guests: 2,
    bedrooms: 0,
    bathrooms: 1,
    description: 'Cocon de 21m² avec superbe terrasse de 15m² 🌿 À 60 m de la plage de La Capte 🌊 Calme, climatisé, cuisine équipée, à deux pas du village et de ses commerces. L\'endroit parfait pour une escapade romantique sous le soleil d\'Hyères ☀️✨',
    amenities: ['WiFi', 'Climatisation', 'Terrasse 15m²', 'Parking extérieur', 'Plage à 60m', 'Cuisine équipée'],
    image: 'https://images.unsplash.com/photo-1585688600798-d2340cd06245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGhvdXNlJTIwdGVycmFjZSUyMHN1bnNldCUyMGZyYW5jZXxlbnwxfHx8fDE3NzE1OTYxODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 'À partir de €50/nuit',
    reservationUrl: 'https://reservation.clesducabanon.fr/location/studio-hyeres-o-terracotta-cosy-studio-bord-de-mer-693914.html',
  },
  {
    id: '2',
    name: 'Le Bleu Majorelle – Évasion en bord de mer',
    location: 'La Capte - Hyères',
    type: 'T1 avec jardinet',
    guests: 4,
    bedrooms: 0,
    bathrooms: 1,
    description: '✨ Découvrez Bleu Majorelle, un cocon de 35 m² avec jardinet à seulement 60 m de la mer à la Capte 🌊. Idéal pour 2 à 4 voyageurs, ce logement allie confort et modernité : climatisation, cuisine équipée, canapé-lit et lit superposé. Profitez d\'un séjour paisible à deux pas des commerces et du village, dans une ambiance bord de mer relaxante 🌴.',
    amenities: ['WiFi', 'Climatisation', 'Jardinet 15m²', 'Parking privé', 'Plage à 60m', 'Cuisine équipée'],
    image: 'https://images.unsplash.com/photo-1585688600798-d2340cd06245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGhvdXNlJTIwdGVycmFjZSUyMHN1bnNldCUyMGZyYW5jZXxlbnwxfHx8fDE3NzE1OTYxODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 'À partir de €55/nuit',
    reservationUrl: 'https://reservation.clesducabanon.fr/location/appartement-hyeres-le-bleu-majorelle-evasion-en-bord-de-mer-693915.html',
  },
  {
    id: '3',
    name: 'Reflet Marin - séjour tout confort à Sanary',
    location: 'Sanary-sur-Mer',
    type: 'T3',
    guests: 4,
    bedrooms: 1,
    bathrooms: 1,
    description: 'Bienvenue au Reflet Marin, niché au cœur de Sanary-sur-Mer, à seulement 2 minutes du port. Laissez-vous charmer par les ruelles provençales, les marchés locaux et l\'ambiance chaleureuse de ce village authentique. Vous trouverez tout à portée de main : plages, cafés, et boutiques. Le T3 dispose de deux chambres confortables, d\'un salon cosy pour se détendre, et d\'une cuisine équipée.',
    amenities: ['WiFi', 'Climatisation', 'Garage', 'TV', 'Cuisine équipée', 'Port à 2min'],
    image: 'https://images.unsplash.com/photo-1585688600798-d2340cd06245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGhvdXNlJTIwdGVycmFjZSUyMHN1bnNldCUyMGZyYW5jZXxlbnwxfHx8fDE3NzE1OTYxODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 'À partir de €60/nuit',
    reservationUrl: 'https://reservation.clesducabanon.fr/location/appartement-sanary-sur-mer-reflet-marin-sejour-tout-confort-a-sanary-685533.html',
  },
  {
    id: '4',
    name: 'Le Rosalie - Studio au calme port et plage à pied',
    location: 'Le Brusc - Six-Fours-les-Plages',
    type: 'Studio',
    guests: 2,
    bedrooms: 0,
    bathrooms: 1,
    description: 'Découvrez notre cocon de 22 m² au coeur du beau village du Brusc 🌿 Au calme, au 3ème étage sans ascenseur, canapé lit. Dans une résidence sécurisée charmant studio proche des attractions de la ville (plage et centre ville). 🌊 À 2 min à pied du Centre-Ville, à 2 min en à pied des plages (Plage du Cros).',
    amenities: ['WiFi', 'Climatisation', 'TV', 'Cuisine équipée', 'Plage à 2min', 'Centre-ville à 2min'],
    image: 'https://images.unsplash.com/photo-1585688600798-d2340cd06245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGhvdXNlJTIwdGVycmFjZSUyMHN1bnNldCUyMGZyYW5jZXxlbnwxfHx8fDE3NzE1OTYxODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 'À partir de €45/nuit',
    reservationUrl: 'https://reservation.clesducabanon.fr/location/studio-six-fours-les-plages-le-rosalie-studio-au-calme-port-et-plage-a-pied-693055.html',
  },
  {
    id: '5',
    name: 'Villa Cabanon',
    location: 'Giens',
    type: 'Villa pieds dans l\'eau',
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    description: 'Villa exceptionnelle en bord de mer avec accès direct à la plage. Terrasse spacieuse avec vue imprenable sur la presqu\'île de Giens et les îles d\'or.',
    amenities: ['Accès plage', 'Terrasse', 'Vue mer', 'WiFi', 'Parking', 'BBQ'],
    image: 'https://images.unsplash.com/photo-1585688600798-d2340cd06245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGhvdXNlJTIwdGVycmFjZSUyMHN1bnNldCUyMGZyYW5jZXxlbnwxfHx8fDE3NzE1OTYxODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    price: '€320/nuit',
    reservationUrl: 'https://reservation.clesducabanon.fr/location/location-locations-d0/',
  },
  {
    id: '6',
    name: 'Villa Méditerranée',
    location: 'Bandol',
    type: 'Villa de prestige',
    guests: 10,
    bedrooms: 5,
    bathrooms: 4,
    description: 'Villa d\'exception avec piscine chauffée, pool house et jardin paysager. Le luxe à la française dans un cadre méditerranéen enchanteur.',
    amenities: ['Piscine chauffée', 'Pool house', 'Jardin', 'WiFi fibre', '2 Parkings', 'Climatisation'],
    image: 'https://images.unsplash.com/photo-1711110065992-6d6aff9ae35c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYSUyMHN3aW1taW5nJTIwcG9vbCUyMGdhcmRlbiUyMGx1eHVyeXxlbnwxfHx8fDE3NzE1OTYxOTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    price: '€450/nuit',
    reservationUrl: 'https://reservation.clesducabanon.fr/location/location-locations-d0/',
  },
  {
    id: '7',
    name: 'Appartement Riviera',
    location: 'Six-Fours-les-Plages',
    type: 'Appartement standing',
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    description: 'Appartement raffiné avec grande terrasse face à la mer. Décoration soignée et équipements haut de gamme pour un séjour inoubliable.',
    amenities: ['Vue mer', 'Grande terrasse', 'WiFi', 'Parking sécurisé', 'Climatisation'],
    image: 'https://images.unsplash.com/photo-1758840742715-e477247b7248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFzaWRlJTIwYXBhcnRtZW50JTIwZnJlbmNoJTIwcml2aWVyYXxlbnwxfHx8fDE3NzE1OTYxOTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    price: '€180/nuit',
    reservationUrl: 'https://reservation.clesducabanon.fr/location/location-locations-d0/',
  },
  {
    id: '8',
    name: 'Villa Lumière',
    location: 'Sanary-sur-Mer',
    type: 'Villa contemporaine',
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    description: 'Villa contemporaine lumineuse avec piscine à débordement. Architecture moderne et prestations premium dans un quartier prisé de Sanary.',
    amenities: ['Piscine débordement', 'Vue mer', 'WiFi', 'Parking', 'Climatisation', 'Cuisine équipée'],
    image: 'https://images.unsplash.com/photo-1512916958891-fcf61b2160df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3VzZSUyMHBvb2wlMjBtZWRpdGVycmFuZWFufGVufDF8fHx8MTc3MTU5NjE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    price: '€295/nuit',
    reservationUrl: 'https://reservation.clesducabanon.fr/location/location-locations-d0/',
  },
  {
    id: '9',
    name: 'Villa Bleu Majorelle',
    location: 'Saint-Tropez',
    type: 'Villa de luxe',
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    description: 'Villa de luxe avec piscine intérieure et terrasse privée. Située dans un quartier résidentiel de Saint-Tropez, elle offre une vue panoramique sur la mer.',
    amenities: ['Piscine intérieure', 'Terrasse privée', 'Vue mer', 'WiFi', 'Parking', 'Climatisation'],
    image: 'https://images.unsplash.com/photo-1585688600798-d2340cd06245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGhvdXNlJTIwdGVycmFjZSUyMHN1bnNldCUyMGZyYW5jZXxlbnwxfHx8fDE3NzE1OTYxODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    price: '€500/nuit',
    reservationUrl: 'https://reservation.clesducabanon.fr/location/location-locations-d0/',
  },
  {
    id: '10',
    name: 'Reflet Marin',
    location: 'Saint-Tropez',
    type: 'Villa de luxe',
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    description: 'Villa de luxe avec piscine intérieure et terrasse privée. Située dans un quartier résidentiel de Saint-Tropez, elle offre une vue panoramique sur la mer.',
    amenities: ['Piscine intérieure', 'Terrasse privée', 'Vue mer', 'WiFi', 'Parking', 'Climatisation'],
    image: 'https://images.unsplash.com/photo-1585688600798-d2340cd06245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGhvdXNlJTIwdGVycmFjZSUyMHN1bnNldCUyMGZyYW5jZXxlbnwxfHx8fDE3NzE1OTYxODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    price: '€500/nuit',
    reservationUrl: 'https://reservation.clesducabanon.fr/location/location-locations-d0/',
  },
];

export function NosLogements({ setCurrentPage }: LogementProps) {
  const handleNavigateHome = () => {
    if (setCurrentPage) {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const breadcrumbItems = [
    { name: 'Accueil', onClick: handleNavigateHome },
    { name: 'Nos Logements' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/30">
      <SEOHead
        title="Nos Logements de Prestige | Villas & Appartements Var"
        description="Découvrez notre sélection de villas et appartements de standing avec piscine et vue mer à Sanary, Hyères, Giens et Bandol. Réservation en ligne sécurisée."
        keywords="location villa var, appartement vue mer sanary, villa piscine hyères, location prestige giens, réservation vacances bandol"
        canonicalUrl="https://www.clesducabanon.fr/nos-logements"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full mb-6">
              <Star className="w-5 h-5" />
              <span className="font-medium">Locations de Prestige</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Nos Logements d'Exception
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Découvrez notre collection exclusive de villas et appartements haut de gamme en bord de mer. 
              Chaque propriété est soigneusement sélectionnée pour vous garantir un séjour inoubliable.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-500" />
                <span>Emplacements privilégiés</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-cyan-500" />
                <span>Prestations premium</span>
              </div>
              <div className="flex items-center gap-2">
                <Search className="w-5 h-5 text-cyan-500" />
                <span>Vue mer exceptionnelle</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Recherchez votre séjour idéal
              </h2>
              <p className="text-gray-600">
                Affinez votre recherche par dates et destination
              </p>
            </div>
            <SearchBar />
          </motion.div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="font-bold text-blue-600">{property.price}</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {property.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {property.name}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4 text-cyan-500" />
                        <span>{property.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {property.description}
                  </p>

                  {/* Property Details */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-cyan-500" />
                      <span>{property.guests}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BedDouble className="w-4 h-4 text-cyan-500" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4 text-cyan-500" />
                      <span>{property.bathrooms}</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {property.amenities.slice(0, 3).map((amenity, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                    {property.amenities.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                        +{property.amenities.length - 3}
                      </span>
                    )}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={property.reservationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Réserver maintenant
                    <Home className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <Star className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Vous possédez un bien ?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Confiez-nous la gestion de votre villa ou appartement et maximisez vos revenus locatifs. 
              Commission de 20% TTC seulement.
            </p>
            <button
              onClick={handleNavigateHome}
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Devenir Propriétaire Partenaire
              <Home className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}