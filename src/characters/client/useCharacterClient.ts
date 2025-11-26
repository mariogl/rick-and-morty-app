import { useContext } from "react";

import { CharacterClientContext } from "./CharacterClientContext";

const useCharacterClient = () => {
  const context = useContext(CharacterClientContext);

  if (!context) {
    throw new Error("Missing provider for CharacterClient");
  }

  return context;
};

export default useCharacterClient;
