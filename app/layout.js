import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "BUTIK BPS 1571",
  description: "Buku Tamu Elektronik BPS Kota Jambi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="corporate">
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
