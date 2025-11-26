import type { ApiResponse } from "@app/characters/dto/types";
import HttpFetchFailedCharactersError from "@app/characters/errors/HttpFetchFailedCharactersError";
import type { Character } from "@app/characters/types";

import CharacterDto from "../dto/CharacterDto";
import characterApiPaths from "./characterApiPaths";

class FetchCharacterClient {
  private readonly apiBaseUrl: string;

  constructor(apiBaseUrl: string) {
    this.apiBaseUrl = apiBaseUrl;
  }

  async fetchCharacters(): Promise<Character[]> {
    try {
      const response = await fetch(
        `${this.apiBaseUrl}${characterApiPaths.characters}`,
      );

      if (!response.ok) {
        throw new Error();
      }

      const body = (await response.json()) as ApiResponse;

      return body.results.map((characterDto) =>
        new CharacterDto(characterDto).toCharacter(),
      );
    } catch {
      throw new HttpFetchFailedCharactersError();
    }
  }
}

export default FetchCharacterClient;
