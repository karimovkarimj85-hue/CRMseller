import { motion, useScroll, useSpring, useTransform, type MotionValue } from 'framer-motion';
import { appleSpring } from '../hooks/use-apple-scroll';

function ParallaxLine({
  top,
  rotate,
  smoothY,
  distance,
}: {
  top: string;
  rotate: number;
  smoothY: MotionValue<number>;
  distance: number;
}) {
  const y = useTransform(smoothY, [0, 1200], [0, distance]);
  return (
    <motion.div
      className="parallax-line"
      style={{ top, y, rotate }}
    />
  );
}

export default function ParallaxField() {
  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, appleSpring);

  const orbA = useTransform(smoothY, [0, 1200], [0, 180]);
  const orbB = useTransform(smoothY, [0, 1200], [0, -140]);
  const orbC = useTransform(smoothY, [0, 1200], [0, 90]);
  const gridY = useTransform(smoothY, [0, 1200], [0, 60]);

  return (
    <>
      <motion.div className="parallax-grid" style={{ y: gridY }} aria-hidden />
      <div className="parallax-vignette" aria-hidden />

      <div className="pointer-events-none fixed inset-0 z-[-3]" aria-hidden>
        <motion.div
          className="parallax-orb parallax-orb--light parallax-orb--a"
          style={{ y: orbA }}
        />
        <motion.div
          className="parallax-orb parallax-orb--light parallax-orb--b"
          style={{ y: orbB }}
        />
        <motion.div
          className="parallax-orb parallax-orb--dark parallax-orb--c"
          style={{ y: orbC }}
        />

        <div className="parallax-lines">
          <ParallaxLine top="18%" rotate={-3} smoothY={smoothY} distance={42} />
          <ParallaxLine top="42%" rotate={-2} smoothY={smoothY} distance={66} />
          <ParallaxLine top="68%" rotate={-4} smoothY={smoothY} distance={54} />
        </div>
      </div>
    </>
  );
}
