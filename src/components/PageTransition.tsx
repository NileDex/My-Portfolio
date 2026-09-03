import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div initial={{ x: 32 }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 120, damping: 22 }}>
      {children}
    </motion.div>
  );
}
