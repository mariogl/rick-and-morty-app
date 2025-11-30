import Card from "@app/shared/presentation/components/Card/Card";
import Grid from "@app/shared/presentation/components/Grid/Grid";

import styles from "./CharacterListSkeleton.module.css";

const CharacterListSkeleton = () => {
  const skeletonItemsCount = 10;

  const skeletonItems = Array.from(
    { length: skeletonItemsCount },
    (_, index) => (
      <Card key={index} type="floating" className={styles.skeleton__card}>
        <div className={styles.skeleton__image}></div>
      </Card>
    ),
  );

  return (
    <div aria-label="Loading characters list" aria-busy="true">
      <Grid className={styles.skeleton} aria-hidden="true">
        {skeletonItems}
      </Grid>
    </div>
  );
};

export default CharacterListSkeleton;
