# Rick and Morty Characters App

A small front-end application for exploring Rick and Morty characters, built with React, TypeScript and Vite, and following Clean Architecture principles. This project demonstrates frontend patterns including dependency injection, comprehensive testing strategies, and accessibility-first design.

## Getting started

### Prerequisites

- Node.js >= 18.18.0
- npm >= 9.0.0

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server (localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build (localhost:4173)
npm run lint         # Run ESLint
npm test             # Run unit/integration tests
npm run test:coverage # Run tests with coverage report
npm run test:e2e     # Run end-to-end tests
npm run test:e2e:ui  # Run E2E tests with UI
```

### Environment variables

Create a `.env` file in the root directory with the following variables:

```
VITE_API_BASE_URL
```

## Tech stack

### Core Technologies

- **React 19** - UI library
- **TypeScript** - Type safety and enhanced developer experience
- **Vite** - Fast build tool and development server
- **TanStack Router** - Type-safe file-based routing with loader support
- **TanStack Query** - Server state management with caching and background updates

### Testing & Quality

- **Vitest** - Unit and integration testing framework
- **Testing Library** - User-centric testing utilities
- **Playwright** - End-to-end testing
- **MSW** - API mocking for tests
- **ESLint & Prettier** - Code linting and formatting
- **Husky** - Git hooks for quality gates
- **Commitlint** - Conventional commit message enforcement

## Features

- Characters list fetched from the Rick and Morty API.
- Search characters by name with real-time filtering and debouncing.
- Sort characters by name, status, and gender.
- Loading state with skeleton components.
- Error handling with user-friendly messages.
- View detailed character information on a separate page.
- Responsive design for mobile and desktop.
- Accessibility features including keyboard navigation and screen reader support.
- 404 page for unknown routes.
- URL synchronization for search and sort parameters.
- Lazy loading for images and routes.

**Note**: A decision was made to not implement pagination. This is because the API have not sorting capabilities, and implementing pagination could lead to inconsistent user experience when combined with sorting and searching.

## Architecture

The folder structure has been chosen with the "screaming architecture" principle in mind: the top-level folders reflect the application's business concepts, not implementation details.

Within each module, **Clean Architecture** principles with clear separation of concerns have been implemented:

- **Domain**: Core business data and types.
- **Application**: Business logic and use cases.
- **Data**: Infrastructure concerns like API communication.
- **Presentation**: UI components and hooks.

### Domain Model Decision

This project deliberately implements an **anemic domain model** in the frontend. The core business rules and invariants are assumed to be enforced by the backend, which exposes a rich domain model. Since this application only consumes and displays data without creating or mutating it, a simple data-centric domain suffices. If the backend were _dumb_ or if client-side data manipulation were required, a richer domain model with core invariants and business logic would be implemented in the frontend.

### Framework Isolation

All logic and dependencies related to React are confined strictly to the presentation layer. The inner layers (domain, application) and the infra data layer remain completely decoupled from React and any other UI libraries, ensuring that business logic and use cases are independent and easily testable. This decision improves maintainability, portability, and enables reusing core logic in other environments or frameworks in the future.

## Components

The components have been built following the principles of composition and reuse, aiming to keep them as decoupled as possible from business logic.

In this regard, all UI components that are potentially reusable have been placed in a separate shared module. These components are completely decoupled from business logic and do not depend on any feature-specific or concrete application components.

## Design patterns and decisions

### Dependency Injection

- Constructor injection for all dependencies
- Composition Root pattern for dependency configuration
- Interface-based abstractions for testability

### Adapters

- API communication via repository pattern
- Mappers for transforming API data to domain models

### Custom Hooks Pattern

- **`useCharacters`**: Orchestrates search, sort, and data fetching
- **`useCharacterSearch`**: Manages search state and URL synchronization
- **`useCharacterSort`**: Handles sorting logic and persistence

### Error management

- Graceful error handling at route level
- User-friendly error messages
- Custom domain error types for better semantics

### Type Safety

- Strict TypeScript configuration
- Runtime validation with Zod schemas in external boundaries

### State Management Strategy

- **Server State**: TanStack Query for API data
- **URL State**: TanStack Router for search/sort params
- **Local State**: React hooks for component-specific state

## Notable trade-offs and intentional overabstractions

Some abstractions are intentionally richer than needed to enable discussion on front-end design.

On the other hand, some necessary abstractions have not been implemented due to deadline constraints, but are documented here for completeness: it is recommended to abstract router creation into a function in tests to render a component within a router.

## Testing

### Testing Strategy: Testing Trophy Approach

This project prioritizes **integration tests** while maintaining comprehensive coverage across all testing layers.

### Unit Tests

- **Domain Logic**: Pure functions and business rules
- **Use Cases**: Application services without React dependencies
- **Utilities**: Helper functions and data transformations

```bash
# Example test locations
src/character/application/GetCharactersUseCase.test.ts
src/character/application/CharacterSorter/CharacterSorter.test.ts
```

### Integration Tests

- **Component + Hooks**: Real user workflows
- **API Integration**: With MSW for reliable mocking
- **State Management**: TanStack Query integration testing

```bash
# Example test locations
src/character/presentation/components/CharacterCard/CharacterCard.test.tsx
src/character/presentation/components/CharacterSearch/CharacterSearch.test.tsx
```

### End-to-End Tests

- **Critical User Journeys**: Search, sort, navigation
- **Cross-Browser Testing**: Chromium baseline
- **Real API Integration**: Against staging environment

```bash
# Run E2E tests
npm run test:e2e

# Run with UI for debugging
npm run test:e2e:ui
```

### Fixtures and Mocks

- **MSW Handlers**: Centralized API response definitions
- **Test Data Factories**: Generate consistent test data with mother objects

### Coverage

The coverage metrics have been used not as a goal but as a way to find use cases and scenarios.

There is yet room for improvement in number of tested scenarios and cases.

## Accessibility

### Accessibility-First Design

This project treats accessibility as a **first-class requirement**, not an afterthought.

### Key Features

- **Semantic HTML**: Proper heading hierarchy and landmark roles
- **ARIA Labels**: All interactive elements properly labeled
- **Keyboard Navigation**: Full keyboard support for all features
- **Screen Reader Support**: Tested with semantic queries
- **Focus Management**: Logical tab order and focus indicators
- **rem units**: Scalable typography and layout
- **Color Contrast**: WCAG AA compliant color schemes
- **Reduced motion**: Respects user preferences in animations

### Automatic Testing Approach

- **Semantic Queries**: Using `getByRole`, `getByLabelText` in tests
- **User Behavior Testing**: Testing how users actually interact
- **Screen Reader Validation**: ARIA roles and properties

## CI

- Husky hooks for linting and tests on commit
- GitHub Actions workflow for linting, tests, and E2E on push

## Future refactors and features

### Pagination

As the user currently can't list all characters in the API, we can consider fetching all characters at once and implementing client-side pagination, sorting, and searching.

### Testing Improvements

As noted before, the setup data for some component tests can be improved abstracting to a reusable function, as it have been done with `renderWithProviders` and `renderWithRouter` functions.

### Image optimization

Although the images are being loaded from an external source, we can consider implement a server-side image optimization strategy.

## Conventions

- No `any` in TypeScript
- Tests focus on behavior, not implementation details
- Small, verifiable steps
- Identifiers that convey intent and domain concepts and actions
- CSS modules for encapsulated styles
- BEM for CSS class names
- Conventional commits
