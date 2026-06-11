import { useRef, useState, useCallback } from 'react';
import { AnimatePresence, motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom';
import StoryScrollVisual from '../components/StoryScrollVisual';
import { productStoryConfig } from '../config';
import { appleSpring } from '../hooks/use-apple-scroll';

const SCENE_SCROLL_VH = 115;

export default function ProductStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scenes = productStoryConfig.scenes;
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, appleSpring);

  useMotionValueEvent(smoothProgress, 'change', (v) => {
    const index = Math.min(scenes.length - 1, Math.floor(v * scenes.length));
    setActive(index);
  });

  const scrollToScene = useCallback((index: number) => {
    const el = containerRef.current;
    if (!el) return;
    const segment = el.offsetHeight / scenes.length;
    const top = el.offsetTop + segment * index + 1;
    window.scrollTo({ top, behavior: 'smooth' });
  }, [scenes.length]);

  const scene = scenes[active];

  return (
    <section id="story" className="relative">
      <div
        ref={containerRef}
        style={{ height: `${scenes.length * SCENE_SCROLL_VH}vh` }}
      >
        <div className="apple-sticky-stage">
          <div className="container-main w-full py-2 sm:py-4">
            <p className="section-label">{productStoryConfig.sectionLabel}</p>

            <div className="story-scroll-layout mt-5 flex flex-col gap-6 lg:gap-8">
              <div className="story-scroll-pair grid gap-8 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:items-start lg:gap-10 xl:gap-14">
                <div className="story-scroll-copy min-w-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -14, filter: 'blur(4px)' }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-faint">
                        {scene.audienceTag}
                      </span>
                      <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-primary sm:text-[1.75rem] lg:text-[2rem]">
                        {scene.title}
                      </h2>
                      <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[0.95rem] lg:leading-7">
                        {scene.subtitle}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <StoryScrollVisual scenes={scenes} progress={smoothProgress} />
              </div>

              <div className="story-scroll-footer flex flex-col gap-6 lg:max-w-[38%]">
                <div className="flex items-center gap-3">
                  <div className="apple-progress-rail">
                    {scenes.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => scrollToScene(i)}
                        className="apple-progress-dot cursor-pointer border-0 bg-[var(--text)] p-0 transition-opacity"
                        style={{ opacity: i === active ? 1 : 0.22 }}
                        aria-label={`Шаг ${i + 1}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs tabular-nums text-faint">
                    {active + 1}/{scenes.length}
                  </span>
                </div>

                <Link to={{ pathname: '/', hash: 'contact' }} className="btn-crm inline-flex">
                  {productStoryConfig.ctaText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
