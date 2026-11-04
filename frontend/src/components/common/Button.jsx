import { Link } from "react-router-dom";
import { motion } from "motion/react";

const MotionLink = motion.create(Link);

export default function Button({
  children,
  to,
  variant = "primary",
  className = "",
  ...props
}) {
  const styles = {
    primary: "bg-black text-white hover:bg-neutral-800",

    secondary:
      "bg-white text-black border border-neutral-200 hover:bg-neutral-100",
  };

  const classes = `
    inline-flex items-center justify-center gap-2
    px-5 py-3 rounded-xl
    text-sm font-medium
    transition-colors duration-200
    ${styles[variant]}
    ${className}
  `;

  const motionProps = {
    whileHover: {
      scale: 1.04,
    },

    whileTap: {
      scale: 0.96,
    },

    transition: {
      duration: 0.2,
    },
  };

  if (to) {
    return (
      <MotionLink
        to={to}
        className={classes}
        {...motionProps}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      className={classes}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  );
}