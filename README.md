

# About The Project

This project is a basic drag and drop application project where the user needs to sort the given numbers in ascending order.

It contains two sections:

1. Options (Random Numbers) - provided to the user. Directory: `src/components/DraggableOptions`.
2. Solution (Empty Boxes) - which the user needs to fill. Directory: `src/pages/Playscreen`.

## DraggableOptions.jsx

File - DraggableOptions.jsx

- Has option container.
- Events on option-container:
   - `OnDragStart`: Evoked when the user begins to start dragging an element. Used to get the value of the dragged element.
   - `OnDragEnd`: Evoked when the user stops dragging. Used for removing CSS classes.

## Playscreen.jsx

File - Playscreen.jsx

- Has the whole user interface for sorting and moving elements.
- Has Solution container boxes.
- Events on Solution-boxes:
   - `OnDragStart`: Evoked when the user begins to start dragging an element. Used to get the value of the dragged element.
   - `OnDragEnd`: Evoked when the user stops dragging. Used for removing CSS classes.
   - `OnDragLeave`: Put on the element which has another element hovering over it. Evoked when the dragged item leaves the element it was dragging over. Used to remove CSS classes.
   - `OnDrop`: Evoked when an element is dropped over the hovered element. Contains logic for actual functioning:
      - If the dropped element is present in the Option array (means it is dragged from options):
         - Add it to the solution array at the particular index it is hovered on, Remove from Option Array.
         - If it is getting dropped onto a place already containing a number:
            - Push the previously contained number back to the option array.
      - Else (means it is dragged from solutions boxes itself):
         - Swap the contents of the two solution boxes.
   - `OnDragOver`: Evoked when an element is hovered on another element. Used to add CSS classes for hover effect.

## Result Page

Result Page - Directory: `src/pages/ResultPage`

- Has code for checking whether the array given by the user is sorted or not.
   - Algorithm:
     1. Store the array in another temporary array.
     2. Sort the temporary Array using the built-in sort function.
     3. If the sorted array is equal to the array provided by the user:
        - Correct Answer.
     4. Else:
        - Wrong Answer.

CSS Files for each page and component are in their respective directories.

Please refer to the individual files mentioned with their respective directories for more information about the project structure and functionality.




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

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
