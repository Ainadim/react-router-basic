import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import Contact from './Contact/Contact.jsx'
import Users from './Users/Users.jsx'
import UserDetails from './UserDetails/UserDetails.jsx'
import BlogPosts from './BlogPosts/BlogPosts.jsx'
import BlogDetails from './BlogDetails/BlogDetails.jsx'
import ErrorPage from './ErrorPage/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/about',
        element: <About></About>
      }, 
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')        
      },
      {
        path: "user/:userId",
        element: <UserDetails></UserDetails>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      },
      {
        path: '/posts',
        element: <BlogPosts></BlogPosts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: '/post/:postId',
        element: <BlogDetails></BlogDetails>,
        loader: ({params}) => fetch (`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      }
    ]
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
