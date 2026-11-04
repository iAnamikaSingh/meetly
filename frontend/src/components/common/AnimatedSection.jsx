import { motion } from "motion/react";

import { fadeUp } from "../../animations/variants";
import { smoothTransition } from "../../animations/transitions";

export default function AnimatedSection({
  children,
  className = "",
  variants = fadeUp,
  delay = 0,
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={variants}
      transition={{
        ...smoothTransition,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}