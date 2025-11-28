import type { Character } from "@app/character/domain/Character";
import type { CharacterClient } from "@app/character/domain/CharacterClient";

class GetCharacterDetailUseCase {
  private readonly characterClient: CharacterClient;

  constructor(characterClient: CharacterClient) {
    this.characterClient = characterClient;
  }

  async execute(characterId: number): Promise<Character> {
    const character =
      await this.characterClient.fetchCharacterById(characterId);

    return character;
  }
}

export default GetCharacterDetailUseCase;
