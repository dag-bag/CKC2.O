"use client";
import { useQueryState } from "nuqs";
import { LuSearch } from "react-icons/lu";
import { MultiSelect } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useQueryState("query");
  const [grades, setGrades] = useQueryState("grades");
  return (
    <>
      <div className="flex items-center border rounded-xl h-[45px] bg-white pl-3 font-heading pr-5">
        <LuSearch size={22} color={"gray"} />
        <input
          placeholder="search"
          className="border-none pt-0.5 ml-2 outline-none placeholder:capitalize bg-transparent w-[150px]"
          onChange={async (e) => {
            setQuery(e.target.value);
          }}
          value={query ?? ""}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (pathname !== "/search") {
                router.push(`/search?query=${query}&grades=${grades ?? ""}`);
              }
            }
          }}
        />
        <div className="hidden lg:block">
          <MultiSelect
            size="sm"
            width={50}
            searchable
            data={grades1}
            value={gradeConvertor(grades as any)}
            onChange={(g) => {
              setGrades(g as any);
            }}
            placeholder="Filter via Grades"
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;

const grades1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const gradeConvertor = (grades: string | string[] | undefined) => {
  if (!grades) {
    return [];
  }
  if (typeof grades == "string") {
    return grades.split(",");
  } else {
    return grades;
  }
};
