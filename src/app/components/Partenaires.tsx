import { motion } from 'motion/react';
import { Shield, Award, Calendar, Monitor, BadgeCheck, Globe } from 'lucide-react';

const partenaires = [
  {
    icon: Shield,
    name: 'Swikly',
    description: 'Dépôt de garantie digital sécurisé',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Award,
    name: 'CCI du Vaucluse',
    description: 'Partenaire institutionnel',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: BadgeCheck,
    name: 'Carte G Immobilier',
    description: 'Agrément professionnel',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Award,
    name: 'Superhôte Airbnb',
    description: 'Vos biens bénéficient de notre badge',
    color: 'from-pink-500 to-red-500',
  },
  {
    icon: Globe,
    name: 'Multi-diffusion',
    description: 'Jusqu\'à 50 plateformes de réservation',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Monitor,
    name: 'Espace Propriétaire',
    description: 'Suivez tout en temps réel et bloquez vos dates',
    color: 'from-indigo-500 to-purple-500',
  },
];

export function Partenaires() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
            <Shield className="w-5 h-5" />
            <span className="font-medium">Nos Partenaires</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Des Partenaires de Confiance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous travaillons avec les meilleurs acteurs du secteur pour vous garantir un service premium
          </p>
        </motion.div>

        {/* Grid Partenaires */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partenaires.map((partenaire, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 group"
            >
              <div className={`bg-gradient-to-br ${partenaire.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <partenaire.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {partenaire.name}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {partenaire.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Espace Propriétaire */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-10 rounded-3xl text-white shadow-2xl">
            <Monitor className="w-16 h-16 mb-6" />
            <h3 className="text-3xl font-bold mb-4">
              Votre Espace Propriétaire Personnel
            </h3>
            <p className="text-lg text-indigo-100 mb-6">
              Accédez à votre tableau de bord personnalisé 24/7 pour :
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="bg-white/20 rounded-full p-1">
                  <Calendar className="w-5 h-5" />
                </div>
                <span>Consulter vos réservations en temps réel</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-white/20 rounded-full p-1">
                  <Monitor className="w-5 h-5" />
                </div>
                <span>Suivre vos revenus et statistiques</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-white/20 rounded-full p-1">
                  <BadgeCheck className="w-5 h-5" />
                </div>
                <span>Bloquer des dates pour profiter de votre bien</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">
              Partenaire Office du Tourisme
            </h4>
            <p className="text-lg text-gray-700 mb-6">
              Nous sommes partenaires de l'<strong>Office du Tourisme de la région méditerranéenne</strong>, 
              ce qui garantit une promotion locale supplémentaire de vos biens.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
              <p className="text-gray-800">
                <strong>💡 Avantage :</strong> Vos logements sont référencés et recommandés 
                par les structures touristiques officielles de la région.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
