import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebare";

const font = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spotify-Clone",
  description:
    "Fullstack Training https://www.youtube.com/watch?v=2aeMRB8LL4o&t=202s",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.variable}
         antialiased`}
      >
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
