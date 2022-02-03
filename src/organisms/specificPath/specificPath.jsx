import './specificPath.css'
import React from 'react'
import Book from '../../molecules/book/book';
import imgTitle from '../../img/paths/LearningPathsTittle.png'
import Button from '../../atoms/button';
import Text from '../../atoms/text';
import Path from '../../molecules/path/Path'
import PathForm from '../../molecules/pathForm/pathForm';
import {createCalification, createComment} from '../../HTTPscripts/calificationScripts.js'

const SpecificPath = ({pathObject, handleLeavePath, userID}) => {
    //Puede poner JavaScript *puro*
    const [firstTime, setFirstTime] = React.useState(true)
    const [isFormRealized, setIsFormRealized] = React.useState(false)
    const handleSendForm = () =>{
      const comment = document.querySelector('input[name="reaction"]:checked').value;
      const calification = document.getElementById("path-form__opinion-text").value
      createCalification(setIsFormRealized,comment, pathObject.id_ruta, userID)
      createComment(setIsFormRealized, calification, pathObject.id_ruta, userID)
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
              <Book/>
            
            <div className = "specific-path__content-container">
              <Path/>
            </div>
            <PathForm isFormRealized = {isFormRealized} handleSendForm = {handleSendForm}/>
            <Button handle={handleLeavePath} color="#A79798" borderColor = "#A79798" text = "Abandonar" />
          </div>

        </>
      );
    };
    export default SpecificPath;