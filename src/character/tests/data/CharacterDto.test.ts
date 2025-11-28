import CharacterDtoMotherObject from "src/tests/CharacterDtoMotherObject";
import CharacterMotherObject from "src/tests/CharacterMotherObject";

import UnknownGenderCharacterError from "@app/character/domain/errors/UnknownGenderCharacterError";
import UnknownStatusCharacterError from "@app/character/domain/errors/UnknownStatusCharacterError";
import type { Gender, Status } from "@app/character/domain/types";

import CharacterDto from "../../data/dto/CharacterDto";

describe("CharacterDto", () => {
  it("should convert the DTO to a character", () => {
    const expectedRick = CharacterMotherObject.createRick();
    const rickDto = CharacterDto.fromPrimitives(
      CharacterDtoMotherObject.createRickDtoPrimitives(),
    );

    const rick = rickDto.toCharacter();

    expect(rick).toEqual(expectedRick);
  });

  it("shouldn't allow to create a character with an invalid status", () => {
    expect(() =>
      CharacterDto.fromPrimitives({
        ...CharacterDtoMotherObject.createRickDtoPrimitives(),
        status: "invalid" as Status,
      }),
    ).toThrowError(UnknownStatusCharacterError);
  });

  it("shouldn't allow to create a character with an invalid gender", () => {
    expect(() =>
      CharacterDto.fromPrimitives({
        ...CharacterDtoMotherObject.createRickDtoPrimitives(),
        gender: "invalid" as Gender,
      }),
    ).toThrowError(UnknownGenderCharacterError);
  });
});
