import CharacterClient from "@characters/client/CharacterClient";
import { useSuspenseQuery } from "@tanstack/react-query";
import environment from "src/environment";

import type { Character } from "../types";

export const charactersQuery = {
  queryKey: ["characters"],
  queryFn: async () => {
    const client = new CharacterClient(environment.apiBaseUrl);

    const characters = await client.fetchCharacters();

    return characters;
  },
};

const useCharactersQuery = () => {
  return useSuspenseQuery<Character[]>(charactersQuery);
};

export default useCharactersQuery;
