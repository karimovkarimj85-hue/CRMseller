import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { heroCardsConfig } from '../config';
import ScreenshotStage from './ScreenshotStage';

interface HeroProductPreviewProps {
  large?: boolean;
}

export default function HeroProductPreview({ large = false }: HeroProductPreviewProps) {
  const [active, setActive] = useState(0);
  const panel = heroCardsConfig[active];

  return (
    <div className="w-full">
      <div className="relative">
        <ScreenshotStage>
          <AnimatePresence mode="wait">
            <motion.img
              key={panel.image}
              src={panel.image}
              alt={panel.label}
              className={`block w-full ${large ? 'min-h-[220px] sm:min-h-[280px]' : ''}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />
          </AnimatePresence>
        </ScreenshotStage>

        <div className={`absolute inset-x-0 flex justify-center px-2 ${large ? '-bottom-6' : '-bottom-5'}`}>
          <div className="preview-dock preview-dock--lg">
            {heroCardsConfig.map((item, index) => (
              <button
                key={item.label}
                type="button"
                onClick={() => setActive(index)}
                className={`rounded-full font-medium transition ${
                  large ? 'px-4 py-2 text-xs sm:text-sm' : 'px-3 py-1.5 text-[11px] sm:text-xs'
                } ${
                  active === index
                    ? 'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)]'
                    : 'text-muted hover:bg-[var(--btn-outline-bg)] hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className={`text-center text-muted ${large ? 'mt-14 text-sm sm:text-base' : 'mt-12 text-sm text-faint'}`}>
        <span className="font-semibold text-primary">{panel.label}</span>
        <span className="mx-2 opacity-40">·</span>
        {panel.description}
      </p>
    </div>
  );
}
