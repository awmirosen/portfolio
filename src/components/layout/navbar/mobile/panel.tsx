"use client";

import Container from "@/components/layout/container";
import { motion } from "motion/react";
import { slideFromRight } from "@/lib/motion";
import { Toggle } from "./toggle";
import { X } from "lucide-react";
import { Menu } from "./menu";
import ToggleTheme from "@/components/layout/navbar/toggle-theme";

type PanelType = {
  onClose: () => void;
};

const Panel = ({ onClose }: PanelType) => {
  return (
    <motion.div {...slideFromRight} className="fixed inset-0 backdrop-blur-lg">
      <Container className="py-3 px-2! flex flex-col items-center h-full">
        {/* Toggle */}
        <div className="h-1/6 pt-2" dir="rtl">
          <Toggle icon={<X size={18} />} toggleFunc={onClose} />
        </div>
        {/* Menu */}
        <div className="h-4/6 flex text-center">
          <Menu />
        </div>
        {/* ThemeToggle */}
        <div className="h-1/6 flex items-center justify-center">
          <ToggleTheme />
        </div>
      </Container>
    </motion.div>
  );
};

export default Panel;
