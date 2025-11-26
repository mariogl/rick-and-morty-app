import { createFileRoute } from "@tanstack/react-router";

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
  component: CharacterDetailPage,
});
