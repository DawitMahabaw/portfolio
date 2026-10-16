import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Uniform cubic-bezier easing and timing across the entire portfolio
export const REVEAL_EASE = [0.16, 1, 0.3, 1];
export const REVEAL_DURATION = 0.55;
export const VIEWPORT_CONFIG = { once: true, margin: '-80px' };

const getVariants = (variant, shouldReduceMotion, duration = REVEAL_DURATION) => {
  if (shouldReduceMotion) {
    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.2, ease: 'easeOut' },
      },
    };
  }

  const offsetMap = {
    'fade-up': { y: 40, x: 0, scale: 1 },
    'fade-left': { y: 0, x: -40, scale: 1 },
    'fade-right': { y: 0, x: 40, scale: 1 },
    'scale-in': { y: 0, x: 0, scale: 0.92 },
  };

  const offset = offsetMap[variant] || offsetMap['fade-up'];

  return {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
      scale: offset.scale,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration,
        ease: REVEAL_EASE,
      },
    },
  };
};

/**
 * Reusable single-element or block scroll-reveal wrapper
 */
export function Reveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = REVEAL_DURATION,
  className = '',
  as = 'div',
  style = {},
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const variants = getVariants(variant, shouldReduceMotion, duration);
  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_CONFIG}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay,
        ease: REVEAL_EASE,
      }}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

/**
 * Staggered container for lists, grids, or grouped child items
 */
export function RevealStagger({
  children,
  staggerChildren = 0.1,
  delayChildren = 0,
  className = '',
  as = 'div',
  style = {},
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent = motion[as] || motion.div;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerChildren,
        delayChildren,
      },
    },
  };

  return (
    <MotionComponent
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_CONFIG}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

/**
 * Child item inside a RevealStagger container
 */
export function RevealItem({
  children,
  variant = 'fade-up',
  className = '',
  as = 'div',
  style = {},
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const variants = getVariants(variant, shouldReduceMotion);
  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      variants={variants}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

export default Reveal;
