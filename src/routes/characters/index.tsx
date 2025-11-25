import { createFileRoute } from "@tanstack/react-router";

import Title from "../../ui/components/Title/Title";

const CharactersListPage = () => {
  return (
    <Title level={1} className="page-title">
      Characters
    </Title>
  );
};

export const Route = createFileRoute("/characters/")({
  component: CharactersListPage,
});
