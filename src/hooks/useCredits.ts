import { getCredits } from "@/strapi/services/custom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function useCredits() {
  const queryClient = useQueryClient();
  const data = useQuery({ queryKey: ["credits"], queryFn: getCredits });
  const updateCoinsMutation = useMutation({
    mutationKey: ["credits"],
    onMutate: async ({
      type,
      newData,
    }: {
      type: "add" | "remove";
      newData: number;
    }) => {
      await queryClient.cancelQueries({ queryKey: ["credits"] });
      const prev = queryClient.getQueryData(["credits"]);
      const cache = queryClient.setQueryData(["credits"], (prev: any) => {
        return {
          credits:
            type === "remove"
              ? parseInt(prev.credits) - newData
              : type === "add"
              ? parseInt(prev.credits) + newData
              : parseInt(prev.credits),
        };
      });
      return { cache };
    },
    onError: (err, variables, context: any) => {
      // queryClient.setQueryData(["credits"], context.prevData);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["credits"],
      });
    },
  });

  return { data, updateCoins: updateCoinsMutation.mutate };
}
