import type { FC } from 'react';

interface globalErrorProps {
  error: Error;
}

const globalError: FC<globalErrorProps> = ({ error }: globalErrorProps) => {
  return (
    <html>
      <body>
        <div>
          <p>Something globally went wrong {error.message}</p>
        </div>
      </body>
    </html>
  );
};
export default globalError;
