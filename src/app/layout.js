import { Work sans } from "next/font/google";
import "./globals.css";


const workSans = WorkSans({
  variable: ["--font-WorkSans"],
  subsets: ["latin"],
  weight: ["300, 400, 500"]
});



export const metadata = {
  title: "TICKETIX",
  description: "One stop event solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
