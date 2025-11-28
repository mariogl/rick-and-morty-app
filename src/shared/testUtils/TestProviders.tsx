import { QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";

import FetchCharacterClient from "@app/character/data/FetchCharacterClient";
import type { CharacterClient } from "@app/character/domain/CharacterClient";
import environment from "@app/shared/config/environment";
import queryClient from "@app/shared/presentation/client/queryClient";

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
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
