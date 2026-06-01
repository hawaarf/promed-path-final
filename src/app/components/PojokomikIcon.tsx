import React from 'react';
import pojokomikLogo from '../../imports/457039635_734297165478874_8205158658632989087_n.jpg';

interface PojokomikIconProps {
  className?: string;
}

export const PojokomikIcon: React.FC<PojokomikIconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <img
      src={pojokomikLogo}
      alt="PojoKomik"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};
