import { http, HttpResponse } from "msw";

import type { CharacterDtoPrimitives } from "@app/character/data/dto/types";
import { type CharacterListData } from "@app/character/data/dto/types";
import characterApiPaths from "@app/characters/client/characterApiPaths";

import environment from "../environment";
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
  http.get(`${environment.apiBaseUrl}${characterApiPaths.characters}/1`, () => {
    return HttpResponse.json<CharacterDtoPrimitives>(
      CharacterDtoMotherObject.createRickDtoPrimitives(),
    );
  }),
];
