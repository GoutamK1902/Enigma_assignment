import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Roboto, Bebas_Neue, Montserrat } from "next/font/google";

// import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const cormorantGaramond = Cormorant_Garamond({ subsets: ["cyrillic-ext"], weight: ['700', '500'], variable: "--font-cormorantGaramond" })
const roboto = Roboto({ subsets: ["latin-ext"], weight: ['500', '300'], variable: "--font-roboto" });
const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: ["400"], variable: "--font-bebas" })
const montserrat = Montserrat({ subsets: ['cyrillic'], weight: ['500', '100', '200', '300', '400', '600', "700", "800", "900"], variable: "--font-mont" })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${cormorantGaramond.variable} ${roboto.variable} ${bebasNeue.variable} ${montserrat.variable} scrollbar-hide`}>

        {children}
      </body>
    </html>
  );
}
