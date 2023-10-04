import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (request) => {
  const body = await request.json();
  const tamu = await prisma.tamu.create({
    data: {
      nama: body.nama,
      tahunlahir: body.tahunlahir,
      email: body.email,
      nohp: body.nohp,
      jk: body.jk,
      pt: body.pt,
      pu: body.pu,
      namains: body.namains,
      ki: body.ki,
      dd: body.dd,
      jl: body.jl,
      fk: body.fk,
      kebutuhan: body.kebutuhan,
    },
  });
  return NextResponse.json(tamu, { status: 201 });
};
