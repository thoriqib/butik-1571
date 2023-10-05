import { PrismaClient } from "@prisma/client";
import DeleteTamu from "./delete";
import UpdateTamu from "./update";

const prisma = new PrismaClient();

const getTamu = async () => {
  const res = await prisma.tamu.findMany();
  return res;
};

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

export default async function Daftar() {
  const tamu = await getTamu();
  const pendidikan = await getPendidikanTerakhir();
  const pekerjaan = await getPekerjaanUtama();
  const instansi = await getKategoriInstansi();
  const pemanfaatan = await getPemanfaatanData();
  const layanan = await getJenisLayanan();
  const fasilitas = await getFasilitasUtama();

  return (
    <>
      <table className="table w-full">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Email</th>
            <th>No HP</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tamu.map((t, i) => (
            <tr key={t.id}>
              <td>{i + 1}</td>
              <td>{t.nama}</td>
              <td>{t.email}</td>
              <td>{t.nohp}</td>
              <td className="flex justify-center space-x-1">
                <UpdateTamu
                  tamu={t}
                  pendidikan={pendidikan}
                  pekerjaan={pekerjaan}
                  instansi={instansi}
                  pemanfaatan={pemanfaatan}
                  layanan={layanan}
                  fasilitas={fasilitas}
                />
                <DeleteTamu tamu={t} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
