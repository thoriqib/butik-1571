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
        Detail
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
