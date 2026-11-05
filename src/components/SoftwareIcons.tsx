import React from 'react';

interface SoftwareIconProps {
  type: 'figma' | 'photoshop' | 'premiere' | 'stitch' | 'capcut' | 'davinci' | 'picsart';
  className?: string;
  size?: number;
}

export const SoftwareIcon: React.FC<SoftwareIconProps> = ({ type, className = '', size = 28 }) => {
  switch (type) {
    case 'figma':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 38 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
        </svg>
      );

    case 'photoshop':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <rect width="64" height="64" rx="14" fill="#001E36" />
          <path
            d="M17.5 18H28.6C34.5 18 37.8 21.2 37.8 26.1C37.8 31.4 34 34.6 28.3 34.6H23.5V46H17.5V18ZM23.5 29.8H28.2C31.2 29.8 32.5 28.3 32.5 26.2C32.5 24.1 31.2 22.8 28.2 22.8H23.5V29.8Z"
            fill="#31A8FF"
          />
          <path
            d="M38.5 39.8C39.4 38.6 41.2 37.6 43.6 37.6C46.8 37.6 48.4 39.4 48.4 42.1C48.4 46.1 43.8 45.9 43.8 48.2C43.8 49 44.5 49.5 45.7 49.5C47.2 49.5 48.7 48.8 49.5 48.1L50.4 51.5C49.3 52.4 47.2 53.1 44.9 53.1C40.6 53.1 38 50.8 38 47.4C38 43.4 42.6 43.2 42.6 41.1C42.6 40.5 42.1 40.1 41.1 40.1C39.9 40.1 38.9 40.6 38.2 41.1L38.5 39.8Z"
            fill="#31A8FF"
          />
        </svg>
      );

    case 'premiere':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <rect width="64" height="64" rx="14" fill="#00005B" />
          <path
            d="M17.5 18H28.6C34.5 18 37.8 21.2 37.8 26.1C37.8 31.4 34 34.6 28.3 34.6H23.5V46H17.5V18ZM23.5 29.8H28.2C31.2 29.8 32.5 28.3 32.5 26.2C32.5 24.1 31.2 22.8 28.2 22.8H23.5V29.8Z"
            fill="#EA77FF"
          />
          <path
            d="M38.8 28H44.2V32C45.2 29.3 47.6 28 50.2 28C50.9 28 51.5 28.1 52 28.4L50.6 33.4C50 33.1 49.4 33 48.7 33C46 33 44.4 35.1 44.4 38.8V46H38.8V28Z"
            fill="#EA77FF"
          />
        </svg>
      );

    case 'stitch':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <rect width="64" height="64" rx="14" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
          {/* Google Stitch AI node styling */}
          <circle cx="22" cy="22" r="8" fill="#4285F4" />
          <circle cx="42" cy="22" r="8" fill="#EA4335" />
          <circle cx="22" cy="42" r="8" fill="#FBBC05" />
          <circle cx="42" cy="42" r="8" fill="#34A853" />
          <path d="M22 22L42 42M42 22L22 42" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
          <circle cx="32" cy="32" r="5" fill="#356B3D" />
        </svg>
      );

    case 'capcut':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <rect width="64" height="64" rx="14" fill="#111111" />
          {/* CapCut hourglass shape */}
          <path
            d="M16 20H48L32 32L48 44H16L32 32L16 20Z"
            fill="#FFFFFF"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'davinci':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <rect width="64" height="64" rx="14" fill="#16181C" />
          {/* DaVinci Resolve 3-color pinwheel */}
          <path
            d="M32 32L46 18C42 14 36 12 32 12C28 12 22 14 18 18L32 32Z"
            fill="#FF3333"
          />
          <path
            d="M32 32L48 42C51 38 52 33 52 30C52 24 49 19 46 16L32 32Z"
            fill="#3366FF"
          />
          <path
            d="M32 32L20 48C25 51 30 52 34 52C39 52 44 50 48 46L32 32Z"
            fill="#FFCC00"
          />
          <path
            d="M32 32L16 24C13 28 12 33 12 36C12 42 15 47 19 50L32 32Z"
            fill="#00CC66"
          />
          <circle cx="32" cy="32" r="5" fill="#FFFFFF" />
        </svg>
      );

    case 'picsart':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <rect width="64" height="64" rx="14" fill="url(#picsart-grad)" />
          <defs>
            <linearGradient id="picsart-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9C27B0" />
              <stop offset="0.5" stopColor="#E91E63" />
              <stop offset="1" stopColor="#3F51B5" />
            </linearGradient>
          </defs>
          {/* Picsart stylized P circle */}
          <circle cx="32" cy="26" r="10" fill="#FFFFFF" />
          <path d="M22 26V46H28V36H32C37.5 36 42 31.5 42 26" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    default:
      return null;
  }
};
