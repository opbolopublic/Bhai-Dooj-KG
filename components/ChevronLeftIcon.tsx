import React from 'react';

interface IconProps {
  className?: string;
}

export const ChevronLeftIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  );
};
