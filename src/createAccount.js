import React, {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'
import './createAccount.css'
import PhoneInput from 'react-phone-input-2'
import { Link } from "react-router-dom";
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import { useNavigate } from 'react-router-dom';  



function Login() {
  const [roommatesNumb, setRoommatesNumb] = useState([])
  const [roommatesName, setRoommatesName] = useState([])
  const [userInfo, setUserInfo] = useState({})
  const [newNumb, setNewNumb] = useState('')
  const [newName, setNewName] = useState('')
  const [userNumber, setUsersNumber] = useState('')
  const [isUserInfo, setIsUserInfo] = useState(false)
  const [accountCreated, setAccountCreated] = useState(false)

  const navigate = useNavigate()


  function createAcct(){

    const url = window.location.href
    console.log(url)
    const parsedUrl = new URL(url).searchParams.get('code');
    console.log("code: " + parsedUrl)
    if(parsedUrl != null){
      axios.post('http://localhost:8002/getGAuthToken', {code: parsedUrl, numbers: roommatesNumb, names:roommatesName, userNumber:userNumber}).then(function(res) {
        console.log(res.data)
        setUserInfo(res.data)
        console.log(userInfo)
        localStorage.setItem('info', JSON.stringify(res.data.data))
        console.log(localStorage.getItem('info'))
        navigate('/')
      })
    }
    setAccountCreated(true)
    return userInfo
  }

  const removeRoommate = (index) =>{
      let numb = [...roommatesNumb]
      numb.splice(index,1)
      setRoommatesNumb(numb)
      let name = [...roommatesName]
      name.splice(index,1)
      setRoommatesName(name)
  }

  const addRoommate = () => {
    let numb = [...roommatesNumb]
    numb.push(newNumb)
    setRoommatesNumb(numb)
    let name = [...roommatesName]
    name.push(newName)
    setRoommatesName(name)
    setNewNumb('')
    setNewName('')
  }

  const RoommateInputs = () => {
    return (<div id="RoommateInput" className="container">
      
        {roommatesNumb.map((roommate, index) =>(
          <div className="d-flex m-3 justify-content-center" key={`roomate ${index}`} id="roommateInfo"> 
              <p className="" id="roommateName"> {`${roommatesName[index]}`}</p>
              <p className="" id="roommateNumber"> {`${roommate}`}</p>
              <button id="" className='' onClick={() => removeRoommate(index)}>Delete</button>
          </div>
        ))}
      </div>)
  }



  return (
    <div className="App">
      
      <Header/>

      <div id='body'>

        <h2>Create Account</h2> 
              <div id="userInformation">           
                             
                {isUserInfo ? ( 
                    <div>
                    <RoommateInputs/>    
                    <div className="d-flex m-3 justify-content-center" >

                      <input
                        type="text"
                        id="nameInput"
                        value={newName}
                        placeholder='name'
                        onChange={text => {setNewName(text.target.value)}}
                      />

                      <PhoneInput
                        id="numberInput" 
                        country={'us'}
                        name="input"
                        value={newNumb}
                        onChange={phone => {setNewNumb(phone)}}
                      />

                      <button id="addNumber" className="btn btn-secondary" onClick={addRoommate}>Add</button>
                    </div>
                    </div>): 
                
                  ( <div id="RoommateInput" className="container">

                      <h4 id="userInputText">Enter Personal Phone Number</h4>
                      <PhoneInput
                        id="numberInput" 
                        country={'us'}
                        name="input"
                        value={userNumber}
                        onChange={phone => {setUsersNumber(phone)}}
                      />
                      <button id="addUserNumber" className="btn btn-secondary" onClick={() => setIsUserInfo(true)}>Confirm</button>

                    </div>)}

              </div>

            {isUserInfo ? (
              <div className="row d-flex justify-content-around">
               
                <button id="saveInfo" className='col m-3 btn btn-primary' onClick={createAcct}> 
                  Confirm Information
                </button>

              </div>
            ) : null}


            <p>Please dont reload this page during the creation of your account</p>

      </div>

      <Footer id="footer"/>

    </div>
  );
}

export default Login;
