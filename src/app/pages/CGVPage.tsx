import { SEOHead } from '../components/SEOHead';
import { FileText, CheckCircle, AlertCircle, Euro, Scale, Shield } from 'lucide-react';

export function CGVPage() {
  return (
    <>
      <SEOHead
        title="Conditions Générales de Vente (CGV) | Les Clés du Cabanon"
        description="Conditions Générales de Vente de Les Clés du Cabanon Conciergerie - Services de gestion locative Airbnb pour villas et appartements Var."
        canonicalUrl="https://www.clesducabanon.fr/cgv"
      />
      
      <div className="pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-600 px-4 py-2 rounded-full mb-4">
              <FileText className="w-5 h-5" />
              <span className="font-medium">Conditions de Vente</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Conditions Générales de Vente
            </h1>
            
            <p className="text-lg text-gray-600">
              Applicables aux services de conciergerie et gestion locative
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-10">
            
            {/* Préambule */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Préambule</h2>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <p className="text-gray-700 leading-relaxed">
                  Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre <strong>LES CLÉS DU CABANON CONCIERGERIE</strong> (SAS au capital de 2€, SIREN 929 924 983, RCS Toulon) et ses clients propriétaires de biens immobiliers destinés à la location saisonnière.
                </p>
              </div>
            </section>

            {/* Article 1 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Objet</h2>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed">
                  Les présentes CGV ont pour objet de définir les modalités et conditions dans lesquelles <strong>LES CLÉS DU CABANON CONCIERGERIE</strong> fournit ses services de gestion locative saisonnière aux propriétaires de biens immobiliers (ci-après "le Client" ou "le Propriétaire").
                </p>
              </div>
            </section>

            {/* Article 2 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Services Proposés</h2>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <p className="text-gray-700"><strong>LES CLÉS DU CABANON CONCIERGERIE</strong> propose trois formules de gestion :</p>
                
                <div className="space-y-3 ml-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-gray-900">Formule Gestion Seule</p>
                      <p className="text-gray-700">Création et gestion des annonces, tarification dynamique, communication avec les voyageurs, gestion du calendrier multi-plateformes.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-gray-900">Formule Premium (20% TTC)</p>
                      <p className="text-gray-700">Zone Côte Varoise (Sanary à Hyères) : Gestion complète incluant remise des clés, états des lieux, coordination ménage, maintenance, intervention terrain 24/7.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-gray-900">Formule Digitale (180€/mois TTC)</p>
                      <p className="text-gray-700">France entière et international : Gestion à distance sans intervention terrain, idéale pour propriétaires gérant le volet terrain eux-mêmes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Article 3 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Tarifs et Modalités de Paiement</h2>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <div>
                  <p className="font-bold text-gray-900 mb-2">3.1 - Formule Premium (20% TTC)</p>
                  <p className="text-gray-700">La commission est de <strong>20% TTC</strong> calculée sur le montant des réservations encaissées (hors frais de ménage et frais de service Airbnb/Booking).</p>
                </div>
                
                <div>
                  <p className="font-bold text-gray-900 mb-2">3.2 - Formule Digitale (180€/mois TTC)</p>
                  <p className="text-gray-700">Le forfait mensuel est de <strong>180€ TTC</strong>, payable mensuellement par prélèvement automatique.</p>
                </div>
                
                <div>
                  <p className="font-bold text-gray-900 mb-2">3.3 - Frais de ménage et blanchisserie</p>
                  <p className="text-gray-700">Les frais de ménage et de blanchisserie sont facturés directement aux voyageurs et reversés aux prestataires. Ils ne sont pas inclus dans la commission de gestion.</p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <div className="flex items-start gap-2">
                    <Euro className="w-5 h-5 text-blue-600 mt-1" />
                    <p className="text-gray-700">
                      <strong>Versement des revenus :</strong> Les revenus locatifs sont versés au Propriétaire sous 7 jours après le check-out du voyageur, déduction faite de la commission de gestion.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Article 4 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Obligations du Propriétaire</h2>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                  <p className="text-gray-700">Fournir un bien conforme aux normes de sécurité et d'hygiène en vigueur</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                  <p className="text-gray-700">Disposer des autorisations nécessaires pour la location saisonnière (numéro d'enregistrement MEUBLÉ DE TOURISME si applicable)</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                  <p className="text-gray-700">Souscrire une assurance responsabilité civile propriétaire non-occupant et assurance habitation</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                  <p className="text-gray-700">Fournir les équipements et le linge de maison conformes aux standards Airbnb/Booking</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                  <p className="text-gray-700">Informer LES CLÉS DU CABANON de toute période d'indisponibilité du bien</p>
                </div>
              </div>
            </section>

            {/* Article 5 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">5</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Obligations de LES CLÉS DU CABANON CONCIERGERIE</h2>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-teal-600 mt-1" />
                  <p className="text-gray-700">Optimiser le taux d'occupation et les revenus locatifs via une tarification dynamique</p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-teal-600 mt-1" />
                  <p className="text-gray-700">Créer et gérer les annonces sur les plateformes de location (Airbnb, Booking, etc.)</p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-teal-600 mt-1" />
                  <p className="text-gray-700">Assurer la communication avec les voyageurs (messages, réservations, demandes)</p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-teal-600 mt-1" />
                  <p className="text-gray-700">Coordonner le ménage et la blanchisserie (Formule Premium)</p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-teal-600 mt-1" />
                  <p className="text-gray-700">Effectuer les états des lieux et la remise des clés (Formule Premium)</p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-teal-600 mt-1" />
                  <p className="text-gray-700">Fournir un reporting mensuel détaillé des réservations et revenus</p>
                </div>
              </div>
            </section>

            {/* Article 6 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">6</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Durée et Résiliation du Contrat</h2>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <div>
                  <p className="font-bold text-gray-900 mb-2">6.1 - Durée</p>
                  <p className="text-gray-700">Le contrat est conclu pour une durée initiale de <strong>12 mois</strong>, renouvelable tacitement par périodes de 12 mois.</p>
                </div>
                
                <div>
                  <p className="font-bold text-gray-900 mb-2">6.2 - Résiliation</p>
                  <p className="text-gray-700">Chaque partie peut résilier le contrat moyennant un préavis de <strong>3 mois</strong> par lettre recommandée avec accusé de réception.</p>
                </div>
                
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-600 mt-1" />
                    <p className="text-gray-700">
                      <strong>Résiliation anticipée :</strong> En cas de résiliation anticipée par le Propriétaire sans motif légitime, une indemnité forfaitaire équivalente à 1 mois de commission moyenne pourra être due.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Article 7 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">7</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Responsabilité et Assurances</h2>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <div>
                  <p className="font-bold text-gray-900 mb-2">7.1 - Garantie financière</p>
                  <p className="text-gray-700">LES CLÉS DU CABANON CONCIERGERIE dispose d'une garantie financière de <strong>120 000 €</strong> conformément à l'article L.342-1 du Code du Tourisme.</p>
                </div>
                
                <div>
                  <p className="font-bold text-gray-900 mb-2">7.2 - Assurance du Propriétaire</p>
                  <p className="text-gray-700">Le Propriétaire s'engage à maintenir une assurance responsabilité civile propriétaire non-occupant couvrant les dommages matériels et corporels liés à la location.</p>
                </div>
                
                <div>
                  <p className="font-bold text-gray-900 mb-2">7.3 - Limitation de responsabilité</p>
                  <p className="text-gray-700">LES CLÉS DU CABANON CONCIERGERIE ne saurait être tenu responsable des dommages causés par les voyageurs au-delà du montant de la garantie Swikly ou dépôt de garantie récupéré.</p>
                </div>
              </div>
            </section>

            {/* Article 8 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">8</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Protection des Données Personnelles</h2>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed">
                  Conformément au RGPD, les données personnelles collectées sont utilisées uniquement pour la gestion du service de conciergerie. Le Propriétaire dispose d'un droit d'accès, de rectification et de suppression de ses données en contactant <a href="mailto:contact@les-cles-du-cabanon.com" className="text-blue-600 hover:underline">contact@les-cles-du-cabanon.com</a>.
                </p>
              </div>
            </section>

            {/* Article 9 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">9</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Litiges et Droit Applicable</h2>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                <p className="text-gray-700">
                  <strong>Droit applicable :</strong> Les présentes CGV sont soumises au droit français.
                </p>
                <p className="text-gray-700">
                  <strong>Médiation :</strong> En cas de litige, une tentative de résolution amiable sera privilégiée. À défaut, le litige sera porté devant les tribunaux compétents de Toulon.
                </p>
                <p className="text-gray-700">
                  <strong>Médiation de la consommation :</strong> Conformément à l'article L.612-1 du Code de la consommation, vous pouvez recourir gratuitement à un médiateur de la consommation en cas de litige.
                </p>
              </div>
            </section>

            {/* Article 10 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">10</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Acceptation des CGV</h2>
              </div>
              
              <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-xl">
                <p className="text-gray-700 leading-relaxed">
                  La signature du contrat de mandat de gestion ou le paiement du premier forfait mensuel vaut acceptation expresse et sans réserve des présentes Conditions Générales de Vente.
                </p>
              </div>
            </section>

          </div>

          {/* CTA */}
          <div className="mt-12 text-center space-y-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all font-medium"
            >
              Une question ? Contactez-nous
            </a>
            
            <div>
              <a
                href="/"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Retour à l'accueil
              </a>
            </div>
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