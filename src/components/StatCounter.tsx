import { useEffect, useMemo, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import Counter from './Counter';

type PlaceValue = number | '.';

function getPlaces(value: number, decimals = 0): PlaceValue[] {
  const str = decimals > 0 ? value.toFixed(decimals) : String(Math.round(value));
  const dotIndex = str.indexOf('.');
  const places: PlaceValue[] = [];

  if (dotIndex === -1) {
    for (let i = 0; i < str.length; i++) {
      places.push(10 ** (str.length - i - 1));
    }
    return places;
  }

  for (let i = 0; i < dotIndex; i++) {
    places.push(10 ** (dotIndex - i - 1));
  }
  places.push('.');
  for (let i = dotIndex + 1; i < str.length; i++) {
    places.push(10 ** -(i - dotIndex));
  }
  return places;
}

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  variant?: 'base' | 'positive';
}

export default function StatCounter({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  variant = 'base',
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) setDisplayValue(value);
  }, [isInView, value]);

  const places = useMemo(() => getPlaces(value, decimals), [value, decimals]);
  const textColor = variant === 'positive' ? '#22c55e' : '#ffffff';

  return (
    <div ref={ref} className="inline-flex flex-wrap items-baseline justify-center gap-1">
      {prefix ? <span className="text-xl font-semibold text-white sm:text-2xl">{prefix}</span> : null}
      <Counter
        value={displayValue}
        places={places}
        fontSize={36}
        padding={4}
        gap={6}
        textColor={textColor}
        fontWeight={800}
        gradientHeight={10}
        gradientFrom="rgb(15 15 15 / 0.95)"
        gradientTo="transparent"
        counterStyle={{ fontFamily: 'inherit' }}
      />
      {suffix ? (
        <span className={`text-base font-semibold sm:text-lg ${variant === 'positive' ? 'text-crm-green' : 'text-white/80'}`}>
          {suffix}
        </span>
      ) : null}
    </div>
  );
}
