import CharacterClientProvider from "@characters/client/CharacterClientProvider";
import FetchCharacterClient from "@characters/client/FetchCharacterClient";
import type { CharacterClient } from "@characters/client/types";
import queryClient from "@client/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";

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
