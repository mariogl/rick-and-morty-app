import type { Character } from "./Character";

export interface CharacterClient {
  fetchCharacters(search?: string): Promise<Character[]>;
  fetchCharacterById(id: number): Promise<Character>;
}
