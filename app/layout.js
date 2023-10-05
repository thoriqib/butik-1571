import "./globals.css";
import Image from "next/image";
import Footer from "./components/Footer";

export const metadata = {
  title: "BUTIK BPS 1571",
  description: "Buku Tamu Elektronik BPS Kota Jambi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="corporate">
      <body
        className="flex flex-col min-h-screen"
        suppressHydrationWarning={true}
      >
        <nav className="navbar bg-base-100">
          <a className="normal-case text-xl" href="/">
            <Image src="/BPS.png" alt="Logo BPS" width={100} height={100} />{" "}
            BUTIK BPS 1571
          </a>
        </nav>
        {children}
        <Footer />
      </body>
    </html>
  );
}
