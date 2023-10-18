"use client";
import Sad from "@/app/components/emoticon/Sad";
import Smile from "@/app/components/emoticon/Smile";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Cookies from "js-cookie";

export default function RekapPenilaian(props) {
  const router = useRouter();
  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      router.replace("/admin/login"); // If no token is found, redirect to login page
      return;
    }
  }, [router]);
  const { penilaian, count } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    let temp = [];
    penilaian.map((p, i) => {
      let obj = {};
      obj.no = i + 1;
      obj.penilaian = p.skor == 2 ? "Puas" : "Tidak Puas";
      obj.saran = p.saran;
      obj.tanggal = p.createdAt.toLocaleDateString("id-ID");

      temp.push(obj);
    });
    setData(temp);
  }, []);

  const columns = [
    {
      name: "No",
      selector: (row) => row.no,
      sortable: true,
    },
    {
      name: "Penilaian",
      selector: (row) => row.penilaian,
      sortable: true,
    },
    {
      name: "Saran",
      selector: (row) => row.saran,
      sortable: true,
      wrap: true,
    },
    {
      name: "Tanggal",
      selector: (row) => row.tanggal,
    },
  ];

  return (
    <div className="flex items-center justify-center flex-col m-4 w-full h-full">
      <h1 className="text-2xl font-bold"> Rekap Penilaian </h1>
      <div className="flex items-center justify-center">
        <div className="stats shadow m-4">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <Sad width="48px" height="48px" color="red" />
            </div>
            <div className="stat-title">Tidak Puas</div>
            <div className="stat-value">{count[0]._count.id}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <Smile width="48px" height="48px" color="green" />
            </div>
            <div className="stat-title">Puas</div>
            <div className="stat-value">{count[1]._count.id}</div>
          </div>
        </div>
      </div>
      <div className="card w-11/12 bg-base-100 shadow-xl rounded-lg mt-8 mb-20 mx-4">
        <div className="card-body">
          <DataTable columns={columns} data={data} pagination />;
        </div>
      </div>
    </div>
  );
}
