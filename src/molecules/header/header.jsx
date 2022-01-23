import React from 'react'
import Text from "../../atoms/text"
import './header.css'


const Header = ({handleClickNavigation, handleClickLogin, handleClickRegister, handleClickPaths, setUsername, username, navegationTree}) => {

//Puede poner JavaScript *puro* 

const reSetUsername= () =>{
    setUsername("")
    handleClickNavigation("home")
}

const reHandleClickNavigation = (string) => () =>{
  handleClickNavigation(string)
}
  return (
    <>
      <div className="main-header container--inrow">
        <div className="main-header__title-container container--incolumn">
            <Text content = 'PathPhi' fontSize="3.5vw" color= "#C19D72" fontWeight="bold"/>
            <Text content = {navegationTree} fontSize="1.2vw" color= "#7B7E9C" fontWeight="normal"/>
        </div>
        <div className = "main-header__buttons-container container--incolumn">
            <div className = "main-header__nav-buttons container--inrow">
                <Text handle={reHandleClickNavigation("home")} cursor = "pointer" textDecoration="underline" content = 'Inicio' fontSize="1.2vw" color= "#7B7E9C" fontWeight="normal"/>
                {username ===  ""?
                <Text content = 'Rutas' fontSize="1.2vw" color= "#7B7E9C" fontWeight="normal"/>
                :
                <Text handle={reHandleClickNavigation("paths")} cursor = "pointer" textDecoration="underline" content = 'Rutas' fontSize="1.2vw" color= "#7B7E9C" fontWeight="normal"/>
                }
                <Text content = 'Acerca de' fontSize="1.2vw" color= "#7B7E9C" fontWeight="normal"/>
            </div>
            <div className = "main-header__login-register container--inrow">
                {
                    username === ""?
                    <>
                        <Text cursor = "pointer" textDecoration="underline" handle ={handleClickLogin} content = 'Entrar' fontSize="1.2vw" color= "#7B7E9C" fontWeight="bold"/>
                        <div className = "vertical-line"></div>
                        <Text cursor = "pointer" textDecoration="underline" handle ={handleClickRegister} content = 'Registrarse' fontSize="1.2vw" color= "#7B7E9C" fontWeight="bold"/>
                    </>
                    :
                    <>
                        <Text cursor = "pointer" textDecoration="underline"  content = {username} fontSize="1.2vw" color= "#7B7E9C" fontWeight="bold"/>
                        <div className = "vertical-line"></div>
                        <Text cursor = "pointer" textDecoration="underline" handle ={reSetUsername} content = 'Salir' fontSize="1.2vw" color= "#7B7E9C" fontWeight="bold"/>
                    </>
                }
                
                
            </div>
        </div>
      </div>
    </>
  );
};
export default Header;
