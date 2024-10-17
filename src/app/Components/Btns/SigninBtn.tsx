'use client';

import { signIn } from 'next-auth/react';
import React from 'react';

const SigninBtn = () => {
  return (
    <button
      className="rounded-md p-4 bg-green-500 text-white"
      onClick={() => {
        signIn();
      }}
    >
      Signin
    </button>
  );
};

export default SigninBtn;
