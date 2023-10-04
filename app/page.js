import { PrismaClient } from "@prisma/client";

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
          <form className="space-y-4">
            <div>
              <label className="label">
                <span className="text-base label-text">
                  Nama Lengkap <sup className="text-error">*</sup>
                </span>
              </label>
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full input input-bordered input-primary"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">
                  Tahun Lahir <sup className="text-error">*</sup>
                </span>
              </label>
              <input
                type="number"
                placeholder="Tahun Lahir"
                className="w-full input input-bordered input-primary"
                min={1900}
                max={new Date().getFullYear()}
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email Address"
                className="w-full input input-bordered input-primary"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">
                  Nomor HP <sup className="text-error">*</sup>
                </span>
              </label>
              <input
                type="text"
                placeholder="Nomor HP"
                className="w-full input input-bordered input-primary"
              />
            </div>
            <div className="flex flex-col">
              <label className="label">
                <span className="text-base label-text">
                  Jenis Kelamin <sup className="text-error">*</sup>
                </span>
              </label>
              <div className="form-control flex flex-row">
                <label className="label cursor-pointer">
                  <span className="label-text mr-2">Laki-Laki</span>
                  <input
                    type="radio"
                    name="jk"
                    className="radio checked:bg-red-500"
                  />
                </label>
                <label className="label cursor-pointer">
                  <span className="label-text mx-2">Perempuan</span>
                  <input
                    type="radio"
                    name="jk"
                    className="radio checked:bg-blue-500"
                  />
                </label>
              </div>
            </div>
            <div>
              <label className="label">
                <span className="label-text text-base">
                  Pendidikan Terakhir <sup className="text-error">*</sup>
                </span>
              </label>
              <select
                className="select select-primary w-full max-w-xs"
                defaultValue={""}
              >
                <option value="" disabled>
                  === Pilih Pilih Pendidikan Terakhir ===
                </option>
                {pendidikan.map((p) => (
                  <option value={p.id} key={p.id}>
                    {p.pendidikan}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text text-base">
                  Pekerjaan Utama <sup className="text-error">*</sup>
                </span>
              </label>
              <select
                className="select select-primary w-full max-w-xs"
                defaultValue={""}
              >
                <option value="" disabled>
                  === Pilih Pekerjaan Utama ===
                </option>
                {pekerjaan.map((p) => (
                  <option value={p.id} key={p.id}>
                    {p.pekerjaan}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text text-base">
                  Kategori Instansi <sup className="text-error">*</sup>
                </span>
              </label>
              <select
                className="select select-primary w-full max-w-xs"
                defaultValue={""}
              >
                <option value="" disabled>
                  === Pilih Kategori Instansi ===
                </option>
                {instansi.map((p) => (
                  <option value={p.id} key={p.id}>
                    {p.instansi}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">
                  Nama Instansi <sup className="text-error">*</sup>
                </span>
              </label>
              <input
                type="text"
                placeholder="Nama Instansi"
                className="w-full input input-bordered input-primary"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-base">
                  Pemanfaatan Data <sup className="text-error">*</sup>
                </span>
              </label>
              <select
                className="select select-primary w-full max-w-xs"
                defaultValue={""}
              >
                <option value="" disabled>
                  === Pilih Pemanfaatan Data ===
                </option>
                {pemanfaatan.map((p) => (
                  <option value={p.id} key={p.id}>
                    {p.data}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text text-base">
                  Jenis Layanan <sup className="text-error">*</sup>
                </span>
              </label>
              <select
                className="select select-primary w-full max-w-xs"
                defaultValue={""}
              >
                <option value="" disabled>
                  === Pilih Jenis Layanan ===
                </option>
                {layanan.map((p) => (
                  <option value={p.id} key={p.id}>
                    {p.nama}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text text-base">
                  Fasilitas Utama <sup className="text-error">*</sup>
                </span>
              </label>
              <select
                className="select select-primary w-full max-w-xs"
                defaultValue={""}
              >
                <option value="" disabled>
                  === Pilih Fasilitas Utama ===
                </option>
                {fasilitas.map((p) => (
                  <option value={p.id} key={p.id}>
                    {p.fasilitas}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text text-base">
                  Deskripsi Kebutuhan <sup className="text-error">*</sup>
                </span>
              </label>
              <textarea
                className="textarea textarea-primary w-full"
                placeholder="Deskripsi Kebutuhan"
              ></textarea>
            </div>
            <div>
              <button className="btn btn-block btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
