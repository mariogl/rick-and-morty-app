import { render, screen } from "@testing-library/react";

import CharacterMotherObject from "../../tests/CharacterMotherObject";
import CharacterCard from "./CharacterCard";

describe("CharacterCard component", () => {
  it("should render character name", () => {
    const character = CharacterMotherObject.createCharacter({
      name: "Rick Sanchez",
    });

    render(<CharacterCard character={character} />);

    const characterName = screen.getByRole("heading", {
      name: character.name,
    });

    expect(characterName).toBeInTheDocument();
  });
});
