import React from 'react';
import Tilt from 'react-parallax-tilt';

export function Card({
  children,
  variant = 'glass', // 'glass' | 'elevated' | 'subtle'
  tilt = false,
  tiltOptions = {},
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
        tiltMaxAngleX={tiltOptions.tiltMaxAngleX ?? 6}
        tiltMaxAngleY={tiltOptions.tiltMaxAngleY ?? 6}
        perspective={tiltOptions.perspective ?? 1000}
        scale={tiltOptions.scale ?? 1.015}
        transitionSpeed={tiltOptions.transitionSpeed ?? 1000}
        glareEnable={tiltOptions.glareEnable ?? false}
        glareMaxOpacity={tiltOptions.glareMaxOpacity ?? 0.2}
        glareColor={tiltOptions.glareColor ?? '#ffffff'}
        glarePosition={tiltOptions.glarePosition ?? 'bottom'}
        className={`card-tilt-container ${tiltOptions.className || ''}`.trim()}
      >
        {content}
      </Tilt>
    );
  }

  return content;
}

export default Card;
