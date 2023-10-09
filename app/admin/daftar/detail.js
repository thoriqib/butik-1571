"use client";
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
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </span>
      </button>

      <div className={isOpen ? "modal modal-open rounded-lg" : "modal"}>
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={handleModal}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg my-4">{tamu.nama}</h3>

          <table className="table">
            <tbody>
              <tr>
                <th>Tahun Lahir</th>
                <td>{tamu.tahunlahir}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{tamu.email}</td>
              </tr>
              <tr>
                <th>No HP</th>
                <td>{tamu.nohp}</td>
              </tr>
              <tr>
                <th>Jenis Kelamin</th>
                <td>{tamu.jk == "PRIA" ? "Laki-Laki" : "Perempuan"}</td>
              </tr>
              <tr>
                <th>Pendidikan Terakhir</th>
                <td>{tamu.Pendidikan.pendidikan}</td>
              </tr>
              <tr>
                <th>Pekerjaan Utama</th>
                <td>{tamu.Pekerjaan.pekerjaan}</td>
              </tr>
              <tr>
                <th>Kategori Insansi</th>
                <td>{tamu.Instansi.instansi}</td>
              </tr>
              <tr>
                <th>Nama Instansi</th>
                <td>{tamu.namains}</td>
              </tr>
              <tr>
                <th>Pemanfaatan Data</th>
                <td>{tamu.PemanfaatanData.data}</td>
              </tr>
              <tr>
                <th>Jenis Layanan</th>
                <td>{tamu.Layanan.nama}</td>
              </tr>
              <tr>
                <th>Fasilitas Utama</th>
                <td>{tamu.Fasilitas.fasilitas}</td>
              </tr>
              <tr>
                <th>Kebutuhan Kunjungan</th>
                <td>{tamu.kebutuhan}</td>
              </tr>
              <tr>
                <th>Surat Pengantar</th>
                <td>Ini Surat</td>
              </tr>
            </tbody>
          </table>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={handleModal}>close</button>
        </form>
      </div>
    </div>
  );
};

export default DetailTamu;
