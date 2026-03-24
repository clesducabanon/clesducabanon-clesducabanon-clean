import { motion } from 'motion/react';
import { MessageCircle, FileCheck, Rocket, TrendingUp, CheckCircle } from 'lucide-react';

const etapes = [
  {
    numero: '01',
    icon: MessageCircle,
    titre: 'Contactez-nous',
    description: 'Estimation gratuite de vos revenus potentiels en moins de 24h. Échange téléphonique pour comprendre vos besoins.',
    color: 'from-blue-500 to-teal-500',
  },
  {
    numero: '02',
    icon: FileCheck,
    titre: 'Signature & Photos',
    description: 'Contrat transparent sans frais cachés. Séance photo professionnelle pour valoriser votre bien.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    numero: '03',
    icon: Rocket,
    titre: 'Mise en ligne',
    description: 'Diffusion sur +50 plateformes (Airbnb, Booking...). Optimisation tarifaire dynamique activée.',
    color: 'from-orange-500 to-red-500',
  },
  {
    numero: '04',
    icon: TrendingUp,
    titre: 'Revenus optimisés',
    description: 'Encaissement automatique. Rapport mensuel détaillé. Vous profitez de votre bien quand vous voulez.',
    color: 'from-green-500 to-emerald-500',
  },
];

export function CommentCaMarche() {
  return (
    <section id="comment-ca-marche" className="py-24 bg-gradient-to-b from-white to-gray-50">
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
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Simple et Efficace</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En 4 étapes simples, votre bien génère des revenus sans aucun effort de votre part
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 via-orange-200 to-green-200 -z-0"></div>

          {etapes.map((etape, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 group z-10"
            >
              {/* Number Badge */}
              <div className={`absolute -top-4 -left-4 bg-gradient-to-br ${etape.color} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg`}>
                {etape.numero}
              </div>

              {/* Icon */}
              <div className={`bg-gradient-to-br ${etape.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform shadow-md`}>
                <etape.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {etape.titre}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-center text-sm">
                {etape.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all inline-flex items-center gap-3 group"
          >
            Démarrer maintenant
            <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-4 text-gray-500 text-sm">
            ⏱️ Réponse en moins de 24h • Sans engagement • Estimation gratuite
          </p>
        </motion.div>
      </div>
    </section>
  );
}
