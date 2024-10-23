'use client';

import { Link, usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl';

const SwitchLangBtn = () => {
  const pathname = usePathname();
  const local = useLocale();

  return (
    <Link href={pathname} locale={local === 'en' ? 'ar' : 'en'}>
      Switch
    </Link>
  );
};

export default SwitchLangBtn;
