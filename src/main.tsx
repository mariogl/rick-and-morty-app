import { QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import FetchCharacterClient from "@app/character/data/FetchCharacterClient";
import environment from "@app/shared/config/environment";
import queryClient from "@app/shared/presentation/client/queryClient";
import { routeTree } from "@app/shared/presentation/router/routeTree.gen";

import "@app/shared/presentation/styles/index.css";

const characterClient = new FetchCharacterClient(environment.apiBaseUrl);

const router = createRouter({
  routeTree,
  context: {
    queryClient,
    characterClient,
  },
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
