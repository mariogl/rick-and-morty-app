import { createFileRoute } from "@tanstack/react-router";

const CharactersListPage = () => {
  return <h2>Characters list</h2>;
};

export const Route = createFileRoute("/characters/")({
  component: CharactersListPage,
});
