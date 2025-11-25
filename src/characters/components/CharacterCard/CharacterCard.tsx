import Card from "@ui/components/Card/Card";
import Title from "@ui/components/Title/Title";

import type { Character } from "../../types";
import styles from "./CharacterCard.module.css";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character: { name } }: CharacterCardProps) => {
  return (
    <Card>
      <Card.Body>
        <Title level={2} className={styles.characterName}>
          {name}
        </Title>
      </Card.Body>
    </Card>
  );
};

export default CharacterCard;
