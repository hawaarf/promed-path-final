import React from 'react';
import oxLabLogo from '../../imports/476591200_989653779729727_946883614685164362_n.jpg';

interface OxLabIconProps {
  className?: string;
}

export const OxLabIcon: React.FC<OxLabIconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <img
      src={oxLabLogo}
      alt="OX Lab"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};
