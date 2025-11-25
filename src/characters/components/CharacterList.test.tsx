import { render, screen } from "@testing-library/react";

import CharacterList from "./CharacterList";

describe("CharacterList component", () => {
  const characters = [{ name: "Rick Sanchez" }, { name: "Morty Smith" }];

  it.for(characters)(`should render character name $name`, ({ name }) => {
    render(<CharacterList />);

    const characterName = screen.getByRole("heading", { name });

    expect(characterName).toBeInTheDocument();
  });
});
