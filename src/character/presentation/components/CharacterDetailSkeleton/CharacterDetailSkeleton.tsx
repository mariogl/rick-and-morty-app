import Grid from "@app/shared/presentation/components/Grid/Grid";
import Info from "@app/shared/presentation/components/Info/Info";

import styles from "./CharacterDetailSkeleton.module.css";

const CharacterDetailSkeleton = () => {
  return (
    <div
      className={styles.skeleton}
      aria-label="Loading character details"
      aria-busy="true"
    >
      <div className={styles.skeleton__image} aria-hidden="true"></div>
      <Grid size="large" className={styles.skeleton__info} aria-hidden="true">
        <Grid.Item>
          <Info className={styles.skeleton__item} label="&nbsp;">
            &nbsp;
          </Info>
        </Grid.Item>
        <Grid.Item>
          <Info className={styles.skeleton__item} label="&nbsp;">
            &nbsp;
          </Info>
        </Grid.Item>
        <Grid.Item>
          <Info className={styles.skeleton__item} label="&nbsp;">
            &nbsp;
          </Info>
        </Grid.Item>
        <Grid.Item>
          <Info className={styles.skeleton__item} label="&nbsp;">
            &nbsp;
          </Info>
        </Grid.Item>
        <Grid.Item>
          <Info className={styles.skeleton__item} label="&nbsp;">
            &nbsp;
          </Info>
        </Grid.Item>
        <Grid.Item>
          <Info className={styles.skeleton__item} label="&nbsp;">
            &nbsp;
          </Info>
        </Grid.Item>
      </Grid>
    </div>
  );
};

export default CharacterDetailSkeleton;
