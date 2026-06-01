import React from 'react';
import iconLogo from '../../imports/466693031_1109486263875027_7053588961659485251_n.jpg';

interface IconMediaIconProps {
  className?: string;
}

export const IconMediaIcon: React.FC<IconMediaIconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <img
      src={iconLogo}
      alt="ICON Media"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};
