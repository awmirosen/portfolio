import { NAV_ITEMS as items } from "./constants";
import Link from "next/link";

export const MenuItems = () => {
  return (
    <>
      {items.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </>
  );
};
