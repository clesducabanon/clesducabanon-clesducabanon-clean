import { motion } from 'motion/react';
import { Calendar, Users, Search, MapPin } from 'lucide-react';
import { useState } from 'react';

// Mapping des destinations vers leurs URLs spécifiques
const destinationUrls: { [key: string]: string } = {
  'hyeres': 'https://reservation.clesducabanon.fr/location/locations-hyeres-d33782/vue-liste/',
  'carqueiranne': 'https://reservation.clesducabanon.fr/location/locations-carqueiranne-d33783/vue-liste/',
  'sanary': 'https://reservation.clesducabanon.fr/location/locations-sanary-sur-mer-d33798/vue-liste/',
  'toulon': 'https://reservation.clesducabanon.fr/location/locations-toulon-d33806/vue-liste/',
  'six-fours': 'https://reservation.clesducabanon.fr/location/locations-six-fours-les-plages-d33800/vue-liste/',
};

export function SearchBar() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    let searchUrl = '';

    // Si une destination spécifique est sélectionnée, utiliser son URL dédiée
    if (location && destinationUrls[location]) {
      searchUrl = destinationUrls[location];
    } else {
      // Sinon, utiliser l'URL par défaut (toutes les destinations)
      searchUrl = 'https://reservation.clesducabanon.fr/location/location-locations-d0/';
    }

    // Ajouter les paramètres de dates et voyageurs si disponibles
    const params = new URLSearchParams();
    if (checkIn) params.append('checkIn', checkIn);
    if (checkOut) params.append('checkOut', checkOut);
    if (guests) params.append('guests', guests);

    const finalUrl = params.toString() ? `${searchUrl}?${params.toString()}` : searchUrl;
    window.open(finalUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl mx-auto"
    >
      <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Location */}
          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin className="inline w-4 h-4 mr-1" />
              Destination
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="">Toutes les destinations</option>
              <option value="sanary">Sanary-sur-Mer</option>
              <option value="hyeres">Hyères</option>
              <option value="carqueiranne">Carqueiranne</option>
              <option value="toulon">Toulon</option>
              <option value="six-fours">Six-Fours-les-Plages</option>
            </select>
          </div>

          {/* Check-in */}
          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="inline w-4 h-4 mr-1" />
              Arrivée
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          {/* Check-out */}
          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="inline w-4 h-4 mr-1" />
              Départ
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              min={checkIn || new Date().toISOString().split('T')[0]}
            />
          </div>

          {/* Guests */}
          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Users className="inline w-4 h-4 mr-1" />
              Voyageurs
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'personne' : 'personnes'}
                </option>
              ))}
            </select>
          </div>

          {/* Search Button */}
          <div className="lg:col-span-1 flex items-end">
            <button
              onClick={handleSearch}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              Rechercher
            </button>
          </div>
        </div>

        {/* Quick Link */}
        <div className="mt-6 text-center">
          <a
            href="https://reservation.clesducabanon.fr/location/location-locations-d0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1 hover:underline"
          >
            Voir tous nos logements disponibles
            <Search className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}