import { motion } from 'motion/react';
import { Heart, Award, Users, Shield } from 'lucide-react';

export function NotreHistoire() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full mb-6">
              <Heart className="w-5 h-5" />
              <span className="font-medium">Notre Histoire</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Conciergerie Familiale et Locale
            </h2>
            
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              <strong>Basée à Toulon, nous proposons 2 formules :</strong> Gestion complète 20% (Côte Varoise) et Gestion Digitale 180€/mois (France & International)
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Derrière <strong>Les Clés du Cabanon</strong>, il y a un couple passionné : 
              <strong> Guillaume et Erika</strong>, qui gèrent ensemble cette conciergerie 
              avec professionnalisme et proximité.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Notre objectif est simple : offrir aux propriétaires une <strong>gestion locative 
              transparente et performante</strong>, et aux voyageurs des séjours chaleureux dans 
              des logements soigneusement sélectionnés.
            </p>

            {/* Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="font-bold text-gray-900">Carte G</span>
                </div>
                <p className="text-sm text-gray-600">
                  Carte professionnelle immobilière, gage de sérieux et de conformité
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-500 to-red-500 p-6 rounded-2xl shadow-lg text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-bold">Superhôte</span>
                </div>
                <p className="text-sm text-pink-100">
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
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-8 rounded-3xl text-white shadow-2xl">
              <div className="text-6xl font-bold mb-3">5</div>
              <div className="text-2xl font-bold mb-2">ans d'expérience</div>
              <p className="text-blue-100">
                en gestion de locations saisonnières sur la Côte d'Azur
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-500 to-red-500 p-8 rounded-3xl text-white shadow-2xl">
              <div className="text-6xl font-bold mb-3">100%</div>
              <div className="text-2xl font-bold mb-2">Superhôte Airbnb</div>
              <p className="text-pink-100">
                Maintenu depuis plusieurs années grâce à la satisfaction de nos voyageurs
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-indigo-500 p-8 rounded-3xl text-white shadow-2xl">
              <div className="text-6xl font-bold mb-3">40</div>
              <div className="text-2xl font-bold mb-2">biens gérés</div>
              <p className="text-purple-100">
                dans le Var : Hyères, Sanary, Six-Fours, Carqueiranne, Toulon...
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-yellow-500 p-8 rounded-3xl text-white shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-12 h-12" />
                <div className="text-3xl font-bold">1000+</div>
              </div>
              <div className="text-2xl font-bold mb-2">voyageurs accueillis</div>
              <p className="text-orange-100">
                chaque année avec un service personnalisé et chaleureux
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}