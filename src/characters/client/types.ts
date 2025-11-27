import type { Character } from "@app/characters/types";

export interface CharacterClient {
  fetchCharacters(search?: string): Promise<Character[]>;
  fetchCharacterById(id: number): Promise<Character>;
}
