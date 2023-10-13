import prisma from "@/app/utils/prismaClient";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const data = await req.json();
  const { username, password } = data;
  const user = await prisma.user.findFirst({
    where: {
      username: username,
    },
  });
  if (user && user.password === password) {
    return NextResponse.json(
      { status: "success", data: user, message: "Berhasil Login" },
      { status: 201 }
    );
  } else
    return NextResponse.json(
      { status: "error", message: "Username atau password salah" },
      { status: 403 }
    );
};
