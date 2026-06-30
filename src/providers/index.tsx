"use client";

import { ThemeProvider } from "./theme-provider";
import type { PropsWithChildren } from "react";

const Providers = ({ children }: PropsWithChildren) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
