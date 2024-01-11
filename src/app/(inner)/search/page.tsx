"use client";
import React, { useState } from "react";
import { TextInput, MultiSelect } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { useQuery } from "@tanstack/react-query";
import { useQueryState } from "nuqs";
import ContentCard from "@/blocks/molecules/content-card";
import extImage from "@/libs/extImage";

export default function SearchPage({ params }: any) {
  const [query, setQuery] = useQueryState("query");
  const [debounced] = useDebouncedValue(query, 200);
  const [searchQuery, setSearchQuery] = useState("");

  const { isPending, error, data } = useQuery({
    queryKey: ["repoData", debounced],
    queryFn: () =>
      fetch(
        `https://ckc-strapi-production-33d2.up.railway.app/api/fuzzy-search/search?query=${debounced}`
      ).then((res) => res.json()),
  });

  return (
    <div>
      <div className="grid grid-cols-[2fr_1fr] gap-5 items-center mb-5">
        <TextInput
          size="lg"
          radius={"xl"}
          width={"500px"}
          value={query as string}
          placeholder="search goes here"
          onChange={async (e) => {
            setQuery(e.target.value);
          }}
        />
        <div>
          <MultiSelect placeholder="Grade" data={["1", "2", "3", "4"]} />
        </div>
      </div>
      <div>
        {isPending && <p>loading...</p>}
        {data?.error && <p>{data.error.message}</p>}

        {data && !data?.error && JSON.stringify(data)}

        <section className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 md:gap-x-4 gap-y-6">
          {data &&
            !data?.error &&
            data.videos.map((video: any) => (
              <>
                <ContentCard
                  key={video.id}
                  {...{
                    id: video.id,
                    type: "video",
                    theme: "green",
                    slug: video.slug,
                    desc: video.desc,
                    title: video.title,
                    price: video.price,
                    grades: video.grade,
                    isPremium: video.premium,
                    thumbnail: extImage(video.thumbnail),
                    isUnlocked: false,
                  }}
                />
              </>
            ))}
        </section>
      </div>
    </div>
  );
}
