import { http, HttpResponse } from "msw";

import characterApiPaths from "@app/characters/client/characterApiPaths";
import { type ApiResponse } from "@app/characters/dto/types";

import environment from "../../environment";
import CharacterDtoMotherObject from "./CharacterDtoMotherObject";

export const characterHandlers = [
  http.get(`${environment.apiBaseUrl}${characterApiPaths.characters}`, () => {
    return HttpResponse.json<ApiResponse>({
      results: [
        CharacterDtoMotherObject.createRickDtoPrimitives(),
        CharacterDtoMotherObject.createMortyDtoPrimitives(),
      ],
    });
  }),
];
