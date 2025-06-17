import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/page";

export const metadata: Metadata = {
  title: "DKTECHIN",
  description: "DKTECHIN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main className="pt-[80px]">{children}</main>
      </body>
    </html>
  );
}
