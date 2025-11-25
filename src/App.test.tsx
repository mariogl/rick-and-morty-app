import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App component", () => {
  it("should render the app's title", () => {
    render(<App />);

    const title = screen.getByText("Rick&Morty App");

    expect(title).toBeInTheDocument();
  });
});
