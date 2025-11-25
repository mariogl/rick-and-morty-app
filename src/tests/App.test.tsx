import {
  createMemoryHistory,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { render, screen } from "@testing-library/react";

import { routeTree } from "../routeTree.gen";

describe("App", () => {
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({
      initialEntries: ["/"],
    }),
  });

  it("should render the app's title", async () => {
    render(<RouterProvider router={router} />);

    const appTitle = await screen.findByText(/rick&morty app/i);

    expect(appTitle).toBeInTheDocument();
  });

  it("should render a link to the characters page", async () => {
    render(<RouterProvider router={router} />);

    const link = await screen.findByRole("link", {
      name: /character list/i,
    });

    expect(link).toBeInTheDocument();
  });
});
