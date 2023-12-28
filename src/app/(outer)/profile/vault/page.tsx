import Card from "@/blocks/UI/Card";
import { getMyPurchases } from "@/strapi/services/me";
import Image from "next/image";
const MyVault = async () => {
  return (
    <div>
      <LearnAndLibrary />
      <AvatarsAndBanners />
      {/* <Card title="Kit and Material" className="mt-5">
        <Grid />
      </Card> */}
    </div>
  );
};
export default MyVault;
import WatchedCard from "@/blocks/molecules/cards/Watched";
const LearnAndLibrary = async () => {
  const data = await getMyPurchases();
  return (
    <div>
      <Card title="Learn and Library" className="mt-5">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
          {data?.message ? (
            <>
              <p>No Purchases</p>
            </>
          ) : (
            <>
              {data.map((item: any) => (
                <WatchedCard
                  {...item}
                  key={item.title}
                  imgUrl={item.thumbnail}
                />
              ))}
            </>
          )}
        </div>
      </Card>
    </div>
  );
};

const AvatarsAndBanners = async () => {
  const data: any = { message: "not here" };
  return (
    <div>
      <Card title="Avatars & Banners" className="mt-5">
        <div className="grid grid-cols-4 gap-5">
          {data?.message ? (
            <>
              <p>No Purchases</p>
            </>
          ) : (
            <>
              {data.map((item: any) => (
                <div className="flex flex-col gap-2" key={item}>
                  <div className="relative aspect-w-10 aspect-h-6 rounded-xl overflow-hidden">
                    <Image src={item.thumbnail} alt="image" fill />
                  </div>
                  <div>
                    <h1 className="text-lg font-semibold font-amar">
                      {item.title}
                    </h1>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </Card>
    </div>
  );
};
