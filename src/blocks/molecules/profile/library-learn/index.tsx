import Card from "@/blocks/UI/Card";
import WatchedCard from "../../cards/Watched";
import { getMyPurchases } from "@/strapi/services/me";
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

export default LearnAndLibrary;
