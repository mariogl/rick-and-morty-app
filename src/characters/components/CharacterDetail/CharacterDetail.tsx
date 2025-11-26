import useCharacterQuery from "@app/characters/queries/useCharacterQuery";
import Grid from "@app/ui/components/Grid/Grid";
import Info from "@app/ui/components/Info/Info";

import styles from "./CharacterDetail.module.css";

interface CharacterDetailProps {
  characterId: string;
}

const CharacterDetail = ({ characterId }: CharacterDetailProps) => {
  const {
    data: { name, imageUrl, status, species, type, gender, origin, location },
  } = useCharacterQuery(Number(characterId));

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={imageUrl} alt={name} width={300} height={300} />
      </div>
      <Grid fixedColumns={2} className={styles.info}>
        <Grid.Item>
          <Info label="Status">{status}</Info>
        </Grid.Item>
        <Grid.Item>
          <Info label="Species">{species}</Info>
        </Grid.Item>
        <Grid.Item>
          <Info label="Type">{type || "-"}</Info>
        </Grid.Item>
        <Grid.Item>
          <Info label="Gender">{gender}</Info>
        </Grid.Item>
        <Grid.Item>
          <Info label="Origin">{origin}</Info>
        </Grid.Item>
        <Grid.Item>
          <Info label="Location">{location}</Info>
        </Grid.Item>
      </Grid>
    </div>
  );
};

export default CharacterDetail;
