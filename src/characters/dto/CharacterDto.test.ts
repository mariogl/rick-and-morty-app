import UnknownGenderCharacterError from "../errors/UnknownGenderCharacterError";
import UnknownStatusCharacterError from "../errors/UnknownStatusCharacterError";
import CharacterDtoMotherObject from "../tests/CharacterDtoMotherObject";
import CharacterMotherObject from "../tests/CharacterMotherObject";
import CharacterDto from "./CharacterDto";

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
        status: "invalid",
      }),
    ).toThrowError(UnknownStatusCharacterError);
  });

  it("shouldn't allow to create a character with an invalid gender", () => {
    expect(() =>
      CharacterDto.fromPrimitives({
        ...CharacterDtoMotherObject.createRickDtoPrimitives(),
        gender: "invalid",
      }),
    ).toThrowError(UnknownGenderCharacterError);
  });
});
