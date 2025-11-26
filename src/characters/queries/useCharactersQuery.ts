import type { CharacterClient } from "@characters/client/types";
import useCharacterClient from "@characters/client/useCharacterClient";
import { useSuspenseQuery } from "@tanstack/react-query";

import type { Character } from "../types";

export const getCharactersQuery = (characterClient: CharacterClient) => ({
  queryKey: ["characters"],
  queryFn: async () => {
    const characters = await characterClient.fetchCharacters();

    return characters;
  },
});

const useCharactersQuery = () => {
  const { characterClient } = useCharacterClient();

  return useSuspenseQuery<Character[]>(getCharactersQuery(characterClient));
};

export default useCharactersQuery;
