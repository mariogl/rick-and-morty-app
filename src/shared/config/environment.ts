const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

if (!apiBaseUrl) {
  throw new Error("Missing API URL");
}

const environment = {
  apiBaseUrl,
};

export default environment;
