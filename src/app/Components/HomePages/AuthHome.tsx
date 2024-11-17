import { Link } from '@/app/i18n/routing';
import SignOutBtn from '../Btns/SignOutBtn';
import { getTranslations } from 'next-intl/server';
import TailGridnput from '../shared/TailGridnput';

const AuthHome = async () => {
  const t = await getTranslations('HomePage');

  return (
    <div className="p-10 bg-gray-100 min-h-screen mx-auto flex items-center flex-col gap-5">
      <h1 className="text-4xl font-bold text-green-500">{t('title')}</h1>
      <h1 className="text-4xl">UI Packages Compareson</h1>
      <div>
        <TailGridnput />
      </div>
      <div className="flex gap-5 mt-20">
        <Link
          className="border-black border rounded-md p-4 hover:text-black hover:bg-white"
          href={'/client/products'}
        >
          {t('clientProducts')}
        </Link>
        <Link
          className="border-black border rounded-md p-4 hover:text-black hover:bg-white"
          href={'/server/products'}
        >
          {t('serverProducts')}
        </Link>
      </div>
      <SignOutBtn />
    </div>
  );
};

export default AuthHome;
