# Drug Candidates Discovery App

This project is a modern, accessible web application for discovering, bookmarking, and tracking the status of drug candidates. Users can browse a list of drugs, view detailed information, filter and search by status, and manage a personalized list of bookmarks. The app is built with Next.js, React, TypeScript, Tailwind CSS, and shadcn/ui, and follows best practices for accessibility and scalability.

The app uses 3rd party library called Clerk for Authentication.

Below is a comprehensive overview of the project, including the file structure, descriptions of each file and folder, and detailed instructions for setup and usage.

---

## Table of Contents

1. [File Structure](#file-structure)
2. [Description of Files and Folders](#description-of-files-and-folders)
   - [Root Directory](#root-directory)
   - [`src/` Directory](#src-directory)
   - [`public/` Directory](#public-directory)
   - [`__tests__/` Directory](#__tests__-directory)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the App](#running-the-app)
4. [Tech Stack](#tech-stack)
   - [Details](#details)
   - [Dependencies](#dependencies)
   - [Dev Dependencies](#dev-dependencies)
5. [Features](#features)
6. [Functional and Technical Requirements](#functional-and-technical-requirements)
   - [Functional requirements Accomplished](#functional-requirements-accomplished)
   - [Technical requirements Accomplished](#technical-requirements-accomplished)
7. [Future improvements](#future-improvements)

---

## File Structure

The project is organized into the following structure:

```
drug-candidates/
├── README.md
├── __tests__/                # Contains test files for the application
│   ├── unit/                # Unit tests for various parts of the app
│   ├── __mockdata__/        # Mock data used in tests
├── src/                      # Main source code of the application
│   ├── app/                 # Application-level files and Next.js routing
│   │   ├── bookmarks        # Route for bookmark page
│   │   ├── drug/[id]/       # Dynamic routes for drug details
│   │   ├── fonts/           # Font assets
│   │   ├── layout.tsx       # Root layout component
│   │   └── page.tsx         # Main page component
│   ├── components/          # Reusable UI components
│   │   ├── ui/              # UI-specific components (buttons, cards, etc.)
│   │   ├── drug-card/       # Drug card component
│   │   ├── nav-buttons/     # Navigation buttons
│   │   ├── error-screen/    # Error and empty state screens
│   │   └── ...
│   ├── constants/           # Application constants (mock data, etc.)
│   │   ├── filter.ts        # Constants for filter feature
│   │   ├── drugs-list.ts    # Mock drug candidate data
│   │   └── ...
│   ├── helpers/             # Folder for helper functions
│   │   └──  date.ts          # Helper functions related to dates
│   ├── hooks/               # Custom React hooks
│   │   ├── useBookMarksData.ts # Hook for managing bookmarks
│   │   ├── useDrugData.ts      # Hook for filtering, searching, paginating drugs
│   │   └── useDrugStatusMap.ts # Hook for status display mapping
│   ├── lib/                 # Utility functions
│   │   └── utils.ts         # General utility functions
│   ├── providers/           # Context providers for global state management
│   │   ├── GlobalContextProvider.tsx # Global context provider
│   │   └── ThemeProvider.tsx        # Theme provider
│   ├── sections/            # Feature sections of the app
│   │   ├── bookmarks/       # Bookmarks section
│   │   ├── drugs-list/      # Drugs list section
│   │   ├── drug-details/    # Drug details section (with subcomponents)
│   │   ├── landing-page/    # Public landing page
│   │   └── nav-bar/         # Navigation bar section
│   ├── types/               # TypeScript type definitions
│   │   ├── drug.ts          # Drug-related types
│   │   ├── error.ts         # Error/empty state types
│   │   ├── filter.ts        # Filter types
│   │   ├── pagination.ts    # Pagination types
│   │   └── global.ts        # Global context types
├── public/                  # Static assets (logo, images, etc.)
├── package.json             # Project metadata and dependencies
├── package-lock.json        # Dependency lock file
├── node_modules/            # Installed dependencies
├── jest.config.ts           # Unit test configuration
├── jest.setup.ts            # Unit test setup
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.mjs          # Next.js configuration
```

This structure ensures a clean separation of concerns, making the project easy to navigate and maintain.

## Description of Files and Folders

### Root Directory

- **README.md**: Project overview, setup instructions, and file structure.
- **package.json**: Project metadata, dependencies, and scripts.
- **package-lock.json**: Dependency lock file.
- **node_modules/**: Installed dependencies.
- **jest.config.ts**: Jest configuration for testing.
- **jest.setup.ts**: Jest setup for testing environment.
- **tailwind.config.ts**: Tailwind CSS configuration.
- **tsconfig.json**: TypeScript configuration.
- **next.config.mjs**: Next.js configuration.

### `src/` Directory

- **actions/**: (Reserved for server actions, if needed, since we are using mockData not used)
- **app/**: Next.js routing, layout, and main page components.
- **components/**: Reusable UI and atomic components.
- **constants/**: Application-wide constants and mock data.
- **hooks/**: Custom React hooks for data and state management.
- **helpers/**: Helper functions.
- **lib/**: Utility functions.
- **providers/**: React context providers for global state and theming.
- **sections/**: Feature sections (bookmarks, drugs list, details, landing page, nav bar).
- **types/**: TypeScript type definitions for drugs, errors, filters, and global context.

### `public/` Directory

- Static assets such as logos and images.

### `__tests__/` Directory

- Unit tests and mock data for the application.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Clerk Account](https://clerk.com/) (For Authentication)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nithkish/drug-candidates.git
   ```
2. Navigate to the project directory:
   ```bash
   cd drug-candidates
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create .env file with below keys(Actual values from Clerk account):
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=XXXXXXXXXXXXXXXX
   CLERK_SECRET_KEY=XXXXXXXXXXXXXXXX

### Running the App

To start the development server, run:

```bash
npm run dev
```

The app will be available at `http://localhost:3000` in your browser.

### Running Tests

To run the test suite:

```bash
npm run test
```

## Tech Stack

### Details

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, shadcn/ui, Radix UI
- **Local State Management:** React Context API
- **Authentication:** Clerk/next.js
- **Icons:** lucide-react
- **Testing:** Jest, React Testing Library

### Dependencies

- **@clerk/nextjs: "^6.28.0"**
- **@clerk/themes: "^2.4.4"**
- **@radix-ui/react-checkbox: "^1.3.2"**
- **@radix-ui/react-popover: "^1.1.14"**
- **@radix-ui/react-separator: "^1.1.7"**
- **@radix-ui/react-slot: "^1.2.3"**
- **class-variance-authority: "^0.7.1"**
- **clsx: "^2.1.1"**
- **lucide-react: "^0.534.0"**
- **next: "14.2.31"**
- **next-themes: "^0.4.6"**
- **react: "^18"**
- **react-dom: "^18"**
- **tailwind-merge: "^3.3.1"**
- **tailwindcss-animate: "^1.0.7"**

### Dev Dependencies

- **@testing-library/dom**
- **@testing-library/jest-dom**
- **@testing-library/react**
- **@types/jest**
- **@types/lodash**
- **@types/node**
- **@types/react**
- **@types/react-dom**
- **jest**
- **jest-environment-jsdom**
- **postcss**
- **tailwindcss**
- **ts-node**
- **typescript**
- **eslint**

## Features

- **Landing Page:** Quick Summary of application with logo and header.

![Landing Page](<docs/screenshots/Screenshot 2025-08-07 at 03.06.55.png>)

- **Authentication:** Sign up using email/google acount.

![Auth Page](<docs/screenshots/Screenshot 2025-08-07 at 03.07.17.png>)

![Sign out](<docs/screenshots/Screenshot 2025-08-07 at 03.18.45.png>)

- **Drug Browsing:** View a list of drug candidates with names, categories, and status.

![Home](<docs/screenshots/Screenshot 2025-08-07 at 03.17.30.png>)

- **Detailed Drug View:** Click a drug to see detailed information, including status history, manufacturer, and more.

![Details page](<docs/screenshots/Screenshot 2025-08-07 at 03.18.07.png>)

- **Bookmarking:** Bookmark drugs for quick access. Bookmarks are persisted in localStorage.

![Bookmark button](<docs/screenshots/Screenshot 2025-08-07 at 03.18.18.png>)

![Bookmark List](<docs/screenshots/Screenshot 2025-08-07 at 03.18.30.png>)

- **Filtering & Search:** Filter drugs by status and search by name. Search uses debouncing mechanism.

![Filter](<docs/screenshots/Screenshot 2025-08-07 at 03.19.11.png>)

![Search](<docs/screenshots/Screenshot 2025-08-07 at 03.19.36.png>)

- **Status History Timeline:** View a chronological status history for each drug.

![Status History](<docs/screenshots/Screenshot 2025-08-07 at 03.18.07.png>)

- **Accessible UI:** All components are accessible, with ARIA roles, keyboard navigation, and screen reader support.

- **Dark/Light Mode:** Toggle between dark and light themes.

![Dark Mode](<docs/screenshots/Screenshot 2025-08-07 at 03.17.49.png>)

- **Responsive Design:** Optimized for both mobile and desktop devices.

![Mobile 1](<docs/screenshots/Screenshot 2025-08-07 at 03.21.15.png>)

![Dark mobile](<docs/screenshots/Screenshot 2025-08-07 at 03.21.25.png>)

![Details Mobile](<docs/screenshots/Screenshot 2025-08-07 at 03.21.38.png>)

### Functional Requirements Accomplished

- [x] Users can browse a list of drug candidates.
- [x] Users can search and filter drugs by status.
- [x] Users can view detailed information about each drug.
- [x] Users can bookmark drugs and manage their bookmarks.
- [x] Users can view the status history and timeline for each drug.
- [x] The app is accessible and responsive.

### Technical Requirements Accomplished

- [x] Built with Next.js and TypeScript.
- [x] Uses React Context API for state management.
- [x] Uses localStorage for persisting bookmarks.
- [x] Uses Tailwind CSS and shadcn/ui for styling.
- [x] Fully accessible (ARIA, keyboard, screen reader support).
- [x] Fully responsive.
- [x] Unit tested with Jest and React Testing Library.

## Future Improvements

1. Integrate with a real API for live drug data.
2. Add personalized profiles.
3. Add advanced filtering and sorting options.
4. Add export/share features for bookmarked drugs.
5. Add more detailed analytics and visualizations.
6. Migrate to a more robust state management solution (Redux, Zustand) if needed.
7. Add internationalization
