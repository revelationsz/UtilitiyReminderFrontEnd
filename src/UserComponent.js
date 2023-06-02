import React, {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'
import './UserComponent.css'
import PhoneInput from 'react-phone-input-2'



const UserComponent = (props) => {
  const [name, setName] = useState('')
  const [roommatesNumbs, setRoommatesNumbs] = useState(JSON.parse(localStorage.getItem('roommatesNumbs')) || [])
  const [roommatesNames, setRoommatesNames] = useState(JSON.parse(localStorage.getItem('roommatesNames')) || [])
  const [newNumb, setNewNumb] = useState('')
  const [newName, setNewName] = useState('')

  useEffect(() =>{
    setName(props.name)
    if(roommatesNumbs == null || roommatesNumbs.length == 0) {
      axios.get('http://localhost:8002/getUserInfo/'+props.email).then(function(response) {
        console.log(response)
        if(response.data==""){
          console.log("tset")
          props.noUser({})
        } else if(response.data.roommatesNumbs != null) {
          console.log(response.data)
          const numbs = [...response.data.roommatesNumbs]
          localStorage.setItem('roommatesNumbs', JSON.stringify(numbs))
          setRoommatesNumbs(numbs)
          const names = [...response.data.roommatesNames]
          localStorage.setItem('roommatesNames', JSON.stringify(names))
          setRoommatesNames(names)
          props.profileToLoc()
        }
      })
    }
  },[])

  const deleteAccount = async () => {
    axios.post('http://localhost:8002/test/'+props.email).then(function(response) {
    })
    props.logOut()
  }

  function removeRoommate(index) {
    let numb = [...roommatesNumbs]
    numb.splice(index,1)
    setRoommatesNumbs(numb)
    let name = [...roommatesNames]
    name.splice(index,1)
    setRoommatesNames(name)
    localStorage.setItem('roommatesNumbs', JSON.stringify(numb))
    localStorage.setItem('roommatesNames', JSON.stringify(name))
  }

  useEffect(() => {
    axios.post('http://localhost:8002/roommateUpdate/'+props.email, {roommatesNumbs: roommatesNumbs, roommatesNames: roommatesNames})
  }, [roommatesNumbs]);

  const addNumber = () => {
    let numb = [...roommatesNumbs]
    numb.push(newNumb)
    setRoommatesNumbs(numb)
    let name = [...roommatesNames]
    name.push(newName)
    setRoommatesNames(name)
    setNewNumb('')
    setNewName('')
    localStorage.setItem('roommatesNumbs', JSON.stringify(numb))
    localStorage.setItem('roommatesNames', JSON.stringify(name))
    setNewNumb("+1")
  }

  return (
    <div className="App">
          <h2 id="welcomePersonal">Welcome {name || ""}</h2> 
          <div className="container" id="phoneNumbers">
            Current Roommates
            {roommatesNumbs != null ? (
              roommatesNumbs.map((roommate, index) => (
                <div className="d-flex m-3 justify-content-center" key={`roomate ${index}`} id="roommateInfo"> 
                    <p className="" id="roommateName"> {`${roommatesNames[index]}`}</p>
                    <p className="" id="roommateNumber"> {`${roommate}`}</p>
                    <button id="" className="btn btn-secondary" onClick={() => removeRoommate(index)}>Delete</button>
                </div>
              ))
              ) : null}
              <div className="d-flex m-3 justify-content-center">

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

                <button id="addNumber" className="btn btn-secondary" onClick={addNumber}>Add</button>

              </div>
          </div>
          <button className="btn btn-primary"  onClick={() => (props.logOut())}>Log Out</button>

          <button className="btn btn-primary" id="deleteAcct"onClick={() => {deleteAccount()}}> Delete Account</button>   
    </div>
  );
}

export default UserComponent;