# ACME Learning Center Application (`learning-center`)

## Overview
`learning-center` is an Angular 22 client application for managing learning information in the ACME Learning Center domain. The current implementation focuses on maintaining categories and courses, with the codebase organized around Domain-Driven Design (DDD) bounded contexts and layered responsibilities.

In development mode, the application consumes a local fake API exposed through `json-server`. The frontend is configured to call `http://localhost:3000/api/v1` for learning resources.

## Features
- Category maintenance with create, read, update, and delete behavior
- Course maintenance with create, read, update, and delete behavior
- Course-to-category association through category selection
- Signal-based state management and reactive UI updates (`signal`, `computed`, `viewChild`)
- Material Design 3 (M3) styling with custom theme tokens
- Internationalization with English and Spanish resources using `@ngx-translate`
- Client-side navigation with Angular Router and standalone component routing
- HTTP communication through Angular `HttpClient` and REST Assembler pattern
- Layered organization by bounded context:
  - `learning`
  - `iam`
  - `shared`

## Current Scope
The currently enabled application routes expose:
- `home`
- `about`
- `learning/categories`
- `learning/courses`

The codebase also contains an `iam` bounded context, including routes, store, interceptor, and endpoint classes. However, IAM routes are currently not enabled in `src/app/app.routes.ts`, so authentication is present in the codebase but not active in the running application.

## Architecture Overview
The application structure follows Domain-Driven Design (DDD) bounded contexts and layered responsibilities:

- **`learning`**: Core domain managing categories, courses, and educational resources.
- **`iam`**: Identity and Access Management domain handling user accounts, credentials, and authentication sessions.
- **`shared`**: Cross-cutting reusable technical contracts, base API infrastructure, shell layout, and internationalization components.

Each bounded context is structured into four distinct layers:
- **`domain`**: Entities (with native ECMAScript `#` private fields), aggregates, and command models.
- **`application`**: Signal-based state management stores (`signal`, `computed`).
- **`infrastructure`**: REST API endpoints, DTO models, assemblers, HTTP guards, and interceptors.
- **`presentation`**: Standalone components, routed views, and forms.

## Project Structure
The repository layout uses the following tree structure:

```text
learning-center/
├── docs/                               # Architectural and requirement documentation
│   ├── adrs.md                         # Architectural Decision Records (ADRs)
│   ├── class-diagram.puml              # PlantUML domain and component class diagram
│   └── user-stories.md                 # Functional user stories & Requirements Traceability Matrix (RTM)
├── public/                             # Static public assets
│   ├── acme-logo.svg                   # Brand logo asset
│   ├── favicon.ico                     # Application favicon
│   └── i18n/                           # Translation dictionaries for @ngx-translate
│       ├── en.json                     # English locale strings
│       └── es.json                     # Spanish locale strings
├── server/                             # Fake REST API backend (json-server)
│   ├── db.json                         # Mock database resource collections
│   ├── routes.json                     # Custom route rewrite definitions (/api/v1/*)
│   └── start.sh                        # Shell launcher for fake backend
├── src/                                # Application source code
│   ├── index.html                      # Single-page HTML entry point
│   ├── main.ts                         # Application bootstrap entry point
│   ├── material-theme.scss             # Material 3 theme configuration & design tokens
│   ├── styles.css                      # Global CSS stylesheet
│   ├── environments/                   # Build and runtime environment settings
│   │   ├── environment.ts              # Production environment configuration
│   │   └── environment.development.ts  # Local development environment configuration
│   └── app/                            # Application root and bounded contexts
│       ├── app.config.ts               # Application-level providers (router, i18n, http, animations)
│       ├── app.routes.ts               # Root routing definitions
│       ├── app.ts                      # Root shell component class
│       ├── app.html                    # Root shell template
│       ├── app.css                     # Root shell styling
│       ├── app.spec.ts                 # Root component unit tests
│       ├── iam/                        # Identity and Access Management Bounded Context
│       │   ├── application/            # Application state management (IamStore)
│       │   ├── domain/                 # Domain model (User entity, SignIn/SignUp commands)
│       │   ├── infrastructure/         # Endpoints, interceptors, guards, assemblers
│       │   └── presentation/           # Authentication section, Sign-In and Sign-Up forms
│       ├── learning/                   # Learning Bounded Context
│       │   ├── application/            # Application state management (LearningStore)
│       │   ├── domain/                 # Domain model (Category and Course entities)
│       │   ├── infrastructure/         # Endpoints, responses, Category & Course assemblers
│       │   └── presentation/           # Category and Course lists and forms
│       └── shared/                     # Shared Kernel & Infrastructure
│           ├── domain/                 # Base domain contracts (BaseEntity)
│           ├── infrastructure/         # Base HTTP client, base API endpoint, base assembler
│           └── presentation/           # Shell layout, header, footer, language switcher, base form
├── angular.json                        # Angular CLI workspace configuration
├── CHANGELOG.md                        # Project version release history
├── CONTRIBUTING.md                     # Architecture, Git Flow, and coding guidelines
├── eslint.config.js                    # ESLint flat configuration (TypeScript & Angular rules)
├── LICENSE.md                          # Project license file
├── package.json                        # npm dependencies and project scripts
├── README.md                           # Main project documentation
├── tsconfig.json                       # Root TypeScript compiler options (Target ES2024)
├── tsconfig.app.json                   # Application compilation TypeScript options
└── tsconfig.spec.json                  # Unit testing compilation TypeScript options
```

