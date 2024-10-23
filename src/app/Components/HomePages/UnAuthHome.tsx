import { getTranslations } from 'next-intl/server';
import SigninBtn from '../Btns/SigninBtn';

const UnAuthHome = async () => {
  const t = await getTranslations('HomePage');

  return (
    <div className="p-10 mx-auto flex items-center flex-col gap-5">
      <h1 className="text-red-500 mx-auto text-center text-4xl font-bold">
        {t('needToSignIn')}
      </h1>
      <SigninBtn />
    </div>
  );
};

export default UnAuthHome;
