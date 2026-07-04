import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "@/providers/index";
import "@/styles/globals.css";
import Dock from "@/components/layout/dock";

export const metadata: Metadata = {
  title: "Awmirosen",
};

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="en"
      className={`${geist.className} ${geistMono.className}`}
      suppressHydrationWarning
    >
      <body className="min-h-full max-w-4xl mx-auto">
        <Providers>
          <Dock />
          {children}
        </Providers>
      </body>
    </html>
  );
};
export default RootLayout;
