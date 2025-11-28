import {
  useSuspenseQuery,
  type UseSuspenseQueryOptions,
} from "@tanstack/react-query";

import type GetCharacterDetailUseCase from "@app/character/application/GetCharacterDetailUseCase";
import type { Character } from "@app/character/domain/Character";
import { compositionRoot } from "@app/CompositionRoot";

export const getCharacterQuery = ({
  getCharacterDetailUseCase,
  characterId,
}: {
  getCharacterDetailUseCase: GetCharacterDetailUseCase;
  characterId: number;
}): UseSuspenseQueryOptions<Character> => ({
  queryKey: ["character", characterId],
  queryFn: async () => {
    const character = await getCharacterDetailUseCase.execute(characterId);

    return character;
  },
});

const useCharacterQuery = (characterId: number) => {
  const getCharacterDetailUseCase =
    compositionRoot.getGetCharacterDetailUseCase();

  return useSuspenseQuery<Character>(
    getCharacterQuery({ getCharacterDetailUseCase, characterId }),
  );
};

export default useCharacterQuery;
