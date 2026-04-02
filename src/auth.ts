import NextAuth, { type DefaultSession } from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  // Trust the host when behind a proxy (Render uses X-Forwarded-Proto and X-Forwarded-Host)
  trustHost: true,
  callbacks: {
    async session({ session, token }) {
      if (session.user && session.user.email) {
        // Mark as admin if the email matches
        session.user.isAdmin = session.user.email === "dhanushbattepati@gmail.com";
      }
      return session;
    },
  },
});

// Extend the Session type to include isAdmin
declare module "next-auth" {
  interface Session {
    user: {
      isAdmin?: boolean;
    } & DefaultSession["user"];
  }
}
