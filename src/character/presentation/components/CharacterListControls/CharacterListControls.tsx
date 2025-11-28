import CharacterSearch from "@app/character/presentation/components/CharacterSearch/CharacterSearch";
import CharacterSorting from "@app/character/presentation/components/CharacterSorting/CharacterSorting";
import Panel from "@app/shared/presentation/components/Panel/Panel";

import styles from "./CharacterListControls.module.css";

interface CharacterListControlsProps {
  className?: string;
}

const CharacterListControls = ({ className }: CharacterListControlsProps) => {
  return (
    <Panel className={className}>
      <CharacterSearch
        className={`${styles.controls__item} ${styles["controls__item--large"]}`}
      />
      <CharacterSorting className={styles.controls__item} />
    </Panel>
  );
};

export default CharacterListControls;
