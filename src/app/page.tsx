import { headers } from 'next/headers';
import AddCompanyBtn from './components/addCompanyBtn';
import ClientComponent from './components/clientComponent';
import ServerComponent from './components/serverComponent';
import ServerComponentCopy from './components/serverComponentCopy';

export default function Home() {
  console.log(headers());

  return (
    <main>
      <h1 className="text-xl">Home page - {new Date().toTimeString()}</h1>
      <AddCompanyBtn />
      <ServerComponent />
      <ClientComponent>
        <ServerComponentCopy />
      </ClientComponent>
    </main>
  );
}
