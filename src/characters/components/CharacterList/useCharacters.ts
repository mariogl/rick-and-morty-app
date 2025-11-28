import type { Character } from "@app/character/domain/Character";

import useCharactersQuery from "../../queries/useCharactersQuery";
import useCharacterSearch from "../../search/useCharacterSearch";
import useCharacterSort from "../../sorting/useCharacterSort";

const useCharacters = (): Character[] => {
  const { sortCriterion, sortDirection } = useCharacterSort();
  const { search } = useCharacterSearch();
  const { data } = useCharactersQuery(search);

  const sortCharactersAlphabetically = (characters: Character[]): Character[] =>
    characters.sort((characterA, characterB) => {
      const comparison = characterA[sortCriterion].localeCompare(
        characterB[sortCriterion],
      );

      return sortDirection === "asc" ? comparison : -comparison;
    });

  return sortCharactersAlphabetically(data);
};

export default useCharacters;
