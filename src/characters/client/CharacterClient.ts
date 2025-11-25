import type { ApiResponse } from "@characters/dto/types";
import HttpFetchFailedCharactersError from "@characters/errors/HttpFetchFailedCharactersError";
import type { Character } from "@characters/types";

class CharacterClient {
  private readonly apiBaseUrl: string;

  constructor(apiBaseUrl: string) {
    this.apiBaseUrl = apiBaseUrl;
  }

  async fetchCharacters(): Promise<Character[]> {
    try {
      const response = await fetch(`${this.apiBaseUrl}/character`);

      if (!response.ok) {
        throw new Error();
      }

      const body = (await response.json()) as ApiResponse;

      return body.results;
    } catch {
      throw new HttpFetchFailedCharactersError();
    }
  }
}

export default CharacterClient;
