import './paths.css'
import React from 'react'
import PathCard from '../../molecules/learningPathCard/pathCard';
import imgTitle from '../../img/paths/LearningPathsTittle.png'
import Text from '../../atoms/text';
import {getAllPaths} from '../../HTTPscripts/learningPathsScripts.js'
const Paths = ({handleLoadPath, myPaths, setMyPaths}) => {
    
    const [election, setElection] = React.useState("whole")
    const [firsTime, setFirsTime] = React.useState(true)
    const [allPaths, setAllPaths] = React.useState([])
    const handleChangeElection = (elect) => () =>{
        setElection(elect)
    }
    /*const allPaths = [
        {
            title: "Java",
            description: "Ruta enfocada en los principios fundamentales y funcionales de Java",
            difficulty: 5,
            themes: 10
        },
        {
            title: "JavaScript",
            description: "Aquí aprenderás a usar JavaScript en la web, entendiendo gran parte de su poder",
            difficulty: 2,
            themes: 6
        },
        {
            title: "JavaScript",
            description: "Aquí aprenderás a usar JavaScript en la web, entendiendo gran parte de su poder",
            difficulty: 2,
            themes: 6
        },
        {
            title: "JavaScript",
            description: "Aquí aprenderás a usar JavaScript en la web, entendiendo gran parte de su poder",
            difficulty: 2,
            themes: 6
        },
        {
            title: "JavaScript",
            description: "Aquí aprenderás a usar JavaScript en la web, entendiendo gran parte de su poder",
            difficulty: 2,
            themes: 6
        },
    ]
    */
    React.useEffect(()=>{
        if(firsTime){
            getAllPaths(setAllPaths)
            setFirsTime(false)
        }
    }, [firsTime])
    React.useEffect(()=>{
        console.log("Paths: ")
        console.log(allPaths)
    }, [allPaths])
    React.useEffect(()=>{
        if(election=="whole"){
            document.getElementsByTagName("body")[0].style = "background-color: #523E53; background-image: none;"
            document.getElementsByClassName("paths-container")[0].style = "background-color: #523E53; background-image: none;"

            document.getElementsByClassName("paths__election-button--whole")[0].classList.replace("paths__election-button--normal","paths__election-button--clicked")
            document.getElementsByClassName("paths__election-button--yours")[0].classList.replace("paths__election-button--clicked","paths__election-button--normal")
        }
        else{
            document.getElementsByTagName("body")[0].style = "background-color: #C19D72; background-image: none;"
            document.getElementsByClassName("paths-container")[0].style = "background-color: #C19D72; background-image: none;"
            
            document.getElementsByClassName("paths__election-button--whole")[0].classList.replace("paths__election-button--clicked","paths__election-button--normal")
            document.getElementsByClassName("paths__election-button--yours")[0].classList.replace("paths__election-button--normal","paths__election-button--clicked")
        }
    }, [election])
    const handleEnroll = (newPath) => () => {
        if(newPath){
            let existnewPath = false
            myPaths.map((path) =>{
                existnewPath = path.nombre_ruta === newPath.nombre_ruta || existnewPath
            })
            if(!existnewPath){
                setMyPaths([...myPaths, newPath])    
            }
        }
        else{
            //alert("No se pudo inscribir")
        }
    }
    //Puede poner JavaScript *puro* 
      return (
        <>
            <div className="container--incolumn">
                <img src={imgTitle} alt="" />
            </div>
            <div className="container--inrow path__buttons-container">
                <div onClick={handleChangeElection("whole")} className = "paths__election-button--clicked paths__election-button paths__election-button--whole">
                    <Text content = 'Todas' fontSize="30px" color= "#C19D72" fontWeight="500"/>
                </div>
                <div className ="paths__buttons-vertical-line"></div>
                <div onClick={handleChangeElection("yours")} className = "paths__election-button--clicked paths__election-button paths__election-button--yours">
                    <Text content = 'Tuyas' fontSize="30px" color= "#523E53" fontWeight="500"/>
                </div>
            </div>
            
            <div className = "paths-container">
            {election === "whole"?
                <>
                {allPaths.length>0? allPaths.map((path) =>
                    <PathCard handle = {handleEnroll} type={election} pathObject={path}/>
                ): <Text content = 'No se pudo cargar las rutas de aprendizaje' fontSize="30px" color= "#C19D72" fontWeight="500"/>}
                </>
                :
                <>
                {myPaths? myPaths.map((path) =>
                    <PathCard handle = {handleLoadPath} type={election} pathObject={path}/>
                ): <Text content = 'No se pudo cargar las rutas de aprendizaje' fontSize="30px" color= "#523E53" fontWeight="500"/>}
                </>
            }
            </div>
            
        
        </>
      );
    };
    export default Paths;