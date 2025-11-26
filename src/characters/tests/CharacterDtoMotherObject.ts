import type { CharacterDto } from "@characters/dto/types";

class CharacterDtoMotherObject {
  static lastId = 0;

  static createCharacterDto(
    overrides: Partial<CharacterDto> = {},
  ): CharacterDto {
    return {
      id: CharacterDtoMotherObject.lastId++,
      name: "John Doe",
      ...overrides,
    };
  }

  static createRickDto(): CharacterDto {
    return this.createCharacterDto({ name: "Rick Sanchez" });
  }

  static createMortyDto(): CharacterDto {
    return this.createCharacterDto({ name: "Morty Smith" });
  }
}

export default CharacterDtoMotherObject;
