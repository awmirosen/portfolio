"use client";

import Link from "next/link";
import { DOCK_LINKS as items } from "./constants";
import { usePathname } from "next/navigation";

const Items = () => {
  const path = usePathname();
  return (
    <>
      {items.map((item) => (
        <Link
          href={item.href}
          key={item.href}
          className={`p-2 rounded-full transition-all duration-400 ${path === item.href && "bg-primary text-secondary scale-110"}`}
        >
          <li>{<item.icon size={18} />}</li>
        </Link>
      ))}
    </>
  );
};

export default Items;
