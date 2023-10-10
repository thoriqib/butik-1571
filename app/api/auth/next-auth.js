// pages/api/auth/next-auth.js
import prisma from "@/app/utils/prismaClient";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { username, password } = credentials;
        // Cari data pengguna berdasarkan username di database Anda
        const user = await prisma.user.findUnique({
          where: {
            username: username,
          },
        });

        if (user && user.password === password) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
  // Konfigurasi lainnya
});
