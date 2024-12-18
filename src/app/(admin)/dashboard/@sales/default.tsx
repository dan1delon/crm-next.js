import type { FC } from 'react';

interface DefaultComponentProps {
  children: React.ReactNode;
}

const DefaultComponent: FC<
  DefaultComponentProps
> = ({}: DefaultComponentProps) => {
  return null;
};
export default DefaultComponent;
