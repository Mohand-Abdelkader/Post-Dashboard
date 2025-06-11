import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";

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
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-gray-50/50">
        <div className="min-h-screen bg-gray-50/50">
          <Header />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 p-6 lg:p-8">
              <div className="max-w-7xl mx-auto">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
