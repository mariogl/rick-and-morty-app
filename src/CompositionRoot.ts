import CharacterSorter from "@app/character/application/CharacterSorter/CharacterSorter";
import GetCharactersUseCase from "@app/character/application/GetCharactersUseCase";

import FetchCharacterClient from "./character/data/FetchCharacterClient";
import environment from "./environment";

class CompositionRoot {
  private getCharactersUseCase: GetCharactersUseCase;

  constructor({
    getCharactersUseCase,
  }: {
    getCharactersUseCase: GetCharactersUseCase;
  }) {
    this.getCharactersUseCase = getCharactersUseCase;
  }

  getGetCharactersUseCase(): GetCharactersUseCase {
    return this.getCharactersUseCase;
  }
}

const characterClient = new FetchCharacterClient(environment.apiBaseUrl);

const characterSorter = new CharacterSorter();

export const compositionRoot = new CompositionRoot({
  getCharactersUseCase: new GetCharactersUseCase({
    characterClient,
    characterSorter,
  }),
});
