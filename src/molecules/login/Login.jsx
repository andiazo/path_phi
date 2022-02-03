import "./login.css"
import React from 'react'
import Text from "../../atoms/text"
import Input from "../../atoms/input";
import Button from "../../atoms/button";
import {signIn} from '../../HTTPscripts/authScripts'
import backgroudImgURL from "../../img/LoginBackground.jpeg"
const Login = ({handleClick, setUsername, setUserID}) => {


//Puede poner JavaScript *puro* 
const [formUser, setFormUser] = React.useState("")
const [alertText, setAlertText] = React.useState("")
const [alertTextClass, setAlertTextClass] = React.useState("")
const [isAuthorized, setIsAuthorized] = React.useState(false)
const [firsTime, setFirsTime] = React.useState(true)
React.useEffect(()=>{
  if(firsTime){
    document.getElementsByTagName("body")[0].style = `background-image: url(${backgroudImgURL})`;
    setFirsTime(false)
  }
}, [firsTime])
const reHandleClickregister = () =>{
  handleClick("register")
}
const reHandleClickHome = () =>{
  handleClick("home")
}

React.useEffect(() => {
  if(isAuthorized){
    setUsername(formUser)
    handleClick("home")
  }
}, [isAuthorized])
React.useEffect(() => {
  if(alertText != "") setAlertTextClass("alert-text--error");
  else setAlertTextClass("")
}, [alertText])

const reHandleClickLogin = () =>{
  setFormUser(document.getElementById("input-username").value)
  const password = document.getElementById("input-password").value
  const username = document.getElementById("input-username").value
  if(username != "" && password != ""){
    setAlertText("")
    setAlertTextClass("")
    //handleClick("home")
    const data = {
      username: username,
      password: password
    }
    signIn(setUserID, setIsAuthorized, setAlertText, data)
  }
  else{
    setAlertText("Por favor llenar los campos con datos válidos")
    setAlertTextClass("alert-text--error")
  }
}
  return (
    <>
      <div className="main-container">
        <div className="login-container">

          <Text content = 'PathPhi' fontSize="3.5vw" color= "#C19D72" fontWeight="bold"/>
          <div className = "form">
            <div className = "container-incolumn">
              
              <Text content = 'Usuario' fontSize="2vw" color= "#5B7783" fontWeight="bold"/>
              <Input id="input-username" width= "12vw" height= "34.5px" transformStyle= "preserve-3d"transform= "rotateX(45deg)"backgroundColor= "#E5E5E5"padding= "0 5px 0 5px" border= "none"/>
            </div>
            <div className="container-incolumn">
              <Text content = 'Contraseña' fontSize="2vw" color= "#5B7783" fontWeight="bold"/>
              <Input type="password" id="input-password" width= "12vw" height= "34.5px" transformStyle= "preserve-3d"transform= "rotateX(45deg)"backgroundColor= "#E5E5E5"padding= "0 5px 0 5px" border= "none"/>
              
            </div>
          </div>
          
          {alertText != "" && <Text className= {alertTextClass} content = {alertText} fontSize="0.6vw"  fontWeight="bold"/>}
          <div className="container-incolumn">
            <Button handle = {reHandleClickLogin} text="Acceder" color="#5B7783" borderColor="rgba(39, 98, 113, 0.65)"/>
            <Text handle = {reHandleClickregister} cursor = "pointer" textDecoration="underline" fontStyle = "italic" content = 'Registrarme' fontSize="0.8vw" color= "rgba(39, 98, 113, 0.65)" fontWeight="bold"/>
            <Text handle = {reHandleClickHome} cursor = "pointer" textDecoration="underline" fontStyle = "italic" content = 'Inicio' fontSize="0.8vw" color= "rgba(39, 98, 113, 0.65)" fontWeight="bold"/>
          </div>
          
        </div>
        <div className="vertical-bar"></div>
      </div>
    </>
  );
};
export default Login;
