import queryClient from "@client/queryClient";
import {
  createMemoryHistory,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { screen } from "@testing-library/react";
import renderWithProviders from "src/testUtils/renderWithProviders";

import { routeTree } from "../routeTree.gen";

describe("App", () => {
  const router = createRouter({
    routeTree,
    context: {
      queryClient,
      characterClient: {
        fetchCharacters: async () => [],
      },
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
