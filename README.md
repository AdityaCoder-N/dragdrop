
# About The Project

This project is a basic drag and drop application project where user needs to sort th given numbers in ascending order. <br/>
It contains two sections <br/>
1. Options (Random Numbers) - provided to user . Directory -> src/components/DraggableOptions <br/>
2. Solution (Empty Boxes) - which user needs to fill . Directory -> src/pages/Playscreen <br/>

File - DraggableOptions.jsx <br/>

- Has option container <br/>
  Events on option-container - <br/> 
    1. OnDragStart - Evoked when user begins to start dragging an element . Used to get value of draged element. <br/>
    2. OnDragEnd - Evoked when user stops dragging. Used for removing css classes. <br/>

File - Playscreen.jsx <br/>

-Has the whole user interface for sorting and moving elements <br/>
-Has Solution container boxes <br/>
    Events on Solution-boxes - <br/>
      1. OnDragStart - Evoked when user begins to start dragging an element . Used to get value of draged element. <br/>
      2. OnDragEnd - Evoked when user stops dragging. Used for removing css classes. <br/>
      3. OnDragLeave - Put on the element which has another element hovering over it. Evoked when the dragged item leaves the element it was dragging over. Used                         to remove css classes. <br/>
      4. OnDrop - Evoked when an element is dropped over the hovered element . <br/> 
            Contains logic for actual functioning : - <br/>
            Algo : - <br/>
              If (dropped element present in Option array) // means it is dragged from options <br/>
                  Add it to the solution array at the particular index it is hovered on, Remove from Option Array. <br/>
                  If(it is getting dropped on to an place already containing a number) <br/>
                    Push the previously contained number back to option array <br/>
              else  // means it is dragged from solutions boxes itself <br/>
                  Swap the contents of the two solution boxes <br/>
                  
     5. OnDragOver - evoked when an element is hovered on another element . Used to add css lcasses for hover effect. <br/>
     
     
     
Result Page - Directory(src/pages/ResultPage) <br/>

  -has code for checking wether the array given by user is sorted or not <br/>
      Algo :  <br/>
        1. Store the array in another temporary array <br/>
        2. Sort the temporary Array using built in sort function <br/>
        3. If (sorted array is equal to the array provided by user) <br/>
              Correct Answer <br/>
           else <br/>
              Wrong Answer <br/>
              
              
              
CSS Files for each page and component is in their respective directory. <br/>
  







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
