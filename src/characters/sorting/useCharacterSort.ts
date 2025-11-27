import { useNavigate, useSearch } from "@tanstack/react-router";

import type { CharacterSortableProperties } from "./types";

const useCharacterSort = () => {
  const navigate = useNavigate({ from: "/characters" });
  const { sortBy } = useSearch({ from: "/characters/" });

  const setSortCriterion = (criterion: CharacterSortableProperties) => {
    navigate({
      search: (previousParams) => ({ ...previousParams, sortBy: criterion }),
    });
  };

  return {
    sortCriterion: sortBy,
    setSortCriterion,
  };
};

export default useCharacterSort;
