import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Masonry, { type MasonryItem } from '../components/Masonry';
import { showcaseConfig } from '../config';

export default function Showcase() {
  const navigate = useNavigate();

  const items = useMemo<MasonryItem[]>(
    () =>
      showcaseConfig.items.map((item, index) => ({
        id: String(index + 1),
        img: item.image,
        url: item.url,
        height: item.height,
        label: item.label,
      })),
    []
  );

  const handleItemClick = (item: MasonryItem) => {
    if (!item.url || item.url === '#') return;
    if (item.url.startsWith('http')) {
      window.open(item.url, '_blank', 'noopener');
      return;
    }
    navigate(item.url);
  };

  return (
    <section id="showcase" className="section-pad">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">{showcaseConfig.sectionLabel}</p>
          <h2 className="section-title mt-3">{showcaseConfig.title}</h2>
          <p className="section-desc">{showcaseConfig.description}</p>
        </motion.div>

        <div className="mt-10 -mx-1 sm:mx-0">
          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={false}
            blurToFocus
            colorShiftOnHover={false}
            onItemClick={handleItemClick}
          />
        </div>
      </div>
    </section>
  );
}
