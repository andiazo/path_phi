import "./home.css"
import Text from "../atoms/text"
import Input from "../atoms/input";
import Button from "../atoms/button";
import Paragraph from "../atoms/paragraph";
import Navbar from "../atoms/Navbar"
import Image from "../img/logo-pathphi.png"
const Home = ({handleClick}) => {
    const reHandleClickregister = () =>{
        handleClick("register")
      }
      const reHandleClickLogin = () =>{
        handleClick("login")
      }
    //Puede poner JavaScript *puro* 
      return (
        <>
            <div className="home-main-container">
                <div className="home-login-container">
                <Navbar HandleClickRegister={reHandleClickregister} HandleClickLogin={reHandleClickLogin}/> 
                <div className = "home-container-row home-container-row-left" >
                    <Text content = 'Descripción' fontSize="3vw" color= "#5B7783" fontWeight="bold"/>
                    <div className = "home-container-paragraph">
                        <Text content = 'Hola somos Path-phi, una plataforma que te permitira aprender con una gran cantidad de recursos de internet, esto lo hacemos mediante rutas de aprendizaje en las que vas avanzando a medida que revisas los materiales y pones a prueba tus conocimientos' fontSize="0.9vw" color= "#000000"/>
                    </div>
                </div>
                <div className = "home-container-row home-container-row-right" >
                    <div className = "home-container-paragraph">
                        <Text content = 'El principal objetivo de path-phi es agrupar la gran cantidad de recursos educativos que hay en internet para facilitar el aprendizaje de las personas' fontSize="0.9vw" color= "#000000"/>
                    </div>
                    <Text content = 'Objetivos' fontSize="3vw" color= "#4B7787" fontWeight="bold"/>
                </div>

                <div className = "home-container-row home-container-row-left" >
                    <Text content = 'Historia' fontSize="3vw" color= "#5B7783" fontWeight="bold"/>
                    <div className = "home-container-paragraph">
                        <Text content = 'El equipo de Path-Phi se conformo inicialmente con 6 personas en Octubre de 2021 con la clara intencion de brindar algo positivo a la comunidad en general desde una herramienta de software' fontSize="0.9vw" color= "#000000"/>
                    </div>
                </div>

                <div className = "home-container-row home-container-row-right" >
                    <div className = "home-container-paragraph">
                        <Text content = 'Para empezar a utilizar PathPhi te pedimos que te registres en la aplicacion, luego podras visualizar las rutas que tenemos disponibles para ti, alli podras escoger la ruta que mas despierte tu interes, nuestras rutas suelen ser evaluadas por expertos, asi que animate.' fontSize="0.9vw" color= "#000000"/>
                    </div>
                    <Text content = 'Como usar PathPhi' fontSize="3vw" color= "#4B7787" fontWeight="bold"/>
                </div>
                <img src = {Image}  width = '700px'/> 

                <div className = 'footer'>
                    <Text content = 'PathPhi' fontSize = '0.7vw' color = 'white'/>
                    <Text content = 'Todos los derechos reservados' fontSize = '0.7vw' color = 'white'/>
                    <Text content = 'Diego Bula - Diego Carvajal - Andres Diaz - Nicolas Hoyos - Carlos Niño - Samuel Salgado' fontSize = '0.7vw' color = 'white'/>
                    <Text content = '2021' fontSize = '0.7vw' color = 'white'/>
                </div>


                </div>
            </div>
        </>
      );
    };
    export default Home;