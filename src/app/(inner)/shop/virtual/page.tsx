import Image from "next/image";
import Categorizer from "@/blocks/molecules/categorizer";
import { VIRTUAL_PRODUCTS } from "@/strapi/services/api";
import UnlockPopup from "@/blocks/popups/unlock-virtual-popup";
import { getSession } from "@/strapi/services/me";
import { strapi } from "@/libs/strapi";
import extImage from "@/libs/extImage";

const VirtualShopPage = async () => {
  const session = await getSession();
  const data = await VIRTUAL_PRODUCTS({ type: "GET" });
  const res = await strapi.axios.get("/virtual-purchase?id=" + session.user.id);
  const avatars = data?.filter((item: any) => item.type === "avatar");
  const banners = data?.filter((item: any) => item.type === "banner");

  const virtual_products_ids = res.data.map((item: any) => item.id);

  return (
    <div>
      <Categorizer title="Avatars">
        <div className="flex gap-4 flex-wrap  p-5">
          {avatars.map((avt: any) => (
            <div key={avt} className=" flex-col flex gap-2 bg-white">
              <div className="w-[250px] center h-[250px] rounded-xl">
                <Image
                  className="overflow-hidden "
                  src={extImage(avt.images)}
                  alt="profile"
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t border-gray-200">
                <h4 className="font-amar text-lg break-words">
                  {avt.title} {avt.id}{" "}
                </h4>
                <div className="flex items-center gap-2 font-heading font-semibold  border-l pl-5 border-gray-200  ">
                  {avt.coins}
                  <Image
                    src={"/assets/coins.png"}
                    alt="coins"
                    width={18}
                    height={18}
                  />
                </div>
              </div>
              {!virtual_products_ids.includes(avt.id) && (
                <UnlockPopup
                  image={extImage(avt.images)}
                  type={avt.type}
                  coins={avt.coins}
                  title={avt.title}
                  contentId={avt.id}
                />
              )}
            </div>
          ))}
        </div>
      </Categorizer>

      <br />
      <Categorizer title="Banners">
        <div className="flex gap-4 flex-wrap  p-5">
          {banners.map((avt: any) => (
            <div key={avt} className=" flex-col flex gap-2 bg-white">
              <div className="w-[320px] center h-[250px] rounded-xl">
                <Image
                  src={extImage(avt.images)}
                  alt="profile"
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t border-gray-200">
                <h4 className="font-amar text-lg">{avt.title}</h4>
                <div className="flex items-center gap-2 font-heading font-semibold  border-l pl-5 border-gray-200  ">
                  {avt.coins}
                  <Image
                    src={"/assets/coins.png"}
                    alt="coins"
                    width={18}
                    height={18}
                  />
                </div>
              </div>

              {!virtual_products_ids.includes(avt.id) && (
                <UnlockPopup
                  image={extImage(avt.images)}
                  type={avt.type}
                  coins={avt.coins}
                  title={avt.title}
                  contentId={avt.id}
                />
              )}
            </div>
          ))}
        </div>
      </Categorizer>
    </div>
  );
};
export default VirtualShopPage;
