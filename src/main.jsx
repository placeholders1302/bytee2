import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout';
import Categories from './pages/Categories/Categories';
import { Auth0Provider } from '@auth0/auth0-react';
import Home from './Home';
import StudentProfile from './pages/Profile/StudentProfile';
import TeacherProfile from './pages/Profile/TeacherProfile';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='categories' element={<Categories/>}/>
      <Route path='user' element={<StudentProfile/>}/>
      <Route path='teacher' element={<TeacherProfile/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-5tvxg1qkelajs51e.us.auth0.com'
      clientId='6SBKRAzwNXczcC44FkdarWjfqfBtJWlq'
      redirectUri={window.location.origin}
    >      
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>,
)
