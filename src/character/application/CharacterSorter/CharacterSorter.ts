import type { Character } from "@app/character/domain/Character";
import type {
  CharacterSortableProperties,
  SortableDirection,
} from "@app/character/domain/types";

export interface CharacterAlphabeticSorter {
  sortCharactersAlphabetically(options: {
    characters: Character[];
    sortCriterion: CharacterSortableProperties;
    sortDirection: SortableDirection;
  }): Character[];
}

class CharacterSorter implements CharacterAlphabeticSorter {
  sortCharactersAlphabetically({
    characters,
    sortCriterion,
    sortDirection,
  }: {
    characters: Character[];
    sortCriterion: CharacterSortableProperties;
    sortDirection: SortableDirection;
  }): Character[] {
    return characters.sort((characterA, characterB) => {
      const comparison = characterA[sortCriterion].localeCompare(
        characterB[sortCriterion],
      );

      return sortDirection === "asc" ? comparison : -comparison;
    });
  }
}

export default CharacterSorter;
