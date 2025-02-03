import { Silkscreen } from "next/font/google";
import "./globals.css";

const silkscreen = Silkscreen({
  weight: '400',
  variable: "--font-silkscreen",
  subsets: ["latin"],
});

export const metadata = {
  title: "Scrapyard Victoria - Build stupid s#!t, get stupid prizes",
  description: "Coming March 15th, Scrapyard victoria will be an in-person hackathon where participants will be challenged to build stupid s#!t and get stupid prizes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${silkscreen.variable}`}>
        {children}
      </body>
    </html>
  );
}
