import {
  createMemoryHistory,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { render, screen } from "@testing-library/react";

import { routeTree } from "../routeTree.gen";

describe("Character list page", () => {
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({
      initialEntries: ["/characters"],
    }),
  });

  it("should render the page's title", async () => {
    render(<RouterProvider router={router} />);

    const pageTitle = await screen.findByRole("heading", {
      name: /character list/i,
    });

    expect(pageTitle).toBeInTheDocument();
  });
});
