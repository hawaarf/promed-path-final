import React from 'react';
import mosaicLogo from '../../imports/448724047_1901767183620510_4166289165996961295_n.jpg';

interface MosaicIconProps {
  className?: string;
}

export const MosaicIcon: React.FC<MosaicIconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <img
      src={mosaicLogo}
      alt="MOSAIC"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};
