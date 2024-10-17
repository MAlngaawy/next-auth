import Link from 'next/link';
import SignOutBtn from '../Btns/SignOutBtn';

const AuthHome = () => {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-green-500">You have Signed In</h1>
      <div className="flex gap-5 my-4">
        <Link
          className="border-black border rounded-md p-4 hover:text-black hover:bg-white"
          href={'client/products'}
        >
          Client Products
        </Link>
        <Link
          className="border-black border rounded-md p-4 hover:text-black hover:bg-white"
          href={'server/products'}
        >
          Server Products
        </Link>
      </div>
      <div className="my-2">
        <SignOutBtn />
      </div>
    </div>
  );
};

export default AuthHome;
