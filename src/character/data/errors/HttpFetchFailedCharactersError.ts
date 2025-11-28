class HttpFetchFailedCharactersError extends Error {
  constructor() {
    super("Failed fetching characters");
    this.name = "HttpFetchFailedCharactersError";
  }
}

export default HttpFetchFailedCharactersError;
