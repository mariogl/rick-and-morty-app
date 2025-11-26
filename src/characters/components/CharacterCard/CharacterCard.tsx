import Card from "@app/ui/components/Card/Card";
import Title from "@app/ui/components/Title/Title";

import type { Character } from "../../types";

import styles from "./CharacterCard.module.css";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({
  character: { name, imageUrl },
}: CharacterCardProps) => {
  return (
    <Card>
      <Card.Image
        src={imageUrl}
        alt=""
        width={300}
        height={300}
        loading="lazy"
      />
      <Card.Body>
        <Title level={2} className={styles.characterName}>
          {name}
        </Title>
      </Card.Body>
    </Card>
  );
};

export default CharacterCard;
