import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CreateAccount from './createAccount';
import PrivatePolicy from './PrivatePolicy';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter, Routes,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';



export default function Application() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
          <Route path='createAccount' element={<CreateAccount/>}/>
          <Route path='privatePolicy' element={<PrivatePolicy/>}/>
      </Routes>
    </BrowserRouter>
  )
}
    



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="424844464620-j86niq4rebu93u8g8eo95fskmf0m7k8m.apps.googleusercontent.com">
    {/* <React.StrictMode> */}
      <Application/>
    {/* </React.StrictMode> */}
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
