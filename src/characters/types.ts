export const characterStatus = ["Alive", "Dead", "unknown"] as const;
export const characterGenders = [
  "Female",
  "Male",
  "Genderless",
  "unknown",
] as const;

export type Status = (typeof characterStatus)[number];
export type Gender = (typeof characterGenders)[number];

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
