import React from 'react'
import Header from '../../molecules/header/header'
import Home from '../../organisms/home/Home'
import Paths from '../../organisms/learningpaths/paths'
import "./pagPrincipal.css"

const PaginaPrincipal = ({handleClick, username, setUsername}) => {

    const reHandleClickRegister = () =>{
        handleClick("register")
      }
    const reHandleClickLogin = () =>{
        handleClick("login")
    }
    const [contentToShow, setContentToShow] = React.useState("home");
    const [navegationTree, setNavegationTree] = React.useState("Inicio/");
    const handleChange = (contentString) => {
        setContentToShow(contentString)
    }
    React.useEffect(()=>{
        if(contentToShow=="home"){
          setNavegationTree("Inicio/")
        }
        else if(contentToShow=="paths"){
          setNavegationTree("Inicio/Paths")
        }
    },[contentToShow])
    //Puede poner JavaScript *puro* 
      return (
        <>
            <div className="pag-main-container">
                <Header handleClickNavigation = {handleChange} setUsername ={setUsername} username = {username} handleClickRegister= {reHandleClickRegister} handleClickLogin={reHandleClickLogin} navegationTree={navegationTree}/>
                 {contentToShow === "home" && <Home/>}
                 {contentToShow === "paths" && <Paths/>}
            </div>
        </>
      );
    };
    export default PaginaPrincipal;