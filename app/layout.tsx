import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/app/footer/footer";
import { Toaster } from "@/components/ui/toaster";
import GA from "@/components/GA";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <Head>
                <title>Proba: Transform your files for free, effortlessly!</title>
                <meta name="description" content="Discover Proba: your go-to online solution for hassle-free multimedia conversion." />
                <meta name="keywords" content="image converter, video converter, audio converter, unlimited image converter, unlimited video converter" />
                <meta name="google-site-verification" content="V8lmEvFOdYBlChgR6pYABBZBhI1EFnPb1YuxTTdHXMU" />
            </Head>
            <body className={inter.className}>
                {process.env.NODE_ENV === "production" && <GA GA_MEASUREMENT_ID="G-52GQ441X7H" />}
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem themes={["light", "dark"]}>
                    <Navbar />
                    <Toaster />
                    <div className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
                        {children}
                    </div>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
