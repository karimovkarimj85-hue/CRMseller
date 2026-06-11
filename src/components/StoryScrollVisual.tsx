import { motion, useTransform, type MotionValue } from 'framer-motion';
import type { ProductStoryScene } from '../config';

interface StoryScrollVisualProps {
  scenes: ProductStoryScene[];
  progress: MotionValue<number>;
}

function StorySceneLayer({
  scene,
  index,
  total,
  progress,
}: {
  scene: ProductStoryScene;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const pad = 0.1 / total;

  const segmentProgress = useTransform(progress, [start, end], [0, 1]);

  const opacity = useTransform(
    progress,
    [start, start + pad, end - pad, end],
    [0, 1, 1, 0]
  );
  const scale = useTransform(segmentProgress, [0, 0.45, 1], [0.98, 1, 0.99]);
  const y = useTransform(segmentProgress, [0, 0.5, 1], [0, 0, -6]);
  const rotateX = useTransform(segmentProgress, [0, 1], [0.6, -0.3]);
  const rotateY = useTransform(segmentProgress, [0, 1], [-0.6, 0.6]);

  return (
    <motion.div
      className="story-scroll-layer"
      style={{ opacity, zIndex: index }}
    >
      <motion.div
        className="story-scroll-layer__motion"
        style={{ y, scale, rotateX, rotateY, transformPerspective: 1400 }}
      >
        <img
          src={scene.image}
          alt={scene.title}
          className="story-shot-img--side"
          draggable={false}
        />
      </motion.div>
    </motion.div>
  );
}

export default function StoryScrollVisual({ scenes, progress }: StoryScrollVisualProps) {
  const glowY = useTransform(progress, [0, 1], [8, -8]);

  return (
    <div className="story-scroll-visual relative min-w-0 w-full">
      <motion.div
        className="story-scroll-glow pointer-events-none absolute left-[6%] top-[8%] h-[84%] w-[88%] rounded-full"
        style={{ y: glowY }}
        aria-hidden
      />

      <div className="story-scroll-stack">
        <div className="story-scroll-stack__masked">
          {scenes.map((scene, index) => (
            <StorySceneLayer
              key={scene.image}
              scene={scene}
              index={index}
              total={scenes.length}
              progress={progress}
            />
          ))}
          <div className="story-scroll-edge-fade pointer-events-none" aria-hidden />
        </div>
      </div>
    </div>
  );
}
