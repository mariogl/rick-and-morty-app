import CharacterSorter from "@app/character/application/CharacterSorter/CharacterSorter";
import GetCharacterDetailUseCase from "@app/character/application/GetCharacterDetailUseCase";
import GetCharactersUseCase from "@app/character/application/GetCharactersUseCase";
import FetchCharacterClient from "@app/character/data/FetchCharacterClient";

import environment from "./shared/config/environment";

class CompositionRoot {
  private getCharactersUseCase: GetCharactersUseCase;
  private getCharacterDetailUseCase: GetCharacterDetailUseCase;

  constructor({
    getCharactersUseCase,
    getCharacterDetailUseCase,
  }: {
    getCharactersUseCase: GetCharactersUseCase;
    getCharacterDetailUseCase: GetCharacterDetailUseCase;
  }) {
    this.getCharactersUseCase = getCharactersUseCase;
    this.getCharacterDetailUseCase = getCharacterDetailUseCase;
  }

  getGetCharactersUseCase(): GetCharactersUseCase {
    return this.getCharactersUseCase;
  }

  getGetCharacterDetailUseCase(): GetCharacterDetailUseCase {
    return this.getCharacterDetailUseCase;
  }
}

const characterClient = new FetchCharacterClient(environment.apiBaseUrl);

const characterSorter = new CharacterSorter();

export const compositionRoot = new CompositionRoot({
  getCharactersUseCase: new GetCharactersUseCase({
    characterClient,
    characterSorter,
  }),
  getCharacterDetailUseCase: new GetCharacterDetailUseCase(characterClient),
});
