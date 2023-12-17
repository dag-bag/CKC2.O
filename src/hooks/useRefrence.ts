import { strapi } from "@/libs/strapi";
import { useSearchParams } from "next/navigation";

export default function useRefrence() {
  const router = useSearchParams();
  const ref = router.get("ref");
  const create = async (data: any) => {
    const res = await strapi.create("referrals", {
      referral_code_used: ref,
      reward_points: 100,
      ...data,
    });
    return res.data;
  };

  return { create };
}
