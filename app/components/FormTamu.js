"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function FormTamu(props) {
  const [nama, setNama] = useState("");
  const [tahunlahir, setTahunLahir] = useState("");
  const [email, setEmail] = useState("");
  const [nohp, setNoHp] = useState("");
  const [jk, setJK] = useState("");
  const [pt, setPendidikan] = useState("");
  const [pu, setPekerjaan] = useState("");
  const [namains, setInstansi] = useState("");
  const [ki, setKategoriInstansi] = useState("");
  const [dd, setPemanfaatan] = useState("");
  const [jl, setLayanan] = useState("");
  const [fk, setFasilitas] = useState("");
  const [kebutuhan, setKebutuhan] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await axios.post("/api/tamu", {
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
    setNama("");
    setTahunLahir("");
    setEmail("");
    setNoHp("");
    setJK("");
    setPendidikan("");
    setPekerjaan("");
    setPemanfaatan("");
    setKategoriInstansi("");
    setInstansi("");
    setLayanan("");
    setFasilitas("");
    setKebutuhan("");
    router.refresh();
  };

  const { pendidikan, pekerjaan, instansi, pemanfaatan, layanan, fasilitas } =
    props;
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
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
          className="select select-primary w-full max-w-xs"
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
          className="select select-primary w-full max-w-xs"
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
          className="select select-primary w-full max-w-xs"
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
          Contoh: Dinas Komunikasi dan Informatika Kota Jambi; Universitas Jambi
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
          className="select select-primary w-full max-w-xs"
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
          className="select select-primary w-full max-w-xs"
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
          className="select select-primary w-full max-w-xs"
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
          Contoh: Permintaan data PDRB Kota Jambi ADHK Menurut Lapangan Usaha
          Tahun 2020-2021 & Inflasi Kota Jambi Tahun 2022
        </p>
        <textarea
          className="textarea textarea-primary w-full"
          placeholder="Tulis Dengan Lengkap"
          value={kebutuhan}
          onChange={(e) => setKebutuhan(e.target.value)}
        ></textarea>
      </div>
      <div>
        {!isLoading ? (
          <button type="submit" className="btn btn-block btn-primary">
            Simpan
          </button>
        ) : (
          <button type="button" className="btn btn-block loading">
            Menyimpan...
          </button>
        )}
      </div>
    </form>
  );
}
