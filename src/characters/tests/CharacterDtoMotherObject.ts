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
}

export default CharacterDtoMotherObject;
