import type { Character } from "@app/character/domain/Character";
import useCharacterQuery from "@app/character/presentation/queries/useCharacterQuery";

const useCharacterDetail = (characterId: number): Character => {
  const { data } = useCharacterQuery(characterId);

  return data;
};

export default useCharacterDetail;
