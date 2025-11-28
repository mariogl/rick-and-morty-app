import { render, screen } from "@testing-library/react";

import Title from "./Title";

describe("Title component", () => {
  const text = "Sample Title";
  const level = 2;

  it("should render the title text inside a heading", () => {
    render(
      <Title as="heading" level={level}>
        {text}
      </Title>,
    );

    const heading = screen.getByRole("heading", {
      name: text,
      level,
    });

    expect(heading).toBeInTheDocument();
  });

  it("should render the title as a text", () => {
    render(
      <Title as="text" level={level}>
        {text}
      </Title>,
    );

    const title = screen.getByText(text);

    expect(title).toBeInTheDocument();
  });
});
