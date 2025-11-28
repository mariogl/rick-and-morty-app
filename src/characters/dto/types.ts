import type z from "zod";

import type characterDtoSchema from "./schema";

export type CharacterDtoPrimitives = z.infer<typeof characterDtoSchema>;

export type CharacterListData = {
  results: CharacterDtoPrimitives[];
};
