import { useSuspenseQuery } from "@tanstack/react-query";

import type { CharacterClient } from "@app/characters/client/types";
import useCharacterClient from "@app/characters/client/useCharacterClient";

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
