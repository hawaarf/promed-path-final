import React from 'react';
import pixelPalsLogo from '../../imports/476474268_3494404547519509_8283486979659278366_n.jpg';

interface PixelPalsIconProps {
  className?: string;
}

export const PixelPalsIcon: React.FC<PixelPalsIconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <img
      src={pixelPalsLogo}
      alt="Pixel Pals"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};
