import createMiddleware from 'next-intl/middleware';
import { routing } from './app/i18n/routing';
import { default as nextAuthDefault } from 'next-auth/middleware';

export default createMiddleware(routing);
export { nextAuthDefault };

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|en)/:path*'],
};
