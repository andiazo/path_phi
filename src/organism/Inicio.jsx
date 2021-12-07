import React from 'react'
import Register from '../molecules/register/register'
import Login from '../molecules/login/Login'
import Home from '../molecules/Home'
const Inicio = () => {

//Puede poner JavaScript *puro* 
const [state, setState] = React.useState("register")
const handleClick = (string) =>{
    setState(string)
}
  return (
    <>
        {state == "login"&&<Login handleClick={handleClick}/>}
        {state == "register" && <Register handleClick={handleClick}/>}
        {state == "home" && <Home handleClick={handleClick}/>}

    </>
  );
};
export default Inicio;
