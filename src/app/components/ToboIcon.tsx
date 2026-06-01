import React from 'react';
import toboLogo from '../../imports/471938765_1320983128802191_7227532432492239586_n__1_.jpg';

interface ToboIconProps {
  className?: string;
}

export const ToboIcon: React.FC<ToboIconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <img
      src={toboLogo}
      alt="TOBO"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};
