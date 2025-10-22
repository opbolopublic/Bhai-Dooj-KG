import React from 'react';

interface IconProps {
  className?: string;
}

export const PlayIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 5V19L19 12L8 5Z" />
    </svg>
  );
};
