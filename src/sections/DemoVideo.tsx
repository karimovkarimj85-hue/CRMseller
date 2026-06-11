import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useRef, useState } from 'react';
import ScreenshotStage from '../components/ScreenshotStage';
import { demoConfig } from '../config';

export default function DemoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const startPlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    setPlaying(true);
  };

  return (
    <section id="demo" className="section-pad">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <p className="section-label">{demoConfig.sectionLabel}</p>
          <h2 className="section-title mt-3">{demoConfig.title}</h2>
          <p className="section-desc mx-auto">{demoConfig.description}</p>
        </motion.div>

        <motion.div
          className="relative mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55 }}
        >
          <ScreenshotStage glow="neutral">
            <div className="relative">
              <video
                ref={videoRef}
                src={demoConfig.videoPath}
                poster={demoConfig.poster}
                className="block w-full"
                playsInline
                controls={playing}
                onEnded={() => setPlaying(false)}
                onPause={() => {
                  if (videoRef.current?.currentTime === 0) setPlaying(false);
                }}
              />

              {!playing && (
                <button
                  type="button"
                  onClick={startPlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/25 transition hover:bg-black/15"
                  aria-label="Воспроизвести демо"
                >
                  <motion.span
                    className="flex h-16 w-16 items-center justify-center rounded-full border border-theme bg-surface text-primary backdrop-blur-xl shadow-[var(--shadow-premium)]"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play size={28} className="ml-1" fill="currentColor" />
                  </motion.span>
                </button>
              )}
            </div>
          </ScreenshotStage>
        </motion.div>
      </div>
    </section>
  );
}
