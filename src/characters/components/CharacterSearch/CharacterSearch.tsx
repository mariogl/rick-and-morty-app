import { type ComponentProps, useEffect, useState } from "react";

import useCharacterSearch from "@app/characters/search/useCharacterSearch";
import useDebounceSearch from "@app/characters/search/useDebounceSearch";
import TextBox from "@app/ui/components/TextBox/TextBox";

type CharacterSearchProps = ComponentProps<"div">;

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

  return (
    <TextBox
      label="Search:"
      id="search"
      type="search"
      className={className}
      value={searchText}
      onChange={changeSearch}
    />
  );
};

export default CharacterSearch;
