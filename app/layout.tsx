import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { fontVariables } from './components/fonts';


export const metadata: Metadata = {
  title: "MindSync",
  description: "Generated by Proglabs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontVariables.firaSans} antialiased`}
      >
        <div className="min-h-screen bg-zinc-900">

          {/* Main layout with flex to organize sidebar and content */}
          <div className=" flex">
            {/* Sidebar takes up some width */}
            <Sidebar />

            {/* Main content area including Navbar */}
            <div className="flex-1 flex flex-col">
              {/* Navbar should be at the top of the content area */}
              <Navbar />

              {/* Main content area */}
              <div className="p-4 ">

                {children}
              </div>
            </div>
          </div>
        </div>



      </body>
    </html>
  );
}
