import React from 'react'
import Register from '../molecules/register/register'
import Login from '../molecules/login/Login'
import Home from '../molecules/Home'
const Inicio = () => {

//Puede poner JavaScript *puro* 
const [state, setState] = React.useState("home")
const [username, setUsername] = React.useState("")
const handleClick = (string) =>{
    setState(string)
}

  return (
    <>
        {state == "login"&&<Login handleClick={handleClick} setUsername={setUsername}/>}
        {state == "register" && <Register handleClick={handleClick}/>}
        {state == "home" && <Home handleClick={handleClick} username={username} setUsername= {setUsername}/>}

    </>
  );
};
export default Inicio;
