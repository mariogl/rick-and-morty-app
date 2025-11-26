import type { Character } from "@app/characters/types";

export interface CharacterClient {
  fetchCharacters(): Promise<Character[]>;
  fetchCharacterById(id: number): Promise<Character>;
}
