import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useMemo } from "react";

const useFilters = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const filters = useMemo(
    () => [
      {
        label: "Books",
        key: 'books',
        checked: searchParams.toString() == "search=books",
      },
      {
         label: "Electronics",
         key: 'electronics',
         checked: searchParams.toString() == "search=electronics",
      },
      {
         label: "Materials",
         key: 'materials',
         checked: searchParams.toString() == "search=materials",
      },
    ],
    [searchParams]
  );

  return filters;
};

export default useFilters;
