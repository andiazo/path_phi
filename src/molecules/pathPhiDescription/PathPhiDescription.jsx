import "./pathPhiDecription.css"
import React from 'react'
import Text from "../../atoms/text.jsx"
import Image from "../../img/logo-pathphi.png"
const PathPhiDescription = ({handleClick, username, setUsername}) => {

    const reHandleClickRegister = () =>{
        handleClick("register")
      }
      const reHandleClickLogin = () =>{
        handleClick("login")
      }
    //Puede poner JavaScript *puro* 
      return (
        <>
                <div className="pp-description__oneRow container--inrow">
                    <div className="pp-description__item-container " style={{borderRadius: "1vw",border: "2px solid #00000000",borderColor: "#00000000 #DABCAF #00000000 #00000000"}}>
                        <Text content = 'Descripción' fontSize="3vw" color= "#276271" fontWeight="bold"/>
                    </div>
                    <div className="pp-description__item-container" style={{padding: "0.6vw", borderRadius: "1vw",border: "2px solid #00000000",borderColor: "#00000000  #00000000  #00000000 #DABCAF"}}>
                        <Text content = 'Hola somos Path-phi, una plataforma que te permitirá aprender con una gran cantidad de recursos de internet, esto lo hacemos mediante rutas de aprendizaje en las que vas avanzando a medida que revisas los materiales y pones a prueba tus conocimientos' fontSize="0.9vw" color= "rgba(0, 0, 0, 0.6)"/>
                    </div>
                    <div className="pp-description__item-container" style={{borderRadius: "1vw",border: "2px solid #00000000",borderColor: "#00000000  #00000000 #DABCAF #00000000"}}>
                        <Text content = 'Objetivos' fontSize="3vw" color= "#276271" fontWeight="bold"/>
                    </div>

                    <div className="pp-description__item-container" style={{padding: "0.6vw" , borderRadius: "1vw",border: "2px solid #00000000",borderColor: "#00000000  #00000000 #DABCAF #00000000"}}>
                    <Text content = 'El equipo de Path-Phi se conformó inicialmente con 6 personas en Octubre de 2021. Con la clara intencion de brindar algo positivo a la comunidad en general desde una herramienta de software' fontSize="0.9vw" color= "rgba(0, 0, 0, 0.6)"/>
                    </div>
                    <div className="pp-description__item-container">
                        <img className ="pp-description__logo-img" src = {Image}/> 
                    </div>
                    <div className="pp-description__item-container" style={{padding: "0.6vw" , borderRadius: "1vw",border: "2px solid #00000000",borderColor: "#DABCAF #00000000  #00000000 #00000000"}}>
                    <Text content = 'El principal objetivo de path-phi es recopilar recursos educativos gratuitos por internet, para facilitar el aprendizaje de las personas' fontSize="0.9vw" color= "rgba(0, 0, 0, 0.6)"/>
                    </div>

                    <div className="pp-description__item-container" style={{borderRadius: "1vw",border: "2px solid #00000000",borderColor: "#DABCAF #00000000  #00000000  #00000000"}}>
                        <Text content = 'Historia' fontSize="3vw" color= "#276271" fontWeight="bold"/>
                    </div>
                    <div className="pp-description__item-container" style={{padding: "0.6vw",borderRadius: "1vw",border: "2px solid #00000000",borderColor: "#00000000  #DABCAF #00000000  #00000000"}}>
                        <Text content = 'Para empezar a utilizar PathPhi te pedimos que te registres en la aplicacion, luego podrás visualizar las rutas que tenemos disponibles para ti, allí podrás escoger la ruta que más despierte tu interés, nuestras rutas suelen ser evaluadas por expertos, así que anímate.' fontSize="0.9vw" color= "rgba(0, 0, 0, 0.6)"/>
                    </div>
                    <div className="pp-description__item-container" style={{padding: "0.6vw", borderRadius: "1vw",border: "2px solid #00000000",borderColor: "#00000000  #00000000  #00000000 #DABCAF"}}>
                        <Text content = 'Cómo usar PathPhi' fontSize="3vw" color= "#276271" fontWeight="bold"/> 
                    </div>
                
                </div>
        </>
      );
    };
    export default PathPhiDescription;