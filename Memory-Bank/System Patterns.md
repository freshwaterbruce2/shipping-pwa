# System Patterns: Walmart DC 8980 Shipping Department PWA

## Architectural Design Patterns

To support maintainability and future expansion, we will use proven design patterns:

### Model-View-Controller (MVC)
The app's data (Model: door assignments, pallet counts) will be separated from the UI (View) and input logic (Controller). MVC makes the codebase modular and easy to test or extend. For instance, changing the data storage or UI theme can be done independently.
- **Model Definition**: Core data structure `DoorSchedule` defined in `types/shipping.ts`, including fields like `doorNumber`, `destinationDC`, `freightType`, `trailerStatus` (updated with NT, E, 25%, 50%, 75%, SL), `palletCount`, `tcrPresent` (boolean), etc.

### Component-Based Architecture
Each UI element (door entry row, counter, toolbar) will be a self-contained component. This reuse of components reduces development and testing time and improves reliability. It also allows adding features later (like an auto-count camera component) with minimal disruption.
- **Navigation**: A `TopNav` component handles switching between main application modules (Scheduler, Pallet Counter, Notes, Settings) using `react-router-dom`.
- **Pages/Views**: Distinct components (`Index`, `PalletCounter`, `Notes`, `Settings`) represent the main content for each module, rendered via routes defined in `App.tsx`.

### Repository/Facade Pattern (Data Layer)
We will abstract data access (e.g., localStorage or IndexedDB) behind a simple interface. This way, whether we store in localStorage now or switch to a cloud DB later, the rest of the app code remains unaffected.
- **Current Implementation**: `ShippingTable.tsx` currently uses functions directly interacting with `localStorage`.

### Singleton (App State)
A singleton store (or context) will hold shared state (current door list, total pallets) so all components can access it without prop-drilling.

### Event/Observer Pattern
For UI updates (e.g., when a pallet count changes), an event-driven approach keeps components in sync without tight coupling.

### Progressive Web App (PWA) Patterns
We'll incorporate a service worker and cache API for offline use. This pattern ensures fast performance and resilience. Static Jamstack/PWA sites simply serve pre-built HTML/JS, yielding high speed and security. A well-built Jamstack site presents a series of usable HTML files with significant advantages in performance and security.

## Implementation Benefits

These patterns together create a solid, modular architecture that can grow (e.g., adding authentication or a mobile app wrapper later) without rewriting core logic. Benefits include:

1. **Separation of Concerns**: Each part of the application has a clear responsibility
2. **Testability**: Isolated components and logic are easier to test
3. **Scalability**: The architecture supports adding new features without major refactoring
4. **Maintainability**: Code organization makes it easier for developers to understand and modify
5. **Resilience**: PWA patterns ensure the application works even with intermittent connectivity

## Pattern Application Examples

- **MVC**: Door schedule data (Model: `DoorSchedule` type in `types/shipping.ts`) is separate from the UI table (View) and the form controls (Controller)
- **Component**: The door row, pallet counter, and export button are all reusable components
- **Repository**: Functions within `ShippingTable.tsx` currently abstract localStorage operations (potential future refactor to a dedicated service).
- **Singleton/Context**: `UserContext` manages user information. Global state for shipping data is currently managed within `ShippingTable.tsx` (potential future refactor).
- **Event/Observer**: State updates within components trigger re-renders (standard React pattern).
- **PWA**: Basic PWA setup exists, service worker integration for offline use is a future task.
