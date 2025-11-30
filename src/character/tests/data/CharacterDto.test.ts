import CharacterDto from "@app/character/data/dto/CharacterDto";
import UnknownGenderCharacterError from "@app/character/domain/errors/UnknownGenderCharacterError";
import UnknownStatusCharacterError from "@app/character/domain/errors/UnknownStatusCharacterError";
import type { Gender } from "@app/character/domain/Gender";
import type { Status } from "@app/character/domain/Status";
import CharacterMotherObject from "@app/character/tests/domain/CharacterMotherObject";

import CharacterDtoMotherObject from "./CharacterDtoMotherObject";

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
