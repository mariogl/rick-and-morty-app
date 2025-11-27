import {
  useSuspenseQuery,
  type UseSuspenseQueryOptions,
} from "@tanstack/react-query";

import type { CharacterClient } from "@app/characters/client/types";
import useCharacterClient from "@app/characters/client/useCharacterClient";

import type { Character } from "../types";

export const getCharactersQuery = (
  characterClient: CharacterClient,
  search?: string,
): UseSuspenseQueryOptions<Character[]> => ({
  queryKey: ["characters", search],
  queryFn: async () => {
    const characters = await characterClient.fetchCharacters(search);

    return characters;
  },
});

const useCharactersQuery = (search?: string) => {
  const { characterClient } = useCharacterClient();

  return useSuspenseQuery<Character[]>(
    getCharactersQuery(characterClient, search),
  );
};

export default useCharactersQuery;
