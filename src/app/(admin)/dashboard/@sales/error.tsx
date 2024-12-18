'use client';

import type { FC } from 'react';

interface errorProps {
  error: Error;
}

const ErrorComponent: FC<errorProps> = ({ error }: errorProps) => {
  return <div>Something went wrong: {error.message}</div>;
};
export default ErrorComponent;
