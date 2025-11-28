import { setupServer } from "msw/node";

import { characterHandlers } from "@app/character/tests/data/characterHandlers";

import "@testing-library/jest-dom/vitest";

const server = setupServer(...characterHandlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
