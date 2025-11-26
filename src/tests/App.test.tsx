import queryClient from "@client/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
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
    context: {
      queryClient,
    },
    history: createMemoryHistory({
      initialEntries: ["/"],
    }),
  });

  it("should render the app's title", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>,
    );

    const appTitle = await screen.findByText(/rick&morty app/i);

    expect(appTitle).toBeInTheDocument();
  });

  it("should render a link to the characters page", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>,
    );

    const link = await screen.findByRole("link", {
      name: /character list/i,
    });

    expect(link).toBeInTheDocument();
  });
});
