"use client";

import DockItem from "./item";
import { DockDataType } from "./type";

type DockItemsType = {
  data: DockDataType[];
};

const DockItems = ({ data }: DockItemsType) => {
  return data.map((item) => <DockItem key={item.label} {...item} />);
};

export default DockItems;
