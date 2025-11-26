import queryClient from "@client/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
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
    context: {
      queryClient,
    },
    history: createMemoryHistory({
      initialEntries: ["/characters"],
    }),
  });

  it("should render the page's title", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>,
    );

    const pageTitle = await screen.findByRole("heading", {
      name: /character list/i,
    });

    expect(pageTitle).toBeInTheDocument();
  });
});
