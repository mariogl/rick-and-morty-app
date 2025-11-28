import React from "react";

import {
  type CharacterSortableProperties,
  characterSortableProperties,
  type SortableDirection,
} from "@app/characters/sorting/types";
import useCharacterSort from "@app/characters/sorting/useCharacterSort";
import Dropdown from "@app/ui/components/Dropdown/Dropdown";

interface CharacterSortingProps {
  className: string;
}

const CharacterSorting = ({ className }: CharacterSortingProps) => {
  const { sortCriterion, sortDirection, setSort } = useCharacterSort();

  const changeSortCriterion = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const [criterion, direction] = event.target.value.split(",") as [
      CharacterSortableProperties,
      SortableDirection,
    ];

    setSort(criterion, direction);
  };

  return (
    <Dropdown
      label="Sort characters by:"
      id="sort"
      className={className}
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
  );
};

export default CharacterSorting;
