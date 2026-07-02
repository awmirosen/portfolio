"use client";

import { DOCK_LINKS as items } from "./constants";
import DockItem from "./dock-item";

const Items = () => {
  return items.map((item) => <DockItem key={item.label} {...item} />);
};

export default Items;
