import { screen } from "@testing-library/react";

import CharacterMotherObject from "../../../character/tests/domain/CharacterMotherObject";
import { renderWithRouter } from "../../../testUtils/testUtils";
import CharacterCard from "./CharacterCard";

describe("CharacterCard component", () => {
  const character = CharacterMotherObject.createCharacter({
    name: "Rick Sanchez",
  });

  it("should render character name", async () => {
    renderWithRouter(<CharacterCard character={character} />);

    const characterName = await screen.findByRole("heading", {
      name: character.name,
    });

    expect(characterName).toBeInTheDocument();
  });
});
