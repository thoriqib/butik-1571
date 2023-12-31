import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const GET = async () => {
    try {
      const queryOutput = await prisma.tamu.findMany({
        include: {
          Pendidikan: true,
          Pekerjaan: true,
          Instansi: true,
          PemanfaatanData: true,
          Layanan: true,
          Fasilitas: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      return NextResponse.json(queryOutput, { status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ error }, { status: 500 });
    } finally {
      prisma.$disconnect();
    }
};

export const POST = async (request) => {
  const body = await request.json();
  const tamu = await prisma.tamu.create({
    data: {
      nama: body.nama,
      tahunlahir: Number(body.tahunlahir),
      email: body.email,
      nohp: body.nohp,
      jk: body.jk,
      pt: Number(body.pt),
      pu: Number(body.pu),
      namains: body.namains,
      ki: Number(body.ki),
      dd: Number(body.dd),
      jl: Number(body.jl),
      fk: Number(body.fk),
      kebutuhan: body.kebutuhan,
      surat: "",
    },
  });
  return NextResponse.json(tamu, { status: 201 });
};
