import ScreenshotStage from './ScreenshotStage';

interface PanelFrameProps {
  src: string;
  alt?: string;
  video?: string;
  className?: string;
  priority?: boolean;
}

export default function PanelFrame({ src, alt = 'Gain CRM', video, className = '', priority }: PanelFrameProps) {
  return (
    <ScreenshotStage className={className} glow="neutral">
      {video ? (
        <video
          src={video}
          poster={src}
          autoPlay
          muted
          loop
          playsInline
          className="block w-full h-auto"
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className="block w-full h-auto"
          loading={priority ? 'eager' : 'lazy'}
        />
      )}
    </ScreenshotStage>
  );
}
