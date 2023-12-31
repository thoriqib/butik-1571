"use client";
import UpdateTamu from "../admin/daftar/update";
import DeleteTamu from "../admin/daftar/delete";
import DetailTamu from "../admin/daftar/detail";
import DataTable from "react-data-table-component";
import { useEffect, useMemo, useState } from "react";
import FilterComponent from "./FilterComponent";
import { useRouter } from "next/navigation";

const DaftarTamu = (props) => {
  const router = useRouter();
  const {
    pendidikan,
    pekerjaan,
    instansi,
    pemanfaatan,
    layanan,
    fasilitas,
  } = props;

  const [data, setData] = useState(null);
  const [pending, setPending] = useState(true);
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const filteredItems =
    data == null
      ? data
      : data.filter(
          (item) =>
            JSON.stringify(item)
              .toLowerCase()
              .indexOf(filterText.toLowerCase()) !== -1
        );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  const columns = [
    {
      name: "No",
      selector: (row) => row.no,
      sortable: true,
      grow: 1,
    },
    {
      name: "Nama",
      selector: (row) => row.nama,
      sortable: true,
      grow: 2,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      grow: 2,
    },
    {
      name: "No HP",
      selector: (row) => row.nohp,
      grow: 2,
    },
    {
      name: "Tanggal Kunjungan",
      selector: (row) => row.createdAt,
      grow: 2,
    },
    {
      name: "Aksi",
      selector: (row) => row.action,
      grow: 3,
    },
  ];

  useEffect(() => {
    let temp = [];
    const handleDaftar = async () => {
      const response = await fetch(`/api/tamu`);
      const tamu = await response.json();
      tamu.map((t, i) => {
        let obj = {
          no: i + 1,
          nama: t.nama,
          email: t.email,
          nohp: t.nohp,
          createdAt: new Date(t.createdAt).toLocaleString("id-ID"),
          action: (
            <td className="flex justify-center space-x-1">
              <DetailTamu tamu={t} />
              <UpdateTamu
                tamu={t}
                pendidikan={pendidikan}
                pekerjaan={pekerjaan}
                instansi={instansi}
                pemanfaatan={pemanfaatan}
                layanan={layanan}
                fasilitas={fasilitas}
              />
              <DeleteTamu tamu={t} />
            </td>
          ),
        };
        temp.push(obj);
      });
      setData(temp);
      setPending(false);
    }
    handleDaftar();
  }, []);

  return (
    <div className="card w-11/12 bg-base-100 shadow-xl rounded-lg mt-8 mb-20 mx-4">
      <div className="card-body">
        <h2 className="card-title text-center">
          Daftar Pengunjung BPS Kota Jambi
        </h2>
        {data && (
          <DataTable
            columns={columns}
            data={filteredItems}
            progressPending={pending}
            paginationResetDefaultPage={resetPaginationToggle}
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            pagination
            persistTableHead
          />
        )}
      </div>
    </div>
  );
};

export default DaftarTamu;
