import { createContext } from "react";

import type { CharacterClientContextType } from "./CharacterClientProvider";

export const CharacterClientContext =
  createContext<CharacterClientContextType | null>(null);
