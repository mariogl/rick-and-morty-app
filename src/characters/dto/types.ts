export type CharacterDtoPrimitives = {
  id: number;
  name: string;
  image: string;
};

export type CharacterListData = {
  results: CharacterDtoPrimitives[];
};
