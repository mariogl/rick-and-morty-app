import {
  createMemoryHistory,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { screen } from "@testing-library/react";

import type { CharacterClient } from "@app/characters/client/types";
import queryClient from "@app/client/queryClient";

import CharacterMotherObject from "../../character/tests/domain/CharacterMotherObject";
import { routeTree } from "../../routeTree.gen";
import { renderWithProviders } from "../../testUtils/testUtils";

describe("App", () => {
  const fakeCharacterClient: CharacterClient = {
    fetchCharacters: async () => [],
    fetchCharacterById: async (id: number) =>
      CharacterMotherObject.createCharacter({ id }),
  };

  const router = createRouter({
    routeTree,
    context: {
      queryClient,
      characterClient: fakeCharacterClient,
    },
    history: createMemoryHistory({
      initialEntries: ["/"],
    }),
  });

  it("should render the app's title", async () => {
    renderWithProviders(<RouterProvider router={router} />);

    const appTitle = await screen.findByText(/rick&morty app/i);

    expect(appTitle).toBeInTheDocument();
  });

  it("should render a link to the characters page", async () => {
    renderWithProviders(<RouterProvider router={router} />);

    const link = await screen.findByRole("link", {
      name: /character list/i,
    });

    expect(link).toBeInTheDocument();
  });
});
