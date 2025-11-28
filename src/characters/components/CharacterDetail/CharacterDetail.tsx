import Grid from "@app/shared/presentation/components/Grid/Grid";
import Info from "@app/shared/presentation/components/Info/Info";

import useCharacterDetail from "./useCharacterDetail";

import styles from "./CharacterDetail.module.css";

interface CharacterDetailProps {
  characterId: number;
}

const CharacterDetail = ({ characterId }: CharacterDetailProps) => {
  const { name, imageUrl, status, species, type, gender, origin, location } =
    useCharacterDetail(characterId);

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img
          src={imageUrl}
          alt={name}
          width={300}
          height={300}
          fetchPriority="high"
        />
      </div>
      <Grid size="large" className={styles.info}>
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
