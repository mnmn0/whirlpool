import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { User } from "next-auth"
import { JWT } from "next-auth/jwt"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)