import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface TiltOptions {
  max?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
  transition?: boolean;
  axis?: "x" | "y" | null;
  reset?: boolean;
  easing?: string;
  glare?: boolean;
  'max-glare'?: number;
  'glare-prerender'?: boolean;
  'mouse-event-element'?: string | undefined;
  gyroscope?: boolean;
  gyroscopeMinAngleX?: number;
  gyroscopeMaxAngleX?: number;
  gyroscopeMinAngleY?: number;
  gyroscopeMaxAngleY?: number;
}

export const useTilt = (options: TiltOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const tiltInstance = VanillaTilt.init(element, {
      max: 15,
      perspective: 1000,
      scale: 1.05,
      speed: 1000,
      transition: true,
      reset: true,
      easing: 'cubic-bezier(.03,.98,.52,.99)',
      glare: false,
      'max-glare': 0.5,
      'glare-prerender': false,
      gyroscope: true,
      gyroscopeMinAngleX: -45,
      gyroscopeMaxAngleX: 45,
      gyroscopeMinAngleY: -45,
      gyroscopeMaxAngleY: 45,
      ...options,
    }) as any;

    return () => {
      if (tiltInstance && typeof tiltInstance.destroy === 'function') {
        tiltInstance.destroy();
      }
    };
  }, [options]);

  return elementRef;
};
