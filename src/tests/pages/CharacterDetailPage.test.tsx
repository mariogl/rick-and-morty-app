import {
  createMemoryHistory,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { screen } from "@testing-library/dom";

import FetchCharacterClient from "@app/character/data/FetchCharacterClient";
import queryClient from "@app/client/queryClient";

import CharacterMotherObject from "../../character/tests/domain/CharacterMotherObject";
import environment from "../../environment";
import { routeTree } from "../../routeTree.gen";
import { renderWithProviders } from "../../testUtils/testUtils";

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
