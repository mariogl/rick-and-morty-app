import type { Character } from "../types";

export type CharacterSortableProperties = keyof Pick<
  Character,
  "name" | "gender" | "status"
>;
export const characterSortableProperties: CharacterSortableProperties[] = [
  "name",
  "gender",
  "status",
];

export type SortableDirection = "asc" | "desc";
export const sortableDirections: SortableDirection[] = ["asc", "desc"];
