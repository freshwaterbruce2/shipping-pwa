/// <reference types="jest" />

// Mock other exports - moved here to avoid react-refresh warnings
export const domAnimation = {};

export const isValidMotionProp = (key: string) => {
  const motionProps = ['animate', 'initial', 'exit', 'transition', 'whileHover', 'whileTap'];
  return motionProps.includes(key);
};

// Mock hooks
export const useAnimation = () => ({
  start: jest.fn(),
  stop: jest.fn(),
  set: jest.fn()
});

export const useMotionValue = (initial: any) => ({
  get: () => initial,
  set: jest.fn(),
  onChange: jest.fn()
});

export const useTransform = jest.fn((input: any) => input);