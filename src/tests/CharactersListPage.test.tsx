import {
  createMemoryHistory,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { render, screen } from "@testing-library/react";

import { routeTree } from "../routeTree.gen";

describe("Characters list page", () => {
  it("should render the page's title", async () => {
    const router = createRouter({
      routeTree,
      history: createMemoryHistory({
        initialEntries: ["/characters"],
      }),
    });

    render(<RouterProvider router={router} />);

    const pageTitle = await screen.findByRole("heading", {
      name: /characters list/i,
    });

    expect(pageTitle).toBeInTheDocument();
  });
});
