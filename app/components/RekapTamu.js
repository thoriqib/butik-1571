"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import Cookies from "js-cookie";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function RekapTamu(props) {
  const router = useRouter();
  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      router.replace("/admin/login"); // If no token is found, redirect to login page
      return;
    }
  }, [router]);
  const { jkTamu, ptTamu, puTamu, countTamu } = props;
  const year = new Date().getFullYear();
  const date = new Date();
  const month = date.toLocaleString("id-ID", { month: "long" });
  const datajk = {
    labels: ["Laki-Laki", "Perempuan"],
    datasets: [
      {
        label: "Pengunjung",
        data: [jkTamu[0]._count.id, jkTamu[1]._count.id],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const datapt = {
    labels: ["<= SLTA/SEDERAJAT", "D1/D2/D3", "S1/D4", "S2", "S3"],
    datasets: [
      {
        label: "Pengunjung",
        data: [
          ptTamu[0]._count.id,
          ptTamu[1]._count.id,
          ptTamu[2]._count.id,
          ptTamu[3]._count.id,
          ptTamu[4]._count.id,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const datapu = {
    labels: [
      "Pelajar/Mahasiswa",
      "Peneliti/Dosen",
      "ASN/TNI/POLRI",
      "Pegawai BUMN/D",
      "Pegawai Swasta",
      "Wiraswasta",
    ],
    datasets: [
      {
        label: "Pengunjung",
        data: [
          puTamu[0]._count.id,
          puTamu[1]._count.id,
          puTamu[2]._count.id,
          puTamu[3]._count.id,
          puTamu[4]._count.id,
          puTamu[5]._count.id,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="flex flex-col items-center justify-center mb-20">
      <h1 className="text-3xl font-bold text-center">Jumlah Pengunjung</h1>
      <div className="stats stats-vertical lg:stats-horizontal shadow m-4">
        <div className="stat">
          <div className="stat-title">Tahun {year}</div>
          <div className="stat-value text-center">{countTamu[0]._count.id}</div>
        </div>

        <div className="stat">
          <div className="stat-title">
            Bulan {month} {year}
          </div>
          <div className="stat-value text-center">{countTamu[1]._count.id}</div>
        </div>

      </div>
      <h1 className="text-3xl font-bold text-center">Segmentasi Pengunjung</h1>
      <div className="flex flex-row items-center justify-center">
        <div className="card bg-base-100 shadow-xl m-4">
          <div className="card-body">
            <h2 className="card-title">Jenis Kelamin</h2>
            <Pie data={datajk} />;
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl m-4">
          <div className="card-body">
            <h2 className="card-title">Pendidikan Tertinggi</h2>
            <Pie data={datapt} />;
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl m-4">
          <div className="card-body">
            <h2 className="card-title">Pekerjaan Utama</h2>
            <Pie data={datapu} />;
          </div>
        </div>
      </div>
    </div>
  );
}
