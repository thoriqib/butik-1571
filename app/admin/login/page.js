"use client";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
  {
    name: "Aksi",
    selector: (row) => row.action,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
    action: <button className="btn btn-info">View</button>,
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
    action: <button className="btn btn-warning">Edit</button>,
  },
];

export default function MyComponent() {
  return <DataTable columns={columns} data={data} />;
}
