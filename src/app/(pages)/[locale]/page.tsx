import { getServerSession } from 'next-auth';
import AuthHome from '../../Components/HomePages/AuthHome';
import UnAuthHome from '../../Components/HomePages/UnAuthHome';
import { authOptions } from '../../api/auth/[...nextauth]/options';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return <>{session ? <AuthHome /> : <UnAuthHome />}</>;
}
