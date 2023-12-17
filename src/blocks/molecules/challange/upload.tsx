import Card from "@/blocks/UI/Card";
const Upload = () => {
  return (
    <Card title="Upload" className="hidden">
      <div className="center h-[200px] border-2 rounded-xl border-dashed flex-col">
        <h1 className="font-heading text-gray-500">
          Upload Photo of your Drawing
        </h1>
        <p className="text-xs">Please only upload PNG,JPEG,WEBP formets</p>
      </div>
    </Card>
  );
};

export default Upload;
