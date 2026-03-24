import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, TrendingUp, Home, MapPin, Bed, Bath, Maximize, Euro, Waves, Wind, Car } from 'lucide-react';

interface EstimationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EstimationPopup({ isOpen, onClose }: EstimationPopupProps) {
  const [formData, setFormData] = useState({
    propertyType: '',
    propertySubType: '',
    address: '',
    city: '',
    postalCode: '',
    bedrooms: '',
    bathrooms: '',
    surface: '',
    hasPool: '',
    hasAirConditioning: '',
    hasParking: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Estimation request:', formData);
    alert('Demande d\'estimation envoyée ! Nous vous contacterons sous 24h.');
    onClose();
    setFormData({
      propertyType: '',
      propertySubType: '',
      address: '',
      city: '',
      postalCode: '',
      bedrooms: '',
      bathrooms: '',
      surface: '',
      hasPool: '',
      hasAirConditioning: '',
      hasParking: '',
      email: '',
      phone: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">Estimation Gratuite</h2>
                    <p className="text-blue-100">Découvrez le potentiel de votre bien</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                {/* Property Type */}
                <div>
                  <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Home className="w-4 h-4 text-blue-600" />
                    Type de bien *
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    required
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Sélectionnez le type</option>
                    <option value="maison">Maison</option>
                    <option value="villa">Villa</option>
                    <option value="appartement">Appartement</option>
                    <option value="studio">Studio</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                {/* Property Sub Type */}
                <div>
                  <label htmlFor="propertySubType" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Home className="w-4 h-4 text-blue-600" />
                    Sous-type de bien
                  </label>
                  <select
                    id="propertySubType"
                    name="propertySubType"
                    value={formData.propertySubType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Sélectionnez le sous-type</option>
                    <option value="studio">Studio</option>
                    <option value="t2">T2</option>
                    <option value="t3">T3</option>
                    <option value="t4">T4</option>
                    <option value="t5">T5+</option>
                  </select>
                </div>

                {/* Address */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      Adresse *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="12 Rue de la Mer"
                    />
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      Ville *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Sanary-sur-Mer"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-2">
                    Code postal *
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    required
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="83110"
                  />
                </div>

                {/* Property Details */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <Bed className="w-4 h-4 text-blue-600" />
                      Chambres *
                    </label>
                    <input
                      type="number"
                      id="bedrooms"
                      name="bedrooms"
                      required
                      min="0"
                      value={formData.bedrooms}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="3"
                    />
                  </div>

                  <div>
                    <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <Bath className="w-4 h-4 text-blue-600" />
                      Salles de bain *
                    </label>
                    <input
                      type="number"
                      id="bathrooms"
                      name="bathrooms"
                      required
                      min="0"
                      value={formData.bathrooms}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="2"
                    />
                  </div>

                  <div>
                    <label htmlFor="surface" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <Maximize className="w-4 h-4 text-blue-600" />
                      Surface (m²) *
                    </label>
                    <input
                      type="number"
                      id="surface"
                      name="surface"
                      required
                      min="0"
                      value={formData.surface}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="120"
                    />
                  </div>
                </div>

                {/* Additional Features */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="hasPool" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <Waves className="w-4 h-4 text-blue-600" />
                      Piscine
                    </label>
                    <select
                      id="hasPool"
                      name="hasPool"
                      value={formData.hasPool}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="oui">Oui</option>
                      <option value="non">Non</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="hasAirConditioning" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <Wind className="w-4 h-4 text-blue-600" />
                      Climatisation
                    </label>
                    <select
                      id="hasAirConditioning"
                      name="hasAirConditioning"
                      value={formData.hasAirConditioning}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="oui">Oui</option>
                      <option value="non">Non</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="hasParking" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <Car className="w-4 h-4 text-blue-600" />
                      Parking
                    </label>
                    <select
                      id="hasParking"
                      name="hasParking"
                      value={formData.hasParking}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="oui">Oui</option>
                      <option value="non">Non</option>
                    </select>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                {/* Info Box */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <Euro className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-blue-900 mb-1">
                        Estimation 100% gratuite et sans engagement
                      </p>
                      <p className="text-xs text-blue-700">
                        Notre équipe d'experts analyse votre bien et vous fournit une estimation précise du potentiel locatif. Réponse sous 24h.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-full font-bold hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                >
                  <TrendingUp className="w-5 h-5" />
                  Recevoir mon estimation gratuite
                </button>

                <p className="text-xs text-gray-500 text-center">
                  En soumettant ce formulaire, vous acceptez d'être contacté par Les Clés du Cabanon concernant votre demande d'estimation.
                </p>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}