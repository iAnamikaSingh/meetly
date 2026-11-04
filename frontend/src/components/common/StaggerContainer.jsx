import { motion } from "motion/react";

import { staggerContainer } from "../../animations/variants";

export default function StaggerContainer({
  children,
  className = "",
}) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}