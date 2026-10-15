import React from 'react';
import Tilt from 'react-parallax-tilt';

export function Card({
  children,
  variant = 'glass', // 'glass' | 'elevated' | 'subtle'
  tilt = false,
  glow = false,
  radius = 'lg',     // 'sm' | 'md' | 'lg' | 'xl'
  padding = 'md',    // 'sm' | 'md' | 'lg' | 'none'
  className = '',
  style = {},
  onClick,
  ...props
}) {
  const radiusMap = {
    sm: 'var(--radius-sm, 8px)',
    md: 'var(--radius-md, 12px)',
    lg: 'var(--radius-lg, 18px)',
    xl: 'var(--radius-xl, 24px)',
  };

  const paddingMap = {
    none: '0',
    sm: 'var(--space-4, 16px)',
    md: 'var(--space-6, 24px)',
    lg: 'var(--space-8, 32px)',
  };

  const cardStyle = {
    borderRadius: radiusMap[radius] || radiusMap.lg,
    padding: paddingMap[padding] !== undefined ? paddingMap[padding] : paddingMap.md,
    ...style,
  };

  const content = (
    <div
      className={`glass-card card-${variant} ${glow ? 'card-glow' : ''} ${className}`.trim()}
      style={cardStyle}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );

  if (tilt) {
    return (
      <Tilt
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        perspective={1000}
        scale={1.015}
        transitionSpeed={1000}
        glareEnable={false}
        className="card-tilt-container"
      >
        {content}
      </Tilt>
    );
  }

  return content;
}

export default Card;
