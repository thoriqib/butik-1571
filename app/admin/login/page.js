import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function Login() {
  return (
    <>
      <h1>Login</h1>
    </>
  );
}
