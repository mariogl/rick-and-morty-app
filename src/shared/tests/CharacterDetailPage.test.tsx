import {
  createMemoryHistory,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { screen } from "@testing-library/dom";

import FetchCharacterClient from "@app/character/data/FetchCharacterClient";
import CharacterMotherObject from "@app/character/tests/domain/CharacterMotherObject";
import environment from "@app/shared/config/environment";
import queryClient from "@app/shared/presentation/client/queryClient";
import { routeTree } from "@app/shared/presentation/router/routeTree.gen";
import { renderWithProviders } from "@app/shared/testUtils/testUtils";

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
