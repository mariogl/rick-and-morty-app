class UnknownGenderCharacterError extends Error {
  constructor(gender: string) {
    super(`Unknown character gender: ${gender}`);
    this.name = "UnknownGenderCharacterError";
  }
}

export default UnknownGenderCharacterError;
