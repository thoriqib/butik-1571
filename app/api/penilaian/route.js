import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (request) => {
  const body = await request.json();
  const penilaian = await prisma.penilaian.create({
    data: {
      skor: Number(body.skor),
      saran: body.saran,
    },
  });
  return NextResponse.json(penilaian, { status: 201 });
};
