import { createFileRoute } from "@tanstack/react-router";
import z from "zod";

import CharacterCounter from "@app/characters/components/CharacterCounter/CharacterCounter";
import CharacterList from "@app/characters/components/CharacterList/CharacterList";
import CharacterListControls from "@app/characters/components/CharacterListControls/CharacterListControls";
import CharacterListSkeleton from "@app/characters/components/CharacterListSkeleton/CharacterListSkeleton";
import { getCharactersQuery } from "@app/characters/queries/useCharactersQuery";
import {
  characterSortableProperties,
  sortableDirections,
} from "@app/characters/sorting/types";
import Title from "@app/ui/components/Title/Title";

const CharacterListPageHeader = () => {
  return (
    <>
      <Title level={1} className="page-title">
        Character list
      </Title>
      <CharacterListControls className="controls" />
    </>
  );
};

const CharacterListPage = () => {
  return (
    <>
      <CharacterCounter />
      <CharacterList />
    </>
  );
};

export const Route = createFileRoute("/characters/")({
  loaderDeps: ({ search: { search } }) => ({ search }),
  loader: ({ context, deps: { search } }) =>
    context.queryClient.ensureQueryData(
      getCharactersQuery(context.characterClient, search),
    ),
  component: () => (
    <>
      <CharacterListPageHeader />
      <CharacterListPage />
    </>
  ),
  pendingComponent: () => (
    <>
      <CharacterListPageHeader />
      <CharacterListSkeleton />
    </>
  ),
  pendingMs: 500,
  head: () => ({
    meta: [
      {
        title: "Character list - Rick&Morty App",
      },
    ],
  }),
  validateSearch: z.object({
    sortBy: z.enum(characterSortableProperties).default("name"),
    sortDirection: z.enum(sortableDirections).default("asc"),
    search: z.string().optional(),
  }),
});
