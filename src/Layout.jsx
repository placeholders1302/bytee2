import { Outlet } from "react-router-dom"
import Header from './pages/Header/Header';
import LogInButton from "./components/LogInButton/LogInButton";
import LogOutButton from "./components/LogOutButton/LogOutButton";
import Profile from "./components/Profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function Layout() {

  const { isLoading, error }=useAuth0();

  return (
    <>
    {error&&(<p>Authentication Error</p>)}
    {!error&&isLoading&&<p>Loading....</p>}
    {!error&&!isLoading&&(
      <>        
        <LogInButton/>
        <LogOutButton/>
        <Profile/>
        <Header/>
        <Outlet/>
      </>
    )}
    </>
  )
}

export default Layout