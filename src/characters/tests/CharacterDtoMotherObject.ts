import type { CharacterDtoPrimitives } from "@app/characters/dto/types";

class CharacterDtoMotherObject {
  static lastId = 0;

  static createCharacterDtoPrimitives(
    overrides: Partial<CharacterDtoPrimitives> = {},
  ): CharacterDtoPrimitives {
    return {
      id: CharacterDtoMotherObject.lastId++,
      name: "John Doe",
      image: "john.jpg",
      ...overrides,
    };
  }

  static createRickDtoPrimitives(): CharacterDtoPrimitives {
    return this.createCharacterDtoPrimitives({ name: "Rick Sanchez" });
  }

  static createMortyDtoPrimitives(): CharacterDtoPrimitives {
    return this.createCharacterDtoPrimitives({ name: "Morty Smith" });
  }
}

export default CharacterDtoMotherObject;
