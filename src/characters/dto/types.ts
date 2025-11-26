export type CharacterDtoPrimitives = {
  id: number;
  name: string;
  image: string;
};

export type ApiResponse = {
  results: CharacterDtoPrimitives[];
};
