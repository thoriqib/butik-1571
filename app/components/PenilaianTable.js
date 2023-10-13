"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import DataTable from "react-data-table-component";
export default function PenilaianTable(props) {
  const router = useRouter();
  const token = Cookies.get("token");
  if (!token) {
    router.replace("/admin/login"); // If no token is found, redirect to login page
    return;
  }

  const columns = [
    {
      name: "No",
      selector: (row) => row.no,
      sortable: true,
      grow: 1,
    },
    {
      name: "Penilaian",
      selector: (row) => row.penilaian,
      sortable: true,
      grow: 2,
    },
    {
      name: "Saran",
      selector: (row) => row.saran,
      sortable: true,
      wrap: true,
      grow: 4,
    },
    {
      name: "Tanggal",
      selector: (row) => row.tanggal,
      grow: 2,
    },
  ];
  const { data } = props;
  return <DataTable columns={columns} data={data} pagination />;
}
