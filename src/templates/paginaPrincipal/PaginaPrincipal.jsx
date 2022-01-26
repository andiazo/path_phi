import React from 'react'
import Header from '../../molecules/header/header'
import Home from '../../organisms/home/Home'
import Paths from '../../organisms/learningpaths/paths'
import SpecificPath from '../../organisms/specificPath/specificPath'
import Team from '../../organisms/team/team'
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
    const [pathObject, setPathObject] = React.useState(undefined)
    const [myPaths, setMyPaths] = React.useState([{
      nombre_ruta: "Java",
      descripcion_ruta: "Ruta enfocada en los principios fundamentales y funcionales de Java",
      dificultad: 5,
      cantidad_temas: 10
  },
  {
      nombre_ruta: "JavaScript",
      descripcion_ruta: "Aquí aprenderás a usar JavaScript en la web, entendiendo gran parte de su poder",
      dificultad: 2,
      cantidad_temas: 6
  }, ])
    const handleChange = (contentString) => {
        setContentToShow(contentString)
    }
    const handleLoadSpecificPath = (pathObject) => () => {
      setPathObject(pathObject)
      console.log(pathObject)
      setContentToShow("specificPath")
  }
  
  const handleLeavePath = () => {
    setPathObject(undefined)
    const aux = [...myPaths]
    const result = aux.filter(Path => Path.nombre_ruta !== pathObject.nombre_ruta)
    setMyPaths([...result])
    console.log(myPaths)
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
                 {contentToShow === "specificPath" && <SpecificPath handleLeavePath = {handleLeavePath} pathObject={pathObject} />}
                 {(contentToShow === "home") && <Home/>}
                 {contentToShow === "paths" && <Paths myPaths = {myPaths} setMyPaths ={setMyPaths} handleLoadPath = {handleLoadSpecificPath}/>}
                 {contentToShow === "team" && <Team/>}
                 
            </div>
        </>
      );
    };
    export default PaginaPrincipal;