import { headers } from 'next/headers';
import type { FC } from 'react';
import React from 'react';

interface serverComponentProps {
  children?: React.ReactNode;
}

const ServerComponentCopy: FC<serverComponentProps> = ({
  children,
}: serverComponentProps) => {
  console.log('serverComponentCopy');
  console.log(headers());
  return (
    <div>
      <span>Server Component Copy</span>
      {children}
    </div>
  );
};
export default ServerComponentCopy;
