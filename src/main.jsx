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
import { HelmetProvider } from 'react-helmet-async'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        loader: ()=>fetch('/jobs.json') ,
        element:<Home></Home>
      },
      {
        path:'/featuredJob/:id',
        loader: ()=>fetch(`../jobs.json`) ,//here we loaded all data. but in real world we should not do it. we will only load one data at a time which one we need.
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
  <HelmetProvider>
<RouterProvider router={router} />

  </HelmetProvider>
    
  </React.StrictMode>,
)
