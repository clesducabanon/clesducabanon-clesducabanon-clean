import { motion } from 'motion/react';
import { Heart, Award, Users, Shield } from 'lucide-react';

export function NotreHistoire() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold"
              style={{ background: 'rgba(201,168,76,0.12)', color: '#A07D2A', border: '1px solid rgba(201,168,76,0.25)' }}
            >
              <Heart className="w-4 h-4" />
              <span>Notre Histoire</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1a2744' }}>
              Conciergerie Familiale et Locale
            </h2>

            <p className="text-lg mb-4 leading-relaxed" style={{ color: '#374151' }}>
              <strong style={{ color: '#1a2744' }}>Basée à Toulon, Formule Premium :</strong>{' '}
              <span style={{ color: '#C9A84C' }} className="font-semibold">Villa 20% TTC</span>
              {' · '}
              <span style={{ color: '#0AADA3' }} className="font-semibold">Appartement 25% TTC</span>
              {' '}— de Sanary à Hyères.
            </p>

            <p className="text-base mb-4 leading-relaxed" style={{ color: '#6b7280' }}>
              Derrière <strong style={{ color: '#1a2744' }}>Les Clés du Cabanon</strong>, il y a un couple passionné :{' '}
              <strong style={{ color: '#1a2744' }}>Guillaume et Erika</strong>, qui gèrent ensemble cette conciergerie avec professionnalisme et proximité.
            </p>

            <p className="text-base mb-8 leading-relaxed" style={{ color: '#6b7280' }}>
              Notre objectif est simple : offrir aux propriétaires une{' '}
              <strong style={{ color: '#0AADA3' }}>gestion locative transparente et performante</strong>, et aux voyageurs des séjours chaleureux dans des logements soigneusement sélectionnés.
            </p>

            {/* Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="p-6 rounded-2xl"
                style={{ background: 'white', border: '1px solid rgba(10,173,163,0.25)', boxShadow: '0 4px 16px rgba(10,173,163,0.08)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg" style={{ background: 'rgba(10,173,163,0.12)' }}>
                    <Shield className="w-5 h-5" style={{ color: '#0AADA3' }} />
                  </div>
                  <span className="font-bold text-sm" style={{ color: '#1a2744' }}>Carte G</span>
                </div>
                <p className="text-sm" style={{ color: '#6b7280' }}>
                  Carte professionnelle immobilière, gage de sérieux et de conformité
                </p>
              </div>

              <div
                className="p-6 rounded-2xl text-white"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #A07D2A)', boxShadow: '0 8px 24px rgba(201,168,76,0.3)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-sm">Superhôte</span>
                </div>
                <p className="text-sm text-white/80">
                  Statut Airbnb prouvant la qualité de nos services
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div
              className="p-8 rounded-3xl text-white"
              style={{ background: 'linear-gradient(135deg, #0AADA3 0%, #087A72 100%)', boxShadow: '0 16px 48px rgba(10,173,163,0.22)' }}
            >
              <div className="text-6xl font-black mb-2">5</div>
              <div className="text-xl font-bold mb-1">ans d'expérience</div>
              <p className="text-white/75 text-sm">en gestion de locations saisonnières sur la Côte d'Azur</p>
            </div>

            <div
              className="p-8 rounded-3xl text-white"
              style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #A07D2A 100%)', boxShadow: '0 16px 48px rgba(201,168,76,0.25)' }}
            >
              <div className="text-6xl font-black mb-2">100%</div>
              <div className="text-xl font-bold mb-1">Superhôte Airbnb</div>
              <p className="text-white/80 text-sm">Maintenu depuis plusieurs années grâce à la satisfaction de nos voyageurs</p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div
                className="p-6 rounded-3xl text-white"
                style={{ background: 'linear-gradient(135deg, #1a2744 0%, #2a3f6f 100%)', boxShadow: '0 8px 28px rgba(26,39,68,0.18)' }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
                <div className="text-5xl font-black mb-1">28</div>
                <div className="text-base font-bold mb-1">biens gérés</div>
                <p className="text-white/65 text-xs">dont 9 villas · Sanary, Six-Fours, Toulon, Hyères</p>
              </div>

              <div
                className="p-6 rounded-3xl"
                style={{ background: '#f8f6f0', border: '1px solid rgba(201,168,76,0.2)' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-6 h-6" style={{ color: '#0AADA3' }} />
                </div>
                <div className="text-5xl font-black mb-1" style={{ color: '#1a2744' }}>1000+</div>
                <div className="text-base font-bold mb-1" style={{ color: '#1a2744' }}>voyageurs</div>
                <p className="text-xs" style={{ color: '#6b7280' }}>accueillis chaque année</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
