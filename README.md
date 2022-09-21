# GitHub Topic Explorer

## Assignment:

Your task is to build a React web application that displays all the "[topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic)" related to the term "react", using the GitHub GraphQL API.

The application should display how many "[stargazers](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#stargazerconnection)" each topic has. A click on a topic should display the topics related to that topic, and how many stargazers they have. And so forth. There should also be Search capability to search/query on any term or topic. You should implement best practices with the UI.

To interact with the Github GraphQL API you'll need to have

- a [Github API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
- You'll want to make use of the key in the .env file within your application

You may use whatever React framework or library you find useful. URL routing is optional.

## Evaluation:

- We will pay particular attention to the way the code is organized, and to the overall readability
- Unit tests will be greatly appreciated
- Design will be ignored, however usability and accessibility will be taken into consideration
- Remember to update this README with instructions on how to install, run and test your application
- Your first goal is to have a working app, but feel free to improve the application however you see fit
- We hope that you can complete the assignment within 2 hours but don't set any time constraints
- Please reach out per email or by opening an issue if anything is unclear or blocking you

Best of luck

## Dev Notes

- Leave any technical notes on any libraries or tools you chose to use, the more detail the better.

Material UI for better Responsive, Accessbile and Easy to Use User Interface.

### How to run app & test

- Leave instruction on how to run and test your app here

To instal the npm modules, please use the following command.

### `npm install` or `yarn install`

To run the app in the development mode, please use the following command.

### `npm start` or `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

To check the unit test, please use the following command.

### `npm test` or `yarn test`

### Future Improvements

Feel free to elaborate on how you would improve any of the following topics

- Code Structuring: have a screens, utils, helpers, redux folder. Implement eslint, prettier, husky.

- Refactoring: Redux, React Router, Server Side Rendering, etc.

- Additional Features: Pagination, Material UI Theming and improve design, etc
