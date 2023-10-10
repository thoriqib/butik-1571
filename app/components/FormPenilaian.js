"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Sad from "./emoticon/Sad";
import Smile from "./emoticon/Smile";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormPenilaian() {
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [skor, setSkor] = useState(0);
  const [saran, setSaran] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("/api/penilaian", {
        skor,
        saran,
      })
      .then((response) => {
        setIsLoading(false);
        setSkor(0);
        setSaran("");
        // router.push("/penilaian?status=success&message=mantap");
        // Menampilkan notifikasi sukses
        toast.success("Penilaian berhasil disimpan!", {
          position: toast.POSITION.TOP_RIGHT, // Posisi notifikasi
          autoClose: 5000, // Durasi notifikasi dalam milidetik (3 detik)
        });
      })
      .catch((error) => {
        toast.error("Terjadi kesalahan saat menyimpan data.");
      });
  };
  // if (router.query.status != undefined) setStatus(router.query.status);
  // if (router.query.message != undefined) setMessage(router.query.message);
  return (
    <div className="flex items-center justify-center flex-col w-full">
      <p>{status}</p>
      <h1 className="text-2xl font-bold">
        Terima Kasih Telah Mengunjungi BPS Kota Jambi
      </h1>
      <h1 className="text-xl">
        Bantu Kami Menjadi Lebih Baik Dengan Memberikan Penilaian, Kritik dan
        Saran
      </h1>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="rating rating-lg flex items-center justify-center m-4">
          <div className="flex flex-row items-center">
            <div
              className="flex flex-col items-center justify-center cursor-pointer mx-2"
              onClick={(e) => setSkor(1)}
            >
              {skor == 1 ? (
                <Sad width="100px" height="100px" color="red" />
              ) : (
                <Sad width="100px" height="100px" color="grey" />
              )}
              <p>Tidak Puas</p>
            </div>
            <div
              className="flex flex-col items-center justify-center cursor-pointer mx-2"
              onClick={(e) => setSkor(2)}
            >
              {skor == 2 ? (
                <Smile width="100px" height="100px" color="green" />
              ) : (
                <Smile width="100px" height="100px" color="grey" />
              )}
              <p>Puas</p>
            </div>
          </div>
        </div>
        <div className="form-control mx-8">
          <label className="label">
            <span className="label-text">Kritik & Saran</span>
          </label>
          <textarea
            className="textarea textarea-primary textarea-lg w-full"
            placeholder="Kritik & Saran"
            value={saran}
            onChange={(e) => setSaran(e.target.value)}
          ></textarea>
        </div>
        <div className="mx-8 my-4">
          {skor != 0 ? (
            !isLoading ? (
              <button type="submit" className="btn btn-block btn-primary">
                Simpan
              </button>
            ) : (
              <button type="button" className="btn btn-block">
                <span className="loading loading-spinner"></span>
                Menyimpan...
              </button>
            )
          ) : (
            <button className="btn btn-block" disabled="disabled">
              Simpan
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
