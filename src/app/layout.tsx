import type { Metadata } from "next";
import Navbar from "./navbar";
import { Inter } from "next/font/google";
import { Quicksand } from "next/font/google";
import Footer from "./footer";
import "./globals.css";
import { quicksand } from "./ui/fonts";
import { ContextComp } from "./context/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zet Foundation",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/png" sizes="any" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>

      <body className={`${quicksand.className} `}>
        <ContextComp>
          <section>
            <Navbar />
            <div className="bg-whiteBg">{children}</div>
            <Footer />
          </section>
        </ContextComp>
      </body>
    </html>
  );
}
