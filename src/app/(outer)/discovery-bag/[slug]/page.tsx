import { DiscoveryJarsConfig } from "@/strapi/services/api";

const DiscoveryBagContent = async () => {
  const data = await DiscoveryJarsConfig({ type: "GET_ONE", payload: 1 });
  return <div>{JSON.stringify(data)}</div>;
};

export default DiscoveryBagContent;
