"use client";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter;
  return (
    <nav className="navbar bg-base-100 shadow-xl">
      <div className="navbar-start">
        <Link className="normal-case text-xl" href="/">
          <Image
            src="/BPS.png"
            alt="Logo BPS"
            width={100}
            height={100}
            className="mx-4"
          />
          <p className="text-black font-semibold md:hidden">BUTIK BPS 1571</p>
        </Link>
        <p className="text-black font-semibold hidden md:flex my-1">
          BUTIK BPS 1571
        </p>
      </div>
      <div className="hidden navbar-end md:flex">
        <ul className="menu menu-horizontal px-1 text-black">
          <li className="z-10">
            <details>
              <summary>Rekap</summary>
              <ul className="p-2 bg-base-100">
                <li className="text-black">
                  <Link href="/admin/rekap">Rekap Tamu</Link>
                </li>
                <li className="text-black">
                  <Link href="/admin/penilaian">Rekap Penilaian</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/penilaian">Penilaian</Link>
          </li>
          <li>
            <Link href="/admin/daftar">Daftar Tamu</Link>
          </li>
          <li>
            <button
              onClick={(e) => {
                Cookies.remove("token");
                router.push("/admin/login");
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
      <div className="navbar-end dropdown md:hidden">
        <label tabIndex={0} className="btn btn-ghost md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="white"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link href="/penilaian">Penilaian</Link>
          </li>
          <li>
            <a>Rekap</a>
            <ul className="p-2">
              <li className="text-black">
                <Link href="/admin/rekap">Rekap Tamu</Link>
              </li>
              <li className="text-black">
                <Link href="/admin/rekap/penilaian">Rekap Penilaian</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/admin/daftar">Daftar Tamu</Link>
          </li>
          <li>
            <button
              onClick={(e) => {
                Cookies.remove("token");
                router.push("/admin/login");
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
