'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import CompanyForm from '@/app/components/companyForm';
import Modal from '@/app/components/modal';

export interface PageProps {
  params: { id: string };
}

export default function Page({}: PageProps) {
  const router = useRouter();
  return (
    <Modal show={true} onClose={() => router.back()}>
      <CompanyForm onSubmit={console.log} />
    </Modal>
  );
}
