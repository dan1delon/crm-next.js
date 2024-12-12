import type { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = ({}: pageProps) => {
  return (
    <main>
      <h1 className="text-xl">Settings Page</h1>
    </main>
  );
};
export default page;
