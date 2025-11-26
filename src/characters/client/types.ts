import type { Character } from "@characters/types";

export interface CharacterClient {
  fetchCharacters(): Promise<Character[]>;
}
