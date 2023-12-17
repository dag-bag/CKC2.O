import Card from "@/blocks/UI/Card";
const Media = ({ media }: any) => {
  return (
    <Card title="Video & Images" className="mt-5">
      <div className="grid grid-cols-2 gap-5">
        {media.map((media: any) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={media}
            src={media}
            width={500}
            height={300}
            alt="help-media"
            className="rounded-md"
          />
        ))}
      </div>
    </Card>
  );
};

export default Media;
