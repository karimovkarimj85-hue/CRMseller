import type { ReactNode } from 'react';

interface ScreenshotStageProps {
  children: ReactNode;
  className?: string;
  glow?: 'default' | 'neutral';
  clean?: boolean;
}

export default function ScreenshotStage({
  children,
  className = '',
  glow = 'default',
  clean = false,
}: ScreenshotStageProps) {
  const stageClass = [
    'screenshot-stage',
    glow === 'neutral' ? 'screenshot-stage--neutral' : '',
    clean ? 'screenshot-stage--clean' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={stageClass}>
      {!clean && <div className="screenshot-stage__shine" aria-hidden />}
      <div className="screenshot-stage__inner">{children}</div>
    </div>
  );
}
