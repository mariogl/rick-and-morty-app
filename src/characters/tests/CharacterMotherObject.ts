import type { Character } from "../types";

class CharacterMotherObject {
  static lastId = 0;

  static createCharacter(overrides: Partial<Character> = {}): Character {
    return {
      id: CharacterMotherObject.lastId++,
      name: "John Doe",
      ...overrides,
    };
  }
}

export default CharacterMotherObject;
