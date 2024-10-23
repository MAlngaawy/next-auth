'use client';

import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import React from 'react';

const SigninBtn = () => {
  const t = useTranslations('HomePage');

  return (
    <button
      className="rounded-md p-4 bg-green-500 text-white"
      onClick={() => {
        signIn();
      }}
    >
      {t('signIn')}
    </button>
  );
};

export default SigninBtn;
