import React from 'react';
import kulsLogo from '../../imports/449481508_1009606190818119_3184102965452354283_n.jpg';

interface KulsIconProps {
  className?: string;
}

export const KulsIcon: React.FC<KulsIconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <img
      src={kulsLogo}
      alt="KULS Creative"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};
