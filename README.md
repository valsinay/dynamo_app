# Latest update
If user has disabled geolocation, an alert shows up to inform that it must be enabled in order to locate his location. Grid layout has replaced flex for the weather cards.Sensitive information is now received via environment variables.

## Setup

1. Clone the repository.
2. Install the dependencies with `npm install`.
3. Rename the `.env.example` file to  `.env`.
4. Fill in the actual values for each key in the `.env` file.

# Project insights

This weather application provides a 5-day weather forecast based on the user's location. The main page displays the dates and corresponding weather conditions in a card-style layout, with unique icons representing the current weather type. The cards start with today's date and continue for the next four days. On click of a specific card, a modal is opened and the user could see the day's forecast in 3 hour intervals.

Users have the ability to change the metric system of the weather, and these preferences are saved in browser's local storage.

The application is mobile-friendly and tests have been added to ensure correct component functionality.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