## Technologies
- **Framework**: Angular 22 (Standalone Components, Signals, `inject()`)
- **Language**: TypeScript 6.0+ (Target ES2024, native `#` private fields)
- **UI & Theming**: Angular Material 22 (Material 3 tokens, Sass theme config)
- **State & Reactivity**: Angular Signals & RxJS
- **Internationalization**: `@ngx-translate/core` & `@ngx-translate/http-loader`
- **Linting & Code Quality**: ESLint flat config with `angular-eslint` & `typescript-eslint`
- **Testing**: Jasmine & Karma (Chrome Headless runner)
- **Mock API**: `json-server`
- **Diagrams**: PlantUML

## Documentation
- **User Stories & Requirements Traceability**: [`docs/user-stories.md`](docs/user-stories.md) - Functional requirement specifications and RTM mapping.
- **Class Diagram**: [`docs/class-diagram.puml`](docs/class-diagram.puml) - PlantUML architectural model of bounded contexts, entities, and services.
- **Architectural Decision Records (ADRs)**: [`docs/adrs.md`](docs/adrs.md) - Key architectural and technology choices.
- **Contributing Guidelines**: [`CONTRIBUTING.md`](CONTRIBUTING.md) - DDD layers, OOP rules, Git Flow, Conventional Commits, and coding standards.
- **Changelog**: [`CHANGELOG.md`](CHANGELOG.md) - Version history following Keep a Changelog and SemVer conventions.

## Prerequisites
Before running the project, make sure the environment includes:
- Node.js (v20+ recommended)
- npm

## Installation
Install project dependencies from the project root:

```bash
npm install
```

## Running the Application
Start the Angular development server from the project root:

```bash
npm start
```

This starts the application at:

- `http://localhost:4200/`

## Starting the Fake API
The development environment is configured to consume the fake API at:

- `http://localhost:3000/api/v1`

The fake API configuration files are located in the `server` folder:
- `server/db.json`
- `server/routes.json`
- `server/start.sh`

### Option 1: Start from the project root

```bash
npx json-server --watch server/db.json --routes server/routes.json --port 3000
```

### Option 2: Use the provided script
The provided script uses relative paths, so it should be executed from inside the `server` directory:

```bash
cd server
sh start.sh
```

## Development Workflow
For local development, start the fake API first and then start the Angular application:

```bash
# Terminal 1: Fake REST API
npx json-server --watch server/db.json --routes server/routes.json --port 3000

# Terminal 2: Angular Dev Server
npm start
```

## Available Scripts
From the project root, the following scripts are available:

- `npm start` - Starts the development server (`ng serve`).
- `npm run build` - Compiles and builds the production bundles (`ng build`).
- `npm run watch` - Builds the application in watch mode with development configuration.
- `npm test` - Executes unit tests via Karma and Jasmine (`ng test`).
- `npm run lint` - Performs static analysis and linting across TypeScript and HTML files (`ng lint`).

## Fake API Notes
- The fake API currently provides learning resources for `categories` and `courses`.
- The development environment maps `/api/v1/*` requests through `server/routes.json`.
- IAM endpoint paths exist in the environment configuration, but they are not currently backed by the fake API data in `server/db.json`.

## Project Notes
- Translation files are located in `public/i18n/`.
- The development API base URL is defined in `src/environments/environment.development.ts`.
- The production environment file points to `http://localhost:8080/api/v1`, which may require adjustment for a real deployment target.

