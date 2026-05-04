import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, TrendingUp, Shield } from 'lucide-react';
import { Breadcrumb } from '../Breadcrumb';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface BlogProps {
  setCurrentPage: (page: string) => void;
}

const blogArticles = [
  {
    id: '1',
    slug: 'optimiser-revenus-location-saisonniere-sanary',
    title: 'Comment Optimiser les Revenus de Votre Location Saisonnière à Sanary-sur-Mer ?',
    excerpt: 'Découvrez les meilleures stratégies pour maximiser la rentabilité de votre villa ou appartement en location saisonnière sur la Côte Varoise.',
    image: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    date: '15 Mars 2026',
    author: 'Guillaume & Erika',
    category: 'Rentabilité',
    readTime: '8 min',
    content: `
      <h2>Pourquoi Sanary-sur-Mer est un Marché Porteur ?</h2>
      <p>Sanary-sur-Mer et la Côte Varoise attirent chaque année des milliers de voyageurs en quête d'authenticité méditerranéenne. Avec ses plages de sable fin, son port pittoresque et sa proximité avec Toulon et Hyères, la région offre un potentiel locatif exceptionnel.</p>
      
      <h2>1. Tarification Dynamique : La Clé de la Rentabilité</h2>
      <p>Une tarification fixe est l'erreur n°1 des propriétaires. En ajustant vos prix selon la saisonnalité, les événements locaux et la demande, vous pouvez augmenter vos revenus de <strong>+35% en moyenne</strong>.</p>
      <ul>
        <li><strong>Haute saison (Juillet-Août)</strong> : Tarifs premium (200-400€/nuit pour une villa)</li>
        <li><strong>Moyenne saison (Juin, Septembre)</strong> : Tarifs intermédiaires</li>
        <li><strong>Basse saison</strong> : Offres attractives pour maintenir l'occupation</li>
      </ul>

      <h2>2. Photos Professionnelles : Votre Premier Atout</h2>
      <p>Des photos de qualité augmentent votre taux de réservation de <strong>40%</strong>. Investissez dans un shooting professionnel mettant en valeur :</p>
      <ul>
        <li>La luminosité naturelle de votre bien</li>
        <li>Les équipements premium (piscine, terrasse, vue mer)</li>
        <li>L'ambiance méditerranéenne</li>
      </ul>

      <h2>3. Visibilité Multi-Plateformes</h2>
      <p>Ne vous limitez pas à Airbnb. En diffusant votre annonce sur <strong>Booking.com, VRBO, Abritel</strong> et les sites locaux, vous multipliez vos chances de réservation.</p>

      <h2>4. Service Voyageur Irréprochable</h2>
      <p>Un voyageur satisfait laisse un avis 5 étoiles, qui génère de nouvelles réservations. Misez sur :</p>
      <ul>
        <li>Communication rapide (réponse en moins de 1h)</li>
        <li>Check-in fluide et personnalisé</li>
        <li>Ménage professionnel impeccable</li>
        <li>Recommandations locales (restaurants, activités)</li>
      </ul>

      <h2>Cas Pratique : Villa 4 Personnes à Sanary</h2>
      <p><strong>Avant</strong> : Gestion directe, prix fixes, 60% d'occupation → 18 000€/an</p>
      <p><strong>Après</strong> conciergerie professionnelle : Tarification dynamique, diffusion multi-plateformes, 85% d'occupation → <strong>24 300€/an (+35%)</strong></p>

      <h2>Conclusion</h2>
      <p>Confier votre bien à une conciergerie locale comme Les Clés du Cabanon vous permet de bénéficier d'une expertise du marché, d'outils professionnels et d'un accompagnement personnalisé. Résultat : <strong>plus de revenus, zéro stress</strong>.</p>
    `,
  },
  {
    id: '2',
    slug: 'choisir-conciergerie-airbnb-var',
    title: 'Comment Choisir la Meilleure Conciergerie Airbnb dans le Var ?',
    excerpt: 'Les critères essentiels pour sélectionner un partenaire de confiance qui maximisera vos revenus locatifs et protégera votre bien.',
    image: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    date: '10 Mars 2026',
    author: 'Guillaume & Erika',
    category: 'Conseils',
    readTime: '6 min',
    content: `
      <h2>Pourquoi Faire Appel à une Conciergerie ?</h2>
      <p>Gérer une location saisonnière demande du temps, de l'expertise et une disponibilité 7j/7. Une conciergerie professionnelle prend en charge :</p>
      <ul>
        <li>La gestion des annonces et des réservations</li>
        <li>La communication avec les voyageurs</li>
        <li>Les check-in/check-out et remises de clés</li>
        <li>Le ménage et la maintenance</li>
        <li>La tarification et l'optimisation des revenus</li>
      </ul>

      <h2>1. Vérifiez l'Expertise Locale</h2>
      <p>Une conciergerie doit connaître parfaitement votre zone géographique. Dans le Var, privilégiez un prestataire implanté localement à <strong>Sanary, Hyères, Six-Fours</strong> qui connaît les spécificités du marché.</p>

      <h2>2. Transparence des Tarifs</h2>
      <p>Méfiez-vous des commissions cachées. Les modèles courants :</p>
      <ul>
        <li><strong>Commission 15-25%</strong> : Le standard pour une gestion complète</li>
        <li><strong>Forfait mensuel</strong> : Pour la gestion digitale uniquement (150-200€/mois)</li>
      </ul>
      <p>Chez Les Clés du Cabanon : <strong>20% TTC</strong> pour la formule Premium (tout inclus) ou <strong>180€/mois</strong> pour la Formule Digitale.</p>

      <h2>3. Vérifiez les Garanties</h2>
      <p>Une conciergerie sérieuse dispose de :</p>
      <ul>
        <li><strong>Carte professionnelle immobilière (Carte G)</strong></li>
        <li>Assurance responsabilité civile professionnelle</li>
        <li>Références clients vérifiables</li>
        <li>Statut Superhôte Airbnb (gage de qualité)</li>
      </ul>

      <h2>4. Technologie et Espace Propriétaire</h2>
      <p>Un bon partenaire vous donne accès à :</p>
      <ul>
        <li>Un tableau de bord en temps réel</li>
        <li>Le suivi des réservations et des revenus</li>
        <li>La possibilité de bloquer des dates pour usage personnel</li>
      </ul>

      <h2>5. Services Inclus vs Options</h2>
      <p>Clarifiez ce qui est inclus dans la commission :</p>
      <ul>
        <li>Ménage professionnel</li>
        <li>Linge de maison</li>
        <li>Photos professionnelles</li>
        <li>Intervention en cas de problème</li>
      </ul>

      <h2>Questions à Poser Avant de Signer</h2>
      <ul>
        <li>Combien de biens gérez-vous dans ma zone ?</li>
        <li>Quel est le taux d'occupation moyen de vos biens ?</li>
        <li>Puis-je résilier le contrat à tout moment ?</li>
        <li>Comment gérez-vous les situations d'urgence ?</li>
        <li>Avez-vous des avis clients consultables ?</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Choisir une conciergerie, c'est choisir un partenaire de confiance pour votre patrimoine. Privilégiez la <strong>proximité, la transparence et l'expertise locale</strong>.</p>
    `,
  },
  {
    id: '3',
    slug: 'reglementation-location-saisonniere-var-2026',
    title: 'Réglementation Location Saisonnière dans le Var en 2026 : Ce Qu\'il Faut Savoir',
    excerpt: 'Déclaration en mairie, fiscalité, assurance : tour d\'horizon complet des obligations légales pour louer votre bien en toute conformité.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    date: '5 Mars 2026',
    author: 'Guillaume & Erika',
    category: 'Législation',
    readTime: '10 min',
    content: `
      <h2>1. Déclaration en Mairie Obligatoire</h2>
      <p>Depuis 2017, <strong>toute location meublée de courte durée doit être déclarée en mairie</strong>. Vous recevrez un numéro d'enregistrement à afficher sur vos annonces.</p>
      <p><strong>Villes concernées dans le Var</strong> : Toulon, Hyères, Sanary-sur-Mer, Six-Fours, La Seyne-sur-Mer...</p>

      <h2>2. Limite des 120 Jours (Résidence Principale)</h2>
      <p>Si vous louez votre <strong>résidence principale</strong>, la location est limitée à <strong>120 jours par an</strong>. Au-delà, vous devez obtenir une autorisation de changement d'usage.</p>

      <h2>3. Assurance Spécifique Requise</h2>
      <p>Votre assurance habitation classique ne couvre pas la location saisonnière. Souscrivez une <strong>assurance responsabilité civile spécifique</strong> couvrant :</p>
      <ul>
        <li>Les dommages causés par les locataires</li>
        <li>Les accidents dans le logement</li>
        <li>Les annulations de réservation</li>
      </ul>

      <h2>4. Fiscalité : LMNP ou Régime Micro-BIC</h2>
      <p>Deux régimes fiscaux principaux :</p>
      <h3>Régime Micro-BIC (pour revenus inférieur 77 700€/an)</h3>
      <ul>
        <li>Abattement forfaitaire de <strong>50%</strong> sur les revenus</li>
        <li>Déclaration simplifiée</li>
      </ul>
      <h3>LMNP (Loueur Meublé Non Professionnel)</h3>
      <ul>
        <li>Déduction des charges réelles (ménage, conciergerie, travaux)</li>
        <li>Amortissement du bien possible</li>
        <li>Comptabilité obligatoire</li>
      </ul>

      <h2>5. Taxe de Séjour</h2>
      <p>En tant que propriétaire, vous êtes <strong>collecteur de la taxe de séjour</strong> pour le compte de la mairie. Montant : <strong>0,50€ à 4€ par personne et par nuit</strong> selon la ville et la catégorie du logement.</p>

      <h2>6. Copropriété : Vérifiez le Règlement</h2>
      <p>Si votre bien est en copropriété, consultez le règlement intérieur. Certaines copropriétés <strong>interdisent ou limitent</strong> la location saisonnière.</p>

      <h2>7. Normes de Sécurité</h2>
      <p>Votre logement doit respecter des normes minimales :</p>
      <ul>
        <li>Détecteur de fumée obligatoire</li>
        <li>Installation électrique aux normes</li>
        <li>Surface habitable minimale (9m² pour 1 personne)</li>
      </ul>

      <h2>8. Exonérations Fiscales Possibles</h2>
      <p><strong>Sous conditions</strong>, vous pouvez bénéficier d'exonérations :</p>
      <ul>
        <li>Location d'une chambre dans votre résidence principale (revenus inférieur 760€/an)</li>
        <li>Zones de revitalisation rurale (ZRR)</li>
      </ul>
      <p><em>Nous consulter pour vérifier votre éligibilité.</em></p>

      <h2>Sanctions en Cas de Non-Conformité</h2>
      <ul>
        <li><strong>Absence de déclaration</strong> : Amende jusqu'à 5 000€</li>
        <li><strong>Dépassement des 120 jours</strong> : Amende jusqu'à 50 000€</li>
        <li><strong>Non-paiement de la taxe de séjour</strong> : Majoration de 10%</li>
      </ul>

      <h2>Conclusion</h2>
      <p>La location saisonnière est encadrée mais reste <strong>très avantageuse financièrement</strong>. Confier la gestion à une conciergerie professionnelle comme Les Clés du Cabanon vous garantit une <strong>conformité totale</strong> avec la réglementation.</p>
    `,
  },
  {
    id: '4',
    slug: 'top-10-activites-sanary-hyeres-tourisme',
    title: 'Top 10 des Activités Incontournables entre Sanary-sur-Mer et Hyères',
    excerpt: 'Le guide complet des meilleures expériences à vivre sur la Côte Varoise : plages, randonnées, gastronomie et patrimoine culturel.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    date: '1er Mars 2026',
    author: 'Guillaume & Erika',
    category: 'Tourisme',
    readTime: '7 min',
    content: `
      <p class="lead">La Côte Varoise entre Sanary-sur-Mer et Hyères offre une combinaison parfaite entre authenticité provençale, nature préservée et art de vivre méditerranéen. Voici notre sélection des 10 expériences à ne manquer sous aucun prétexte.</p>

      <div class="activity-item">
        <h2>🎨 1. Le Port de Sanary-sur-Mer</h2>
        <p>Classé parmi les <strong>plus beaux ports de France</strong>, Sanary séduit avec ses pointus colorés et son marché provençal quotidien. Chaque matin, les pêcheurs locaux débarquent leur pêche fraîche directement sur le port.</p>
        <p><strong>À ne pas manquer :</strong> Le marché du mercredi matin (fruits, légumes, fromages, artisanat), les terrasses de café sur le port, et le coucher de soleil depuis la jetée.</p>
      </div>

      <div class="activity-item">
        <h2>🏝️ 2. Les Îles d'Or (Porquerolles, Port-Cros, Levant)</h2>
        <p>Accessibles en bateau depuis La Tour Fondue (Giens), ces îles paradisiaques offrent des <strong>plages de sable blanc</strong> et des eaux turquoise dignes des Caraïbes.</p>
        <ul>
          <li><strong>Porquerolles</strong> : Plage Notre-Dame (élue plus belle plage d'Europe), location de vélos pour explorer l'île</li>
          <li><strong>Port-Cros</strong> : Parc national, sentiers de randonnée, snorkeling dans les eaux cristallines</li>
          <li><strong>Île du Levant</strong> : Nature sauvage et villages pittoresques</li>
        </ul>
        <p><strong>Astuce locale :</strong> Partez tôt le matin pour éviter la foule en haute saison.</p>
      </div>

      <div class="activity-item">
        <h2>🍷 3. Route des Vins de Bandol</h2>
        <p>Bandol produit l'un des <strong>meilleurs vins rosés au monde</strong>. Visitez les domaines viticoles en bord de mer et dégustez des crus d'exception.</p>
        <p><strong>Domaines incontournables :</strong> Domaine Tempier, Château de Pibarnon, Domaine de la Bastide Blanche.</p>
        <p><strong>Prix moyen :</strong> 15-25€ pour une dégustation (3-5 vins). Pensez à réserver !</p>
      </div>

      <div class="activity-item">
        <h2>🥾 4. Randonnée au Cap Sicié</h2>
        <p>Point culminant de Six-Fours-les-Plages, le Cap Sicié offre des <strong>panoramas à 360° sur la Méditerranée</strong>. Par temps clair, vue jusqu'aux Alpes !</p>
        <p><strong>Parcours :</strong> 3-4h aller-retour, difficulté moyenne. Chapelle Notre-Dame du Mai au sommet (352m).</p>
        <p><strong>Conseil :</strong> Partez tôt le matin ou en fin d'après-midi pour éviter la chaleur. Eau et casquette indispensables.</p>
      </div>

      <div class="activity-item">
        <h2>🍽️ 5. Déjeuner de Poisson Frais à Sanary</h2>
        <p>Impossible de visiter Sanary sans goûter la <strong>bouillabaisse</strong>, la <strong>bourride</strong> ou les <strong>oursins</strong> en saison (novembre-avril).</p>
        <p><strong>Restaurants recommandés :</strong></p>
        <ul>
          <li>Le Marin Gourmand (vue port, spécialités poisson)</li>
          <li>La P'tite Cour (cuisine créative, terrasse ombragée)</li>
          <li>L'Ardoise du Marché (cuisine du jour selon arrivage)</li>
        </ul>
        <p><strong>Budget :</strong> 25-40€ par personne pour un déjeuner complet.</p>
      </div>

      <div class="activity-item">
        <h2>🏖️ 6. Plage de l'Almanarre (Hyères)</h2>
        <p>Immense plage de sable fin réputée pour le <strong>kitesurf et la planche à voile</strong>. Vent constant (mistral) et spot classé parmi les meilleurs d'Europe.</p>
        <p><strong>Activités :</strong> Kitesurf, windsurf, stand-up paddle, beach-volley. Écoles de kite sur place pour débutants.</p>
        <p><strong>Ambiance :</strong> Jeune, sportive, familiale. Restaurants de plage type paillote.</p>
      </div>

      <div class="activity-item">
        <h2>🏛️ 7. Vieille Ville d'Hyères</h2>
        <p>Ville médiévale chargée d'histoire, Hyères offre des <strong>ruelles pavées, des placettes ombragées</strong> et un patrimoine architectural remarquable.</p>
        <p><strong>Incontournables :</strong></p>
        <ul>
          <li>Place Massillon (marché le samedi matin)</li>
          <li>Collégiale Saint-Paul (vue panoramique)</li>
          <li>Château médiéval en ruines (accès gratuit)</li>
          <li>Villa Noailles (architecture moderne, expositions)</li>
        </ul>
        <p><strong>Temps de visite :</strong> 2-3h à pied. Prévoir des chaussures confortables (ruelles en pente).</p>
      </div>

      <div class="activity-item">
        <h2>🚴 8. Tour de la Presqu'île de Giens à Vélo</h2>
        <p>Piste cyclable de 20 km entre <strong>plages paradisiaques, marais salants</strong> et pinèdes. Panoramas exceptionnels sur les îles d'Or.</p>
        <p><strong>Location de vélos :</strong> 15-25€/jour à Hyères ou La Madrague. Vélos électriques disponibles.</p>
        <p><strong>Arrêts conseillés :</strong> Plage de la Bergerie, Salines, Port de La Madrague.</p>
      </div>

      <div class="activity-item">
        <h2>🌅 9. Coucher de Soleil au Brusc (Six-Fours)</h2>
        <p>Petit port de pêche authentique, Le Brusc offre des <strong>couchers de soleil magiques</strong> face aux îles des Embiez.</p>
        <p><strong>Programme idéal :</strong> Balade sur le port vers 18h, apéro en terrasse, dîner de poissons grillés.</p>
        <p><strong>Bonus :</strong> Embarquez pour l'Île des Embiez (10 min de bateau) pour visiter le domaine Paul Ricard et ses calanques.</p>
      </div>

      <div class="activity-item">
        <h2>🤿 10. Snorkeling à Port-Cros</h2>
        <p>Le <strong>Parc National de Port-Cros</strong> abrite une faune et flore marine exceptionnelles. Eaux cristallines, poissons multicolores, herbiers de posidonie.</p>
        <p><strong>Spots recommandés :</strong> Plage de la Palud (sentier sous-marin balisé), Baie de Port-Man.</p>
        <p><strong>Matériel :</strong> Masque, tuba, palmes à louer sur l'île (15€). Bouées de signalisation disponibles.</p>
        <p><strong>Règles :</strong> Parc protégé = interdiction de pêcher, ramasser des coquillages ou toucher les fonds.</p>
      </div>

      <div class="info-box">
        <h2>🗓️ Quand Visiter ?</h2>
        <ul>
          <li><strong>Mai-Juin</strong> : Météo idéale, peu de monde, prix modérés</li>
          <li><strong>Juillet-Août</strong> : Haute saison, affluence maximale, plages bondées</li>
          <li><strong>Septembre-Octobre</strong> : Notre période préférée ! Eau encore chaude (21-23°C), moins de touristes</li>
          <li><strong>Hiver</strong> : Idéal pour randonnées, marchés provençaux, dégustation d'oursins</li>
        </ul>
      </div>

      <h2>💡 Nos Conseils Pratiques</h2>
      <ul>
        <li><strong>Location de voiture recommandée</strong> pour explorer la région à votre rythme</li>
        <li><strong>Réservez les restaurants</strong> en haute saison (juillet-août)</li>
        <li><strong>Crème solaire et chapeau</strong> indispensables (soleil provençal intense !)</li>
        <li><strong>Évitez les weekends</strong> d'août si vous cherchez la tranquillité</li>
        <li><strong>Applications utiles :</strong> Park4Night (spots camping-car), Windy (météo/vent), Geonaute (randos)</li>
      </ul>

      <h2>Conclusion</h2>
      <p>La Côte Varoise entre Sanary et Hyères est un <strong>condensé de Méditerranée authentique</strong>. Mer turquoise, villages provençaux, gastronomie raffinée, nature préservée : tout y est pour des vacances inoubliables. Et si vous souhaitez louer une villa ou un appartement dans la région, notre conciergerie vous accompagne pour un séjour sur-mesure !</p>
    `,
  },
  {
    id: 'gestion-digitale-villes-france',
    slug: 'gestion-digitale-france-dom-tom',
    title: 'Gestion Airbnb Paris, Lyon, Marseille, Guadeloupe, Martinique, Réunion : 180€/mois',
    excerpt: 'Propriétaire à Paris, Lyon, Marseille ou dans les DOM-TOM ? Découvrez notre formule digitale 180€/mois pour maximiser vos revenus sans commission.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    date: '15 Mars 2026',
    author: 'Guillaume & Erika',
    category: 'Gestion Digitale',
    readTime: '8 min',
    isExternalPage: true, // Flag pour indiquer qu'il s'agit d'une page séparée
  },
];

