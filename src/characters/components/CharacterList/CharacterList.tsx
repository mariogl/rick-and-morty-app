import useCharacterSort from "@app/characters/sorting/useCharacterSort";
import Grid from "@app/ui/components/Grid/Grid";

import useCharactersQuery from "../../queries/useCharactersQuery";
import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterList = () => {
  const { data } = useCharactersQuery();
  const { sortCriterion, sortDirection } = useCharacterSort();
  const sortedCharacters = data.sort((characterA, characterB) => {
    const comparison = characterA[sortCriterion].localeCompare(
      characterB[sortCriterion],
    );

    return sortDirection === "asc" ? comparison : -comparison;
  });
  const characters = sortedCharacters;

  return (
    <Grid>
      {characters.map((character, index) => (
        <Grid.Item key={character.id}>
          <CharacterCard character={character} position={index} />
        </Grid.Item>
      ))}
    </Grid>
  );
};

export default CharacterList;
