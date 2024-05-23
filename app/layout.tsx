import type { Metadata } from "next";
import { Inknut_Antiqua } from "next/font/google";
import "./globals.css";
import Header from "./components/heaader/Header";

const inknut_antiqua = Inknut_Antiqua({
  subsets: ["latin"],
  weight: ["300", "500"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inknut_antiqua.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
