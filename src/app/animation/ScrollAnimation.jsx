import React from "react";
import { motion, useViewportScroll } from "framer-motion";

const animationVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  },
  zoomOut: {
    hidden: { opacity: 0, scale: 1.5 },
    visible: { opacity: 1, scale: 1 },
  },
  slideUp: {
    hidden: { y: 100 },
    visible: { y: 0 },
  },
  slideDown: {
    hidden: { y: -100 },
    visible: { y: 0 },
  },
  slideLeft: {
    hidden: { x: -100 },
    visible: { x: 0 },
  },
  slideRight: {
    hidden: { x: 100 },
    visible: { x: 0 },
  },
  rotate: {
    hidden: { rotate: 180, opacity: 0 },
    visible: { rotate: 0, opacity: 1 },
  },
  flip: {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { scaleX: 1, opacity: 1 },
  },
  bounce: {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  },
  pulse: {
    hidden: { scale: 1 },
    visible: {
      scale: [1, 1.1, 1],
      transition: { duration: 0.5, repeat: Infinity },
    },
  },
};

const Animation = ({
  children,
  type = "fadeIn",
  duration = 0.8,
  delay = 0,
  whileHover,
  whileTap,
  drag = false,
  dragConstraints,
  useScroll = false,
  loop = false,
  repeatDelay = 1,
}) => {
  const { scrollY } = useViewportScroll();

  const baseProps = {
    initial: "hidden",
    animate: "visible",
    variants: animationVariants[type],
    transition: {
      duration,
      delay,
      ...(loop && type !== "pulse" ? { repeat: Infinity, repeatDelay } : {}),
    },
  };

  const interactionProps = {
    whileHover,
    whileTap,
    drag: drag ? true : undefined,
    dragConstraints,
  };

  const scrollProps = useScroll
    ? {
        style: { y: scrollY },
      }
    : {};

  return (
    <motion.div {...baseProps} {...interactionProps} {...scrollProps}>
      {children}
    </motion.div>
  );
};

export default Animation;
