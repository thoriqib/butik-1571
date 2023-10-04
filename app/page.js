// import { useState } from "react";
import { PrismaClient } from "@prisma/client";
import FormTamu from "./components/FormTamu";

const prisma = new PrismaClient();

const getPendidikanTerakhir = async () => {
  const res = prisma.pendidikan.findMany();
  return res;
};

const getPekerjaanUtama = async () => {
  const res = prisma.pekerjaan.findMany();
  return res;
};

const getKategoriInstansi = async () => {
  const res = prisma.instansi.findMany();
  return res;
};

const getPemanfaatanData = async () => {
  const res = prisma.pemanfaatan.findMany();
  return res;
};

const getJenisLayanan = async () => {
  const res = prisma.layanan.findMany();
  return res;
};

const getFasilitasUtama = async () => {
  const res = prisma.fasilitas.findMany();
  return res;
};

export default async function Home() {
  const pendidikan = await getPendidikanTerakhir();
  const pekerjaan = await getPekerjaanUtama();
  const instansi = await getKategoriInstansi();
  const pemanfaatan = await getPemanfaatanData();
  const layanan = await getJenisLayanan();
  const fasilitas = await getFasilitasUtama();

  return (
    <main className="flex items-center justify-center flex-col">
      <h1 className="text-center font-bold">
        Selamat Datang di BPS Kota Jambi
      </h1>
      <div className="card w-96 bg-base-100 shadow-xl lg:max-w-xl">
        <div className="card-body">
          <h2 className="card-title text-center">
            Isilah Pertanyaan di Bawah Ini
          </h2>
          <FormTamu
            pendidikan={pendidikan}
            pekerjaan={pekerjaan}
            instansi={instansi}
            pemanfaatan={pemanfaatan}
            layanan={layanan}
            fasilitas={fasilitas}
          />
        </div>
      </div>
    </main>
  );
}
