'use client';

import { Link, usePathname } from '@/app/i18n/routing';
import { useLocale } from 'next-intl';

const SwitchLangBtn = () => {
  const pathname = usePathname();
  const local = useLocale();
  const otherLang = local === 'en' ? 'ar' : 'en';

  return (
    <Link
      className="p-2 bg-blue-400 rounded-lg text-white font-bold text-lg"
      href={pathname}
      locale={otherLang}
    >
      {otherLang.toUpperCase()}
    </Link>
  );
};

export default SwitchLangBtn;
