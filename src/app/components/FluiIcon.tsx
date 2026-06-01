import React from 'react';
import fluiLogo from '../../imports/446218689_769730538570848_6614434287878043236_n.jpg';

interface FluiIconProps {
  className?: string;
}

export const FluiIcon: React.FC<FluiIconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <img
      src={fluiLogo}
      alt="FLUI Media"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};
