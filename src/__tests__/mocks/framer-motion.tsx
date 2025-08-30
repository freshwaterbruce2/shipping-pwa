/// <reference types="jest" />
 
import * as React from 'react';
import type { ForwardedRef } from 'react';

const actual = jest.requireActual('framer-motion');

// Create a custom component factory
function custom(Component: string | React.ComponentType<any>) {
  return React.forwardRef((props: any, ref: ForwardedRef<any>) => {
    // Filter out motion-specific props
    const regularProps = Object.entries(props).reduce((acc: any, [key, value]) => {
      if (!actual.isValidMotionProp(key)) acc[key] = value;
      return acc;
    }, {});

    return typeof Component === 'string' ? 
      React.createElement(Component, { ...regularProps, ref }) :
      <Component {...regularProps} ref={ref} />;
  });
}

// Create component cache
const componentCache = new Map<string, any>();

// Create motion proxy
export const motion = new Proxy(custom, {
  get: (_target, key: string) => {
    if (!componentCache.has(key)) {
      componentCache.set(key, custom(key));
    }
    return componentCache.get(key);
  }
});

// Mock AnimatePresence
export const AnimatePresence = ({ children }: { children: React.ReactNode }) => <>{children}</>;

// Mock component exports only
export const LazyMotion = ({ children }: { children: React.ReactNode }) => <>{children}</>;
export const m = motion;

// Re-export constants to maintain API
export {
  domAnimation,
  isValidMotionProp,
  useAnimation,
  useMotionValue,
  useTransform
} from './framer-motion-constants'; 