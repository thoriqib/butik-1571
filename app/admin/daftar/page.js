import { PrismaClient } from "@prisma/client";
import DeleteTamu from "./delete";
import UpdateTamu from "./update";
import DetailTamu from "./detail";

const prisma = new PrismaClient();

const getTamu = async () => {
  const res = await prisma.tamu.findMany({
    include: {
      Pendidikan: true,
      Pekerjaan: true,
      Instansi: true,
      PemanfaatanData: true,
      Layanan: true,
      Fasilitas: true,
    },
  });
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
    <div className="flex items-center justify-center w-100">
      <div className="card w-11/12 bg-base-100 shadow-xl rounded-lg">
        <div className="card-body">
          <h2 className="card-title text-center">
            Daftar Pengunjung BPS Kota Jambi
          </h2>
          <table className="table w-full">
            <thead className="text-center">
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Email</th>
                <th>No HP</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {tamu.map((t, i) => (
                <tr key={t.id} className="text-center">
                  <td>{i + 1}</td>
                  <td>{t.nama}</td>
                  <td>{t.email}</td>
                  <td>{t.nohp}</td>
                  <td className="flex justify-center space-x-1">
                    <DetailTamu tamu={t} />
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
        </div>
      </div>
    </div>
  );
}
