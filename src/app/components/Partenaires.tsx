import { motion } from 'motion/react';
import { Shield, Award, Calendar, Monitor, BadgeCheck, Globe } from 'lucide-react';

const partenaires = [
  { icon: Shield, name: 'Swikly', description: 'Dépôt de garantie digital sécurisé', gold: false },
  { icon: Award, name: 'CCI du Vaucluse', description: 'Partenaire institutionnel', gold: true },
  { icon: BadgeCheck, name: 'Carte G Immobilier', description: 'Agrément professionnel', gold: false },
  { icon: Award, name: 'Superhôte Airbnb', description: 'Vos biens bénéficient de notre badge', gold: true },
  { icon: Globe, name: 'Multi-diffusion', description: "Jusqu'à 50 plateformes de réservation", gold: false },
  { icon: Monitor, name: 'Espace Propriétaire', description: 'Suivez tout en temps réel et bloquez vos dates', gold: true },
];

export function Partenaires() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-semibold"
            style={{ background: 'rgba(10,173,163,0.10)', color: '#087A72', border: '1px solid rgba(10,173,163,0.25)' }}
          >
            <Shield className="w-4 h-4" />
            <span>Nos Partenaires</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1a2744' }}>
            Des Partenaires de Confiance
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
            Nous travaillons avec les meilleurs acteurs du secteur pour vous garantir un service premium
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {partenaires.map((partenaire, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="bg-white p-7 rounded-2xl transition-all hover:-translate-y-1 group"
              style={{ border: '1px solid rgba(201,168,76,0.18)', boxShadow: '0 2px 16px rgba(26,39,68,0.05)' }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ background: partenaire.gold ? 'linear-gradient(135deg, #C9A84C, #A07D2A)' : 'linear-gradient(135deg, #0AADA3, #087A72)' }}
              >
                <partenaire.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: '#1a2744' }}>{partenaire.name}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{partenaire.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="p-10 rounded-3xl text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a2744 0%, #0AADA3 100%)', boxShadow: '0 16px 48px rgba(26,39,68,0.18)' }}>
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
            <Monitor className="w-14 h-14 mb-5" style={{ color: '#C9A84C' }} />
            <h3 className="text-2xl font-bold mb-3">Votre Espace Propriétaire Personnel</h3>
            <p className="text-sm text-white/75 mb-5">Accédez à votre tableau de bord personnalisé 24/7 pour :</p>
            <ul className="space-y-3">
              {[
                { icon: Calendar, text: 'Consulter vos réservations en temps réel' },
                { icon: Monitor, text: 'Suivre vos revenus et statistiques' },
                { icon: BadgeCheck, text: 'Bloquer des dates pour profiter de votre bien' },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/90">
                  <div className="rounded-full p-1.5" style={{ background: 'rgba(201,168,76,0.25)' }}>
                    <item.icon className="w-4 h-4" style={{ color: '#C9A84C' }} />
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-10 rounded-3xl bg-white" style={{ border: '1px solid rgba(201,168,76,0.2)', boxShadow: '0 4px 24px rgba(26,39,68,0.06)' }}>
            <h4 className="text-xl font-bold mb-4" style={{ color: '#1a2744' }}>Partenaire Office du Tourisme</h4>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#6b7280' }}>
              Nous sommes partenaires de l'<strong style={{ color: '#1a2744' }}>Office du Tourisme de la région méditerranéenne</strong>, ce qui garantit une promotion locale supplémentaire de vos biens.
            </p>
            <div className="p-5 rounded-xl" style={{ background: 'rgba(10,173,163,0.06)', borderLeft: '4px solid #0AADA3' }}>
              <p className="text-sm" style={{ color: '#374151' }}>
                <strong style={{ color: '#087A72' }}>Avantage :</strong> Vos logements sont référencés et recommandés par les structures touristiques officielles de la région.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
