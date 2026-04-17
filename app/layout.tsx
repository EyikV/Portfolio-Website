import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Cursor from "@/app/components/Cursor/Cursor";
import { LanguageProvider } from "./context/LanguageContext";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Erik Vas - Portfolio",
    description: "Portfolio website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${montserrat.variable} `}>
            <body>
                <Cursor />
                <LanguageProvider>{children}</LanguageProvider>
            </body>
        </html>
    );
}
