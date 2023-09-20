import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Foods from './Components/Foods/Foods';
import FoodDetails from './Components/FoodDetails/FoodDetails';

const routar = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/categori/:foodName",
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.foodName}`),
        element: <Foods></Foods>
      },
      {
        path: "/food/:foodId",
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.foodId}`),
        element: <FoodDetails></FoodDetails>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routar}></RouterProvider>
  </React.StrictMode>,
)
