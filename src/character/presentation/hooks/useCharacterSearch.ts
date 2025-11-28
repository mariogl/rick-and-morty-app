import { useNavigate, useSearch } from "@tanstack/react-router";

const useCharacterSearch = () => {
  const navigate = useNavigate({ from: "/characters" });
  const { search } = useSearch({ from: "/characters/" });

  const setSearch = (searchText: string) => {
    navigate({
      search: (previousParams) => ({
        ...previousParams,
        search: searchText,
      }),
    });
  };

  return {
    search,
    setSearch,
  };
};

export default useCharacterSearch;
