import './specificPath.css'
import React from 'react'
import Book from '../../molecules/book/book';
import imgTitle from '../../img/paths/LearningPathsTittle.png'
import Text from '../../atoms/text';
import Path from '../../molecules/path/Path'
import PathForm from '../../molecules/pathForm/pathForm';

const SpecificPath = ({}) => {
    //Puede poner JavaScript *puro* 
      return (
        <>
          <div className = "specific-path__main-container container--incolumn">
            <Book/>
            <div className = "specific-path__content-container">
              <Path/>
              
            </div>
            <PathForm/>
          </div>

        </>
      );
    };
    export default SpecificPath;