import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Globe, Smartphone, Euro, TrendingUp, Clock, CheckCircle, Star, Calendar, MessageCircle, Camera } from 'lucide-react';
import { SEOHead, getBreadcrumbSchema } from '../../SEOHead';
import { Breadcrumb } from '../../Breadcrumb';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface GestionDigitaleVillesFranceProps {
  setCurrentPage?: (page: string) => void;
}

export function GestionDigitaleVillesFrance({ setCurrentPage }: GestionDigitaleVillesFranceProps) {
  const breadcrumbItems = [
    { name: 'Accueil', url: 'https://www.clesducabanon.fr' },
    { name: 'Blog', url: 'https://www.clesducabanon.fr/blog' },
    { name: 'Gestion Digitale France & DOM-TOM', url: 'https://www.clesducabanon.fr/blog/gestion-digitale-france-dom-tom' },
  ];

  const villes = [
    { nom: 'Paris', region: 'Île-de-France', potentiel: 'Très élevé', icon: '🗼' },
    { nom: 'Lyon', region: 'Auvergne-Rhône-Alpes', potentiel: 'Élevé', icon: '🦁' },
    { nom: 'Marseille', region: 'PACA', potentiel: 'Très élevé', icon: '⚓' },
    { nom: 'Guadeloupe', region: 'DOM-TOM', potentiel: 'Excellent', icon: '🌴' },
    { nom: 'Martinique', region: 'DOM-TOM', potentiel: 'Excellent', icon: '🏝️' },
    { nom: 'La Réunion', region: 'DOM-TOM', potentiel: 'Excellent', icon: '🌋' },
  ];

  const servicesInclus = [
    { icon: Camera, titre: 'Photos pro (optionnel)', description: 'Shooting photo professionnel pour valoriser votre bien' },
    { icon: Smartphone, titre: 'Annonces optimisées', description: 'Création et optimisation sur Airbnb, Booking, Abritel' },
    { icon: TrendingUp, titre: 'Tarification dynamique', description: 'Prix adaptés en temps réel selon la demande' },
    { icon: MessageCircle, titre: 'Communication 24/7', description: 'Réponses automatiques et personnalisées aux voyageurs' },
    { icon: Calendar, titre: 'Calendrier synchronisé', description: 'Évitez les double-réservations entre plateformes' },
    { icon: Star, titre: 'Statut Superhôte', description: 'Objectif 4.9/5 avec nos techniques éprouvées' },
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEOHead
        title="Gestion Airbnb Paris Lyon Marseille Guadeloupe Martinique Réunion 180€/mois | Les Clés du Cabanon"
        description="Conciergerie digitale 180€/mois pour gérer votre location Airbnb à Paris, Lyon, Marseille, Guadeloupe, Martinique, La Réunion. Gestion complète à distance sans intervention terrain. 543 propriétaires satisfaits."
        keywords="gestion airbnb paris, conciergerie airbnb lyon, gestion location marseille, airbnb guadeloupe, airbnb martinique, airbnb réunion, gestion digitale airbnb, conciergerie à distance"
        canonicalUrl="https://www.clesducabanon.fr/blog/gestion-digitale-france-dom-tom"
        structuredData={getBreadcrumbSchema(breadcrumbItems)}
      />

      <Breadcrumb items={breadcrumbItems} setCurrentPage={setCurrentPage} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => setCurrentPage && setCurrentPage('blog')}
              className="flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour au blog
            </button>

            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Globe className="w-5 h-5" />
              <span>Gestion Digitale</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Gestion Airbnb Paris, Lyon, Marseille, Guadeloupe, Martinique, Réunion : Formule Digitale 180€/mois
            </h1>

            <p className="text-xl text-blue-100 mb-8">
              Vous possédez un bien à Paris, Lyon, Marseille ou dans les DOM-TOM ? Déléguez la gestion digitale de votre location Airbnb pour 180€/mois fixe, sans commission. Vous gérez les clés et le ménage, nous optimisons tout le reste.
            </p>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                📅 15 mars 2026
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                ⏱️ 8 min de lecture
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                ✍️ Les Clés du Cabanon
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg max-w-none mb-12"
        >
          <p className="text-xl text-gray-700 leading-relaxed">
            Vous êtes propriétaire d'un appartement à <strong>Paris</strong>, d'un loft à <strong>Lyon</strong>, d'une villa à <strong>Marseille</strong>, ou d'un bungalow en <strong>Guadeloupe</strong>, <strong>Martinique</strong> ou à <strong>La Réunion</strong> ? Vous souhaitez générer des revenus locatifs sans gérer au quotidien les messages, les annonces, et la tarification ?
          </p>

          <p className="text-xl text-gray-700 leading-relaxed">
            <strong>Notre formule Gestion Digitale à 180€/mois</strong> est conçue pour vous. Conciergerie 100% à distance, sans intervention terrain, idéale pour toute la France métropolitaine et les DOM-TOM.
          </p>
        </motion.div>

        {/* Image principale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyJTIwYXBhcnRtZW50fGVufDF8fHx8MTc3MTYwMDQ0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Gestion Airbnb Paris - Appartement vue Tour Eiffel"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            Gestion digitale Airbnb pour appartements et villas en France et DOM-TOM
          </p>
        </motion.div>

        {/* Villes Couvertes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <MapPin className="w-8 h-8 text-blue-600" />
            Villes & Régions Couvertes
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {villes.map((ville, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100"
              >
                <div className="text-4xl mb-3">{ville.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{ville.nom}</h3>
                <p className="text-gray-600 text-sm mb-2">{ville.region}</p>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-green-700 font-medium">Potentiel : {ville.potentiel}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
            <p className="text-gray-800">
              <strong>✅ Toute la France & DOM-TOM :</strong> Notre formule digitale couvre l'ensemble du territoire français, métropole et outre-mer. Vous avez un bien dans une autre ville ? Contactez-nous, nous gérons partout !
            </p>
          </div>
        </motion.div>

        {/* Formule Digitale 180€ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Euro className="w-8 h-8 text-green-600" />
            Formule Gestion Digitale 180€/mois
          </h2>

          <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-3xl p-8 mb-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold mb-2">180€/mois</h3>
                <p className="text-green-100">Tarif fixe, sans commission sur vos revenus</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                543 propriétaires
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 mb-2" />
                <p className="font-medium">Gestion 100% digitale</p>
                <p className="text-sm text-green-100">Aucune intervention terrain</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 mb-2" />
                <p className="font-medium">Vous gardez le contrôle</p>
                <p className="text-sm text-green-100">Remise clés & ménage</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 mb-2" />
                <p className="font-medium">Revenus optimisés</p>
                <p className="text-sm text-green-100">Tarification dynamique IA</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 mb-2" />
                <p className="font-medium">Communication 24/7</p>
                <p className="text-sm text-green-100">Réponses automatisées</p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Cette formule est idéale si vous habitez loin de votre bien locatif, si vous avez déjà un système de remise de clés (boîte à clés, voisin, gardien), et si vous gérez le ménage vous-même ou via une entreprise locale.
          </p>

          <p className="text-gray-700 leading-relaxed">
            <strong>Exemple concret :</strong> Vous possédez un T2 à Paris 11ème loué 120€/nuit en moyenne. Vous générez environ 2 500€/mois de revenus bruts. Avec notre formule digitale à 180€/mois, <strong>vous conservez 93% de vos revenus</strong> (contre seulement 80% avec une formule à commission).
          </p>
        </motion.div>

        {/* Services Inclus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <CheckCircle className="w-8 h-8 text-green-600" />
            Ce Qui Est Inclus dans la Formule Digitale
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {servicesInclus.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.titre}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl mt-8">
            <p className="text-gray-800">
              <strong>⚠️ Non inclus :</strong> Remise des clés, états des lieux, ménage, intervention sur place. Vous gérez ces aspects vous-même ou via vos prestataires locaux.
            </p>
          </div>
        </motion.div>

        {/* Pourquoi Paris Lyon Marseille DOM-TOM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Pourquoi Choisir Notre Gestion Digitale pour Paris, Lyon, Marseille et les DOM-TOM ?
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                🗼 Paris : Marché ultra-compétitif
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Paris est le <strong>marché Airbnb n°1 en France</strong> avec plus de 65 000 annonces actives. Se démarquer nécessite des annonces parfaitement optimisées, une tarification dynamique au jour le jour, et une réactivité 24/7. Notre IA analyse 200+ critères pour maximiser votre taux d'occupation et vos revenus.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                🦁 Lyon : Capitale gastronomique en plein essor
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Lyon attire de plus en plus de touristes d'affaires et de loisirs. <strong>Taux d'occupation moyen : 68%</strong>. Notre expertise en tarification permet d'atteindre 75-80% avec des prix optimisés selon les événements (Fête des Lumières, salons professionnels, matchs OL).
              </p>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                ⚓ Marseille : Soleil & Méditerranée
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Marseille connaît une <strong>croissance Airbnb de +45% depuis 2023</strong>. Port, calanques, Vieux-Port : les voyageurs adorent. Nous optimisons vos annonces pour capter le flux touristique et maximiser les séjours longs (5-7 nuits).
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                🌴 Guadeloupe, Martinique, Réunion : Paradis tropical
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Les DOM-TOM sont des <strong>destinations de rêve avec une forte saisonnalité</strong>. Hiver (décembre-avril) = haute saison, été = basse saison. Notre tarification dynamique ajuste vos prix automatiquement. Objectif : <strong>revenus annuels optimisés de +30% vs gestion manuelle</strong>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Témoignage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center text-3xl">
                👨‍💼
              </div>
              <div>
                <p className="font-bold text-lg">Julien M.</p>
                <p className="text-purple-100 text-sm">Propriétaire T3 Lyon Presqu'île</p>
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-4">
              "J'habite à Toulouse et je possède un appartement à Lyon que je loue sur Airbnb. Avant Les Clés du Cabanon, je perdais un temps fou à gérer les messages, ajuster les prix, créer les annonces... Aujourd'hui, pour 180€/mois, tout est automatisé. <strong>Mes revenus ont augmenté de 25%</strong> et je ne passe plus que 10 minutes par mois sur la gestion !"
            </p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-300 text-yellow-300" />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Comparatif Prix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Comparatif : Formule Digitale 180€ vs Commission 20%
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-600 to-teal-600 text-white">
                <tr>
                  <th className="p-4 text-left">Critère</th>
                  <th className="p-4 text-center">Digitale 180€/mois</th>
                  <th className="p-4 text-center">Commission 20%</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="p-4 font-medium">Revenus mensuels (exemple 2 500€)</td>
                  <td className="p-4 text-center bg-green-50 font-bold text-green-700">2 320€ net</td>
                  <td className="p-4 text-center bg-red-50 font-bold text-red-700">2 000€ net</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Coût de gestion</td>
                  <td className="p-4 text-center bg-green-50">180€ fixe</td>
                  <td className="p-4 text-center bg-red-50">500€ (20%)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">% conservé</td>
                  <td className="p-4 text-center bg-green-50 font-bold">93%</td>
                  <td className="p-4 text-center bg-red-50 font-bold">80%</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Économie annuelle</td>
                  <td className="p-4 text-center bg-green-50 font-bold text-green-700">+3 840€/an</td>
                  <td className="p-4 text-center bg-red-50">-</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-600 text-sm mt-4 text-center">
            * Exemple basé sur un bien générant 2 500€/mois de revenus bruts
          </p>
        </motion.div>

        {/* Comment ça marche */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Clock className="w-8 h-8 text-blue-600" />
            Comment Ça Marche ?
          </h2>

          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="bg-gradient-to-br from-blue-500 to-teal-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Vous nous contactez</h3>
                <p className="text-gray-700">
                  Appelez-nous au <strong>06 25 40 14 80</strong> ou remplissez notre formulaire. Nous organisons un appel de 15 minutes pour comprendre votre bien et vos objectifs.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-gradient-to-br from-blue-500 to-teal-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Nous créons vos annonces</h3>
                <p className="text-gray-700">
                  Envoyez-nous vos photos (ou commandez un shooting pro). Nous rédigeons des descriptions SEO optimisées et publions sur Airbnb, Booking, Abritel.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-gradient-to-br from-blue-500 to-teal-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Nous gérons tout en ligne</h3>
                <p className="text-gray-700">
                  Communication voyageurs 24/7, tarification dynamique quotidienne, calendrier synchronisé, optimisation continue des annonces.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-gradient-to-br from-blue-500 to-teal-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Vous gérez les clés & le ménage</h3>
                <p className="text-gray-700">
                  Vous organisez la remise des clés (boîte à clés, voisin, gardien) et le ménage (vous-même ou prestataire local). Nous vous envoyons toutes les infos en avance.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-gradient-to-br from-blue-500 to-teal-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Vous recevez vos revenus</h3>
                <p className="text-gray-700">
                  Les plateformes vous versent directement vos revenus (délai 24h après check-out). Vous payez nos 180€/mois par prélèvement automatique. Simple et transparent.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions Fréquentes
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                💰 Pourquoi 180€/mois au lieu d'une commission ?
              </h3>
              <p className="text-gray-700">
                Avec une commission de 20%, plus vos revenus augmentent, plus vous payez. Avec notre forfait fixe, <strong>vous conservez 93% de vos revenus</strong>, peu importe combien vous gagnez. C'est plus rentable dès que vous dépassez 900€/mois de revenus.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                📍 Intervenez-vous vraiment dans toute la France et les DOM-TOM ?
              </h3>
              <p className="text-gray-700">
                Oui, absolument ! Notre formule digitale est conçue pour fonctionner partout, car nous n'intervenons pas physiquement. Nous gérons des biens à Paris, Lyon, Marseille, Bordeaux, Nice, Toulouse, Nantes, Strasbourg, Lille, Guadeloupe, Martinique, Réunion, Guyane, Mayotte...
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                🔑 Comment gérer les clés si vous n'êtes pas sur place ?
              </h3>
              <p className="text-gray-700">
                La plupart de nos clients utilisent une <strong>boîte à clés sécurisée</strong> avec code (20-40€ sur Amazon). Autres options : voisin de confiance, gardien d'immeuble, consigne à clés, serrure connectée. Nous envoyons les codes d'accès aux voyageurs.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                🧹 Et pour le ménage ?
              </h3>
              <p className="text-gray-700">
                Vous le gérez via un prestataire local (coût moyen : 40-80€ selon la taille). Vous pouvez facturer les frais de ménage aux voyageurs via Airbnb. Nous vous recommandons des partenaires si besoin.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                📊 Quels résultats puis-je attendre ?
              </h3>
              <p className="text-gray-700">
                Nos clients en formule digitale atteignent en moyenne <strong>+35% de revenus vs gestion manuelle</strong>, grâce à la tarification dynamique, aux annonces optimisées, et à la réactivité 24/7. Objectif Superhôte 4.9/5 atteint par 89% de nos propriétaires.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">
            Prêt à Maximiser Vos Revenus Airbnb ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Que vous soyez à Paris, Lyon, Marseille, Guadeloupe, Martinique ou La Réunion, commencez dès aujourd'hui avec notre formule digitale à 180€/mois.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setCurrentPage && setCurrentPage('home');
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-medium hover:shadow-2xl transition-all text-lg"
            >
              Demander une estimation gratuite
            </button>
            <a
              href="tel:+33625401480"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all text-lg"
            >
              📞 06 25 40 14 80
            </a>
          </div>
          <p className="text-sm text-blue-100 mt-6">
            ⚡ Mise en service sous 48h • Sans engagement • 543 propriétaires nous font confiance
          </p>
        </motion.div>
      </article>
    </div>
  );
}