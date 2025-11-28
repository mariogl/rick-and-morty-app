import {
  createMemoryHistory,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { screen } from "@testing-library/react";

import type { CharacterClient } from "@app/character/domain/CharacterClient";
import queryClient from "@app/shared/presentation/client/queryClient";
import { routeTree } from "@app/shared/presentation/router/routeTree.gen";
import { renderWithProviders } from "@app/shared/testUtils/testUtils";

import CharacterMotherObject from "../../character/tests/domain/CharacterMotherObject";

describe("Character list page", () => {
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
      initialEntries: ["/characters"],
    }),
  });

  it("should render the page's title", async () => {
    renderWithProviders(<RouterProvider router={router} />);

    const pageTitle = await screen.findByRole("heading", {
      name: /character list/i,
    });

    expect(pageTitle).toBeInTheDocument();
  });
});
