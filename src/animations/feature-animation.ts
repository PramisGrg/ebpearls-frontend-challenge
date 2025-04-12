export const featureAnimations = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      ease: "easeInOut",
    },
  }),
};
