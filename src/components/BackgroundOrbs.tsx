import { motion } from 'framer-motion';

export default function BackgroundOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -left-24 top-0 h-[28rem] w-[28rem] rounded-full bg-crm-accent/20 blur-[100px]"
        animate={{ x: [0, 50, 0], y: [0, 40, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-32 top-1/4 h-[32rem] w-[32rem] rounded-full bg-indigo-500/15 blur-[110px]"
        animate={{ x: [0, -60, 0], y: [0, -30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-crm-green/10 blur-[90px]"
        animate={{ x: [0, 35, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
