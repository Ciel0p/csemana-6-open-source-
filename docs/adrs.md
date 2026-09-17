# Architectural Decision Records (ADRs)

This document records the principal architectural decisions made for the ACME Learning Center frontend application.

---

## ADR 001: Adoption of Domain-Driven Design (DDD) and Screaming Architecture

### Status
Accepted

### Context
The application needs to scale across multiple business capabilities (e.g., Learning Management, Identity and Access Management) while maintaining high cohesion, low coupling, and clear separation of concerns.

### Decision
Structure the frontend codebase according to Domain-Driven Design (DDD) tactical patterns and bounded contexts:
- **Bounded Contexts**: `iam`, `learning`, and `shared`.
- **Layered Architecture per Context**:
  - `domain/model`: Pure domain entities, commands, and interfaces free from framework dependencies.
  - `infrastructure`: API services, endpoint adapters, assemblers, and HTTP DTOs/resources.
  - `application`: State management stores and application-level orchestrators.
  - `presentation`: UI components, forms, views, and routing.

### Consequences
- **Positive**: Clear boundaries between domains, high maintainability, isolated testing, and alignment with business ubiquity.
- **Negative**: Additional boilerplate for mapping between layers (assemblers/DTOs).

---

## ADR 002: Signal-Based State Management for Application Stores

### Status
Accepted

### Context
State management in modern Angular applications requires fine-grained reactivity, optimal change detection, predictable state mutations, and minimal boilerplate.

### Decision
Use lightweight, domain-scoped application stores (`LearningStore`, `IamStore`) powered by Angular Signals (`signal`, `WritableSignal`, `computed`, and `inject()`):
- Internal mutable state is kept private via `WritableSignal`.
- Public state is exposed as read-only `Signal` accessors.
- Asynchronous API interactions update signal state reactively.

### Consequences
- **Positive**: Integrates natively with Angular Zoneless/Signal reactivity and `OnPush` default change detection; removes external state library dependencies.
- **Negative**: Developers must follow conventions for managing immutable state updates inside store methods.

---

## ADR 003: Assembler Pattern and Layered REST Infrastructure

### Status
Accepted

### Context
API contracts (backend resources/responses) frequently differ from internal frontend domain models in naming conventions, structure, or data types.

### Decision
Implement the Assembler pattern using generic base infrastructure abstractions:
- `BaseEntity`: Marker interface for domain entities with identifier properties.
- `BaseResource` / `BaseResponse`: Contract for wire DTOs.
- `BaseAssembler<TEntity, TResource, TResponse>`: Pure transformation interface translating between DTOs and Domain Entities.
- `BaseApiEndpoint`: Generic HTTP endpoint wrapper providing CRUD operations and unified error handling (`ErrorHandlingEnabledBaseType`).
- `BaseApi`: Facade composing one or more endpoint classes for application consumption.

### Consequences
- **Positive**: Decouples domain logic from backend schema changes; standardizes CRUD operations and error handling across endpoints.
- **Negative**: Requires writing assembler classes for every resource entity.

---

## ADR 004: Material 3 (M3) Theming System and Centralized Overrides

### Status
Accepted

### Context
The application requires a modern, accessible, and customizable UI component library adhering to the latest design standards.

### Decision
Adopt Angular Material with Material 3 (M3) theming:
- Use `@use '@angular/material' as mat;` and the `@include mat.theme(...)` API configured with standard M3 palettes (`$azure-palette`, `$blue-palette`).
- Leverage system-level design tokens (`var(--mat-sys-surface)`, `var(--mat-sys-on-surface)`).
- Manage centralized component overrides via dedicated mixins (e.g., `mat.toolbar-overrides`).
- Style entrypoints referenced in `angular.json` styles configuration (`src/material-theme.scss`, `src/styles.css`).

### Consequences
- **Positive**: Modern UI/UX, built-in accessibility (a11y), responsive token variables, and consistent design language.
- **Negative**: Requires familiarity with Material 3 token naming conventions and Sass mixin APIs.

---

## ADR 005: Standalone Components Architecture

### Status
Accepted

### Context
Angular 15+ introduced standalone components, eliminating the need for `NgModule` boilerplate and simplifying dependency graphs.

### Decision
All components, directives, and pipes across `app`, `iam`, `learning`, and `shared` are standalone (`standalone: true` or default standalone in Angular 22). Dependencies and Material modules are imported directly in component `@Component.imports` declarations.

### Consequences
- **Positive**: Tree-shakable bundle sizes, explicit dependency declaration, simplified testing setup, and lazy loading via functional routes.
- **Negative**: Each component must explicitly list its imported dependencies.

---

## ADR 006: Internationalization (i18n) via `@ngx-translate`

### Status
Accepted

### Context
The application must support multi-language interfaces with runtime language switching without requiring full page reloads.

### Decision
Use `@ngx-translate/core` and `@ngx-translate/http-loader` with translation JSON assets stored in `public/i18n/` (`en.json`, `es.json`):
- Translation loader configured in `app.config.ts`.
- `LanguageSwitcher` shared component allows user-driven language toggling at runtime.

### Consequences
- **Positive**: Dynamic, client-side translation switching without page reload; centralized translation keys.
- **Negative**: Async loading of translation files requires handling initial translation initialization.

---

## ADR 007: TypeScript ES2024 Target and Modern ECMAScript Features

### Status
Accepted

### Context
Modern browsers and the Angular build pipeline (esbuild / Vite) support modern JavaScript features natively, reducing polyfill overhead and improving execution performance.

### Decision
Configure `tsconfig.json` compiler options targeting `ES2024` with `module: "preserve"` and strict type-checking enabled.

### Consequences
- **Positive**: Generates smaller, cleaner JS bundles; unlocks native array grouping, regex v-flag, top-level await, and immutable record operations.
- **Negative**: Requires modern browser support (aligned with Angular 22 browser baseline).
