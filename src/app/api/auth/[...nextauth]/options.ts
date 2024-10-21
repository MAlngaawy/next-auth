import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'your-cool-username',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Your-awesome-password',
        },
      },
      async authorize(credentials) {
        const user = { id: '42', name: 'Dave', password: 'nextauth' };
        if (
          credentials?.username === user?.name &&
          credentials?.password === user?.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  //? Callbacks
  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     return true;
  //   },
  //   async session({ session, user, token }) {
  //     return session;
  //   },
  // },
};
