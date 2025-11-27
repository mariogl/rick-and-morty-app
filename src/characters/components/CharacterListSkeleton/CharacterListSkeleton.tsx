import Card from "@app/ui/components/Card/Card";
import Grid from "@app/ui/components/Grid/Grid";

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

  return <Grid className={styles.skeleton}>{skeletonItems}</Grid>;
};

export default CharacterListSkeleton;
