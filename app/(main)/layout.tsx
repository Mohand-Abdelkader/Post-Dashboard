import type { Metadata } from "next";
import "@/app/globals.css";
import { ReactQueryProvider } from "@/lib/react-query-provider";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Post Dashboard App",
  description: "Frontend Developer Technical Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <Navbar />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <Footer />
    </ReactQueryProvider>
  );
}
