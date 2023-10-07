import "../public/fonts/font.css";
import TanstackProvider from "./components/providers/TanstackProvider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "بهین کار",
  description: "بهترین کار را در کمترین زمان پیدا کن",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={inter.className}>
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
