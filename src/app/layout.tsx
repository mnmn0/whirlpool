import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from '@/app/_components/nav-bar/NavBar';
import SideBar from '@/app/_components/side-bar/SideBar';
import Provider from '@/provider/provider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "whirlpool",
  description: "progress management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div>
            <SideBar />
            <div className="sm:ml-64 min-h-svh">
              <NavBar />
              {children}
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
