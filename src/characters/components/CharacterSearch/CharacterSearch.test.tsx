import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TestProviders } from "../../../testUtils/TestProviders";
import CharacterSearch from "./CharacterSearch";

const user = userEvent.setup();

describe("CharacterSearch component", () => {
  const rootRoute = createRootRoute();

  const charactersRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/characters/",
    component: () => (
      <TestProviders>
        <CharacterSearch />
      </TestProviders>
    ),
  });

  const routeTree = rootRoute.addChildren([charactersRoute]);

  const router = createRouter({
    routeTree,
    history: createMemoryHistory({
      initialEntries: ["/characters"],
    }),
  });

  it("should allow the user to type in the search box", async () => {
    render(<RouterProvider router={router} />);

    const searchInput = await screen.findByRole("searchbox", {
      name: /search:/i,
    });

    await user.type(searchInput, "Rick");

    expect(searchInput).toHaveValue("Rick");
  });

  it("should allow the user to clear the search box", async () => {
    render(<RouterProvider router={router} />);

    const searchInput = await screen.findByRole("searchbox", {
      name: /search:/i,
    });

    await user.type(searchInput, "Morty");

    const clearButton = await screen.findByRole("button", {
      name: /clear search/i,
    });

    await user.click(clearButton);

    expect(searchInput).toHaveValue("");
  });
});
