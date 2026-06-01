import React from 'react';
import mvpLogo from '../../imports/456233575_1249716809731987_5227444159371497886_n.jpg';

interface MVPIconProps {
  className?: string;
}

export const MVPIcon: React.FC<MVPIconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <img
      src={mvpLogo}
      alt="MVP E-Sports"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};
