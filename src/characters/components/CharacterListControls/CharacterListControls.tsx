import type { ComponentProps } from "react";

import Panel from "@app/ui/components/Panel/Panel";

import CharacterSearch from "../CharacterSearch/CharacterSearch";
import CharacterSorting from "../CharacterSorting/CharacterSorting";

import styles from "./CharacterListControls.module.css";

type CharacterListControlsProps = ComponentProps<"div">;

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
