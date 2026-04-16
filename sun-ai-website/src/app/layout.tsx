import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sun AI",
  description: "Intelligence for everything. Explore Sun AI products including Sun One, Sun Pro, Sun Watch, Sun Vision, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {/* Announcement Banner */}
        <div className="announcement-banner mt-11">
          Get up to $600 in credit toward Sun One when you trade in a qualifying device.{" "}
          <a href="/store">Shop Sun One &gt;</a>
        </div>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
