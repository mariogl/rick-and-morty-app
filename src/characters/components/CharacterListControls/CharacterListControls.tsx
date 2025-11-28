import Panel from "@app/shared/presentation/components/Panel/Panel";

import CharacterSearch from "../CharacterSearch/CharacterSearch";
import CharacterSorting from "../CharacterSorting/CharacterSorting";

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
