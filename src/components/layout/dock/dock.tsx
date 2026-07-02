import List from "./list";
const Dock = () => {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 h-12 p-2 border border-primary/20 rounded-full backdrop-blur-lg overflow-visible z-50">
      <List />
    </div>
  );
};

export default Dock;
