import { motion } from 'motion/react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Quelle est votre commission ?',
    answer: 'Notre commission est de 20% TTC sur vos revenus locatifs. Cette commission unique couvre l\'ensemble de nos services : gestion des réservations, communication avec les voyageurs, remise des clés, états des lieux, photos professionnelles, tarification dynamique, et bien plus encore.',
  },
  {
    question: 'Les frais de ménage et de blanchisserie sont-ils en plus ?',
    answer: 'Non, les frais de ménage et de blanchisserie sont directement facturés et payés par les voyageurs. Vous n\'avez rien à débourser pour ces services !',
  },
  {
    question: 'Comment fonctionne la tarification dynamique ?',
    answer: 'Notre système de tarification dynamique ajuste automatiquement vos prix en temps réel selon la saisonnalité, les événements locaux, la demande et la concurrence. Cela permet d\'optimiser vos revenus jusqu\'à 30% par rapport à un tarif fixe.',
  },
  {
    question: 'Puis-je utiliser mon bien quand je veux ?',
    answer: 'Absolument ! Vous avez accès à votre espace propriétaire où vous pouvez bloquer des dates à tout moment pour profiter de votre bien. Il vous suffit de nous prévenir et nous gérons tout.',
  },
  {
    question: 'Comment puis-je suivre mes revenus ?',
    answer: 'Vous avez accès 24/7 à votre espace propriétaire personnel où vous pouvez consulter en temps réel vos réservations, vos revenus, vos statistiques, et bloquer des dates. Vous recevez également des rapports mensuels détaillés.',
  },
  {
    question: 'Quelles plateformes utilisez-vous pour diffuser mon annonce ?',
    answer: 'Nous diffusons votre bien sur jusqu\'à 50 plateformes dont Airbnb, Booking.com, VRBO, et nous sommes partenaires de l\'Office du Tourisme. Cela maximise votre visibilité et votre taux d\'occupation.',
  },
  {
    question: 'Êtes-vous disponibles en cas d\'urgence ?',
    answer: 'Oui, notre équipe est disponible 24/7 pour gérer toutes les situations, urgences ou imprévus. Les voyageurs et vous-même pouvez nous contacter à tout moment.',
  },
  {
    question: 'Qu\'est-ce que la carte professionnelle G ?',
    answer: 'La carte G est une carte professionnelle délivrée par la CCI qui nous autorise légalement à gérer des biens immobiliers. C\'est un gage de sérieux et de conformité réglementaire.',
  },
  {
    question: 'Comment bénéficier de l\'exonération de taxe d\'habitation ?',
    answer: 'Les propriétaires de meublés de tourisme classés peuvent bénéficier d\'une exonération de taxe d\'habitation selon les critères de leur commune (souvent : location principale activité, classement obtenu, déclaration en mairie). Les conditions ne sont pas liées aux revenus du propriétaire. Nous vous accompagnons dans toutes ces démarches administratives.',
  },
  {
    question: 'Qu\'est-ce que le badge Superhôte Airbnb ?',
    answer: 'Le statut Superhôte Airbnb est un label de qualité obtenu grâce à d\'excellentes évaluations des voyageurs. En tant que conciergerie Superhôte, vos biens peuvent bénéficier de ce badge, ce qui augmente votre visibilité et votre attractivité sur la plateforme.',
  },
  {
    question: 'Comment se passe la mise en service ?',
    answer: 'C\'est très simple : 1) Vous nous contactez, 2) Nous visitons votre bien et réalisons des photos professionnelles, 3) Nous créons vos annonces optimisées sur toutes les plateformes, 4) Nous gérons tout de A à Z. Aucun frais de mise en service !',
  },
  {
    question: 'Intervenez-vous partout sur la Côte d\'Azur ?',
    answer: 'Nous intervenons principalement de Sanary à Hyères, incluant Bandol, Six-Fours, La Seyne, Toulon, Le Pradet, Carqueiranne et les environs. Votre ville n\'est pas dans la liste ? Contactez-nous, nous étudions toutes les demandes dans la région.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full mb-4">
            <HelpCircle className="w-5 h-5" />
            <span className="font-medium">FAQ</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-gray-600">
            Tout ce que vous devez savoir sur nos services
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-bold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-3xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-3">
            Vous avez d'autres questions ?
          </h3>
          <p className="text-lg text-blue-100 mb-6">
            Notre équipe est là pour vous répondre et vous accompagner
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:shadow-2xl transition-all"
          >
            Contactez-nous
          </button>
        </motion.div>
      </div>
    </section>
  );
}