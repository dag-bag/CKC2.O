import Heading from "@/blocks/atoms/Heading";
import UnlockPopup from "@/blocks/popups/unlock";
import SharePopup from "@/blocks/popups/share-popup";
const Info = ({ id, price, title }: any) => (
  <div className="bg-white p-5 rounded-2xl font-heading grid">
    <Heading size="medium" className="text-3xl font-semibold pl-2">
      {price} <span className="text-sm">Credits</span>
    </Heading>
    <section className="flex gap-2 flex-col mt-5">
      <SharePopup shareableURL={"this is just"} title={title} />
      <UnlockPopup
        premium={false}
        type={"challange"}
        coins={price}
        title={title}
        contentId={id}
      />
    </section>
  </div>
);

export default Info;
