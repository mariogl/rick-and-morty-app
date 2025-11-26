import Grid from "@app/ui/components/Grid/Grid";

import useCharactersQuery from "../../queries/useCharactersQuery";
import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterList = () => {
  const { data: characters } = useCharactersQuery();

  return (
    <Grid>
      {characters.map((character) => (
        <Grid.Item key={character.id}>
          <CharacterCard character={character} />
        </Grid.Item>
      ))}
    </Grid>
  );
};

export default CharacterList;
