import { getServerSession } from 'next-auth';
// import Link from 'next/link';
import { authOptions } from '../../api/auth/[...nextauth]/options';
// import SignOutBtn from './Components/SignOutBtn';
import AuthHome from '../../Components/HomePages/AuthHome';
import UnAuthHome from '../../Components/HomePages/UnAuthHome';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>{session ? <AuthHome /> : <UnAuthHome />}</>

    // <>
    //   {session ? (

    //   ) : (
    //     <div>You Need to signin</div>
    //   )}
    // </>
  );
}
