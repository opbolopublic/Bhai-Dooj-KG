import React from 'react';

interface IconProps {
  className?: string;
}

export const PreviousIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 6L9.5 12L18 18V6ZM8 18V6H6V18H8Z" />
    </svg>
  );
};
