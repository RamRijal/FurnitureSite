'use client';

import { Inter } from "next/font/google";
import Footer from "../components/footer/page";
import NavBar from "../components/navbar/page";
import "./globals.css";
import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Loader } from "@/UI/Loader";

const inter = Inter({ subsets: ["latin"] });

const LOADING_DELAY = 300; // Extracted as a constant for easier maintenance

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const currentPath = usePathname();

  const startLoading = useCallback(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, LOADING_DELAY);

    return timer;
  }, []);

  useEffect(() => {
    const timer = startLoading();

    // Cleanup timer on unmount or when path changes
    return () => clearTimeout(timer);
  }, [currentPath, startLoading]);

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NavBar />
        <main className=" relative">
          {isLoading ? (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
              <Loader />
            </div>
          ) : (
            children
          )}
        </main>
        <Footer />
      </body>
    </html>
  );
}