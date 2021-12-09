import "./home.css"
import React from 'react'
import Text from "../atoms/text"
import Input from "../atoms/input";
import Button from "../atoms/button";
import Paragraph from "../atoms/paragraph";
import Header from '../molecules/header/header'
import Navbar from "../atoms/Navbar"
import Image from "../img/logo-pathphi.png"
const Home = ({handleClick, username, setUsername}) => {

    const reHandleClickRegister = () =>{
        handleClick("register")
      }
      const reHandleClickLogin = () =>{
        handleClick("login")
      }
    //Puede poner JavaScript *puro* 
      return (
        <>
            <div className="home-main-container">
                <Header setUsername ={setUsername} username = {username} handleClickRegister= {reHandleClickRegister} handleClickLogin={reHandleClickLogin}/>
                <div className="home-main__oneRow container--inrow">
                    <div className="home-main__item-container " style={{borderRadius: "1vw",border: "2px solid #00000000",borderColor: "#00000000 #DABCAF #00000000 #00000000"}}>
                        <Text content = 'Descripción' fontSize="3vw" color= "#276271" fontWeight="bold"/>
                    </div>
                    <div className="home-main__item-container" style={{padding: "0.6vw", borderRadius: "1vw",border: "2px solid #00000000",borderColor: "#00000000  #00000000  #00000000 #DABCAF"}}>
                        <Text content = 'Hola somos Path-phi, una plataforma que te permitira aprender con una gran cantidad de recursos de internet, esto lo hacemos mediante rutas de aprendizaje en las que vas avanzando a medida que revisas los materiales y pones a prueba tus conocimientos' fontSize="0.9vw" color= "rgba(0, 0, 0, 0.6)"/>
                    </div>
                    <div className="home-main__item-container" style={{borderRadius: "1vw",border: "2px solid #00000000",borderColor: "#00000000  #00000000 #DABCAF #00000000"}}>
                        <Text content = 'Objetivos' fontSize="3vw" color= "#276271" fontWeight="bold"/>
                    </div>

                    <div className="home-main__item-container" style={{padding: "0.6vw" , borderRadius: "1vw",border: "2px solid #00000000",borderColor: "#00000000  #00000000 #DABCAF #00000000"}}>
                    <Text content = 'El equipo de Path-Phi se conformo inicialmente con 6 personas en Octubre de 2021 con la clara intencion de brindar algo positivo a la comunidad en general desde una herramienta de software' fontSize="0.9vw" color= "rgba(0, 0, 0, 0.6)"/>
                    </div>
                    <div className="home-main__item-container">
                        <img className ="home-main__logo-img" src = {Image}/> 
                    </div>
                    <div className="home-main__item-container" style={{padding: "0.6vw" , borderRadius: "1vw",border: "2px solid #00000000",borderColor: "#DABCAF #00000000  #00000000 #00000000"}}>
                    <Text content = 'El principal objetivo de path-phi es agrupar la gran cantidad de recursos educativos que hay en internet para facilitar el aprendizaje de las personas' fontSize="0.9vw" color= "rgba(0, 0, 0, 0.6)"/>
                    </div>

                    <div className="home-main__item-container" style={{borderRadius: "1vw",border: "2px solid #00000000",borderColor: "#DABCAF #00000000  #00000000  #00000000"}}>
                        <Text content = 'Historia' fontSize="3vw" color= "#276271" fontWeight="bold"/>
                    </div>
                    <div className="home-main__item-container" style={{padding: "0.6vw",borderRadius: "1vw",border: "2px solid #00000000",borderColor: "#00000000  #DABCAF #00000000  #00000000"}}>
                        <Text content = 'Para empezar a utilizar PathPhi te pedimos que te registres en la aplicacion, luego podras visualizar las rutas que tenemos disponibles para ti, alli podras escoger la ruta que mas despierte tu interes, nuestras rutas suelen ser evaluadas por expertos, asi que animate.' fontSize="0.9vw" color= "rgba(0, 0, 0, 0.6)"/>
                    </div>
                    <div className="home-main__item-container" style={{padding: "0.6vw", borderRadius: "1vw",border: "2px solid #00000000",borderColor: "#00000000  #00000000  #00000000 #DABCAF"}}>
                        <Text content = 'Como usar PathPhi' fontSize="3vw" color= "#276271" fontWeight="bold"/> 
                    </div>
                
                </div>
            </div>
        </>
      );
    };
    export default Home;