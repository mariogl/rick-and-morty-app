import z from "zod";

import { characterGenders, characterStatus } from "../types";

const characterDtoSchema = z.object({
  id: z.number(),
  name: z.string(),
  image: z.url(),
  status: z.enum(characterStatus),
  species: z.string(),
  type: z.string(),
  gender: z.enum(characterGenders),
  origin: z.object({
    name: z.string(),
  }),
  location: z.object({
    name: z.string(),
  }),
});

export type CharacterDtoSchema = z.infer<typeof characterDtoSchema>;

export default characterDtoSchema;
