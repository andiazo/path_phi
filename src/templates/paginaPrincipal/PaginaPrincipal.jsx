import React from 'react'
import Header from '../../molecules/header/header'
import Home from '../../organisms/home/Home'
import Paths from '../../organisms/learningpaths/paths'
import SpecificPath from '../../organisms/specificPath/specificPath'
import Team from '../../organisms/team/team'
import {leavePath, getUserPaths, getPath} from '../../HTTPscripts/learningPathsScripts.js'
import "./pagPrincipal.css"

const PaginaPrincipal = ({handleClick, username, setUsername, userID}) => {

    const reHandleClickRegister = () =>{
        handleClick("register")
      }
    const reHandleClickLogin = () =>{
        handleClick("login")
    }
    const [contentToShow, setContentToShow] = React.useState("home");
    const [navegationTree, setNavegationTree] = React.useState("Inicio/");
    const [pathObject, setPathObject] = React.useState(undefined)
    const [myPaths, setMyPaths] = React.useState([])
    const handleChange = (contentString) => {
        setContentToShow(contentString)
    }
    const handleLoadSpecificPath = (pathObject) => () => {
      getPath(pathObject.id_ruta,setPathObject, setContentToShow)

  }
  
  const handleLeavePath = () => {
    leavePath(setMyPaths, pathObject.id_ruta,userID)
    setPathObject(undefined)
    setContentToShow("paths")
}
    React.useEffect(()=>{
        if(contentToShow === "home"){
          setNavegationTree("Inicio/")
        }
        else if(contentToShow=="paths"){
          setNavegationTree("Inicio/Rutas")
        }
        else if(contentToShow=="team"){
          setNavegationTree("Inicio/Equipo")
        }
        else if(contentToShow=="specificPath"){
          setNavegationTree(`Inicio/Rutas/${pathObject.nombre_ruta}`)
        }
    },[contentToShow])
    //Puede poner JavaScript *puro* 
      return (
        <>
            <div className="pag-main-container">
                <Header handleClickNavigation = {handleChange} setUsername ={setUsername} username = {username} handleClickRegister= {reHandleClickRegister} handleClickLogin={reHandleClickLogin} navegationTree={navegationTree}/>
                 {contentToShow === "specificPath" && <SpecificPath userID={userID} handleLeavePath = {handleLeavePath} pathObject={pathObject} />}
                 {(contentToShow === "home") && <Home/>}
                 {contentToShow === "paths" && <Paths userID={userID} myPaths = {myPaths} setMyPaths ={setMyPaths} handleLoadPath = {handleLoadSpecificPath}/>}
                 {contentToShow === "team" && <Team/>}
                 
            </div>
        </>
      );
    };
    export default PaginaPrincipal;