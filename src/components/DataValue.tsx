import { motion } from 'framer-motion';

type Variant = 'positive' | 'negative' | 'neutral';

interface DataValueProps {
  value: string;
  variant?: Variant;
  size?: 'xs' | 'sm' | 'md';
  animate?: boolean;
}

const sizeClass = {
  xs: 'text-[11px]',
  sm: 'text-sm',
  md: 'text-lg',
};

const variantClass = {
  positive: 'num-up',
  negative: 'num-down',
  neutral: 'num-base',
};

export default function DataValue({ value, variant = 'neutral', size = 'sm', animate = false }: DataValueProps) {
  const className = `${sizeClass[size]} ${variantClass[variant]} inline-block`;

  if (animate) {
    return (
      <motion.span
        className={className}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {value}
      </motion.span>
    );
  }

  return <span className={className}>{value}</span>;
}
