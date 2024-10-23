'use client';

import { signOut } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import React from 'react';

const SignOutBtn = () => {
  const t = useTranslations('HomePage');

  return (
    <button
      className="rounded-md p-4 text-white bg-red-500"
      onClick={() => {
        signOut();
      }}
    >
      {t('logout')}
    </button>
  );
};

export default SignOutBtn;
