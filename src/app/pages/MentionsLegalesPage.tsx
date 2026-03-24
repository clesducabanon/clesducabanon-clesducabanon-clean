import { SEOHead } from '../components/SEOHead';
import { Building2, Mail, Phone, MapPin, FileText, Scale } from 'lucide-react';

export function MentionsLegalesPage() {
  return (
    <>
      <SEOHead
        title="Mentions Légales | Les Clés du Cabanon - Conciergerie Var"
        description="Mentions légales de Les Clés du Cabanon Conciergerie - SAS au capital de 2€ - SIREN 929 924 983 - RCS Toulon - Conciergerie haut de gamme Sanary Hyères Var."
        canonicalUrl="https://www.clesducabanon.fr/mentions-legales"
      />
      
      <div className="pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
              <Scale className="w-5 h-5" />
              <span className="font-medium">Informations Légales</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mentions Légales
            </h1>
            
            <p className="text-lg text-gray-600">
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-10">
            
            {/* Éditeur du Site */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Éditeur du Site</h2>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                <p className="text-gray-700"><strong>Raison sociale :</strong> LES CLÉS DU CABANON CONCIERGERIE</p>
                <p className="text-gray-700"><strong>Forme juridique :</strong> SAS (Société par Actions Simplifiée)</p>
                <p className="text-gray-700"><strong>Capital social :</strong> 2,00 €</p>
                <p className="text-gray-700"><strong>SIREN :</strong> 929 924 983</p>
                <p className="text-gray-700"><strong>SIRET (siège) :</strong> 929 924 983 00026</p>
                <p className="text-gray-700"><strong>Numéro de TVA intracommunautaire :</strong> FR59929924983</p>
                <p className="text-gray-700"><strong>RCS :</strong> Toulon 929 924 983</p>
                <p className="text-gray-700"><strong>Date d'immatriculation :</strong> 25 mars 2025</p>
                <p className="text-gray-700"><strong>Code NAF (APE) :</strong> 55.20Z - Hébergement touristique et autre hébergement de courte durée</p>
                <p className="text-gray-700"><strong>Domaine d'activité :</strong> Hébergement</p>
                <p className="text-gray-700"><strong>Forme d'exercice :</strong> Commerciale</p>
              </div>
            </section>

            {/* Siège Social */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-12 h-12 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Siège Social</h2>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700">
                  Inscription au RCS : <strong>TOULON</strong><br />
                  Date d'inscription : <strong>25 mars 2025</strong>
                </p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Contact</h2>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <a href="mailto:contact@les-cles-du-cabanon.com" className="text-blue-600 hover:underline font-medium">
                    contact@les-cles-du-cabanon.com
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <a href="tel:+33625401480" className="text-blue-600 hover:underline font-medium">
                    +33 6 25 40 14 80
                  </a>
                </div>
                
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-blue-600 mt-1" />
                  <span className="text-gray-700">
                    <strong>Site web :</strong> <a href="https://www.clesducabanon.fr" className="text-blue-600 hover:underline">www.clesducabanon.fr</a>
                  </span>
                </div>
              </div>
            </section>

            {/* Activité Professionnelle */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-12 h-12 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Activité Professionnelle</h2>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                <p className="text-gray-700">
                  <strong>Activité principale déclarée :</strong><br />
                  L'exploitation, la gestion et la mise en location de tous types de biens immobiliers à des fins d'hébergement touristique et de courte durée. Elle peut effectuer toute prestation de services liés à la gestion locative de biens immobiliers.
                </p>
                
                <p className="text-gray-700 pt-4">
                  <strong>Convention collective :</strong><br />
                  Organismes de tourisme social et familial - IDCC 1316
                </p>
                
                <p className="text-gray-700 pt-4">
                  <strong>Garantie financière :</strong> 120 000 €
                </p>
                
                <p className="text-gray-700 pt-4">
                  <strong>Date de clôture d'exercice comptable :</strong> 30 septembre 2026
                </p>
              </div>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hébergement du Site</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700">
                  <strong>Hébergeur :</strong> Vercel Inc.<br />
                  <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
                  <strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">vercel.com</a>
                </p>
              </div>
            </section>

            {/* Propriété Intellectuelle */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Propriété Intellectuelle</h2>
              <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                <p className="text-gray-700">
                  L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, etc.) est la propriété exclusive de <strong>LES CLÉS DU CABANON CONCIERGERIE</strong>, sauf mention contraire.
                </p>
                <p className="text-gray-700">
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
                </p>
                <p className="text-gray-700">
                  Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
                </p>
              </div>
            </section>

            {/* Protection des Données */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Protection des Données Personnelles (RGPD)</h2>
              <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                <p className="text-gray-700">
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                </p>
                <p className="text-gray-700">
                  <strong>Responsable de traitement :</strong> LES CLÉS DU CABANON CONCIERGERIE
                </p>
                <p className="text-gray-700">
                  <strong>Finalité du traitement :</strong> Gestion des demandes de contact, estimation de biens, réservations.
                </p>
                <p className="text-gray-700">
                  <strong>Exercer vos droits :</strong> Pour toute demande, contactez-nous à <a href="mailto:contact@les-cles-du-cabanon.com" className="text-blue-600 hover:underline">contact@les-cles-du-cabanon.com</a>
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700">
                  Ce site n'utilise pas de cookies de tracking publicitaire. Seuls des cookies techniques nécessaires au bon fonctionnement du site peuvent être déposés.
                </p>
              </div>
            </section>

            {/* Crédits */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Crédits</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700">
                  <strong>Conception et réalisation :</strong> LES CLÉS DU CABANON CONCIERGERIE<br />
                  <strong>Photos :</strong> Unsplash (photos libres de droits) et photos propriétaires
                </p>
              </div>
            </section>

          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all font-medium"
            >
              Retour à l'accueil
            </a>
          </div>

          {/* Mise à jour */}
          <p className="text-center text-sm text-gray-500 mt-8">
            Dernière mise à jour : 16 mars 2026
          </p>
        </div>
      </div>
    </>
  );
}