// Fade in from bottom
export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

// Fade in from left
export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -40,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
};

// Fade in from right
export const fadeRight = {
  hidden: {
    opacity: 0,
    x: 40,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
};

// Simple fade
export const fadeIn = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
  },
};

// Scale animation
export const scaleUp = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },

  visible: {
    opacity: 1,
    scale: 1,
  },
};

// Parent animation for staggered children
export const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};