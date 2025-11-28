import useCharacters from "@app/character/presentation/hooks/useCharacters";
import Grid from "@app/ui/components/Grid/Grid";

import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterList = () => {
  const characters = useCharacters();

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
