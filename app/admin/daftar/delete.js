"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function DeleteTamu(props) {
  const { tamu } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleDelete = async (tamuId) => {
    setIsLoading(true);
    await axios.delete(`http://localhost:3000/api/tamu/${tamuId}`);
    setIsLoading(false);
    router.refresh();
    setIsOpen(false);
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="btn btn-error" onClick={handleModal}>
        Delete
      </button>

      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Apakah anda yakin ingin menghapus data {tamu.nama}?
          </h3>

          <div className="modal-action">
            <button type="button" className="btn" onClick={handleModal}>
              Tidak
            </button>
            {!isLoading ? (
              <button
                type="button"
                onClick={() => handleDelete(tamu.id)}
                className="btn btn-primary"
              >
                Ya
              </button>
            ) : (
              <button type="button" className="btn loading">
                Deleting...
              </button>
            )}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={handleModal}>close</button>
        </form>
      </div>
    </div>
  );
}
