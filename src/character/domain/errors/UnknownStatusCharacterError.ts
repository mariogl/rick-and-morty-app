class UnknownStatusCharacterError extends Error {
  constructor(status: string) {
    super(`Unknown character status: ${status}`);
    this.name = "UnknownStatusCharacterError";
  }
}

export default UnknownStatusCharacterError;
