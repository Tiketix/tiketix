import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-WorkSans",
  subsets: ["latin"],
  weight: ["300", "400", "500"]
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
      </body>
    </html>
  );
}