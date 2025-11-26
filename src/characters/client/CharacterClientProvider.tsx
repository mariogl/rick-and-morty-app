import { type PropsWithChildren, useMemo } from "react";

import { CharacterClientContext } from "./CharacterClientContext";
import type { CharacterClient } from "./types";

export type CharacterClientContextType = {
  characterClient: CharacterClient;
};

interface CharacterClientProviderProps {
  characterClient: CharacterClient;
}

const CharacterClientProvider = ({
  characterClient,
  children,
}: PropsWithChildren<CharacterClientProviderProps>) => {
  const contextValue: CharacterClientContextType = useMemo(
    () => ({
      characterClient,
    }),
    [characterClient],
  );

  return (
    <CharacterClientContext.Provider value={contextValue}>
      {children}
    </CharacterClientContext.Provider>
  );
};

export default CharacterClientProvider;
