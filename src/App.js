import React from "react";
import './App.css';



import Homepage from './pages/Homepage/Homepage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PlayScreen from "./pages/PlayScreen/PlayScreen";
import ResultPage from "./pages/ResultPage/ResultPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path:'/play',
    element:<PlayScreen/>
  },
  {
    path:'/result',
    element:<ResultPage/>
  }
]);

function App() {

  return (
    <div >
      <RouterProvider  router={router} />
    </div>
  );
}

export default App;
