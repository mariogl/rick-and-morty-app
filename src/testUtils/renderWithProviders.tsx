import type { CharacterClient } from "@characters/client/types";
import { render, type RenderOptions } from "@testing-library/react";
import type { PropsWithChildren } from "react";

import { TestProviders } from "./TestProviders";

type ProvidersOptions = RenderOptions & {
  characterClient?: CharacterClient;
};

const renderWithProviders = (
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

export default renderWithProviders;
