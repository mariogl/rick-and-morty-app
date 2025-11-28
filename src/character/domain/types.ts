import type { Character } from "./Character";

export const characterStatus = ["Alive", "Dead", "unknown"] as const;
export const characterGenders = [
  "Female",
  "Male",
  "Genderless",
  "unknown",
] as const;

export type Status = (typeof characterStatus)[number];
export type Gender = (typeof characterGenders)[number];

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
