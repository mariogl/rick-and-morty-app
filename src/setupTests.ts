import { characterHandlers } from "@characters/tests/characterHandlers";
import { setupServer } from "msw/node";

import "@testing-library/jest-dom/vitest";

const server = setupServer(...characterHandlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
