import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import ThemeProvider from "@/app/components/ThemeProvider";
import Footer from "./components/Footer";


export const metadata: Metadata = {
title: "Hilwa• Portofolio",
description: "Portofolio Next.js",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="id" suppressHydrationWarning>
<body>
<ThemeProvider>
<Navbar />
<main className="container">{children}</main>
</ThemeProvider>
<Footer />  
</body> 
</html>
);
}