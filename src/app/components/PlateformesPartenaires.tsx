import { motion } from 'motion/react';

export function PlateformesPartenaires() {
  const plateformes = [
    { name: 'Airbnb', color: 'from-pink-500 to-red-500' },
    { name: 'Booking.com', color: 'from-blue-600 to-blue-700' },
    { name: 'Abritel', color: 'from-yellow-500 to-orange-500' },
    { name: 'Vrbo', color: 'from-blue-500 to-purple-500' },
    { name: 'Expedia', color: 'from-yellow-600 to-orange-600' },
    { name: 'TripAdvisor', color: 'from-green-500 to-teal-500' },
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-600 text-sm font-medium mb-8 uppercase tracking-wider">
            Diffusé automatiquement sur les principales plateformes
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {plateformes.map((plateforme, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="group cursor-default"
              >
                <div className={`bg-gradient-to-br ${plateforme.color} px-6 py-3 rounded-xl shadow-md group-hover:shadow-xl transition-all`}>
                  <span className="text-white font-bold text-base md:text-lg">
                    {plateforme.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-gray-500 text-sm"
          >
            + 44 autres plateformes de réservation internationales
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
