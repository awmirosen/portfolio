"use client";

import type { PropsWithChildren } from "react";

import { ThemeProvider } from "./theme-provider";
import { LenisProvider } from "./lenis-provider";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <LenisProvider>{children}</LenisProvider>
    </ThemeProvider>
  );
};

export default Providers;
