import { Link } from "@tanstack/react-router";

import type { Character } from "@app/character/domain/Character";
import Card from "@app/shared/presentation/components/Card/Card";

import styles from "./CharacterCard.module.css";

interface CharacterCardProps {
  character: Character;
  position?: number;
}

const CharacterCard = ({
  character: { id, name, gender, status, imageUrl },
  position,
}: CharacterCardProps) => {
  let loading: "eager" | "lazy" = "lazy";
  let fetchPriority: "high" | "auto" = "auto";

  if (typeof position !== "undefined") {
    const lastRowIndex = 4;

    if (position <= lastRowIndex) {
      loading = "eager";
      fetchPriority = "high";
    }
  }

  return (
    <Card type="floating" className={styles.character}>
      <Link
        to="/characters/$id"
        params={{ id: id.toString() }}
        aria-label={`View details of ${name}`}
      >
        <Card.Image
          src={imageUrl}
          alt=""
          width={300}
          height={300}
          loading={loading}
          fetchPriority={fetchPriority}
        />
        <Card.Body className={styles.character__data}>
          <Card.Title level={2}>{name}</Card.Title>
          <span>Gender: {gender}</span>
          <span>Status: {status}</span>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default CharacterCard;
