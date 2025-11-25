import Card from "@ui/components/Card/Card";
import Title from "@ui/components/Title/Title";

import type { Character } from "../../types";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character: { name } }: CharacterCardProps) => {
  return (
    <Card>
      <Card.Body>
        <Title level={2}>{name}</Title>
      </Card.Body>
    </Card>
  );
};

export default CharacterCard;
