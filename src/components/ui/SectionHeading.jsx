import React from 'react';

export function SectionHeading({
  tag,
  title,
  gradientWord = '',
  subtitle,
  align = 'left',
  id,
  className = '',
  numberBadge = '',
}) {
  const isCentered = align === 'center';

  const renderTitle = () => {
    if (!gradientWord || !title.includes(gradientWord)) {
      return title;
    }
    const parts = title.split(gradientWord);
    return (
      <>
        {parts[0]}
        <span className="text-gradient-accent">{gradientWord}</span>
        {parts.slice(1).join(gradientWord)}
      </>
    );
  };

  return (
    <div className={`section-header ${isCentered ? 'text-center' : ''} ${className}`.trim()}>
      {/* Optional numeric / tech pill badge (e.g. "01 // WELCOME & OVERVIEW") */}
      {numberBadge && (
        <div>
          <div className="section-pill-badge">
            <span className="badge-num">{numberBadge.split('//')[0]?.trim()}</span>
            <span className="badge-divider">//</span>
            <span className="badge-text">{numberBadge.split('//')[1]?.trim() || numberBadge}</span>
          </div>
        </div>
      )}

      {/* Small label / tag above title */}
      {tag && !numberBadge && (
        <span className="section-tag">{tag}</span>
      )}

      {/* Main Big Title */}
      <h2 id={id} className="section-title">
        {renderTitle()}
      </h2>

      {/* Soft Gray Subtitle / Description */}
      {subtitle && (
        <p className={`section-desc ${isCentered ? 'centered-desc' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
