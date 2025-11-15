const SectionLoader = () => {
  return (
    <div className="flex-center section-padding w-full min-h-[400px]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-white-50 text-sm">Loading section...</p>
      </div>
    </div>
  );
};

export default SectionLoader;
