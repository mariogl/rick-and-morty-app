import type { ComponentProps } from "react";
import React, { useEffect, useState } from "react";

import useCharacterSearch from "@app/characters/search/useCharacterSearch";
import useDebounceSearch from "@app/characters/search/useDebounceSearch";
import {
  type CharacterSortableProperties,
  characterSortableProperties,
  type SortableDirection,
} from "@app/characters/sorting/types";
import useCharacterSort from "@app/characters/sorting/useCharacterSort";
import Dropdown from "@app/ui/components/Dropdown/Dropdown";
import Panel from "@app/ui/components/Panel/Panel";
import TextBox from "@app/ui/components/TextBox/TextBox";

import styles from "./CharacterListControls.module.css";

type CharacterListControlsProps = ComponentProps<"div">;

const CharacterListControls = ({ className }: CharacterListControlsProps) => {
  const { sortCriterion, sortDirection, setSort } = useCharacterSort();
  const { search, setSearch } = useCharacterSearch();
  const [searchText, setSearchText] = useState(search || "");
  const debouncedSearch = useDebounceSearch(searchText);

  const changeSortCriterion = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const [criterion, direction] = event.target.value.split(",") as [
      CharacterSortableProperties,
      SortableDirection,
    ];

    setSort(criterion, direction);
  };

  const changeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    setSearch(debouncedSearch);
  }, [debouncedSearch, setSearch]);

  return (
    <Panel className={className}>
      <TextBox
        label="Search"
        id="search"
        type="search"
        value={searchText}
        className={`${styles.controls__item} ${styles["controls__item--large"]}`}
        onChange={changeSearch}
      />
      <Dropdown
        label="Sort characters by:"
        id="sort"
        className={styles.controls__item}
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
