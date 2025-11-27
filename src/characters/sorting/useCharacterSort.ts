import { useNavigate, useSearch } from "@tanstack/react-router";

import type { CharacterSortableProperties, SortableDirection } from "./types";

const useCharacterSort = () => {
  const navigate = useNavigate({ from: "/characters" });
  const { sortBy, sortDirection } = useSearch({ from: "/characters/" });

  const setSort = (
    criterion: CharacterSortableProperties,
    direction: SortableDirection,
  ) => {
    navigate({
      search: (previousParams) => ({
        ...previousParams,
        sortBy: criterion,
        sortDirection: direction,
      }),
    });
  };

  return {
    sortCriterion: sortBy,
    sortDirection,
    setSort,
  };
};

export default useCharacterSort;
