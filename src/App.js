import React, {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import UserComponent from './UserComponent.js';
import { useLocation } from 'react-router-dom';
import Footer from './components/Footer.js'
import Header from './components/Header.js'

function App(props) {
  const [ user, setUser ] = useState({});
  const [ profile, setProfile ] = useState(JSON.parse(localStorage.getItem('profile')) != null ? JSON.parse(localStorage.getItem('profile')) : null);
  const [ newUser, setNewUser ] = useState(JSON.parse(localStorage.getItem('info')) != null ? JSON.parse(localStorage.getItem('info')) : null);
  //useLocation.state()
  const [ invalidUser, setInvalidUser ] = useState(false)

  
  const login = useGoogleLogin({    
    onSuccess: (codeResponse) => {
      setUser(codeResponse)
    },
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(
      () => {
          if (Object.keys(user).length > 0 ) {
              axios
                  .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                      headers: {
                          Authorization: `Bearer ${user.access_token}`,
                          Accept: 'application/json'
                      }
                  })
                  .then((res) => {
                      if(res.data.email){
                        setProfile(res.data);
                        setInvalidUser(false)
                      }
                  })
                  .catch((err) => console.log(err));
          }
      },
      [user]
  );

// log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile({});
    setNewUser(null)
    window.history.replaceState({}, document.title)
    localStorage.removeItem('profile')
    localStorage.removeItem('roommatesNumbs')
    localStorage.removeItem('roommatesNames')
    localStorage.removeItem('info')
  };

  const gmailAuth = () => {
    axios.get('http://localhost:8002/getGoogleAuthLink').then(function(response) {
       window.open(response.data, "_self")
    })
  }   

  const noUser = (data) => {
    setProfile(data);
    setNewUser(null);
    setInvalidUser(true)
  }

  const profileToLoc = () => {
    localStorage.setItem('profile', JSON.stringify(profile));
  }

  return (
    <div className="App">

      <Header/>

      <div id="holder">

          {newUser == null &&  (profile == undefined || Object.keys(profile).length == 0) ? (<h1 id="welcomeText">Welcome to Utility Reminders</h1>) : <div></div>}
          {invalidUser ? (<h3>Email not registered, please create an account with that email first</h3>) : <div></div>}
        
          {newUser != null ? 
            (<div>
              <UserComponent profileToLoc={profileToLoc} name={newUser.names[0].displayName}  email={newUser.emailAddresses[0].value} noUser={noUser} logOut={logOut}/>
            </div>) 
            :
            (profile != undefined && Object.keys(profile).length > 0)?
              (<div>
                <UserComponent profileToLoc={profileToLoc} name={profile.name} email={profile.email} noUser={noUser} logOut={logOut}/>
              </div>)
              :  
                (<div id="signInButtons" className='container'>
                  <div className="d-flex justify-content-around">
                    <button className='btn btn-primary' id="createButton" onClick={gmailAuth}>Create Account</button>
                    <button className='btn btn-primary' id="loginButton" onClick={login}>Login</button>
                  </div>
                </div>
            )} 

           {newUser == null &&  (profile == undefined || Object.keys(profile).length == 0) ? (<p>For roommates by roommates</p> ) : (null)}

      </div>

      <Footer id="footer"/>

    </div>
  );
}

export default App;