export function Blog({ setCurrentPage }: BlogProps) {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const article = blogArticles.find(a => a.id === selectedArticle);

  if (article) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <Breadcrumb items={[{ label: 'Blog', onClick: () => setSelectedArticle(null) }, { label: article.title }]} />
        
        {/* Article Header */}
        <div className="relative h-96 overflow-hidden">
          <ImageWithFallback
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  {article.category}
                </span>
                <span className="text-white/80 text-sm">{article.readTime} de lecture</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{article.title}</h1>
              <div className="flex items-center gap-6 text-white/90 text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div 
            className="prose prose-lg max-w-none
              prose-headings:text-gray-900 prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4
              prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
              prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
              prose-li:text-gray-700 prose-li:mb-2
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 mt-12 text-white text-center">
            <TrendingUp className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Besoin d'un Expert pour Gérer Votre Bien ?</h3>
            <p className="text-blue-100 mb-6">
              Confiez la gestion de votre location à notre équipe. Estimation gratuite en 24h !
            </p>
            <button
              onClick={() => {
                setCurrentPage('home');
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all"
            >
              Demander une Estimation Gratuite
            </button>
          </div>

          {/* Back Button */}
          <button
            onClick={() => setSelectedArticle(null)}
            className="mt-8 text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
          >
            ← Retour au blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <Breadcrumb items={[{ label: 'Blog' }]} />
      
      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog Conciergerie & Location Saisonnière</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Conseils d'experts, guides pratiques et actualités pour optimiser la gestion de votre bien dans le Var
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {blogArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all cursor-pointer group"
                onClick={() => {
                  if (article.isExternalPage) {
                    setCurrentPage(article.id);
                  } else {
                    setSelectedArticle(article.id);
                  }
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.readTime} de lecture</span>
                    <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                      Lire l'article
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
          >
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Prêt à Maximiser Vos Revenus Locatifs ?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Confiez votre bien à notre conciergerie experte. Estimation gratuite sous 24h.
            </p>
            <button
              onClick={() => {
                setCurrentPage('home');
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all inline-flex items-center gap-2"
            >
              Demander mon estimation
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}