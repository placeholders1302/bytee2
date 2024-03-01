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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
