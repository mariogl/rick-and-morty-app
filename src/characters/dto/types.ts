export type CharacterDto = {
  id: number;
  name: string;
};

export type ApiResponse = {
  results: CharacterDto[];
};
