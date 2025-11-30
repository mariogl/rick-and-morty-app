import type { Gender } from "./Gender";
import type { Status } from "./Status";

export type Character = {
  id: number;
  name: string;
  imageUrl: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: string;
  location: string;
};

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
