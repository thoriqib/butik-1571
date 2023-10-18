import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { writeFile } from "fs/promises";

const prisma = new PrismaClient();

export const POST = async (request, params) => {
  const body = await request.formData();
  const file = body.get("surat");
  const obj = params;

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const currentDate = new Date().toISOString();
  const path = `public/${file.name}`;

  await writeFile(path, buffer);

  const tamu = await prisma.tamu.update({
    where: {
      id: Number(obj.params.id),
    },
    data: {
      nama: body.get("nama"),
      tahunlahir: Number(body.get("tahunlahir")),
      email: body.get("email"),
      nohp: body.get("nohp"),
      jk: body.get("jk"),
      pt: Number(body.get("pt")),
      pu: Number(body.get("pu")),
      namains: body.get("namains"),
      ki: Number(body.get("ki")),
      dd: Number(body.get("dd")),
      jl: Number(body.get("jl")),
      fk: Number(body.get("fk")),
      kebutuhan: body.get("kebutuhan"),
      surat: file.name,
    },
  });

  return NextResponse.json(tamu, { status: 200 });
};

export const DELETE = async (request, params) => {
  const obj = params;
  const tamu = await prisma.tamu.delete({
    where: {
      id: Number(obj.params.id),
    },
  });
  return NextResponse.json(tamu, { status: 200 });
};
