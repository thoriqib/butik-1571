"use client";
import Link from "next/link";
import { useState } from "react";

const DetailTamu = (props) => {
  const { tamu } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="btn btn-info" onClick={handleModal}>
        <span className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              className="text-md"
              ath
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              className="text-md"
              ath
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </span>
      </button>

      <div
        className={
          isOpen
            ? "modal modal-open overflow-y-auto overflow-x-auto rounded-lg"
            : "modal"
        }
      >
        <div className="modal-box w-full max-w-5xl max-h-max m-auto">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={handleModal}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-xl">{tamu.nama}</h3>

          <div className="w-full p-2">
            <div className="m-4">
              <h4 className="font-semibold text-lg">Tahun Lahir</h4>
              <p className="text-md">{tamu.tahunlahir}</p>
            </div>
            <div className="m-4">
              <h4 className="font-semibold text-lg">Email</h4>
              <p className="text-md">{tamu.email}</p>
            </div>
            <div className="m-4">
              <h4 className="font-semibold text-lg">No HP</h4>
              <p className="text-md">{tamu.nohp}</p>
            </div>
            <div className="m-4">
              <h4 className="font-semibold text-lg">Jenis Kelamin</h4>
              <p className="text-md">
                {tamu.jk == "PRIA" ? "Laki-Laki" : "Perempuan"}
              </p>
            </div>
            <div className="m-4">
              <h4 className="font-semibold text-lg">Pendidikan Terakhir</h4>
              <p className="text-md">{tamu.Pendidikan.pendidikan}</p>
            </div>
            <div className="m-4">
              <h4 className="font-semibold text-lg">Pekerjaan Utama</h4>
              <p className="text-md">{tamu.Pekerjaan.pekerjaan}</p>
            </div>
            <div className="m-4">
              <h4 className="font-semibold text-lg">Kategori Insansi</h4>
              <p className="text-md">{tamu.Instansi.instansi}</p>
            </div>
            <div className="m-4">
              <h4 className="font-semibold text-lg">Nama Instansi</h4>
              <p className="text-md">{tamu.namains}</p>
            </div>
            <div className="m-4">
              <h4 className="font-semibold text-lg">Pemanfaatan Data</h4>
              <p className="text-md">{tamu.PemanfaatanData.data}</p>
            </div>
            <div className="m-4">
              <h4 className="font-semibold text-lg">Jenis Layanan</h4>
              <p className="text-md">{tamu.Layanan.nama}</p>
            </div>
            <div className="m-4">
              <h4 className="font-semibold text-lg">Fasilitas Utama</h4>
              <p className="text-md">{tamu.Fasilitas.fasilitas}</p>
            </div>
            <div className="m-4 w-full">
              <h4 className="font-semibold text-lg">Kebutuhan Kunjungan</h4>
              <p className="text-md break-normal">{tamu.kebutuhan}</p>
            </div>
            <div className="m-4">
              <h4 className="font-semibold text-lg">Surat Pengantar</h4>
              {tamu.surat ? (<Link className="btn btn-success text-white font-semibold"href={`${window.location.origin}/${tamu.surat}`} download target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg> 
                Unduh
              </Link>) : <p className="text-md">Tidak Tersedia</p>}
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={handleModal}>close</button>
        </form>
      </div>
    </div>
  );
};

export default DetailTamu;
