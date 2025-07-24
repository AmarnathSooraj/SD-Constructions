import { cubicBezier } from 'framer-motion';

const easing = cubicBezier(0.78, 0, 0.24, 1); // ✅ Define it once

export const menuSlide = {
  initial: {
    x: "100%",
  },
  enter: {
    x: "0%",
    transition: {
      duration: 0.99,
      ease: easing, // ✅ use custom easing function
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.99,
      ease: easing,
    },
  },
};

export const slide = {
  initial: {
    x: "80px",
  },
  enter: {
    x: "0px",
    transition: {
      delay: 0.05,
      duration: 0.99,
      ease: easing,
    },
  },
  exit: {
    x: "80px",
    transition: {
      delay: 0.05,
      duration: 0.99,
      ease: easing,
    },
  },
};
