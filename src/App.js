import React from "react";
import './App.css';
import Homepage from './pages/Homepage/Homepage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ResultPage from "./pages/ResultPage/ResultPage";
import Level2 from "./pages/Level2/Level2";
import Level1 from "./pages/Level1/Level1";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Homepage />,
  },
  {
    path:'/level1',
    element:<Level1/>
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
