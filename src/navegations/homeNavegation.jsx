import React from 'react'
import Register from '../molecules/register/register'
import Login from '../molecules/login/Login'
import PaginaPrincipal from '../templates/paginaPrincipal/PaginaPrincipal'
const HomeNavegation = () => {

//Puede poner JavaScript *puro* 
const [state, setState] = React.useState("home")
const [username, setUsername] = React.useState("")
const [userID, setUserID] = React.useState()

React.useEffect(()=>{
  console.log(userID)
},[userID])
const handleClick = (string) =>{
    setState(string)
}

  return (
    <>
        {state == "login"&&<Login handleClick={handleClick} setUsername={setUsername} setUserID = {setUserID}/>}
        {state == "register" && <Register handleClick={handleClick}/>}
        {state == "home" && <PaginaPrincipal handleClick={handleClick} username={username} setUsername= {setUsername} userID={userID}/>}

    </>
  );
};
export default HomeNavegation;
