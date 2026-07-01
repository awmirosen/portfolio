"use client";
import { Button } from "@/components/ui/button";
import { ReactElement } from "react";

type ToggleType = {
  icon: ReactElement;
  toggleFunc: () => void;
};

export const Toggle = ({ toggleFunc, icon }: ToggleType) => {
  return (
    <Button size="sm" variant="secondary" onClick={toggleFunc}>
      {icon}
    </Button>
  );
};
