import { http, HttpResponse } from "msw";

import characterApiPaths from "@app/characters/client/characterApiPaths";
import { type CharacterListData } from "@app/characters/dto/types";

import environment from "../../environment";
import CharacterDtoMotherObject from "./CharacterDtoMotherObject";

export const characterHandlers = [
  http.get(`${environment.apiBaseUrl}${characterApiPaths.characters}`, () => {
    return HttpResponse.json<CharacterListData>({
      results: [
        CharacterDtoMotherObject.createRickDtoPrimitives(),
        CharacterDtoMotherObject.createMortyDtoPrimitives(),
      ],
    });
  }),
];
