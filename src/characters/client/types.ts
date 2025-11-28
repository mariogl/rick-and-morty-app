import type { Character } from "@app/character/domain/Character";

export interface CharacterClient {
  fetchCharacters(search?: string): Promise<Character[]>;
  fetchCharacterById(id: number): Promise<Character>;
}
