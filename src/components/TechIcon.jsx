import React from 'react';

// Crisp, lightweight SVG icons for technologies matching the reference design
export default function TechIcon({ name, size = 22, className = '' }) {
  const iconKey = name.toLowerCase().replace(/[\s.\-_]/g, '');

  switch (iconKey) {
    case 'react':
      return (
        <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" className={className}>
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case 'python':
    case 'py':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
          <path fill="#3776AB" d="M15.9 3c-4.2 0-3.9 1.8-3.9 1.8l.1 1.9h4V8h-5.6C8 8 7.2 9.4 7.2 11.9s1.3 3.8 3.3 3.8h1.4v-1.9c0-1.4 1.2-2.5 2.6-2.5h3.9c1.1 0 1.9-.9 1.9-1.9V5.5c0-1.5-2.2-2.5-4.4-2.5zm-1.8 1.4c.5 0 .9.4.9.9 0 .5-.4.9-.9.9s-.9-.4-.9-.9c0-.5.4-.9.9-.9z"/>
          <path fill="#FFD43B" d="M16.1 29c4.2 0 3.9-1.8 3.9-1.8l-.1-1.9h-4V24h5.6c2.5 0 3.3-1.4 3.3-3.9s-1.3-3.8-3.3-3.8h-1.4v1.9c0 1.4-1.2 2.5-2.6 2.5h-3.9c-1.1 0-1.9.9-1.9 1.9v3.9c0 1.5 2.2 2.5 4.4 2.5zm1.8-1.4c-.5 0-.9-.4-.9-.9 0-.5.4-.9.9-.9s.9.4.9.9c0 .5-.4.9-.9.9z"/>
        </svg>
      );

    case 'typescript':
    case 'ts':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
          <rect width="32" height="32" rx="6" fill="#3178C6" />
          <path fill="#FFFFFF" d="M12.5 12h-8v2.4h2.7v10.3h2.6V14.4h2.7V12zm6.2 5.2c-1.5-.7-2.3-1.3-2.3-2.3 0-.9.8-1.6 2.1-1.6 1.4 0 2.4.6 3 1.5l1.9-1.3C22.4 12 20.6 11 18.5 11c-2.8 0-4.7 1.7-4.7 4 0 2 1.3 3.1 3.4 3.9 1.7.7 2.4 1.4 2.4 2.5 0 1.1-1 1.8-2.5 1.8-1.7 0-3-.8-3.7-2.1l-2 1.3c1.1 2 3.1 3.1 5.7 3.1 3.2 0 5.2-1.7 5.2-4.2 0-2.3-1.4-3.4-3.6-4.1z"/>
        </svg>
      );

    case 'svelte':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
          <path fill="#FF3E00" d="M25.3 7.8c-2.3-3.5-6.9-4.8-10.4-2.8l-5.7 3.3c-2.4 1.4-3.9 3.8-4 6.5-.1 1.7.4 3.4 1.5 4.7l-1.3.8c-1.2.7-2 1.8-2.3 3.1-.3 1.3-.1 2.7.6 3.8 1.4 2.1 3.8 3.2 6.3 2.9 1.5-.2 2.9-.9 3.9-2l5.7-3.3c2.4-1.4 3.9-3.8 4-6.5.1-1.7-.4-3.4-1.5-4.7l1.3-.8c2.3-1.4 3.3-4.2 1.9-6.5v1.5z"/>
          <path fill="#FFFFFF" d="M13.6 24.8c-1.5.1-2.9-.6-3.7-1.8-.4-.7-.5-1.5-.4-2.3.2-.8.6-1.5 1.3-1.9l5.7-3.3c.7-.4 1.2-1.1 1.4-1.8.2-.8 0-1.6-.4-2.2-.6-.9-1.7-1.4-2.7-1.2l-2.1.4c-.4-.5-.9-.9-1.5-1.2l4.4-2.5c1.8-1 4.1-.4 5.2 1.3.7 1.1.8 2.5.3 3.8-.5 1.2-1.5 2.1-2.7 2.6l-5.7 3.3c-.7.4-1.2 1.1-1.4 1.8-.2.8 0 1.6.4 2.2.6.9 1.7 1.4 2.7 1.2l2.1-.4c.4.5.9.9 1.5 1.2l-4.6 2.6c-.6.3-1.4.5-2 .5z"/>
        </svg>
      );

    case 'vue':
    case 'vuejs':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
          <path fill="#42B883" d="M19.6 4.5l-3.6 6.2-3.6-6.2H3.5l12.5 21.6L28.5 4.5h-8.9z"/>
          <path fill="#35495E" d="M19.6 4.5l-3.6 6.2-3.6-6.2H8.8l7.2 12.5 7.2-12.5h-3.6z"/>
        </svg>
      );

    case 'nodejs':
    case 'node':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" className={className} fill="#539E43">
          <path d="M16 2.5L3 10v12l13 7.5 13-7.5V10L16 2.5zm0 3.2l9.7 5.6v11.4L16 28.3 6.3 22.7V11.3L16 5.7z"/>
          <path d="M16 11c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 7.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"/>
        </svg>
      );

    case 'expressjs':
    case 'express':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
          <rect width="32" height="32" rx="6" fill="#1E293B" />
          <text x="16" y="21" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ex</text>
        </svg>
      );

    case 'mongodb':
    case 'mongo':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
          <path fill="#47A248" d="M16 1.5c-1 3.2-6.5 10.3-6.5 16.2 0 6.6 4.6 11.8 10 12.8.2-1.2.3-2.6.3-4.1 0-7.3-3.8-13.8-3.8-24.9z"/>
          <path fill="#499D4A" d="M16.5 1.5c1 3.2 6.5 10.3 6.5 16.2 0 6.6-4.6 11.8-10 12.8-.2-1.2-.3-2.6-.3-4.1 0-7.3 3.8-13.8 3.8-24.9z"/>
          <path fill="#FFFFFF" opacity="0.3" d="M16 30.5c.2 0 .4 0 .6-.1-.2-.8-.4-1.6-.4-2.5 0-7.3-3.8-13.8-3.8-24.9 0-.5.1-1 .2-1.5-.5 1.2-1.1 2.6-1.7 4.1 0 11.1 3.8 17.6 3.8 24.9h1.3z"/>
        </svg>
      );

    case 'javascript':
    case 'js':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
          <rect width="32" height="32" rx="6" fill="#F7DF1E" />
          <path fill="#000000" d="M18.8 20.7c.4.7 1 .9 1.7.9.8 0 1.3-.4 1.3-1.4v-8.2h2.5v8.3c0 2.2-1.4 3.4-3.7 3.4-1.8 0-3-1-3.6-2.3l1.8-.7zm-7.7-.3c.4.7.9 1.1 1.6 1.1.8 0 1.3-.4 1.3-1 0-.6-.4-.9-1.5-1.4l-.8-.4c-1.7-.7-2.6-1.7-2.6-3.2 0-2 1.6-3.4 3.9-3.4 1.6 0 2.7.6 3.4 1.8l-1.8 1.1c-.3-.5-.7-.8-1.5-.8-.7 0-1.1.4-1.1.9 0 .5.3.7 1.3 1.2l.8.3c2 .9 2.8 1.8 2.8 3.4 0 2.2-1.7 3.6-4.2 3.6-2 0-3.3-1-4-2.3l1.9-1.3z"/>
        </svg>
      );

    case 'html':
    case 'html5':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
          <path fill="#E34F26" d="M5 3l2.2 24.7L16 30.5l8.8-2.8L27 3H5z"/>
          <path fill="#EF652A" d="M16 5.2v22.8l6.7-2.1L24.5 5.2H16z"/>
          <path fill="#EDEAEA" d="M16 11.7H11.5l.3 3.4H16v-3.4zm0 6.8h-2.2l-.2-1.9H11.2l.4 4.3H16v-2.4z"/>
          <path fill="#FFFFFF" d="M16 11.7h4.5l-.4 4.8-.1 1.4-4 1.1v2.5l6.5-1.8.8-9.4L16 10.3v1.4z"/>
        </svg>
      );

    case 'css':
    case 'css3':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
          <path fill="#1572B6" d="M5 3l2.2 24.7L16 30.5l8.8-2.8L27 3H5z"/>
          <path fill="#33A9DC" d="M16 5.2v22.8l6.7-2.1L24.5 5.2H16z"/>
          <path fill="#EDEAEA" d="M16 11.7H11.5l.3 3.4H16v-3.4zm0 6.8h-2.2l-.2-1.9H11.2l.4 4.3H16v-2.4z"/>
          <path fill="#FFFFFF" d="M16 11.7h4.5l-.4 4.8-.1 1.4-4 1.1v2.5l6.5-1.8.8-9.4L16 10.3v1.4z"/>
        </svg>
      );

    case 'tailwind':
    case 'tailwindcss':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" className={className} fill="#38BDF8">
          <path d="M9 13.5c1.5-3 3.5-4.5 6-4.5 3.75 0 4.88 2.62 6.56 3.19C22.75 12.56 24 12 25.5 10.5c-1.5 3-3.5 4.5-6 4.5-3.75 0-4.88-2.62-6.56-3.19C11.75 11.44 10.5 12 9 13.5zm-8 8c1.5-3 3.5-4.5 6-4.5 3.75 0 4.88 2.62 6.56 3.19C14.75 20.56 16 20 17.5 18.5c-1.5 3-3.5 4.5-6 4.5-3.75 0-4.88-2.62-6.56-3.19C3.75 19.44 2.5 20 1 21.5z"/>
        </svg>
      );

    case 'restapis':
    case 'api':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" className={className} fill="none" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="16" cy="16" r="12" stroke="#CBD5E1" strokeWidth="1.5" />
          <path d="M10 16h12" />
          <path d="M18 12l4 4-4 4" />
          <circle cx="10" cy="16" r="2.5" fill="#2563EB" />
        </svg>
      );

    case 'mongoose':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
          <rect width="32" height="32" rx="6" fill="#880000" />
          <text x="16" y="21" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">Mongoose</text>
        </svg>
      );

    case 'git':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
          <path fill="#F05032" d="M30.6 14.1L17.9 1.4c-.6-.6-1.5-.6-2.1 0l-3.3 3.3 4.2 4.2c.6-.2 1.3-.1 1.8.4.5.5.6 1.3.4 1.9l4 4c.6-.2 1.4-.1 1.9.4.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.5-.5-.6-1.4-.3-2l-3.8-3.8v7.2c.2.2.4.4.5.6.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.7-.7-.7-1.9 0-2.6.2-.2.4-.4.6-.5v-7.3c-.2-.1-.4-.3-.6-.5-.5-.5-.6-1.3-.3-2L9.5 7.6 1.4 15.7c-.6.6-.6 1.5 0 2.1l12.7 12.7c.6.6 1.5.6 2.1 0l14.4-14.3c.6-.6.6-1.5 0-2.1z"/>
        </svg>
      );

    case 'github':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" className={className} fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M16 2C8.27 2 2 8.27 2 16c0 6.19 4.01 11.43 9.58 13.28.7.13.96-.3.96-.67v-2.35c-3.9.85-4.72-1.88-4.72-1.88-.64-1.62-1.56-2.05-1.56-2.05-1.27-.87.1-.85.1-.85 1.4.1 2.14 1.44 2.14 1.44 1.25 2.15 3.28 1.53 4.08 1.17.13-.91.49-1.53.89-1.88-3.11-.35-6.38-1.56-6.38-6.93 0-1.53.55-2.78 1.44-3.76-.14-.35-.63-1.78.14-3.71 0 0 1.18-.38 3.85 1.44a13.38 13.38 0 013.51-.47c1.19.01 2.39.16 3.51.47 2.67-1.81 3.85-1.44 3.85-1.44.77 1.93.28 3.36.14 3.71.9.98 1.44 2.23 1.44 3.76 0 5.38-3.28 6.57-6.4 6.92.51.44.96 1.3.96 2.62v3.89c0 .38.25.81.96.67C25.99 27.42 30 22.18 30 16c0-7.73-6.27-14-14-14z" />
        </svg>
      );

    case 'linkedin':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      );

    case 'vscode':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
          <path fill="#0065A9" d="M23.8 2.2L16.2 8.5 7.4 2.8 4 4.8v22.4l3.4 2 8.8-5.7 7.6 6.3 5.4-2.7V4.9l-5.4-2.7z"/>
          <path fill="#007ACC" d="M23.8 2.2L16.2 16l7.6 13.8 5.4-2.7V4.9l-5.4-2.7z"/>
          <path fill="#1F9CF0" d="M20.2 16l-12.8 11.2V4.8L20.2 16z"/>
        </svg>
      );

    case 'postman':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
          <circle cx="16" cy="16" r="14" fill="#FF6C37" />
          <path fill="#FFFFFF" d="M19.5 8c-2 0-3.6 1.4-4 3.3l-5-2.2-.6 1.3 5 2.2c-.1.5-.1 1-.1 1.4 0 3.3 2.7 6 6 6s6-2.7 6-6-2.4-6-5.3-6zm0 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"/>
        </svg>
      );

    case 'mysql':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
          <path fill="#00758F" d="M16 3C9.4 3 4 7.5 4 13c0 3.8 2.6 7 6.4 8.7l-1.1 3.5 4.3-1.9c.8.2 1.6.3 2.4.3 6.6 0 12-4.5 12-10S22.6 3 16 3z"/>
          <path fill="#F29111" d="M20.2 8.5c-2.4-.6-5.1.2-6.7 2-1.6 1.8-1.9 4.4-.9 6.6.9 2 2.7 3.4 4.8 3.8l.5-1.5c-1.6-.3-3-1.4-3.7-3-.8-1.7-.5-3.8.7-5.2 1.2-1.4 3.3-2 5.2-1.5l.1-1.2z"/>
          <circle cx="21" cy="11.5" r="1.3" fill="#FFFFFF"/>
          <path fill="#F29111" d="M22.5 15.2c1.2.8 2.2 2 2.7 3.3l-1.2.6c-.4-1.1-1.2-2-2.2-2.7l.7-1.2z"/>
        </svg>
      );

    case 'jwt':
    case 'jsonwebtoken':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
          <path d="M16 2.5l11.5 6.6v13.8L16 29.5 4.5 22.9V9.1L16 2.5z" fill="none" stroke="#D63AFF" strokeWidth="2.2" strokeLinejoin="round"/>
          <circle cx="16" cy="14.5" r="3.8" fill="#FB015B"/>
          <path d="M5.5 9.1L16 14.5l10.5-5.4" stroke="#00B9F1" strokeWidth="2" fill="none"/>
          <path d="M16 14.5v13" stroke="#D63AFF" strokeWidth="2"/>
        </svg>
      );

    case 'gitgithub':
    case 'gitandgithub':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
          <path fill="#F05032" d="M15 1.5L2.8 13.7c-.6.6-.6 1.5 0 2.1l4.5 4.5 7.7-7.7v-2.2c-.4-.3-.6-.8-.6-1.4 0-1.1.9-2 2-2s2 .9 2 2c0 .6-.3 1.1-.7 1.4v2.3l4 4c.4-.2.8-.3 1.3-.3 1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2c0-.3.1-.7.2-1l-3.8-3.8v4.8c.4.3.7.8.7 1.4 0 1.1-.9 2-2 2s-2-.9-2-2c0-.5.2-1 .5-1.3v-5l-4.5 4.5 8.9 8.9c.6.6 1.5.6 2.1 0l12.2-12.2c.6-.6.6-1.5 0-2.1L17.1 1.5c-.6-.6-1.5-.6-2.1 0z"/>
          <circle cx="23" cy="23" r="7.5" fill="#181717" stroke="#FFFFFF" strokeWidth="1"/>
          <path fill="#FFFFFF" d="M23 18.5a4.5 4.5 0 00-1.4 8.8c.2 0 .3-.1.3-.2v-.8c-1.2.3-1.5-.6-1.5-.6-.2-.5-.5-.7-.5-.7-.4-.3 0-.3 0-.3.5 0 .7.5.7.5.4.7 1 .5 1.3.4 0-.3.2-.5.3-.6-1-.1-2-.5-2-2.2 0-.5.2-.9.5-1.2 0-.1-.2-.6 0-1.2 0 0 .4-.1 1.3.5a4.5 4.5 0 012.4 0c.9-.6 1.3-.5 1.3-.5.2.6 0 1.1 0 1.2.3.3.5.7.5 1.2 0 1.7-1 2.1-2 2.2.2.1.3.4.3.8v1.3c0 .1.1.2.3.2A4.5 4.5 0 0023 18.5z"/>
        </svg>
      );

    case 'socketio':
    case 'websocket':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
          <circle cx="16" cy="16" r="14" fill="#010101"/>
          <path d="M16 6a10 10 0 00-7.07 17.07l1.41-1.41A8 8 0 0116 8v-2zm0 3.5a6.5 6.5 0 00-4.6 11.1l1.42-1.42A4.5 4.5 0 0116 11.5v-2zm0 4a2.5 2.5 0 102.5 2.5A2.5 2.5 0 0016 13.5z" fill="#FFFFFF"/>
        </svg>
      );

    case 'stripe':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
          <rect width="32" height="32" rx="6" fill="#635BFF"/>
          <path d="M15.5 13.5c0-.9.7-1.3 1.9-1.3 1.7 0 3.8.5 5.5 1.5V8.5c-1.8-.7-3.8-1-5.6-1-4.7 0-7.8 2.5-7.8 6.7 0 6.5 9 5.5 9 8.3 0 1.1-.9 1.5-2.2 1.5-1.9 0-4.4-.8-6.3-1.9v5.4c2.1.9 4.3 1.3 6.4 1.3 4.9 0 8.1-2.4 8.1-6.8-.1-7-9-5.8-9-8.5z" fill="#FFFFFF"/>
        </svg>
      );

    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      );
  }
}
