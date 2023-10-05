"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function FormPenilaian() {
  const [skor, setSkor] = useState("");
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
        setSkor("");
        setSaran("");
        router.refresh();
      });
  };
  return (
    <div className="flex items-center justify-center flex-col w-full">
      <h1 className="text-xl font-bold">Penilaian</h1>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="rating rating-lg flex items-center justify-center">
          <input
            type="radio"
            name="skor"
            className="mask mask-star-2 bg-orange-400"
            value={1}
            checked={skor == 1}
            onChange={(e) => setSkor(e.target.value)}
          />
          <input
            type="radio"
            name="skor"
            className="mask mask-star-2 bg-orange-400"
            checked={skor == 2}
            onChange={(e) => setSkor(e.target.value)}
            value={2}
          />
          <input
            type="radio"
            name="skor"
            className="mask mask-star-2 bg-orange-400"
            checked={skor == 3}
            onChange={(e) => setSkor(e.target.value)}
            value={3}
          />
          <input
            type="radio"
            name="skor"
            className="mask mask-star-2 bg-orange-400"
            checked={skor == 4}
            onChange={(e) => setSkor(e.target.value)}
            value={4}
          />
          <input
            type="radio"
            name="skor"
            className="mask mask-star-2 bg-orange-400"
            value={5}
            checked={skor == 5}
            onChange={(e) => setSkor(e.target.value)}
          />
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
          {!isLoading ? (
            <button type="submit" className="btn btn-block btn-primary">
              Simpan
            </button>
          ) : (
            <button type="button" className="btn btn-block loading">
              Menyimpan...
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
