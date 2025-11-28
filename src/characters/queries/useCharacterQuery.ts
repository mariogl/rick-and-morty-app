import {
  useSuspenseQuery,
  type UseSuspenseQueryOptions,
} from "@tanstack/react-query";

import type { Character } from "@app/character/domain/Character";

import type { CharacterClient } from "../client/types";
import useCharacterClient from "../client/useCharacterClient";
export const getCharacterQuery = (
  characterClient: CharacterClient,
  characterId: number,
): UseSuspenseQueryOptions<Character> => ({
  queryKey: ["character", characterId],
  queryFn: async () => {
    const character = await characterClient.fetchCharacterById(characterId);

    return character;
  },
});

const useCharacterQuery = (characterId: number) => {
  const { characterClient } = useCharacterClient();

  return useSuspenseQuery<Character>(
    getCharacterQuery(characterClient, characterId),
  );
};

export default useCharacterQuery;
