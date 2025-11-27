import Grid from "@app/ui/components/Grid/Grid";
import Info from "@app/ui/components/Info/Info";

import styles from "./CharacterDetailSkeleton.module.css";

const CharacterDetailSkeleton = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skeleton__image}></div>
      <Grid size="large" className={styles.skeleton__info}>
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
