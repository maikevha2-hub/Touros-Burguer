import React, { useState } from 'react';

interface TourosLogoProps {
  size?: number | string;
  className?: string;
  alt?: string;
  bordered?: boolean;
}

export const TourosLogo: React.FC<TourosLogoProps> = ({
  size = 64,
  className = '',
  alt = 'Touros Burger & Pizza Logo',
  bordered = true,
}) => {
  // Cascading sources matching user's filename and public asset paths
  const sources = [
    '977f8d74-b9a6-4efa-9ade-46b8861a1c3d-1_all_262.jpg',
    '/977f8d74-b9a6-4efa-9ade-46b8861a1c3d-1_all_262.jpg',
    '/assets/logo.jpg',
    '/logo.jpg',
    '/touros-mascot.svg',
  ];
  const [srcIndex, setSrcIndex] = useState(0);

  const handleError = () => {
    if (srcIndex < sources.length - 1) {
      setSrcIndex((prev) => prev + 1);
    } else {
      setSrcIndex(-1); // all failed, show stylized vector
    }
  };

  if (srcIndex >= 0) {
    return (
      <img
        src={sources[srcIndex]}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={handleError}
        style={{
          width: typeof size === 'number' ? `${size}px` : size,
          height: typeof size === 'number' ? `${size}px` : size,
        }}
        className={`object-cover rounded-full ${
          bordered ? 'border-2 border-[#8d3a14] shadow-md' : ''
        } ${className}`}
        id="touros-real-logo-img"
      />
    );
  }

  // Visual mascot fallback in case image file is temporarily not found
  return (
    <div
      style={{
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
      }}
      className={`rounded-full bg-gradient-to-br from-[#8d3a14] via-[#7c2d12] to-[#431407] flex flex-col items-center justify-center text-amber-200 ${
        bordered ? 'border-2 border-[#8d3a14] shadow-md' : ''
      } ${className} relative overflow-hidden`}
      title="Touros Burger & Pizza"
    >
      <div className="flex flex-col items-center justify-center p-1 text-center">
        <span className="text-xl sm:text-2xl drop-shadow">🐂</span>
        <span className="text-[7px] sm:text-[8px] font-black tracking-widest uppercase text-amber-300">
          TOUROS
        </span>
      </div>
    </div>
  );
};
