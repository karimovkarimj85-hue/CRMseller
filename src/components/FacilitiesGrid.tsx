import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { assetUrl } from '../lib/assets';
import { facilitiesConfig } from '../config';
import { fadeUp, staggerFast, cardHover } from '../lib/motion';

export default function FacilitiesGrid() {
  const facilities = facilitiesConfig.items;
  if (!facilities.length) return null;

  return (
    <motion.div
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      variants={staggerFast}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
    >
      {facilities.map((f) => (
        <motion.div key={f.slug} variants={fadeUp}>
          <motion.div whileHover={cardHover}>
            <Link to={`/facility/${f.slug}`} className="apple-product-tile group block overflow-hidden">
              <div className="facility-thumb relative aspect-[16/10] overflow-hidden border-b border-theme bg-[var(--screenshot-bg)]">
                <img
                  src={assetUrl(f.image)}
                  alt={f.name}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-primary">{f.name}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{f.address}</p>
                <span className="mt-3 block text-xs text-faint group-hover:text-muted">Подробнее →</span>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
