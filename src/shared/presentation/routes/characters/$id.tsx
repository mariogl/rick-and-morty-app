import { createFileRoute, Link } from "@tanstack/react-router";

import CharacterDetail from "@app/character/presentation/components/CharacterDetail/CharacterDetail";
import CharacterDetailSkeleton from "@app/character/presentation/components/CharacterDetailSkeleton/CharacterDetailSkeleton";
import useCharacterQuery, {
  getCharacterQuery,
} from "@app/character/presentation/queries/useCharacterQuery";
import { compositionRoot } from "@app/CompositionRoot";
import Title from "@app/shared/presentation/components/Title/Title";

const CharacterDetailPage = () => {
  const { id } = Route.useParams();

  const { data: character } = useCharacterQuery(Number(id));

  return (
    <>
      <Title level={1} className="page-title">
        {character.name}
      </Title>
      <CharacterDetail characterId={Number(id)} />
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

const PendingComponent = () => (
  <>
    <Title level={1} className="page-title">
      ...
    </Title>
    <CharacterDetailSkeleton />
  </>
);

export const Route = createFileRoute("/characters/$id")({
  loader: ({ context, params }) =>
    context.queryClient.ensureQueryData(
      getCharacterQuery({
        getCharacterDetailUseCase:
          compositionRoot.getGetCharacterDetailUseCase(),
        characterId: Number(params.id),
      }),
    ),
  component: CharacterDetailPage,
  pendingComponent: PendingComponent,
  errorComponent: ErrorComponent,
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.name} - Rick&Morty App`,
      },
    ],
  }),
});
