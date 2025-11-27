import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { render, screen } from "@testing-library/react";
import { TestProviders } from "src/testUtils/TestProviders";

import CharacterMotherObject from "../../tests/CharacterMotherObject";
import CharacterList from "./CharacterList";

describe("CharacterList component", () => {
  const characters = [
    CharacterMotherObject.createRick(),
    CharacterMotherObject.createMorty(),
  ];

  const rootRoute = createRootRoute();

  const charactersRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/characters/",
    component: () => (
      <TestProviders>
        <CharacterList />
      </TestProviders>
    ),
  });

  const routeTree = rootRoute.addChildren([charactersRoute]);

  const router = createRouter({
    routeTree,
    history: createMemoryHistory({
      initialEntries: ["/characters?sortBy=name"],
    }),
  });

  it.for(characters)("should render character name $name", async ({ name }) => {
    render(<RouterProvider router={router} />);

    const characterName = await screen.findByRole("heading", { name });

    expect(characterName).toBeInTheDocument();
  });
});
