import Card from "@app/ui/components/Card/Card";

import type { Character } from "../../types";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({
  character: { name, imageUrl },
}: CharacterCardProps) => {
  return (
    <Card type="floating">
      <Card.Image
        src={imageUrl}
        alt=""
        width={300}
        height={300}
        loading="lazy"
      />
      <Card.Body>
        <Card.Title level={2}>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CharacterCard;
