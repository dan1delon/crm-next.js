import { headers } from 'next/headers';
import AddCompanyBtn from './components/addCompanyBtn';

export default function Home() {
  console.log(headers());

  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <AddCompanyBtn />
    </main>
  );
}
