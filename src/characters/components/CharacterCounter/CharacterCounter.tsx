import useCharactersQuery from "@app/characters/queries/useCharactersQuery";
import useCharacterSearch from "@app/characters/search/useCharacterSearch";
import useCharacterSort from "@app/characters/sorting/useCharacterSort";

import styles from "./CharacterCounter.module.css";

const CharacterCounter = () => {
  const { sortCriterion, sortDirection } = useCharacterSort();
  const { search } = useCharacterSearch();
  const { data } = useCharactersQuery(search);

  const sortedCharacters = data.sort((characterA, characterB) => {
    const comparison = characterA[sortCriterion].localeCompare(
      characterB[sortCriterion],
    );

    return sortDirection === "asc" ? comparison : -comparison;
  });

  const characters = sortedCharacters;

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
