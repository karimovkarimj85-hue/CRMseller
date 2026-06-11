import { motion, type Variants } from 'framer-motion';

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
}

export default function AnimateIn({
  children,
  className,
  variants,
  delay = 0,
  once = true,
}: AnimateInProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
