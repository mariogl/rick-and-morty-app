import useCharacterQuery from "@app/characters/queries/useCharacterQuery";
import type { Character } from "@app/characters/types";

const useCharacterDetail = (characterId: number): Character => {
  const { data } = useCharacterQuery(characterId);

  return data;
};

export default useCharacterDetail;
