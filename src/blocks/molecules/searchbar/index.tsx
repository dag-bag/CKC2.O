import { useQueryState } from "nuqs";
import { LuSearch } from "react-icons/lu";
import { MultiSelect } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";
import React, { FC, ChangeEvent, KeyboardEvent } from "react";

const grades1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [query, setQuery] = useQueryState("query");
  const [grades, setGrades] = useQueryState("grades");

  const search = () => {
    return router.push(`/search?query=${query}&grades=${grades ?? ""}`);
  };

  const queryOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && pathname !== "/search") {
      router.push(`/search?query=${query}&grades=${grades ?? ""}`);
    }
  };

  const gradeChangeHandler = (grade: string[]) => {
    setGrades(grade as any);
  };

  return (
    <div className="lg:flex hidden gap-2 items-center border rounded-full h-[45px] bg-white overflow-hidden pl-4 font-heading">
      <input
        value={query ?? ""}
        placeholder="search"
        onKeyDown={onKeyDownHandler}
        onChange={queryOnChangeHandler}
        className="border-none pt-0.5 ml-2 outline-none placeholder:capitalize bg-transparent w-[150px]"
      />
      <div>
        <MultiSelect
          size="sm"
          width={50}
          searchable
          data={grades1}
          onChange={gradeChangeHandler}
          placeholder="Filter via Grades"
          value={gradeConverter(grades as any)}
        />
      </div>
      <button onClick={search} className="px-5 pl-4 bg-gray-500 h-full">
        <LuSearch size={22} color={"white"} />
      </button>
    </div>
  );
};

const gradeConverter = (grades: string | string[] = ""): string[] => {
  if (!grades) {
    return [];
  }
  if (typeof grades === "string") {
    return grades.split(",");
  } else {
    return grades;
  }
};

export default SearchBar;
