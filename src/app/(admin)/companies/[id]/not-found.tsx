import Link from 'next/link';
import type { FC } from 'react';

interface notFoundProps {
  params: { id: string };
}

const notFound: FC<notFoundProps> = ({ params }: notFoundProps) => {
  return (
    <div>
      <p>Company not found: {String(params.id)}</p>
      <Link href="/companies" className="text-blue-500">
        Back to companies
      </Link>
    </div>
  );
};
export default notFound;
