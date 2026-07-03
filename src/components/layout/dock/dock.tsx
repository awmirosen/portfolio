import List from "./list";
const Dock = () => {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 h-12 p-2 border border-border rounded-full bg-background z-50">
      <List />
    </div>
  );
};

export default Dock;
