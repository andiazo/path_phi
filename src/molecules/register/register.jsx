import React from 'react'
import Text from "../../atoms/text"
import Input from "../../atoms/input";
import Button from "../../atoms/button";
import {signUp} from '../../HTTPscripts/authScripts'
import './register.css'
import backgroudImgURL from "../../img/LoginBackground.jpeg"

const Register = ({handleClick}) => {

//Puede poner JavaScript *puro* 
const reHandleClick = () =>{
    handleClick("login")
}
const reHandleClickHome = () =>{
  handleClick("home")
}
const [alertText, setAlertText] = React.useState("")
const [alertTextClass, setAlertTextClass] = React.useState("")
const [isRegistered, setIsRegistered] = React.useState(false)
const [firsTime, setFirsTime] = React.useState(true)
React.useEffect(()=>{
  if(firsTime){
    document.getElementsByTagName("body")[0].style = `background-image: url(${backgroudImgURL})`;
    setFirsTime(false)
  }
}, [firsTime])
React.useEffect(() => {
  if(isRegistered){
    handleClick("login")
  }
}, [isRegistered])
React.useEffect(() => {
  if(alertText != "") setAlertTextClass("alert-text--error");
  else setAlertTextClass("")
}, [alertText])

const reHandleClickRegister = () =>{
    const username = document.getElementById("register__input-username").value
    const password = document.getElementById("register__input-password").value
    const email = document.getElementById("register__input-email").value
    const age = document.getElementById("register__input-age").value
    const acceptTerms = document.getElementById("register__input-acceptTerms").checked
    if(username != "" && password != "" && email != "" && age != "" && acceptTerms){
        setAlertText("")
        setAlertTextClass("")
        //handleClick("login")
        const data = {
          username: username,
          password: password,
          email: email
        }
        signUp(setIsRegistered, setAlertText, data)
        
    }
    else{
      setAlertText("Por favor llenar todos los campos y aceptar los términos y condiciones")
      setAlertTextClass("alert-text--error")
    }
  }
  return (
    <>
      <div className="container--main container ">
        <div className="container--register container">

          <Text content = 'PathPhi' fontSize="3.5vw" color= "#41415C" fontWeight="bold"/>
          <div className = "container--register__form">
            <div className = "container--incolumn">
              <Text content = 'Usuario' fontSize="2vw" color= "#7B7E9C" fontWeight="bold"/>
              <Input id="register__input-username" width= "12vw" height= "34.5px" transformStyle= "preserve-3d"transform= "rotateX(45deg)"backgroundColor= "#E5E5E5"padding= "0 5px 0 5px" border= "none"/>
            </div>
            <div className="container--incolumn">
              <Text content = 'Contraseña' fontSize="2vw" color= "#7B7E9C" fontWeight="bold"/>
              <Input type="password" id="register__input-password" width= "12vw" height= "34.5px" transformStyle= "preserve-3d"transform= "rotateX(45deg)"backgroundColor= "#E5E5E5"padding= "0 5px 0 5px" border= "none"/>
              
            </div>
            <div className="container--incolumn">
              <Text content = 'Correo' fontSize="2vw" color= "#7B7E9C" fontWeight="bold"/>
              <Input id="register__input-email" width= "12vw" height= "34.5px" transformStyle= "preserve-3d"transform= "rotateX(45deg)"backgroundColor= "#E5E5E5"padding= "0 5px 0 5px" border= "none"/>
            </div>
            <div className="container--inrow">
              <Text content = 'Edad' fontSize="2vw" color= "#7B7E9C" fontWeight="bold"/>
              <Input type="number" id="register__input-age" width= "3em" height= "2vw" transformStyle= "preserve-3d" transform= "rotateY(-45deg)"backgroundColor= "#E5E5E5"padding= "0 5px 0 5px" border= "none"/>
            </div>
            <div className="container--inrow">
              <Input type="checkbox" id="register__input-acceptTerms" width= "2em" height= "2em" transformStyle= "preserve-3d" transform= "rotateY(45Deg)"backgroundColor= "#000000"padding= "0 5px 0 5px" border= "none"/>
              <Text content = 'Aceptar términos de tratamiento de datos' fontSize="0.6vw" color= "#7B7E9C" fontWeight="bold"/>
            </div>
          </div>
          
          {alertText != "" && <Text className= {alertTextClass} content = {alertText} fontSize="0.6vw"  fontWeight="bold"/>}
          <div className="container--incolumn">
            <Button handle= {reHandleClickRegister} text="Registrarse" color="#41415C" borderColor="#41415C"/>
            <Text  handle = {reHandleClick} cursor = "pointer" textDecoration="underline" fontStyle = "italic" content = 'Iniciar sesión' fontSize="0.8vw" color= "#41415C" fontWeight="bold"/>
            <Text handle = {reHandleClickHome} cursor = "pointer" textDecoration="underline" fontStyle = "italic" content = 'Inicio' fontSize="0.8vw" color= "#41415C" fontWeight="bold"/>
          </div>
          
        </div>
        <div className="vertical-bar--register"></div>
      </div>
    </>
  );
};
export default Register;
