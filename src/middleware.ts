// // middleware.ts
// import { withAuth } from 'next-auth/middleware';

// // Protect all routes under "/dashboard" and "/profile"
// export default withAuth({
//   pages: {
//     signIn: '/api/auth/signin', // Redirect to sign-in page if unauthenticated
//   },
// });
export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/server/:path*', '/profile/:path*'], // Protect these routes
};
