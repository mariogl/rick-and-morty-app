import { useEffect, useState } from "react";

import { DEBOUNCE_DELAY_MS } from "@app/shared/config/config";

const useDebounceSearch = (search: string): string => {
  const [debouncedSearch, setDebouncedSearch] = useState<string>(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, DEBOUNCE_DELAY_MS);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  return debouncedSearch;
};

export default useDebounceSearch;
