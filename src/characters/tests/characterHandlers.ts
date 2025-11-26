import characterApiPaths from "@characters/client/characterApiPaths";
import { type ApiResponse } from "@characters/dto/types";
import { http, HttpResponse } from "msw";
import environment from "src/environment";

import CharacterDtoMotherObject from "./CharacterDtoMotherObject";

export const characterHandlers = [
  http.get(`${environment.apiBaseUrl}${characterApiPaths.characters}`, () => {
    return HttpResponse.json<ApiResponse>({
      results: [
        CharacterDtoMotherObject.createRickDto(),
        CharacterDtoMotherObject.createMortyDto(),
      ],
    });
  }),
];
