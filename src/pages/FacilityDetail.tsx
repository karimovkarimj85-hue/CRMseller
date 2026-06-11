import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import ModuleIcon from '../components/ModuleIcon';
import PanelFrame from '../components/PanelFrame';
import ParallaxField from '../components/ParallaxField';
import ThemeToggle from '../components/ThemeToggle';
import { facilitiesConfig, navigationConfig } from '../config';
import { fadeUp, scaleIn } from '../lib/motion';

export default function FacilityDetail() {
  const { slug } = useParams<{ slug: string }>();
  const facility = useMemo(
    () => facilitiesConfig.items.find((item) => item.slug === slug) ?? null,
    [slug]
  );

  if (!facility) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Link to="/" className="text-sm text-muted">{facilitiesConfig.detailReturnText}</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <ParallaxField />
      <motion.header
        className="sticky top-0 z-50 border-b border-theme bg-surface backdrop-blur-2xl"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="container-main flex h-16 items-center justify-between">
          <Link to="/" className="text-sm font-bold text-primary">{navigationConfig.brandName}</Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link to="/modules" className="flex items-center gap-1.5 text-xs text-muted hover:text-primary">
              <ArrowLeft size={14} /> {facilitiesConfig.detailBackText}
            </Link>
          </div>
        </div>
      </motion.header>

      <div className="container-main py-10">
        <motion.div variants={scaleIn} initial="hidden" animate="visible" className="mb-8">
          <PanelFrame src={facility.image} alt={facility.name} />
        </motion.div>

        <motion.div
          className="glass-lg p-8"
          variants={scaleIn}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-start gap-4">
            <motion.div
              className="flex h-12 w-12 items-center justify-center rounded-glass bg-[var(--btn-outline-bg)] text-primary"
              whileHover={{ rotate: 10, scale: 1.1 }}
            >
              <ModuleIcon slug={facility.slug} size={22} />
            </motion.div>
            <div>
              {facility.code && <span className="font-mono text-[10px] text-faint">{facility.code}</span>}
              <h1 className="text-xl font-bold text-primary">{facility.article.title}</h1>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            {facility.article.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 + i * 0.1 }}
                className="text-sm leading-relaxed text-muted"
              >
                {p}
              </motion.p>
            ))}
          </div>
          <Link
            to={{ pathname: '/', hash: 'contact' }}
            className="btn-crm-outline mt-8 inline-flex text-xs"
          >
            Написать нам
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
