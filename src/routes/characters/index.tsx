import { createFileRoute } from "@tanstack/react-router";
import CharacterList from "src/characters/components/CharacterList";

import Title from "../../ui/components/Title/Title";

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
  component: CharacterListPage,
});
