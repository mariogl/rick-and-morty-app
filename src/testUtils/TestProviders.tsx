import { QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";

import CharacterClientProvider from "@app/characters/client/CharacterClientProvider";
import FetchCharacterClient from "@app/characters/client/FetchCharacterClient";
import type { CharacterClient } from "@app/characters/client/types";
import queryClient from "@app/client/queryClient";

import environment from "../environment";

interface TestProvidersProps {
  characterClient?: CharacterClient;
}

export const TestProviders = ({
  characterClient,
  children,
}: PropsWithChildren<TestProvidersProps>) => {
  if (!characterClient) {
    characterClient = new FetchCharacterClient(environment.apiBaseUrl);
  }

  return (
    <CharacterClientProvider characterClient={characterClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </CharacterClientProvider>
  );
};
