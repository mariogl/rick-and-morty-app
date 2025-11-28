import useCharacters from "@app/character/presentation/hooks/useCharacters";

import styles from "./CharacterCounter.module.css";

const CharacterCounter = () => {
  const characters = useCharacters();

  if (characters.length === 0) {
    return (
      <div className={styles.counter}>
        <span className={styles["counter__empty-icon"]}>🛸</span>
        <span>No characters found</span>
      </div>
    );
  }

  return (
    <div className={styles.counter}>Showing {characters.length} characters</div>
  );
};

export default CharacterCounter;
