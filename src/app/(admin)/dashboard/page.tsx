import Header from '@/app/components/header';
import type { FC } from 'react';

interface pageProps {
  params: {
    id?: string;
  };
}

const page: FC<pageProps> = ({}: pageProps) => {
  return (
    <main>
      <Header>Dashboard</Header>
    </main>
  );
};
export default page;
