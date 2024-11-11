import "./global.css";
import { Inter } from "next/font/google";

export const fontSans = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${fontSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
