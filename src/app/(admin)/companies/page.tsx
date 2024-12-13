import type { FC } from 'react';
import Header from '../../components/header';
import Toolbar from '../../components/toolbar';
import SearchInput from '../../components/searchInput';
import AddCompanyBtn from '../../components/addCompanyBtn';
import CompanyTable from '../../components/companyTable';
import CompanyRow from '../../components/companyRow';
import { Status } from '../../components/status-label';

interface pageProps {
  params: {
    id?: string;
  };
}

const page: FC<pageProps> = ({}: pageProps) => {
  return (
    <>
      <Header>Companies Page</Header>
      <Toolbar action={<AddCompanyBtn />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category={'Products'}
          company={'Costco'}
          status={Status.Pending}
          promotion={true}
          country={'USA'}
          joinedDate={'2022-12-12'}
        />
      </CompanyTable>
    </>
  );
};
export default page;
