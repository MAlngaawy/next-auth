'use client';

import { signIn } from 'next-auth/react';
import React from 'react';

const SigninBtn = () => {
  return (
    <button
      className="border-black border rounded-md p-4 "
      onClick={() => {
        signIn();
      }}
    >
      Please Signin
    </button>
  );
};

export default SigninBtn;
