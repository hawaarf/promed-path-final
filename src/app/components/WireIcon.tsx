import React from 'react';
import wireLogo from '../../imports/447833543_475779898175433_2711741042901288624_n.jpg';

interface WireIconProps {
  className?: string;
}

export const WireIcon: React.FC<WireIconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <img
      src={wireLogo}
      alt="Wire"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};
