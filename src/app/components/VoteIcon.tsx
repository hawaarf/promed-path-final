import React from 'react';
import voteLogo from '../../imports/472427305_398451353330631_4209602132340304525_n.jpg';

interface VoteIconProps {
  className?: string;
}

export const VoteIcon: React.FC<VoteIconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <img
      src={voteLogo}
      alt="VOTE"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};
