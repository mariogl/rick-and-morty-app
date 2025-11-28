import {
  useSuspenseQuery,
  type UseSuspenseQueryOptions,
} from "@tanstack/react-query";

import type GetCharactersUseCase from "@app/character/application/GetCharactersUseCase";
import type { Character } from "@app/character/domain/Character";
import type {
  CharacterSortableProperties,
  SortableDirection,
} from "@app/character/domain/types";
import { compositionRoot } from "@app/CompositionRoot";

export const getCharactersQuery = ({
  getCharactersUseCase,
  search,
  sortCriterion,
  sortDirection,
}: {
  getCharactersUseCase: GetCharactersUseCase;
  search: string;
  sortCriterion: CharacterSortableProperties;
  sortDirection: SortableDirection;
}): UseSuspenseQueryOptions<Character[]> => ({
  queryKey: ["characters", search, sortCriterion, sortDirection],
  queryFn: async () => {
    const characters = await getCharactersUseCase.execute({
      search,
      sortCriterion,
      sortDirection,
    });

    return characters;
  },
});

const useCharactersQuery = ({
  search,
  sortCriterion,
  sortDirection,
}: {
  search?: string;
  sortCriterion: CharacterSortableProperties;
  sortDirection: SortableDirection;
}) => {
  const getCharactersUseCase = compositionRoot.getGetCharactersUseCase();

  return useSuspenseQuery<Character[]>(
    getCharactersQuery({
      getCharactersUseCase,
      search: search ?? "",
      sortCriterion,
      sortDirection,
    }),
  );
};

export default useCharactersQuery;
