import { screen } from "@testing-library/react";
import { TestProviders } from "src/testUtils/TestProviders";

import { renderWithRouter } from "../../../testUtils/testUtils";
import CharacterMotherObject from "../../tests/CharacterMotherObject";
import CharacterList from "./CharacterList";

describe("CharacterList component", () => {
  const characters = [
    CharacterMotherObject.createRick(),
    CharacterMotherObject.createMorty(),
  ];

  it.for(characters)("should render character name $name", async ({ name }) => {
    renderWithRouter(
      <TestProviders>
        <CharacterList />
      </TestProviders>,
    );

    const characterName = await screen.findByRole("heading", { name });

    expect(characterName).toBeInTheDocument();
  });
});
