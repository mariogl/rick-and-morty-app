# Answers to technical questions

## What are Custom Hooks in React?

Custom Hooks are JavaScript functions that:

- Start with "use" (React convention)
- Allow you to extract and reuse stateful logic between components
- Can use other hooks internally (useState, useEffect, etc.)
- Make separation of concerns and testing easier

In my experience, I leverage Custom Hooks extensively to decouple domain logic from presentation layers and encapsulate complex stateful behaviors behind simplified, composable interfaces.

This approach allows me to:

- Abstract framework dependencies and third-party integrations
- Hide implementation complexity while maintaining clean component APIs
- Achieve "dumb" components that focus purely on rendering and user interactions

An example use case is the `useCharacters` hook in this project, which encapsulates all logic related to getting filtered and/or sorted character data from the data source, allowing the component to focus solely on displaying that data.

## What advantages does using TypeScript offer in a Frontend project? What challenges might arise when integrating it into an existing project?

### Advantages

- **Type Safety**: Catches errors at compile time, preventing runtime bugs
- **Developer Experience**: IntelliSense, auto-completion, and safe refactoring as we can rely on contract definitions
- **Self-Documenting Code**: Types serve as living documentation
- **Team Collaboration**: Consistent APIs and reduced onboarding time

Example from this project:

```typescript
export interface Character {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown"; // Enforces valid values
  gender: "Female" | "Male" | "Genderless" | "unknown";
}
```

### Integration Challenges

- **Setup Complexity**: Configuring build tools and compiler options
- **Learning Curve**: Team needs to learn TypeScript concepts
- **Third-Party Libraries**: Missing or outdated type definitions (although this is increasingly less of an issue as the TypeScript ecosystem matures)
- **Migration Strategy**: Converting existing JavaScript gradually without breaking functionality
- **Buildtime Validation**: Forgetting runtime validation in external layers as we rely on compile-time types alone

### Solution

I combine **strict typing for domain entities** with **Zod schemas** for runtime validation:

```typescript
const characterSchema = z.object({
  id: z.number(),
  status: z.enum(["Alive", "Dead", "unknown"]),
});

export type Character = z.infer<typeof characterSchema>;
```

This provides both compile-time and runtime type safety while maintaining clean, self-documenting code.

## How would you approach implementing testing in a Frontend application? What types of tests do you consider essential, and why?

### My Testing Strategy

I follow the **Testing Trophy** approach, prioritizing **integration tests** while maintaining a balanced test suite that focuses on **user behavior** and **accessibility**.

### Essential Test Types

**1. Integration Tests (Component + Custom Hooks)**
These are my primary focus as they test real user workflows. Examples in this project include `CharacterSearch.test.tsx` and `CharacterCard.test.tsx`, which test complete user interactions like searching and viewing character details.

**2. Accessibility Testing**
I prioritize a11y as a first-class citizen in all components. Tests like those in `CharacterDetail.test.tsx` validate that every interactive element has proper ARIA labels and can be navigated by screen readers using semantic queries like `getByRole` and `getByLabelText`.

**3. Unit Tests for Business Logic**
Pure functions and domain logic get isolated unit tests. Examples include `GetCharacterUseCase.test.ts` and `CharacterSorter.test.ts` - testing domain services without any React dependencies.

**4. End-to-End Tests**
Critical user journeys are covered in `characters.spec.ts`, testing complete workflows like searching characters and navigating to detail pages.

### Key Principles

**User-Centric Testing**

- Test by **user behavior**, not implementation details
- Use **RTL semantic queries** that mimic how users interact
- Avoid testing CSS classes or internal component state

**Accessibility-First**

- Every interactive element must have proper **ARIA labels**
- Test with **screen reader** expectations in mind
- Validate **keyboard navigation** and **focus management**

This approach ensures **high confidence** in deployments while maintaining **fast feedback loops** and **accessible user experiences**.

## You are assigned a project with a team distributed across different time zones and cultures. What strategies would you use to ensure effective communication and an efficient workflow?

### Communication Strategies

**Asynchronous-First Communication**

- **Centralized documentation hub** - One source of truth (Notion, Confluence) with clear information hierarchy
- **Concise decision logs** - Brief records of key decisions with context, not exhaustive meeting transcripts
- **Meaningful PR descriptions** - Context and reasoning, not novel-length explanations
- **Threaded discussions** - Keep related conversations together and easily findable

**Information Architecture**

- **Searchable and tagged content** - Easy to find what you need without information overload
- **Living documents** - Update existing docs rather than creating new ones for every small change
- **Template-driven communication** - Consistent formats for status updates, decisions, and specifications

**Cultural Awareness and Inclusion**

- **Respect for different work schedules** - no expectation of immediate responses outside business hours
- **Rotate meeting times** to share the inconvenience of early/late calls fairly
- **Clear and simple language** in written communication, avoiding idioms and cultural references
- **Regular 1:1s** to understand individual team members' preferences and challenges

### Workflow Optimization

**Structured Development Process**

- **Well-defined Definition of Done** that everyone understands regardless of location
- **Comprehensive CI/CD pipeline** to catch issues early and reduce back-and-forth
- **Pair programming sessions** scheduled to overlap time zones when possible
- **Code review guidelines** with clear expectations for feedback quality and timing

**Knowledge Sharing**

- **Architecture Decision Records (ADRs)** documenting why decisions were made
- **Regular team demos** recorded for those who can't attend live
- **Technical documentation** kept up-to-date and easily accessible
- **Mentorship programs** pairing senior and junior developers across locations

**Tools and Practices**

- **Shared calendars** showing everyone's working hours and time zones
- **Status updates** in shared channels about work progress and blockers
- **Overlap hours** identified and protected for real-time collaboration when needed
- **Regular retrospectives** to continuously improve remote collaboration

## A team member suggests a technical solution that you consider inefficient or incorrect. How would you handle this situation to avoid tension while ensuring that the best solution is adopted?

### My Approach: Collaborative Problem-Solving

**1. Lead with Curiosity, Not Judgment**

- **Ask clarifying questions** to understand the reasoning behind their proposal
- **Explore their perspective** - "Can you walk me through how this would work in practice?"
- **Assume positive intent** - they may have insights or constraints I'm not aware of

**2. Focus on Outcomes, Not Opinions**

- **Establish shared criteria** - performance, maintainability, scalability, team expertise
- **Use data when possible** - "Let's benchmark both approaches" or "What does our monitoring say?"
- **Consider the broader context** - timeline constraints, team knowledge, future requirements

**3. Make it a Joint Investigation**

- **Suggest exploring alternatives together** - "What if we also consider approach X?"
- **Propose a small proof-of-concept** - "Should we spike both solutions and compare?"
- **Frame it as problem-solving** rather than right vs. wrong

### Key Principles

- **Psychological safety first** - people must feel safe to propose ideas and challenge decisions
- **Technical excellence** - the best solution should win based on merit, not hierarchy
- **Team learning** - use disagreements as opportunities for knowledge sharing
- **Long-term relationships** - preserve trust and collaboration for future decisions
