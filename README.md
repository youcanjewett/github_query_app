# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Run this in your terminal to see testing report.

## Notes

## Things I would have added/done differently with more time:

Add handlers for invalid searchbar input

Add a loading bar/icon to display while waiting for repo data to populate the screen

Add pagination for users that have more than 10 repos to display

Spice up the repo list a little - maybe have a star icon instead of the word "stars", and make the name of each repo a hyperlink to take you to the repo in GitHub.

Using Redux may have been useful for this since multiple components are using things in state.

Greatly elaborated on testing - I added one basic snapshot and unit test to show how to set them up and the kind of output the testing script provides, but ideally there would be a lot more tests for each class/functional component. I would have also liked to add Jest's code coverage report to the testing output.

Overall, I would have liked to make the app a little nicer and more resiient against unexpected user behavior.