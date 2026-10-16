import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import prisma from "@/lib/prisma"
import { isAdminEmail } from "@/lib/admin"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GitHub, Google],
  pages: { signIn: "/admin/login" },
  callbacks: {
    // Only allow-listed emails may sign in at all (nobody else gets a user row).
    signIn: ({ user }) => isAdminEmail(user.email),
    session: ({ session, user }) => {
      session.user.role = isAdminEmail(user.email) ? "admin" : null
      return session
    },
  },
})
