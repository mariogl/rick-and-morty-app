import type { ComponentProps } from "react";
import React from "react";

import {
  type CharacterSortableProperties,
  characterSortableProperties,
  type SortableDirection,
} from "@app/characters/sorting/types";
import useCharacterSort from "@app/characters/sorting/useCharacterSort";
import Dropdown from "@app/ui/components/Dropdown/Dropdown";
import Panel from "@app/ui/components/Panel/Panel";

type CharacterListControlsProps = ComponentProps<"div">;

const CharacterListControls = ({ className }: CharacterListControlsProps) => {
  const { sortCriterion, sortDirection, setSort } = useCharacterSort();

  const changeSortCriterion = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const [criterion, direction] = event.target.value.split(",") as [
      CharacterSortableProperties,
      SortableDirection,
    ];

    setSort(criterion, direction);
  };

  return (
    <Panel className={className}>
      <Dropdown
        label="Sort characters by:"
        id="sort"
        value={`${sortCriterion},${sortDirection}`}
        onChange={changeSortCriterion}
      >
        {characterSortableProperties.map((property) => (
          <React.Fragment key={property}>
            <Dropdown.Item value={`${property},asc`}>
              {property} (A-Z)
            </Dropdown.Item>
            <Dropdown.Item value={`${property},desc`}>
              {property} (Z-A)
            </Dropdown.Item>
          </React.Fragment>
        ))}
      </Dropdown>
    </Panel>
  );
};

export default CharacterListControls;
