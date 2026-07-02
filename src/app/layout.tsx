import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Providers from "@/providers/index";
import "@/styles/globals.css";
import Dock from "@/components/layout/dock";

export const metadata: Metadata = {
  title: "Awmirosen",
};

const geist = Geist({ subsets: ["latin"] });

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="en"
      className={`${geist.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <Providers>
          <Dock />
          {children}
        </Providers>
      </body>
    </html>
  );
};
export default RootLayout;
