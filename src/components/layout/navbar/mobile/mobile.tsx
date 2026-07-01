"use client";

import { useState } from "react";
import { Toggle } from "./toggle";
import { MenuIcon } from "lucide-react";
import Panel from "./panel";
import { AnimatePresence } from "motion/react";

const Mobile = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Toggle toggleFunc={() => setOpen(!open)} icon={<MenuIcon size={18} />} />
      <AnimatePresence>
        {open && <Panel onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Mobile;
