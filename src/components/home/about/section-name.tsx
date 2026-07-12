export const SectionName = ({ title = "" }: { title: string }) => {
  return (
    <div className="w-fit bg-primary text-background font-bold border-2 shadow-sm px-2 py-1 mb-8 mx-auto select-none">
      {title}
    </div>
  );
};
