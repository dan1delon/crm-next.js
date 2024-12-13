import type { FC } from 'react';
import Sidebar from '../components/sidebar';

interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }: layoutProps) => {
  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </>
  );
};
export default layout;
