"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const UpdateTamu = (props) => {
  const {
    tamu,
    pendidikan,
    pekerjaan,
    instansi,
    pemanfaatan,
    layanan,
    fasilitas,
  } = props;
  const [nama, setNama] = useState(tamu.nama);
  const [tahunlahir, setTahunLahir] = useState(tamu.tahunlahir);
  const [email, setEmail] = useState(tamu.email);
  const [nohp, setNoHp] = useState(tamu.nohp);
  const [jk, setJK] = useState(tamu.jk);
  const [pt, setPendidikan] = useState(tamu.pt);
  const [pu, setPekerjaan] = useState(tamu.pu);
  const [namains, setInstansi] = useState(tamu.namains);
  const [ki, setKategoriInstansi] = useState(tamu.ki);
  const [dd, setPemanfaatan] = useState(tamu.dd);
  const [jl, setLayanan] = useState(tamu.jl);
  const [fk, setFasilitas] = useState(tamu.fk);
  const [kebutuhan, setKebutuhan] = useState(tamu.kebutuhan);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await axios.patch(`/api/tamu/${tamu.id}`, {
      nama,
      tahunlahir,
      email,
      nohp,
      jk,
      pt,
      pu,
      namains,
      ki,
      dd,
      jl,
      fk,
      kebutuhan,
    });
    setIsLoading(false);
    router.refresh();
    setIsOpen(false);
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="btn btn-warning" onClick={handleModal}>
        <span className="text-gray-800">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </span>
      </button>

      <div className={isOpen ? "modal modal-open rounded-lg" : "modal"}>
        <div className="modal-box w-11/12 max-w-5xl">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={handleModal}
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">Update {tamu.nama}</h3>
          <form onSubmit={handleUpdate}>
            <div>
              <label className="label">
                <span className="text-base label-text">
                  Nama Lengkap <sup className="text-error">*</sup>
                </span>
              </label>
              <input
                type="text"
                placeholder="Nama Lengkap"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
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
                value={tahunlahir}
                onChange={(e) => setTahunLahir(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={nohp}
                onChange={(e) => setNoHp(e.target.value)}
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
                    className="radio checked:bg-blue-500"
                    value={"PRIA"}
                    checked={jk == "PRIA"}
                    onChange={(e) => setJK(e.target.value)}
                  />
                </label>
                <label className="label cursor-pointer">
                  <span className="label-text mx-2">Perempuan</span>
                  <input
                    type="radio"
                    name="jk"
                    className="radio checked:bg-pink-400"
                    value={"WANITA"}
                    checked={jk == "WANITA"}
                    onChange={(e) => setJK(e.target.value)}
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
                className="select select-primary w-full"
                value={pt}
                onChange={(e) => setPendidikan(e.target.value)}
              >
                <option value="" disabled>
                  === Pilih Pendidikan Terakhir ===
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
                className="select select-primary w-full"
                value={pu}
                onChange={(e) => setPekerjaan(e.target.value)}
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
                className="select select-primary w-full"
                value={ki}
                onChange={(e) => setKategoriInstansi(e.target.value)}
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
              <p className="text-xs">
                Contoh: Dinas Komunikasi dan Informatika Kota Jambi; Universitas
                Jambi
              </p>
              <input
                type="text"
                placeholder="Isikan nama instansi anda"
                value={namains}
                onChange={(e) => setInstansi(e.target.value)}
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
                className="select select-primary w-full"
                value={dd}
                onChange={(e) => setPemanfaatan(e.target.value)}
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
                className="select select-primary w-full"
                value={jl}
                onChange={(e) => setLayanan(e.target.value)}
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
                className="select select-primary w-full"
                value={fk}
                onChange={(e) => setFasilitas(e.target.value)}
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
              <p className="text-xs">
                Contoh: Permintaan data PDRB Kota Jambi ADHK Menurut Lapangan
                Usaha Tahun 2020-2021 & Inflasi Kota Jambi Tahun 2022
              </p>
              <textarea
                className="textarea textarea-primary w-full"
                placeholder="Tulis Dengan Lengkap"
                value={kebutuhan}
                onChange={(e) => setKebutuhan(e.target.value)}
              ></textarea>
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleModal}>
                Close
              </button>
              {!isLoading ? (
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Updating...
                </button>
              )}
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={handleModal}>close</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTamu;
