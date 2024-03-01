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
import App from './App';
import Categories from './pages/Categories/Categories';
import SignUp from './pages/SignUp/SignUp';
import SignInSide from './pages/SignIn/SignIn';
import { Auth0Provider } from '@auth0/auth0-react';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<App/>}/>
      <Route path='categories' element={<Categories/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='login' element={<SignInSide/>}/>
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
