'use client';

import Button from './button';
import { useRouter } from 'next/navigation';

export default function AddCompanyBtn() {
  const router = useRouter();

  return (
    <>
      <Button type="button" onClick={() => router.push('/companies/new')}>
        Add company
      </Button>
    </>
  );
}
