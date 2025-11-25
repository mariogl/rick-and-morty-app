import { useSuspenseQuery } from "@tanstack/react-query";

import type { Character } from "../types";

export const charactersQuery = {
  queryKey: ["characters"],
  queryFn: () => {
    return Promise.resolve([
      { id: 1, name: "Rick Sanchez" },
      { id: 2, name: "Morty Smith" },
    ]);
  },
};

const useCharactersQuery = () => {
  return useSuspenseQuery<Character[]>(charactersQuery);
};

export default useCharactersQuery;
