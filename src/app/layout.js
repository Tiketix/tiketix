import { Work_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar/page.jsx";
import style from "./components/NavBar/nav.module.css";
import Link from 'next/link';





const workSans = Work_Sans({
  variable: "--font-WorkSans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});

export const metadata = {
  title: "TICKETIX",
  description: "One stop event solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={workSans.variable}>
          {children}
        <footer>  

        </footer>
      </body>
    </html>
  );
}