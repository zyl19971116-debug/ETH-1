import type { Metadata } from "next";
import { Space_Grotesk, Roboto_Mono, Syncopate } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { WagmiConfigProvider } from "@/context/WagmiProvider";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"] 
});

const syncopate = Syncopate({
  subsets: ["latin"],
  variable: "--font-syncopate",
  weight: ["400", "700"]
});

const robotoMono = Roboto_Mono({ 
  subsets: ["latin"], 
  variable: "--font-roboto-mono" 
});

export const metadata: Metadata = {
  title: "HUMAN//ONE | ONE MIND. MILLIONS OF HUMANS.",
  description: "A collective AI personality shaped by humanity. Contribute your memory, fear, love, and dreams.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className={`${spaceGrotesk.variable} ${syncopate.variable} ${robotoMono.variable} font-sans selection:bg-white selection:text-black`}>
        <WagmiConfigProvider>
          <div className="noise" />
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </WagmiConfigProvider>
      </body>
    </html>
  );
}
