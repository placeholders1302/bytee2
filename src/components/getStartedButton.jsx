import {useAuth0} from "@auth0/auth0-react";

function getStartedButton() {

     const { redirectedLogin, isAuthenticated } = useAuth0();


  return (
      !isAuthenticated &&(  
          <button onClick={()=>redirectedLogin()}>

              Get Started

          </button>
      )
  );

}

export default getStartedButton; 
