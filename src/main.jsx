import ReactDOM from 'react-dom/client'
import React from 'react'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import App, {Home, NoMatch} from './App.jsx'
import './styles/index.css'
import Transformations from "./pages/Exercises/Transformations/page.jsx";

const router = createBrowserRouter([
  {
    path: "/siteCG/",
    element: <App/>,
    children: [
      {
        path: "/siteCG/",
        element: <Home />
      },
      {
        path: "/siteCG/Exercises/Transformations",
        element: <Transformations />
      },
      {
        path: "*",
        element: <NoMatch />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
