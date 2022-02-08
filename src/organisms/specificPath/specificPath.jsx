import './specificPath.css'
import React from 'react'
import Book from '../../molecules/book/book';
import imgTitle from '../../img/paths/LearningPathsTittle.png'
import Button from '../../atoms/button';
import Text from '../../atoms/text';
import Path from '../../molecules/path/Path'
import yesImg from '../../img/modal/yes.png'
import PathForm from '../../molecules/pathForm/pathForm';
import {createCalification, createComment} from '../../HTTPscripts/calificationScripts.js'

const SpecificPath = ({pathObject, handleLeavePath, userID, setContentToShow}) => {
    //Puede poner JavaScript *puro*
    const [firstTime, setFirstTime] = React.useState(true)
    const [isFormRealized, setIsFormRealized] = React.useState(false)
    const [progress, setProgress] = React.useState(0)
    const [activation, setActivation] = React.useState(false)
    
    const handleSendForm = () =>{
      const comment = document.querySelector('input[name="reaction"]:checked').value;
      const calification = document.getElementById("path-form__opinion-text").value
      createCalification(setIsFormRealized,comment, pathObject.id_ruta, userID)
      createComment(setIsFormRealized, calification, pathObject.id_ruta, userID)
    }
    const handleClickActivation = () =>{
      setActivation(true)
    }
    const handleClickNo = () =>{
      setContentToShow("paths")
    }
    React.useEffect(() => {
      document.getElementsByTagName("body")[0].style = "background-color: #276271; background-image: none;"
    }, [firstTime]);
     
      return (
        <>
          <div className = "specific-path__main-container container--incolumn">
              <div className = "specific-path__title-container">
                <Text color ={"#F9DF84"} fontSize = {"2.5vw"} content  = {pathObject?pathObject.nombre_ruta:""} fontWeight={"bold"}/>
              </div>
              <Book progress= {progress}/>
            <div className = "specific-path__content-container">
              <Path Initprogress={progress} data = {pathObject.topics} userID={userID} pathID = {pathObject.id_ruta} setProgress={setProgress}/>
              { progress>= 100 && !activation?
              <><div className="path__modal-bg"></div>
              <div className="path__modal-main-container">
              <Text className ="path__modal-header" fontWeight="bold" color ={"#FFFFFF"} fontSize = {"1vw"} content  = {"Activación de ruta de aprendizaje"}/>
                  <div className="path__modal-container">
                  <div className='path__modal-description'>
                    <img style ={{width:"3vw",height:"3vw"}}src={yesImg}/>
                  <Text color ={"#000000"} fontSize = {"1vw"} content  = {"Ruta terminada, ¿desea reactivarla?"} fontWeight={"normal"}/>
                  </div>
                  <div className='path__modal-buttons'>
                    <button style={{width:"30%"}} onClick={handleClickActivation} type="button">Sí</button>
                    <button style={{width:"30%"}} onClick={handleClickNo} type="button">No</button>
                  </div>
                  </div>
                  <button onClick={handleClickActivation} className ="path__modal-x" type="button">X</button>
              </div>
              </>
              :
              ""}
            </div>
            <PathForm isFormRealized = {isFormRealized} handleSendForm = {handleSendForm}/>
            <Button handle={handleLeavePath} color="#A79798" borderColor = "#A79798" text = "Abandonar" />
          </div>

        </>
      );
    };
    export default SpecificPath;