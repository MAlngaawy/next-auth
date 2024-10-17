'use client';

import { signOut } from 'next-auth/react';
import React from 'react';

const SignOutBtn = () => {
  return (
    <button
      className="rounded-md p-4 text-white bg-red-500"
      onClick={() => {
        signOut();
      }}
    >
      SignOut From Here
    </button>
  );
};

export default SignOutBtn;
