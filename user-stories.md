## User Stories and Acceptance Criteria

### User Story 1: Display a List of Characters

- As a user, I want to see a list of Rick and Morty characters when I open the application.

#### Acceptance Criteria

- A skeleton loader is displayed while fetching data.
- On error, an error message is shown to the user.
- The list of characters is displayed in a grid format.
- Each character card shows the character's image, name, and status.
- Accessibility:
  - The images have an empty alt text to avoid redundancy with the character's name.
  - The character's name is marked as a heading for better screen reader navigation.
  - The skeleton loader uses appropriate ARIA roles to indicate loading state.

### User Story 2: Sort Characters

- As a user, I want to sort the list of characters by name, gender or status.

#### Acceptance Criteria

- A dropdown menu allows users to select the sorting criteria in both ascending and descending order.
- The list of characters updates dynamically based on the selected sorting option
- Accessibility:
  - The dropdown menu is keyboard navigable.
  - The dropdown announces changes and status to screen readers.

### User Story 3: Search Characters by Name

- As a user, I want to search for characters by their name.

#### Acceptance Criteria

- A search input field allows users to type in a character's name.
- The list of characters filters dynamically as the user types.
- If no characters match the search query, a "No results found" message is displayed.
- Accessibility:
  - The search input field is labeled.
  - The search input is keyboard navigable.
  - The "clear search" icon is accessible via keyboard and labeled for screen readers.

### User Story 4: View Character Details

- As a user, I want to view detailed information about a character when I click on their card.

#### Acceptance Criteria

- Clicking on a character card navigates to a detail view for that character.
- A skeleton loader is displayed while fetching character details.
- On error, an error message is shown to the user.
- The detail view displays the character's image, name and attributes.

- Accessibility:
  - The character's image has an alternate text.
  - The character's name is marked as a heading for better screen reader navigation.
  - The skeleton loader uses appropriate ARIA roles to indicate loading state.

### User Story 5: Navigation

- As a user, I want to navigate back to the character list from the character detail view.

#### Acceptance Criteria

- A link to return to the character list is provided on the main navigation.
- Accessibility:
  - The navigation link is keyboard navigable.
  - The navigation link is clearly labeled for screen readers.
