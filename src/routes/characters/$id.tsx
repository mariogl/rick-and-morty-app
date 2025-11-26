import { createFileRoute } from "@tanstack/react-router";

import { getCharacterQuery } from "@app/characters/queries/useCharacterQuery";
import Title from "@app/ui/components/Title/Title";

const CharacterDetailPage = () => {
  const { id } = Route.useParams();

  return (
    <Title level={1} className="page-title">
      Character detail ${id}
    </Title>
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
