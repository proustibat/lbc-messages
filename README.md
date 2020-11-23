# lbc-message

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Requirements
Be sure [Node](https://nodejs.org/) and [NPM](https://www.npmjs.com/) are installed.

We also use [Yarn](https://classic.yarnpkg.com/), but you could use NPM instead.

If you work on multiple projects we recommend you to use [NVM](https://github.com/nvm-sh/nvm) to manage different node version. Since this project has a `.nvmrc` file, you can just run `npm use` to be sure to use the right version of Node.

## Installation

```
git clone git@github.com:proustibat/lbc-messages.git
cd lbc-messages
yarn
```

This will clone the repository then it will install needed packages and will make the web app ready to run for development.

## Development

#### Run the app locally

```
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### Commits
This repo is Commitizen-friendly. It means you'll be prompted to fill out any required commit fields at commit time. 
Learn more about [commitizen cli](https://github.com/commitizen/cz-cli).

[Husky](https://typicode.github.io/husky/#/) is used to enable `prepare-commit-msg` git hook. So you can just use `git commit` then follow the prompt of your terminal. 

#### Linting
By using [pretty-quick](https://github.com/azz/pretty-quick) we run [Prettier](https://prettier.io/) on changed files before each commit (on the `pre-commit` git hook).

We added Prettier to the default linter used by create-react-app that is [ESLint](https://create-react-app.dev/docs/setting-up-your-editor/#extending-or-replacing-the-default-eslint-config).
Our configuration of Prettier allows Eslint to be used with prettier because of [eslint-prettier](https://prettier.io/docs/en/integrating-with-linters.html). 
 
If you wanna run the linters by your own, you can run `yarn lint` that will run Prettier.

Please, be sure you also [configure your IDE correctly](https://create-react-app.dev/docs/setting-up-your-editor/).

## Testing

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Production

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Other used tools

None