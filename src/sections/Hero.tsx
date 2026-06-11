import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroProductPreview from '../components/HeroProductPreview';
import { heroConfig } from '../config';
import { appleSpring } from '../hooks/use-apple-scroll';
import { fadeUp, stagger, slideRight } from '../lib/motion';

const MotionLink = motion.create(Link);

export default function Hero() {
  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, appleSpring);
  const textY = useTransform(smoothY, [0, 400], [0, 12]);
  const previewY = useTransform(smoothY, [0, 400], [0, 20]);

  return (
    <section id="hero" className="relative overflow-hidden pt-10 sm:pt-14">
      <div
        className="apple-spotlight pointer-events-none absolute left-[58%] top-[44%] h-[min(520px,68vw)] w-[min(760px,92vw)] -translate-x-1/2 -translate-y-1/2 opacity-70"
        aria-hidden
      />

      <div className="container-main pb-12 sm:pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 xl:gap-14">
          <motion.div
            style={{ y: textY }}
            variants={slideRight}
            initial="hidden"
            animate="visible"
          >
            <motion.p className="section-label" variants={fadeUp}>
              {heroConfig.eyebrow}
            </motion.p>
            <motion.h1
              className="apple-display-title mt-6 leading-[1.06] tracking-tight"
              variants={fadeUp}
            >
              <span className="text-gradient-hero">Весь центр</span>
              <span className="text-primary"> — в одном окне.</span>
              <br />
              <span className="text-muted text-3xl sm:text-4xl lg:text-[2.75rem]">Без Excel и хаоса.</span>
            </motion.h1>
            <motion.p className="mt-5 max-w-lg text-base leading-relaxed text-muted" variants={fadeUp}>
              {heroConfig.leadText}
            </motion.p>

            <motion.ul className="mt-6 space-y-3" variants={stagger} initial="hidden" animate="visible">
              {heroConfig.supportingNotes.map((note) => (
                <motion.li key={note} variants={fadeUp} className="flex items-start gap-3 text-sm text-muted">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: 'var(--text)' }}
                  />
                  <span>{note}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <MotionLink
                to={{ pathname: '/', hash: 'contact' }}
                className="btn-crm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Обсудить для моего центра
              </MotionLink>
              <MotionLink
                to={{ pathname: '/', hash: 'story' }}
                className="btn-crm-outline"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Смотреть как работает
              </MotionLink>
            </motion.div>
          </motion.div>

          <motion.div
            className="screenshot-stage__perspective lg:pt-1"
            style={{ y: previewY }}
            initial={{ opacity: 0, y: 32, rotateX: 6 }}
            animate={{ opacity: 1, y: 0, rotateX: 2 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroProductPreview large />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
