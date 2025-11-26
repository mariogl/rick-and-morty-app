import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../../testUtils/testUtils";
import CharacterMotherObject from "../../tests/CharacterMotherObject";
import CharacterList from "./CharacterList";

describe("CharacterList component", () => {
  const characters = [
    CharacterMotherObject.createRick(),
    CharacterMotherObject.createMorty(),
  ];

  it.for(characters)("should render character name $name", async ({ name }) => {
    renderWithProviders(<CharacterList />);

    const characterName = await screen.findByRole("heading", { name });

    expect(characterName).toBeInTheDocument();
  });
});
