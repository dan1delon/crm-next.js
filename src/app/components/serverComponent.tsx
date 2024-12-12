import type { FC } from 'react';
import React from 'react';

interface serverComponentProps {
  children?: React.ReactNode;
}

const ServerComponent: FC<serverComponentProps> = ({
  children,
}: serverComponentProps) => {
  console.log('serverComponent');
  return (
    <div>
      <span>Server Component</span>
      {children}
    </div>
  );
};
export default ServerComponent;
