import { motion } from 'motion/react';

export function PlateformesPartenaires() {
  const plateformes = [
    { name: 'Airbnb', gold: true },
    { name: 'Booking.com', gold: false },
    { name: 'Abritel', gold: true },
    { name: 'Vrbo', gold: false },
    { name: 'Expedia', gold: true },
    { name: 'TripAdvisor', gold: false },
  ];

  return (
    <section className="py-14 bg-white" style={{ borderBottom: '1px solid rgba(201,168,76,0.12)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-semibold mb-8 uppercase tracking-widest" style={{ color: '#A07D2A' }}>
            Diffusé automatiquement sur les principales plateformes
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {plateformes.map((plateforme, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="cursor-default"
              >
                <div
                  className="px-6 py-2.5 rounded-xl text-white font-bold text-sm md:text-base transition-all"
                  style={{
                    background: plateforme.gold
                      ? 'linear-gradient(135deg, #C9A84C, #A07D2A)'
                      : 'linear-gradient(135deg, #0AADA3, #087A72)',
                    boxShadow: plateforme.gold
                      ? '0 4px 14px rgba(201,168,76,0.28)'
                      : '0 4px 14px rgba(10,173,163,0.22)',
                  }}
                >
                  {plateforme.name}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 text-xs"
            style={{ color: '#9ca3af' }}
          >
            + 44 autres plateformes de réservation internationales
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
