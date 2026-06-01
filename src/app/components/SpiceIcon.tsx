import React from 'react';
import spiceLogo from '../../imports/457861291_867702975456145_1096067251769214310_n.jpg';

interface SpiceIconProps {
  className?: string;
}

export const SpiceIcon: React.FC<SpiceIconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <img
      src={spiceLogo}
      alt="SPICE"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};
