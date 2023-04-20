import NextAuth from "next-auth/next";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";
import dbConnect from "../../../lib/dbConnect";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../model/User";
import { compare } from "bcrypt";

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        console.log("******** credentials **********");
        console.log(credentials);
        await dbConnect();

        const user = await User.findOne({
          email: credentials.email,
        }).select("+password");

        if (!user) {
          throw new Error("Email is not registered");
        }

        const isPasswordCorrect = await compare(
          credentials.password,
          user.password
        );

        if (!isPasswordCorrect) {
          throw new Error("Password is incorrect");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  debug: process.env.NODE_ENV === "development",
  adapter: MongoDBAdapter(clientPromise),
  session: { strategy: "jwt" },
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      const user = token.user;
      session.user = user;
      return session;
    },
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
});
