import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root/Root'
import Home from './components/Home/Home'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Statistics from './components/Statistics/Statistics'
import AppliedJob from './components/AppliedJob/AppliedJob'
import Blog from './components/Blog/Blog'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/home',
        loader: ()=>fetch('/jobs.json') ,
        element:<Home></Home>
      },
      {
        path:'/featuredJob/:id',
        loader: ()=>fetch(`../jobs.json`) ,
        element:<Statistics></Statistics>
      },
      {
        path:'/appliedJob',
        element: <AppliedJob></AppliedJob>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
