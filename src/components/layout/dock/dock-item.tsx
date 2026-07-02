import Link from "next/link";
import { usePathname } from "next/navigation";

type DockItemType = {
  href: string;
  icon: React.ElementType;
  label: string;
};

const DockItem = ({ href, icon: Icon, label }: DockItemType) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      key={href}
      className={`flex p-2 rounded-full transition-all duration-400 ${path === href && "bg-primary text-secondary"}`}
    >
      {<Icon size={20} />}
    </Link>
  );
};

export default DockItem;
