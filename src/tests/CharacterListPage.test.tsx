import {
  createMemoryHistory,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { screen } from "@testing-library/react";

import queryClient from "@app/client/queryClient";

import { routeTree } from "../routeTree.gen";
import renderWithProviders from "../testUtils/renderWithProviders";

describe("Character list page", () => {
  const router = createRouter({
    routeTree,
    context: {
      queryClient,
      characterClient: { fetchCharacters: async () => [] },
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
