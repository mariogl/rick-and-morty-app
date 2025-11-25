import type { Character } from "../types";

class CharacterMotherObject {
  static createCharacter(overrides: Partial<Character> = {}): Character {
    return {
      name: "John Doe",
      ...overrides,
    };
  }
}

export default CharacterMotherObject;
