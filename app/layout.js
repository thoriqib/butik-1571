import "./globals.css";
import Image from "next/image";
import Footer from "./components/Footer";
import Link from "next/link";

export const metadata = {
  title: "BUTIK BPS 1571",
  description: "Buku Tamu Elektronik BPS Kota Jambi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="corporate">
      <body suppressHydrationWarning={true}>
        <div className="navbar bg-primary">
          <div className="flex-1">
            <Link className="normal-case text-xl" href="/">
              <Image
                src="/BPS.png"
                alt="Logo BPS"
                width={100}
                height={100}
                className="mx-4"
              />
            </Link>
            <p className="text-white font-semibold">BUTIK BPS 1571</p>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 text-white ">
              <li>
                <Link href="/penilaian">Penilaian</Link>
              </li>
            </ul>
          </div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
