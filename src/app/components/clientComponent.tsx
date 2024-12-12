'use client';

import type { FC } from 'react';
import React from 'react';
import ServerComponentCopy from './serverComponentCopy';

interface clientComponentProps {
  children?: React.ReactNode;
}

const ClientComponent: FC<clientComponentProps> = ({
  children,
}: clientComponentProps) => {
  console.log('ClientComponent');
  return (
    <div>
      <span>Client Component</span>
      {children}
    </div>
  );
};
export default ClientComponent;
