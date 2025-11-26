import { Link } from "@tanstack/react-router";

import Card from "@app/ui/components/Card/Card";

import type { Character } from "../../types";

import styles from "./CharacterCard.module.css";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({
  character: { name, imageUrl },
}: CharacterCardProps) => {
  return (
    <Card type="floating" className={styles.character}>
      <Link to="/characters" aria-label={`View details of ${name}`}>
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
      </Link>
    </Card>
  );
};

export default CharacterCard;
