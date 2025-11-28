import CharacterCard from "@app/character/presentation/components/CharacterCard/CharacterCard";
import useCharacters from "@app/character/presentation/hooks/useCharacters";
import Grid from "@app/shared/presentation/components/Grid/Grid";

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
