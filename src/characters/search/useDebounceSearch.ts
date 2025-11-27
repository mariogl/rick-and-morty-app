import { useEffect, useState } from "react";

const useDebounceSearch = (search: string): string => {
  const [debouncedSearch, setDebouncedSearch] = useState<string>(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  return debouncedSearch;
};

export default useDebounceSearch;
