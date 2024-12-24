import React from 'react';
import CompanyTable from '@/app/components/companyTable';
import CompanyRow from '@/app/components/companyRow';
import { Status } from '@/app/components/status-label';

export interface PageProps {
  children: React.ReactNode;
}

export default function Page({}: PageProps) {
  return (
    <CompanyTable>
      <CompanyRow
        id={1}
        category="Products"
        company="Costco"
        status={Status.Pending}
        promotion={true}
        country="USA"
        joinedDate="02.19.2023"
      />
    </CompanyTable>
  );
}
