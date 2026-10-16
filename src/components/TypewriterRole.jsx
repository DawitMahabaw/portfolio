import React, { useState, useEffect } from 'react';

const ROLES = [
  'MERN Stack Developer',
  'Node.js & REST API Builder',
  'React & Frontend Engineer',
  'Full-Stack Web Specialist',
];

export function TypewriterRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeoutId;

    if (!isDeleting) {
      // Typing forward
      if (displayText.length < currentRole.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 85);
      } else {
        // Pause at full word before deleting
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      // Deleting backward
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        }, 40);
      } else {
        // Move to next role
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <span className="typewriter-container" aria-label={`Role: ${ROLES[roleIndex]}`}>
      <span className="typewriter-text text-gradient-accent">{displayText}</span>
      <span className="typewriter-cursor" aria-hidden="true">|</span>
    </span>
  );
}

export default TypewriterRole;
