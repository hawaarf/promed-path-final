import React from 'react';
import orangFilmLogo from '../../imports/450118453_992603615832994_6470832764632320285_n.jpg';

interface OrangFilmIconProps {
  className?: string;
}

export const OrangFilmIcon: React.FC<OrangFilmIconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <img
      src={orangFilmLogo}
      alt="Orang Film"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};
