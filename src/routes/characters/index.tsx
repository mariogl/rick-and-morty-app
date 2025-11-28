import { createFileRoute, Link } from "@tanstack/react-router";
import z from "zod";

import {
  characterSortableProperties,
  sortableDirections,
} from "@app/character/domain/types";
import { getCharactersQuery } from "@app/character/presentation/queries/useCharactersQuery";
import CharacterCounter from "@app/characters/components/CharacterCounter/CharacterCounter";
import CharacterList from "@app/characters/components/CharacterList/CharacterList";
import CharacterListControls from "@app/characters/components/CharacterListControls/CharacterListControls";
import CharacterListSkeleton from "@app/characters/components/CharacterListSkeleton/CharacterListSkeleton";
import { compositionRoot } from "@app/CompositionRoot";
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
  loaderDeps: ({ search: { search, sortBy, sortDirection } }) => ({
    search,
    sortBy,
    sortDirection,
  }),
  loader: ({ context, deps: { search, sortBy, sortDirection } }) =>
    context.queryClient.ensureQueryData(
      getCharactersQuery({
        search: search ?? "",
        sortCriterion: sortBy,
        sortDirection,
        getCharactersUseCase: compositionRoot.getGetCharactersUseCase(),
      }),
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
