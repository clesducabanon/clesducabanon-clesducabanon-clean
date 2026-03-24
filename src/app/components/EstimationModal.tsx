import { useState } from 'react';
import { X, TrendingUp, Home, MapPin, Bed, Users, Droplets, TreePine, Wind, Car, Waves, Send, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface EstimationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EstimationModal({ isOpen, onClose }: EstimationModalProps) {
  const [formData, setFormData] = useState({
    // Informations propriétaire
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    
    // Informations logement
    adresse: '',
    codePostal: '',
    ville: '',
    
    // Caractéristiques
    typeBien: '',
    surface: '',
    nombreChambres: '',
    capaciteCouchage: '',
    
    // Équipements
    piscine: '',
    jardin: '',
    climatisation: '',
    parkingPrive: '',
    vueMer: '',
    distancePlage: '',
    
    // Disponibilité
    disponibilite: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        // Informations client
        first_name: formData.prenom,
        last_name: formData.nom,
        email: formData.email,
        phone: formData.telephone,
        
        // Bien
        address: formData.adresse,
        postal_code: formData.codePostal,
        city: formData.ville,
        property_type: formData.typeBien,
        surface: formData.surface,
        bedrooms: formData.nombreChambres,
        guest_capacity: formData.capaciteCouchage,
        
        // Équipements
        pool: formData.piscine,
        garden: formData.jardin,
        aircon: formData.climatisation,
        parking: formData.parkingPrive,
        sea_view: formData.vueMer,
        beach_distance: formData.distancePlage,
        
        // Projet
        availability: formData.disponibilite,
        project_message: formData.message || 'Aucun message complémentaire'
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_nojllzi',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ESTIMATION || 'template_mpotxla',
        templateParams
      );

      setSubmitStatus('success');
      
      // Réinitialiser le formulaire après 2 secondes
      setTimeout(() => {
        setFormData({
          nom: '', prenom: '', email: '', telephone: '',
          adresse: '', codePostal: '', ville: '',
          typeBien: '', surface: '', nombreChambres: '', capaciteCouchage: '',
          piscine: '', jardin: '', climatisation: '', parkingPrive: '', vueMer: '', distancePlage: '',
          disponibilite: '', message: ''
        });
        setSubmitStatus('idle');
        onClose();
      }, 2000);
      
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-6 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Estimation Gratuite</h2>
              <p className="text-blue-100 text-sm">Recevez votre estimation sous 24h</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          
          {/* Informations Propriétaire */}
          <div className="bg-gray-50 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-bold text-gray-900">Vos informations</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Jean"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Dupont"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="jean.dupont@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="06 12 34 56 78"
                />
              </div>
            </div>
          </div>

          {/* Localisation */}
          <div className="bg-gray-50 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-bold text-gray-900">Localisation du bien</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Adresse complète *
                </label>
                <input
                  type="text"
                  name="adresse"
                  value={formData.adresse}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="123 Avenue de la Mer"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Code postal *
                  </label>
                  <input
                    type="text"
                    name="codePostal"
                    value={formData.codePostal}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="83110"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Ville *
                  </label>
                  <input
                    type="text"
                    name="ville"
                    value={formData.ville}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Sanary-sur-Mer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Caractéristiques du bien */}
          <div className="bg-gray-50 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Home className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-bold text-gray-900">Caractéristiques du bien</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Type de bien *
                </label>
                <select
                  name="typeBien"
                  value={formData.typeBien}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="Studio">Studio</option>
                  <option value="T2">T2 (2 pièces)</option>
                  <option value="T3">T3 (3 pièces)</option>
                  <option value="T4">T4 (4 pièces)</option>
                  <option value="T5">T5+ (5 pièces et plus)</option>
                  <option value="Villa">Villa</option>
                  <option value="Maison">Maison</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Surface (m²) *
                </label>
                <input
                  type="number"
                  name="surface"
                  value={formData.surface}
                  onChange={handleChange}
                  required
                  min="10"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="75"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre de chambres *
                </label>
                <select
                  name="nombreChambres"
                  value={formData.nombreChambres}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="0">0 (Studio)</option>
                  <option value="1">1 chambre</option>
                  <option value="2">2 chambres</option>
                  <option value="3">3 chambres</option>
                  <option value="4">4 chambres</option>
                  <option value="5+">5 chambres et plus</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Capacité de couchage *
                </label>
                <select
                  name="capaciteCouchage"
                  value={formData.capaciteCouchage}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="2">2 personnes</option>
                  <option value="4">4 personnes</option>
                  <option value="6">6 personnes</option>
                  <option value="8">8 personnes</option>
                  <option value="10">10 personnes</option>
                  <option value="12+">12 personnes et plus</option>
                </select>
              </div>
            </div>
          </div>

          {/* Équipements */}
          <div className="bg-gray-50 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Waves className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-bold text-gray-900">Équipements & Atouts</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-cyan-600" />
                  Piscine *
                </label>
                <select
                  name="piscine"
                  value={formData.piscine}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="Oui - Privée">Oui - Privée</option>
                  <option value="Oui - Commune">Oui - Commune</option>
                  <option value="Non">Non</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <TreePine className="w-4 h-4 text-green-600" />
                  Jardin / Terrasse *
                </label>
                <select
                  name="jardin"
                  value={formData.jardin}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="Oui - Jardin">Oui - Jardin</option>
                  <option value="Oui - Terrasse">Oui - Terrasse</option>
                  <option value="Oui - Les deux">Oui - Jardin et Terrasse</option>
                  <option value="Non">Non</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <Wind className="w-4 h-4 text-blue-600" />
                  Climatisation *
                </label>
                <select
                  name="climatisation"
                  value={formData.climatisation}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="Oui">Oui</option>
                  <option value="Non">Non</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <Car className="w-4 h-4 text-gray-600" />
                  Parking privé *
                </label>
                <select
                  name="parkingPrive"
                  value={formData.parkingPrive}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="Oui - Garage">Oui - Garage</option>
                  <option value="Oui - Place extérieure">Oui - Place extérieure</option>
                  <option value="Oui - Box fermé">Oui - Box fermé</option>
                  <option value="Non">Non</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <Waves className="w-4 h-4 text-cyan-600" />
                  Vue mer *
                </label>
                <select
                  name="vueMer"
                  value={formData.vueMer}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="Oui - Vue directe">Oui - Vue mer directe</option>
                  <option value="Oui - Vue partielle">Oui - Vue mer partielle</option>
                  <option value="Non">Non</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Distance de la plage *
                </label>
                <select
                  name="distancePlage"
                  value={formData.distancePlage}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="Pieds dans l'eau">Pieds dans l'eau (0-50m)</option>
                  <option value="50-100m">50-100 mètres</option>
                  <option value="100-300m">100-300 mètres</option>
                  <option value="300-500m">300-500 mètres</option>
                  <option value="500m-1km">500m - 1km</option>
                  <option value="+1km">Plus de 1km</option>
                </select>
              </div>
            </div>
          </div>

          {/* Disponibilité */}
          <div className="bg-gray-50 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Bed className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-bold text-gray-900">Disponibilité & Projet</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Période de disponibilité *
                </label>
                <select
                  name="disponibilite"
                  value={formData.disponibilite}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="Toute l'année">Toute l'année</option>
                  <option value="Saison estivale uniquement">Saison estivale uniquement (Juin-Sept)</option>
                  <option value="Hors saison uniquement">Hors saison uniquement</option>
                  <option value="Weekends et vacances">Weekends et vacances scolaires</option>
                  <option value="À définir">À définir ensemble</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message complémentaire (optionnel)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                  placeholder="Précisez vos attentes, votre projet, ou toute information qui nous aiderait à mieux estimer votre bien..."
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-4 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Annuler
            </button>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 px-6 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-3 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : submitStatus === 'success'
                  ? 'bg-green-500 hover:bg-green-600'
                  : 'bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 hover:shadow-xl hover:scale-105'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                  Envoi en cours...
                </>
              ) : submitStatus === 'success' ? (
                <>
                  <Check className="w-5 h-5" />
                  Envoyé !
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Recevoir mon estimation
                </>
              )}
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-center">
              ❌ Erreur lors de l'envoi. Veuillez réessayer ou nous contacter directement.
            </div>
          )}
          
          <p className="text-xs text-gray-500 text-center mt-4">
            * Champs obligatoires - Vos données sont protégées et utilisées uniquement pour votre estimation
          </p>
        </form>
      </div>
    </div>
  );
}