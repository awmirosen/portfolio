export const slideFromRight = {
  initial: {
    x: "100%",
  },
  animate: {
    x: 0,
  },
  exit: {
    x: "100%",
  },
  transition: {
    duration: 0.3,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};
