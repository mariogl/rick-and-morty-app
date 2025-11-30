import type { CharacterAlphabeticSorter } from "@app/character/application/CharacterSorter/CharacterSorter";
import type { Character } from "@app/character/domain/Character";
import type {
  CharacterSortableProperties,
  SortableDirection,
} from "@app/character/domain/Character";
import type { CharacterClient } from "@app/character/domain/CharacterClient";

class GetCharactersUseCase {
  private readonly characterClient: CharacterClient;
  private readonly characterSorter: CharacterAlphabeticSorter;

  constructor({
    characterClient,
    characterSorter,
  }: {
    characterClient: CharacterClient;
    characterSorter: CharacterAlphabeticSorter;
  }) {
    this.characterClient = characterClient;
    this.characterSorter = characterSorter;
  }

  async execute({
    search,
    sortCriterion,
    sortDirection,
  }: {
    search?: string;
    sortCriterion: CharacterSortableProperties;
    sortDirection: SortableDirection;
  }): Promise<Character[]> {
    const characters = await this.characterClient.fetchCharacters(search);

    return this.characterSorter.sortCharactersAlphabetically({
      characters,
      sortCriterion,
      sortDirection,
    });
  }
}

export default GetCharactersUseCase;
