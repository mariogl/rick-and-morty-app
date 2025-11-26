import type { Character } from "../types";
import type { CharacterDtoPrimitives } from "./types";

class CharacterDto {
  private readonly value: CharacterDtoPrimitives;

  constructor(characterDtoPrimitives: CharacterDtoPrimitives) {
    this.value = characterDtoPrimitives;
  }

  static fromPrimitives(
    characterDtoPrimitives: CharacterDtoPrimitives,
  ): CharacterDto {
    return new CharacterDto(characterDtoPrimitives);
  }

  toCharacter(): Character {
    return {
      id: this.value.id,
      name: this.value.name,
      imageUrl: this.value.image,
    };
  }
}

export default CharacterDto;
