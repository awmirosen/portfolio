import Link from "next/link";
import { usePathname } from "next/navigation";
import { DockDataType } from "./type";

const DockItem = ({ href, icon: Icon, external = false }: DockDataType) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`flex p-2 hover:bg-primary/20 hover:scale-105 ${path === href && "bg-primary text-secondary hover:bg-primary!"}`}
      target={external ? "_blank" : undefined}
    >
      {<Icon size={20} />}
    </Link>
  );
};

export default DockItem;
