import { createFileRoute } from "@tanstack/react-router";

import CharacterDetail from "@app/characters/components/CharacterDetail/CharacterDetail";
import useCharacterQuery, {
  getCharacterQuery,
} from "@app/characters/queries/useCharacterQuery";
import Title from "@app/ui/components/Title/Title";

const CharacterDetailPage = () => {
  const { id } = Route.useParams();

  const { data: character } = useCharacterQuery(Number(id));

  return (
    <>
      <Title level={1} className="page-title">
        {character.name}
      </Title>
      <CharacterDetail characterId={id} />
    </>
  );
};

export const Route = createFileRoute("/characters/$id")({
  loader: ({ context, params }) =>
    context.queryClient.ensureQueryData(
      getCharacterQuery(context.characterClient, Number(params.id)),
    ),
  component: CharacterDetailPage,
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.name} - Rick&Morty App`,
      },
    ],
  }),
});
