import type { Gender, Status } from "./types";

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
