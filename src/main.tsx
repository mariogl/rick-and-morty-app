import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import CharacterClientProvider from "@app/characters/client/CharacterClientProvider";
import FetchCharacterClient from "@app/characters/client/FetchCharacterClient";
import queryClient from "@app/client/queryClient";

import environment from "./environment";
import { routeTree } from "./routeTree.gen";

import "./styles/index.css";

const characterClient = new FetchCharacterClient(environment.apiBaseUrl);

const router = createRouter({
  routeTree,
  context: {
    queryClient,
    characterClient,
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CharacterClientProvider characterClient={characterClient}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </CharacterClientProvider>
  </StrictMode>,
);
