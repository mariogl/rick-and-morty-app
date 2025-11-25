import CharacterList from "@characters/components/CharacterList/CharacterList";
import { charactersQuery } from "@characters/queries/useCharactersQuery";
import queryClient from "@client/queryClient";
import { createFileRoute } from "@tanstack/react-router";
import Title from "@ui/components/Title/Title";

const CharacterListPage = () => {
  return (
    <>
      <Title level={1} className="page-title">
        Character list
      </Title>
      <CharacterList />
    </>
  );
};

export const Route = createFileRoute("/characters/")({
  loader: () => queryClient.ensureQueryData(charactersQuery),
  component: CharacterListPage,
  pendingComponent: () => <div>Loading characters...</div>,
});
