import DaftarTamu from "@/app/components/DaftarTamu";
import getAllTamu from "@/app/utils/getQueryOutput";
import prisma from "@/app/utils/prismaClient";

const getAllPendidikanTerakhir = async () => {
  const res = prisma.pendidikan.findMany();
  return res;
};

const getAllPekerjaanUtama = async () => {
  const res = prisma.pekerjaan.findMany();
  return res;
};

const getAllKategoriInstansi = async () => {
  const res = prisma.instansi.findMany();
  return res;
};

const getAllPemanfaatanData = async () => {
  const res = prisma.pemanfaatan.findMany();
  return res;
};

const getAllJenisLayanan = async () => {
  const res = prisma.layanan.findMany();
  return res;
};

const getAllFasilitasUtama = async () => {
  const res = prisma.fasilitas.findMany();
  return res;
};

export default async function Daftar() {
  const tamu = await getAllTamu();
  // console.log(tamu.slice(0, 5))
  const pendidikan = await getAllPendidikanTerakhir();
  const pekerjaan = await getAllPekerjaanUtama();
  const instansi = await getAllKategoriInstansi();
  const pemanfaatan = await getAllPemanfaatanData();
  const layanan = await getAllJenisLayanan();
  const fasilitas = await getAllFasilitasUtama();

  return (
    <div className="flex items-center justify-center w-100 h-100">
      <DaftarTamu
        tamu={tamu}
        pendidikan={pendidikan}
        pekerjaan={pekerjaan}
        instansi={instansi}
        pemanfaatan={pemanfaatan}
        layanan={layanan}
        fasilitas={fasilitas}
      />
    </div>
  );
}
