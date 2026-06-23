import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CustomCursor from "@/components/ui/CustomCursor";
import CosmicLoader from "@/components/ui/CosmicLoader"; // Added
import "./globals.css";
import Scene from "@/components/canvas/Scene";
import PrakritiMesh from "@/components/canvas/PrakritiMesh";
import AsciiEffect from "@/components/canvas/AsciiEffect";
import SamkhyaNavbar from "@/components/ui/Navbar";
import SamkhyaFooter from "@/components/ui/SamkhyaFooter";

const geistSans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samkhya Philosophy",
  description: "A spatial interactive exploration of dualistic cosmology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased lg:cursor-none`}
      >
        <CosmicLoader />
        <SamkhyaNavbar />
        <Scene>
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} intensity={2} />
          <PrakritiMesh />
          <AsciiEffect characters=" .:-=+*#%@" />
        </Scene>
        <CustomCursor />
        {children}
        <SamkhyaFooter />
      </body>
    </html>
  );
}
