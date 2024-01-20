"use client";
import {
  gradeConvertor,
  haveSimilarities,
  dynamicallyTemplateTypeProvider as DTYP,
} from "@/libs/search";
import React from "react";
import { useQueryState } from "nuqs";
import extImage from "@/libs/extImage";
import Heading from "@/blocks/atoms/Heading";
import { useQuery } from "@tanstack/react-query";
import { useDebouncedValue } from "@mantine/hooks";
import ContentCard from "@/blocks/molecules/content-card";

const url_end_point =
  "https://ckc-strapi-production-33d2.up.railway.app/api/fuzzy-search/search?query=";

export default function SearchPage() {
  const [query] = useQueryState("query");
  const [grades] = useQueryState("grades");
  const [debounced] = useDebouncedValue(query, 200);

  const { isPending, error, data } = useQuery({
    queryKey: ["repoData", debounced],
    queryFn: () =>
      fetch(
        `${url_end_point}${
          query == "" ? " " : query
        }&populate[courses][thumbnail][populate][0]=city &populate[videos][thumbnail][populate][0]=city &populate[comics][thumbnail][populate][0]=city &populate[nacs][thumbnail][populate][0]=city &populate[lives][thumbnail][populate][0]=city`
      ).then((res) => res.json()),
  });

  console.log(data);
  const grade_filter = (data: any[]): any => {
    return data?.filter((entry) =>
      haveSimilarities(
        entry?.grade?.split(",") ?? [],
        gradeConvertor(grades as any) as any
      )
    );
  };

  if (isPending) {
    return (
      <div className="center h-[300px] font-heading text-xl text-white">
        Loading...
      </div>
    );
  }

  if (data?.error) {
    return (
      <div className="center h-[300px] font-heading text-xl text-white">
        {data.error.message}
      </div>
    );
  }

  return (
    <div>
      <div>
        <main className="grid gap-5">
          {data &&
            !data?.error &&
            Object.keys(data).map((name) => {
              const filter_result_with_grades = grade_filter(data[name]);

              // when result is empty
              if (filter_result_with_grades.length == 0) {
                return null;
              }
              return (
                <section key={name} className="grid gap-5">
                  <Heading
                    size="medium"
                    className="capitalize"
                    varient="white_with_shadow"
                  >
                    {name}
                  </Heading>
                  <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 md:gap-x-4 gap-y-6">
                    {filter_result_with_grades.map((video: any) => (
                      <ContentCard
                        key={video.id}
                        {...{
                          id: video.id,
                          theme: "blue",
                          slug: video.slug,
                          desc: video.desc,
                          title: video.title,
                          price: video.price,
                          grades: video.grade,
                          isPremium: video.premium,
                          type: DTYP(name as any, video.type),
                          thumbnail: extImage(video.thumbnail),
                        }}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
        </main>
      </div>
    </div>
  );
}
