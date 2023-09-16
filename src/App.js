import React from "react";
import './App.css';



import Homepage from './pages/Homepage/Homepage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PlayScreen from "./pages/PlayScreen/PlayScreen";
import ResultPage from "./pages/ResultPage/ResultPage";
import Level2 from "./pages/Level2/Level2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path:'/level1',
    element:<PlayScreen/>
  },
  {
    path:'/level2',
    element:<Level2/>

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
