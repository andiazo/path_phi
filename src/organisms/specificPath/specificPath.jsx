import './specificPath.css'
import React from 'react'
import Book from '../../molecules/book/book';
import imgTitle from '../../img/paths/LearningPathsTittle.png'
import Button from '../../atoms/button';
import Text from '../../atoms/text';
import Path from '../../molecules/path/Path'
import PathForm from '../../molecules/pathForm/pathForm';

const SpecificPath = ({pathObject, handleLeavePath}) => {
    //Puede poner JavaScript *puro*
    const [firstTime, setFirstTime] = React.useState(true)
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
            <PathForm/>
            <Button handle={handleLeavePath} color="#A79798" borderColor = "#A79798" text = "Abandonar" />
          </div>

        </>
      );
    };
    export default SpecificPath;