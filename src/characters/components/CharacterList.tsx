import Card from "@ui/components/Card/Card";
import Grid from "@ui/components/Grid/Grid";
import Title from "@ui/components/Title/Title";

const CharacterList = () => {
  return (
    <Grid>
      <Grid.Item>
        <Card>
          <Card.Body>
            <Title level={2}>Rick Sanchez</Title>
          </Card.Body>
        </Card>
      </Grid.Item>
      <Grid.Item>
        <Card>
          <Card.Body>
            <Title level={2}>Morty Smith</Title>
          </Card.Body>
        </Card>
      </Grid.Item>
    </Grid>
  );
};

export default CharacterList;
