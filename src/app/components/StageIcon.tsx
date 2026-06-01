import React from 'react';
import stageLogo from '../../imports/Logo_Stage.png';

interface StageIconProps {
  className?: string;
}

export const StageIcon: React.FC<StageIconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <img
      src={stageLogo}
      alt="Stage"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};
