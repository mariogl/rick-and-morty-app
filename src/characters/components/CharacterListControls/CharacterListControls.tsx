import type { ComponentProps } from "react";

import {
  type CharacterSortableProperties,
  characterSortableProperties,
} from "@app/characters/sorting/types";
import useCharacterSort from "@app/characters/sorting/useCharacterSort";
import Dropdown from "@app/ui/components/Dropdown/Dropdown";
import Panel from "@app/ui/components/Panel/Panel";

type CharacterListControlsProps = ComponentProps<"div">;

const CharacterListControls = ({ className }: CharacterListControlsProps) => {
  const { sortCriterion, setSortCriterion } = useCharacterSort();

  const changeSortCriterion = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortCriterion(event.target.value as CharacterSortableProperties);
  };

  return (
    <Panel className={className}>
      <Dropdown
        label="Sort characters by:"
        id="sort"
        value={sortCriterion}
        onChange={changeSortCriterion}
      >
        {characterSortableProperties.map((property) => (
          <Dropdown.Item key={property} value={property}>
            {property}
          </Dropdown.Item>
        ))}
      </Dropdown>
    </Panel>
  );
};

export default CharacterListControls;
