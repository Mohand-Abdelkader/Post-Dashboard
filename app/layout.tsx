/*
this file is a work around for not-found bug for next js with group route 
as next js does not support group route with not-found page (bug)
so to make it work the not-found page must be in the root dir, and it must have layout beside it 
*/
import "@/app/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
