"use client";

import { useState } from "react";
import { Toggle } from "./toggle";
import { MenuIcon } from "lucide-react";
import Panel from "./panel";

const Mobile = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Toggle toggleFunc={() => setOpen(!open)} icon={<MenuIcon size={20} />} />

      {open && <Panel onClose={() => setOpen(false)} />}
    </>
  );
};

export default Mobile;
