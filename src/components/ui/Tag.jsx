import React from 'react';

export function Tag({
  children,
  variant = 'purple', // 'purple' | 'cyan' | 'glass' | 'default' | 'outline'
  size = 'sm',        // 'sm' | 'md'
  icon = null,
  className = '',
  onClick,
  ...props
}) {
  const variantStyles = {
    purple: {
      background: 'rgba(168, 85, 247, 0.1)',
      color: 'var(--accent-purple-lighter, #C084FC)',
      borderColor: 'rgba(168, 85, 247, 0.25)',
    },
    cyan: {
      background: 'rgba(6, 182, 212, 0.1)',
      color: 'var(--accent-cyan, #06B6D4)',
      borderColor: 'rgba(6, 182, 212, 0.25)',
    },
    glass: {
      background: 'rgba(255, 255, 255, 0.04)',
      color: 'var(--text-body, #94A3B8)',
      borderColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(8px)',
    },
    default: {
      background: 'rgba(255, 255, 255, 0.06)',
      color: 'var(--text-body, #94A3B8)',
      borderColor: 'var(--border-subtle, rgba(255, 255, 255, 0.08))',
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-body, #94A3B8)',
      borderColor: 'rgba(255, 255, 255, 0.15)',
    },
  };

  const currentStyle = variantStyles[variant] || variantStyles.purple;

  return (
    <span
      className={`ui-tag tag-${variant} ${size === 'md' ? 'tag-md' : 'tag-sm'} ${className}`.trim()}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: size === 'md' ? '6px 14px' : '4px 10px',
        borderRadius: 'var(--radius-full, 9999px)',
        fontSize: size === 'md' ? '0.85rem' : '0.75rem',
        fontWeight: 600,
        border: '1px solid',
        lineHeight: 1,
        transition: 'all var(--transition-fast)',
        cursor: onClick ? 'pointer' : 'default',
        ...currentStyle,
      }}
      onClick={onClick}
      {...props}
    >
      {icon && <span className="ui-tag-icon" style={{ display: 'grid', placeItems: 'center' }}>{icon}</span>}
      <span>{children}</span>
    </span>
  );
}

export default Tag;
