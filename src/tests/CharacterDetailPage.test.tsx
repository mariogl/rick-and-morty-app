import {
  createMemoryHistory,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { screen } from "@testing-library/dom";
import environment from "src/environment";
import { renderWithProviders } from "src/testUtils/testUtils";

import FetchCharacterClient from "@app/characters/client/FetchCharacterClient";
import CharacterMotherObject from "@app/characters/tests/CharacterMotherObject";
import queryClient from "@app/client/queryClient";

import { routeTree } from "../routeTree.gen";

describe("Character detail page", () => {
  const router = createRouter({
    routeTree,
    context: {
      queryClient,
      characterClient: new FetchCharacterClient(environment.apiBaseUrl),
    },
    history: createMemoryHistory({
      initialEntries: ["/characters/1"],
    }),
  });

  const rick = CharacterMotherObject.createRick();

  it("should render the character's name", async () => {
    renderWithProviders(<RouterProvider router={router} />);

    const pageTitle = await screen.findByRole("heading", {
      name: rick.name,
    });

    expect(pageTitle).toBeInTheDocument();
  });

  it("should render the character's image", async () => {
    renderWithProviders(<RouterProvider router={router} />);

    const image = await screen.findByAltText(rick.name);

    expect(image).toBeInTheDocument();
  });
});
