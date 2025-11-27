import type { Character } from "../types";

export const characterSortableProperties: CharacterSortableProperties[] = [
  "name",
  "gender",
  "status",
];

export type CharacterSortableProperties = keyof Pick<
  Character,
  "name" | "gender" | "status"
>;
