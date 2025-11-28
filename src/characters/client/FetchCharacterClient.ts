import type { Character } from "@app/character/domain/Character";
import type {
  CharacterDtoPrimitives,
  CharacterListData,
} from "@app/characters/dto/types";
import HttpFetchFailedCharactersError from "@app/characters/errors/HttpFetchFailedCharactersError";

import CharacterDto from "../dto/CharacterDto";
import characterApiPaths from "./characterApiPaths";
import type { CharacterClient } from "./types";

class FetchCharacterClient implements CharacterClient {
  private readonly apiBaseUrl: string;

  constructor(apiBaseUrl: string) {
    this.apiBaseUrl = apiBaseUrl;
  }

  async fetchCharacters(name?: string): Promise<Character[]> {
    try {
      const search = name ? `?name=${name}` : "";

      const response = await fetch(
        `${this.apiBaseUrl}${characterApiPaths.characters}${search}`,
      );

      if (search && response.status === 404) {
        return [];
      }

      if (!response.ok) {
        throw new Error();
      }

      const body = (await response.json()) as CharacterListData;

      return body.results.map((characterDto) =>
        CharacterDto.fromPrimitives(characterDto).toCharacter(),
      );
    } catch {
      throw new HttpFetchFailedCharactersError();
    }
  }

  async fetchCharacterById(id: number): Promise<Character> {
    try {
      const response = await fetch(
        `${this.apiBaseUrl}${characterApiPaths.character(id)}`,
      );

      if (!response.ok) {
        throw new Error();
      }

      const characterDto = (await response.json()) as CharacterDtoPrimitives;

      return CharacterDto.fromPrimitives(characterDto).toCharacter();
    } catch {
      throw new HttpFetchFailedCharactersError();
    }
  }
}

export default FetchCharacterClient;
