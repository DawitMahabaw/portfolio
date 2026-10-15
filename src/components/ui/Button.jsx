import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost'
  size = 'md',        // 'sm' | 'md' | 'lg'
  icon = null,
  iconPosition = 'right',
  as = 'button',
  href,
  className = '',
  disabled = false,
  onClick,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = as === 'a' ? motion.a : motion.button;

  const sizeClasses = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg',
  };

  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
  };

  const buttonClasses = `btn ${variantClasses[variant] || 'btn-primary'} ${sizeClasses[size] || ''} ${className}`.trim();

  const motionProps = shouldReduceMotion ? {} : {
    whileHover: { y: -2, transition: { duration: 0.18, ease: 'easeOut' } },
    whileTap: { y: 0, scale: 0.98, transition: { duration: 0.1 } },
  };

  return (
    <Component
      className={buttonClasses}
      onClick={onClick}
      href={as === 'a' ? href : undefined}
      disabled={disabled}
      {...motionProps}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="btn-icon left">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="btn-icon right">{icon}</span>}
    </Component>
  );
}

export default Button;
