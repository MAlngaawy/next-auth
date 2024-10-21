'use client';
import { useSession } from 'next-auth/react';

const ClientComponent = () => {
  const session = useSession();
  console.log('__SESSION__', session);
  return <div>ClientComponent</div>;
};

export default ClientComponent;
