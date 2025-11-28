import type { Character } from "@app/character/domain/Character";

import useCharactersQuery from "../../queries/useCharactersQuery";
import useCharacterSearch from "../../search/useCharacterSearch";
import useCharacterSort from "../../sorting/useCharacterSort";

const useCharacters = (): Character[] => {
  const { sortCriterion, sortDirection } = useCharacterSort();
  const { search } = useCharacterSearch();
  const { data } = useCharactersQuery({ search, sortCriterion, sortDirection });

  return data;
};

export default useCharacters;
