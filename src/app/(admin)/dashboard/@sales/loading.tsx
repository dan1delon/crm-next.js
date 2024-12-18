import type { FC } from 'react';

interface loadingProps {
  params: { id: string };
}

const loading: FC<loadingProps> = ({}: loadingProps) => {
  return <div>Loading...</div>;
};
export default loading;
