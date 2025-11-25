import queryClient from "@client/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";

import CharacterMotherObject from "../../tests/CharacterMotherObject";
import CharacterList from "./CharacterList";

describe("CharacterList component", () => {
  const characters = [
    CharacterMotherObject.createCharacter({ name: "Rick Sanchez" }),
    CharacterMotherObject.createCharacter({ name: "Morty Smith" }),
  ];

  it.for(characters)("should render character name $name", async ({ name }) => {
    render(
      <QueryClientProvider client={queryClient}>
        <CharacterList />
      </QueryClientProvider>,
    );

    const characterName = await screen.findByRole("heading", { name });

    expect(characterName).toBeInTheDocument();
  });
});
