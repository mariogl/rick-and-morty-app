import CharacterSorter from "@app/character/application/CharacterSorter/CharacterSorter";
import GetCharactersUseCase from "@app/character/application/GetCharactersUseCase";
import type { CharacterClient } from "@app/character/domain/CharacterClient";
import CharacterMotherObject from "@app/tests/CharacterMotherObject";

describe("GetCharactersUseCase", () => {
  const characterClient: Pick<CharacterClient, "fetchCharacters"> = {
    fetchCharacters: vi
      .fn()
      .mockResolvedValue([
        CharacterMotherObject.createRick(),
        CharacterMotherObject.createMorty(),
      ]),
  };

  const characterSorter = new CharacterSorter();

  it("should return characters sorted by ascendent name", async () => {
    const getCharactersUseCase = new GetCharactersUseCase({
      characterClient: characterClient as CharacterClient,
      characterSorter,
    });

    const characters = await getCharactersUseCase.execute({
      sortCriterion: "name",
      sortDirection: "asc",
    });

    const characterNames = characters.map((character) => character.name);

    expect(characterNames).toEqual(["Morty Smith", "Rick Sanchez"]);
  });

  it("should return characters sorted by descendent name", async () => {
    const getCharactersUseCase = new GetCharactersUseCase({
      characterClient: characterClient as CharacterClient,
      characterSorter,
    });

    const characters = await getCharactersUseCase.execute({
      sortCriterion: "name",
      sortDirection: "desc",
    });

    const characterNames = characters.map((character) => character.name);

    expect(characterNames).toEqual(["Rick Sanchez", "Morty Smith"]);
  });
});
