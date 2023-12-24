import { getCoins } from "@/strapi/services/custom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import useSWR from "swr";

export default function useCoins() {
  const queryClient = useQueryClient();
  const data = useQuery({ queryKey: ["coins"], queryFn: getCoins });
  const updateCoinsMutation = useMutation({
    mutationKey: ["coins"],
    onMutate: async ({
      type,
      newData,
    }: {
      type: "add" | "remove";
      newData: number;
    }) => {
      await queryClient.cancelQueries({ queryKey: ["inventory"] });
      const prev = queryClient.getQueryData(["inventory"]);
      queryClient.setQueryData(["coins"], (prev: any) => {
        return {
          coins:
            type === "remove"
              ? parseInt(prev.coins) - newData
              : type === "add"
              ? parseInt(prev.coins) + newData
              : parseInt(prev.coins),
        };
      });
      return { prev };
    },
    onError: (err, variables, context: any) => {
      queryClient.setQueryData(["coins"], context.prevData);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["coins"],
      });
    },
  });

  return { data, updateCoins: updateCoinsMutation.mutate };
}
