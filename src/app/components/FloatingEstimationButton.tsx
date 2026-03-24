import { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingUp } from 'lucide-react';
import { EstimationPopup } from './EstimationPopup';

export function FloatingEstimationButton() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsPopupOpen(true)}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all z-40 flex items-center gap-3 font-bold group"
      >
        <TrendingUp className="w-6 h-6 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:block">Estimation Gratuite</span>
        <span className="sm:hidden">Estimer</span>
      </motion.button>

      <EstimationPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}
