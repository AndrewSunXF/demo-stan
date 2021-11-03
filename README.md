## Project Structure

A quick look at the top-level files and directories.

    .
    ├── __mocks__
    ├── node_modules
    ├── public
    ├── src
    ├── .gitignore
    ├── babel.config.json
    ├── declarations.d.ts
    ├── jest.config.js
    ├── package-lock.json
    ├── package.json
    ├── tsconfig.json
    ├── webpack.config.js
    └── README.md

## Installation

- npm install

## Run projet

- npm run dev

## Test projet

- npm run test

## Build projet

- npm run clean && npm run build

## How did you decide on the technical and architectural choices used as part of your solution?

- The goal is going to build a React single page application which contains two types of pages, the Home page and the Program page which are saved in the pages folder. The Program page will be linked to the Home page by program id, so I decided to use React-router to handle the page navigation through matching params.

- The component folder will contain the React functional components for the pages folder to use. Each component has its own sass file for styling.

- In terms of the data fetching, the given data.json is read by Fetch API in the useEffect hook, and in order to make the data available after build, the data.json file is also configured to be in the dist folder.

- When it comes to the state management, I chose Redux since both Home page and Program page need the same data source. The error state(for error message) and loading state(for skeleton) can also be managed in the Redux store.

## Are there any improvements you could make to your submission?

- For the carousel part, the interaction could be improved when the user navigates between each item. For example, when the user hits the last item in the line, instead of showing the next 6 items, the carousel could show the next 6 items one by one. And when the screen size changes, the number of items shown in the carousel could be changed as well to fit the screen better.

## What would you do differently if you were allocated more time?

- There are a few logics that could be extracted from components and stored in a util folder. The Program page can be breakdown into smaller components. And more tests would be designed and implemented.
