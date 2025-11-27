import { createFileRoute } from "@tanstack/react-router";

import CharacterList from "@app/characters/components/CharacterList/CharacterList";
import CharacterListControls from "@app/characters/components/CharacterListControls/CharacterListControls";
import { getCharactersQuery } from "@app/characters/queries/useCharactersQuery";
import Title from "@app/ui/components/Title/Title";

const CharacterListPage = () => {
  return (
    <>
      <Title level={1} className="page-title">
        Character list
      </Title>
      <CharacterListControls />
      <CharacterList />
    </>
  );
};

export const Route = createFileRoute("/characters/")({
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(
      getCharactersQuery(context.characterClient),
    ),
  component: CharacterListPage,
  head: () => ({
    meta: [
      {
        title: "Character list - Rick&Morty App",
      },
    ],
  }),
});
