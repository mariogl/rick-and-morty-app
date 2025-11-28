import classNames from "classnames";
import { useEffect, useState } from "react";

import useCharacterSearch from "@app/character/presentation/hooks/useCharacterSearch";
import useDebounceSearch from "@app/character/presentation/hooks/useDebounceSearch";
import Button from "@app/shared/presentation/components/Button/Button";
import ClearIcon from "@app/shared/presentation/components/Icon/ClearIcon";
import TextBox from "@app/shared/presentation/components/TextBox/TextBox";

import styles from "./CharacterSearch.module.css";
interface CharacterSearchProps {
  className?: string;
}

const CharacterSearch = ({ className }: CharacterSearchProps) => {
  const { search, setSearch } = useCharacterSearch();
  const [searchText, setSearchText] = useState(search || "");
  const debouncedSearch = useDebounceSearch(searchText);

  const changeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    setSearch(debouncedSearch);
  }, [debouncedSearch, setSearch]);

  const resetSearch = () => {
    setSearchText("");
    setSearch("");
  };

  const finalClassName = classNames(styles.search, className);

  return (
    <div className={finalClassName}>
      <TextBox
        label="Search:"
        id="search"
        type="search"
        value={searchText}
        onChange={changeSearch}
      />
      {searchText !== "" && (
        <Button className={styles.search__button} onClick={resetSearch}>
          <ClearIcon label="clear search" />
        </Button>
      )}
    </div>
  );
};

export default CharacterSearch;
