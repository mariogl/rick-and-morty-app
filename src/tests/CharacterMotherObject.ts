import type { Character } from "@app/characters/types";

class CharacterMotherObject {
  static lastId = 0;

  static createCharacter(overrides: Partial<Character> = {}): Character {
    return {
      id: CharacterMotherObject.lastId++,
      name: "John Doe",
      imageUrl: "john.jpg",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: "Earth",
      location: "Earth",
      ...overrides,
    };
  }

  static createRick(): Character {
    return this.createCharacter({ name: "Rick Sanchez" });
  }

  static createMorty(): Character {
    return this.createCharacter({ name: "Morty Smith" });
  }
}

export default CharacterMotherObject;
