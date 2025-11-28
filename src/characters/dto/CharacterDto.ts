import z from "zod";

import type { Character } from "@app/character/domain/Character";
import { type Gender, type Status } from "@app/character/domain/types";

import UnknownGenderCharacterError from "../errors/UnknownGenderCharacterError";
import UnknownStatusCharacterError from "../errors/UnknownStatusCharacterError";
import characterDtoSchema from "./schema";
import type { CharacterDtoPrimitives } from "./types";

class CharacterDto {
  private readonly value: CharacterDtoPrimitives;

  private constructor(characterDtoPrimitives: CharacterDtoPrimitives) {
    this.value = characterDtoPrimitives;
  }

  static fromPrimitives(
    characterDtoPrimitives: CharacterDtoPrimitives,
  ): CharacterDto {
    try {
      const validatedData = characterDtoSchema.parse(characterDtoPrimitives);
      return new CharacterDto(validatedData);
    } catch (error: unknown) {
      if (!(error instanceof z.ZodError)) {
        throw error;
      }

      const statusError = error.issues.find((issue) =>
        issue.path.includes("status"),
      );
      const genderError = error.issues.find((issue) =>
        issue.path.includes("gender"),
      );

      if (statusError) {
        throw new UnknownStatusCharacterError(characterDtoPrimitives.status);
      }

      if (genderError) {
        throw new UnknownGenderCharacterError(characterDtoPrimitives.gender);
      }

      throw error;
    }
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
