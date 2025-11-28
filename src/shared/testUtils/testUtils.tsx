import {
  createRootRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { render, type RenderOptions } from "@testing-library/react";
import type { PropsWithChildren } from "react";

import type { CharacterClient } from "@app/characters/client/types";

import { TestProviders } from "./TestProviders";

type ProvidersOptions = RenderOptions & {
  characterClient?: CharacterClient;
};

export const renderWithProviders = (
  ui: React.ReactNode,
  options?: ProvidersOptions,
) => {
  const wrapper = ({ children }: PropsWithChildren) => {
    return (
      <TestProviders characterClient={options?.characterClient}>
        {children}
      </TestProviders>
    );
  };

  return render(ui, { wrapper, ...options });
};

export const renderWithRouter = (component: React.ReactNode) => {
  const rootRoute = createRootRoute({
    component: () => component,
  });

  const router = createRouter({
    routeTree: rootRoute,
  });

  return render(<RouterProvider router={router} />);
};
