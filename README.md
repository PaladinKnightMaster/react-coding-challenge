# React TypeScript Image Gallery

This project is a simple React TypeScript application that displays a gallery of images fetched from an external API. It includes features such as loading state, error handling, and performance optimizations using modern ECMAScript features.

## Table of Contents

- [Running React on Replit](#running-react-on-replit)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Optimizations](#optimizations)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Running React on Replit

[React](https://reactjs.org/) is a popular JavaScript library for building user interfaces.

[Vite](https://vitejs.dev/) is a blazing fast frontend build tool that includes features like Hot Module Reloading (HMR), optimized builds, and TypeScript support out of the box.

Using the two in conjunction is one of the fastest ways to build a web app.

### Getting Started
- Hit run
- Edit [App.tsx](#src/App.tsx) and watch it live update!

By default, Replit runs the `dev` script, but you can configure it by changing the `run` field in the [configuration file](#.replit). Here are the Vite docs for [serving production websites](https://vitejs.dev/guide/build.html).

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/PaladinKnightMaster/react-coding-challenge.git
cd react-coding-challenge
npm install
```

## Usage
To run the application locally:
```bash
npm run dev
```
This will start the development server and you can view the application at `http://localhost:3000`.

## Scripts
- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run preview`: Previews the production build.
- `npm test`: Runs the test suite.

## Project Structure
The project structure is organized as follows:

```bash
src
├── components
│   ├── ImageCard.module.css
│   ├── ImageCard.tsx
│   ├── ImageCard.test.tsx
│   ├── ImageList.module.css
│   ├── ImageList.tsx
│   └── ImageList.test.tsx
├── pages
│   ├── HomePage.module.css
│   └── HomePage.tsx
├── services
│   └── api.ts
├── types
│   └── index.ts
├── App.css
├── App.tsx
├── index.tsx
└── setupTests.ts
```

## Optimizations

The project uses several modern ECMAScript features and best practices:

- **Optional Chaining and Nullish Coalescing**: Simplifies code dealing with nested properties and default values.
- **Dynamic Imports**: Improves performance by loading components only when needed.
- **Modern Array Methods**: Simplifies array operations.
- **Template Literals**: Provides cleaner string concatenation.
- **React.memo**: Optimizes rendering by memoizing components.

## Testing
The project includes unit tests for the components using Jest and React Testing Library.
### Running Tests
To run the tests:
```bash
npm test
```
### Test Coverage
The tests cover various aspects of the components, including:
- Rendering of components
- Handling of loading states
- Error handling
- API interactions

Example test files:
- ImageCard.test.tsx
- ImageList.test.tsx

## Contributing
Contributions are welcome! If you have any suggestions or improvements, feel free to create an issue or submit a pull request.
### Steps to Contribute
1. Fork the repository
2. Create a new branch (git checkout -b feature/your-feature)
3. Commit your changes (git commit -m 'Add some feature')
4. Push to the branch (git push origin feature/your-feature)
5. Create a new Pull Request

## License
This project is licensed under the MIT License. See the LICENSE file for more details.