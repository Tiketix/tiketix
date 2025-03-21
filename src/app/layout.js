import { Work_Sans } from "next/font/google";
import "./globals.css";


const workSans = Work_Sans({
  variable: "--font-WorkSans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});

export const metadata = {
  title: "TICKETIX",
  description: "One stop event solutions",
  icons: {
    icon: "/Favicon/favicon.ico",
  },
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