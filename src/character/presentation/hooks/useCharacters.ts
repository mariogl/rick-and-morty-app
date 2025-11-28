import type { Character } from "@app/character/domain/Character";
import useCharactersQuery from "@app/character/presentation/queries/useCharactersQuery";

import useCharacterSearch from "./useCharacterSearch";
import useCharacterSort from "./useCharacterSort";

const useCharacters = (): Character[] => {
  const { sortCriterion, sortDirection } = useCharacterSort();
  const { search } = useCharacterSearch();
  const { data } = useCharactersQuery({ search, sortCriterion, sortDirection });

  return data;
};

export default useCharacters;
