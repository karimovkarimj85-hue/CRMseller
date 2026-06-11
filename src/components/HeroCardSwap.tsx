import { useNavigate } from 'react-router-dom';
import CardSwap, { Card } from './CardSwap';
import { heroCardsConfig } from '../config';
import { assetUrl } from '../lib/assets';

const facilityUrls = [
  '/',
  '/facility/finances',
  '/facility/students',
  '/facility/deals',
];

export default function HeroCardSwap() {
  const navigate = useNavigate();

  return (
    <div className="relative mx-auto h-[420px] w-full max-w-md sm:h-[480px] lg:max-w-lg">
      <CardSwap
        width="100%"
        height={300}
        cardDistance={50}
        verticalDistance={58}
        delay={4500}
        pauseOnHover
        skewAmount={5}
        easing="elastic"
        align="center"
        onCardClick={(idx) => navigate(facilityUrls[idx] ?? '/')}
      >
        {heroCardsConfig.map((panel) => (
          <Card key={panel.label}>
            <div className="flex h-full flex-col">
              <div className="flex shrink-0 items-center gap-2 border-b border-white/10 bg-black/50 px-3 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                <span className="ml-1 font-mono text-[9px] text-white/35">app.gaincrm.uz</span>
              </div>
              <div className="relative min-h-0 flex-1">
                <img
                  src={assetUrl(panel.image)}
                  alt={panel.label}
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent px-4 pb-4 pt-10">
                  <p className="text-sm font-semibold text-white">{panel.label}</p>
                  <p className="mt-0.5 text-xs text-white/50">{panel.description}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </CardSwap>
    </div>
  );
}
