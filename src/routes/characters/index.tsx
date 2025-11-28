import { createFileRoute, Link } from "@tanstack/react-router";
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

const ErrorComponent = () => {
  return (
    <div>
      <Title level={1} className="page-title">
        Oops! Something went wrong.
      </Title>
      <p>
        An unexpected error has occurred. Please try again later or go back to
        the <Link to="/characters">character list</Link>.
      </p>
    </div>
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
  errorComponent: ErrorComponent,
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
