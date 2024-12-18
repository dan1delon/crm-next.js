import React from 'react';
import Toolbar from '@/app/components/toolbar';
import SearchInput from '@/app/components/searchInput';
import AddCompanyButton from '@/app/components/addCompanyBtn';
export interface PageProps {
  params: {
    id: string;
  };
}
export default function Page({}: PageProps) {
  return (
    <Toolbar action={<AddCompanyButton />}>
      <SearchInput />
    </Toolbar>
  );
}
