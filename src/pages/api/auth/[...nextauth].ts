import NextAuth, { NextAuthOptions, Session } from 'next-auth';
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google';
import { JWT } from 'next-auth/jwt';

interface CustomUser {
  id: string;
  name: string;
  email: string;
  image: string;
}

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile: (profile: GoogleProfile) => {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        }
      },
    })
  ],
  callbacks: {
    session: ({ session, token }: { session: Session, token: JWT}) => ({
      ...session,
      user: {
        id: token.sub,
        name: token.name,
        email: token.email,
        image: token.picture,
      } as CustomUser,
    }),
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)