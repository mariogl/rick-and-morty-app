import { screen } from "@testing-library/react";
import { renderWithRouter } from "src/testUtils/testUtils";

import CharacterMotherObject from "../../tests/CharacterMotherObject";
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
