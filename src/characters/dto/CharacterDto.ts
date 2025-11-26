import UnknownGenderCharacterError from "../errors/UnknownGenderCharacterError";
import UnknownStatusCharacterError from "../errors/UnknownStatusCharacterError";
import {
  type Character,
  characterGenders,
  characterStatus,
  type Gender,
  type Status,
} from "../types";
import type { CharacterDtoPrimitives } from "./types";

class CharacterDto {
  private readonly value: CharacterDtoPrimitives;

  constructor(characterDtoPrimitives: CharacterDtoPrimitives) {
    this.value = characterDtoPrimitives;
  }

  static fromPrimitives(
    characterDtoPrimitives: CharacterDtoPrimitives,
  ): CharacterDto {
    if (!characterStatus.includes(characterDtoPrimitives.status as Status)) {
      throw new UnknownStatusCharacterError(characterDtoPrimitives.status);
    }

    if (!characterGenders.includes(characterDtoPrimitives.gender as Gender)) {
      throw new UnknownGenderCharacterError(characterDtoPrimitives.gender);
    }

    return new CharacterDto(characterDtoPrimitives);
  }

  toCharacter(): Character {
    return {
      id: this.value.id,
      name: this.value.name,
      imageUrl: this.value.image,
      status: this.value.status as Status,
      species: this.value.species,
      type: this.value.type,
      gender: this.value.gender as Gender,
      origin: this.value.origin.name,
      location: this.value.location.name,
    };
  }
}

export default CharacterDto;
