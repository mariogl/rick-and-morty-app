import { render, screen } from "@testing-library/react";

import CharacterMotherObject from "../tests/CharacterMotherObject";
import CharacterList from "./CharacterList";

describe("CharacterList component", () => {
  const characters = [
    CharacterMotherObject.createCharacter({ name: "Rick Sanchez" }),
    CharacterMotherObject.createCharacter({ name: "Morty Smith" }),
  ];

  it.for(characters)(`should render character name $name`, ({ name }) => {
    render(<CharacterList />);

    const characterName = screen.getByRole("heading", { name });

    expect(characterName).toBeInTheDocument();
  });
});
