'use client';

import Button from '@/app/components/button';
import { FC } from 'react';

interface errorComponentProps {
  error: Error;
  reset: () => void;
}

const errorComponent: FC<errorComponentProps> = ({
  error,
  reset,
}: errorComponentProps) => {
  return (
    <div>
      <p>Something went wrong: {error.message}</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
};
export default errorComponent;
