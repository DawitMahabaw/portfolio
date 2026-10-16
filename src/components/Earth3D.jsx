import React from 'react';

/*
 * The visual is deliberately CSS-driven instead of a canvas plane. It keeps
 * the source illustration crisp, lets its edges dissolve into the page, and
 * provides an ambient automatic turn without any cursor interaction.
 */
export default function Earth3D() {
  return (
    <div className="contact-earth-3d-wrapper" aria-label="A slowly rotating Earth in space">
      <span className="earth-halo" aria-hidden="true" />
      <div className="earth-visual-planet">
        <img src="/images/contact-earth-ref.webp" alt="" className="contact-earth-reference-image" loading="lazy" />
      </div>
      <div className="earth-orbit-system" aria-hidden="true">
        <span className="earth-orbit earth-orbit-one" />
        <span className="earth-orbit earth-orbit-two" />
      </div>
      <span className="earth-star earth-star-one" aria-hidden="true" />
      <span className="earth-star earth-star-two" aria-hidden="true" />
      <span className="earth-star earth-star-three" aria-hidden="true" />
    </div>
  );
}
