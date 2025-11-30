export const characterGenders = [
  "Female",
  "Male",
  "Genderless",
  "unknown",
] as const;

export type Gender = (typeof characterGenders)[number];
