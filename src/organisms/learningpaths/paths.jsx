import './paths.css'
import React from 'react'
import PathCard from '../../molecules/learningPathCard/pathCard';
import imgTitle from '../../img/paths/LearningPathsTittle.png'
import Text from '../../atoms/text';
const Paths = ({handleClick, username, setUsername}) => {
    
    const [election, setElection] = React.useState("yours")
    const handleChangeElection = (elect) => () =>{
        setElection(elect)
    }
    React.useEffect(()=>{
        if(election=="whole"){
            document.getElementsByTagName("body")[0].style = "background-color: #523E53; background-image: none;"
            document.getElementsByClassName("paths-container")[0].style = "background-color: #523E53; background-image: none;"
        }
        else{
            document.getElementsByTagName("body")[0].style = "background-color: #C19D72; background-image: none;"
            document.getElementsByClassName("paths-container")[0].style = "background-color: #C19D72; background-image: none;"
        }
    }, [election])
    //Puede poner JavaScript *puro* 
      return (
        <>
            <div className="container--incolumn">
                <img src={imgTitle} alt="" />
            </div>
            <div className="container--inrow path__buttons-container">
                <div onClick={handleChangeElection("whole")} className = "paths__election-button paths__election-button--whole">
                    <Text content = 'Todas' fontSize="30px" color= "#C19D72" fontWeight="500"/>
                </div>
                <div className ="paths__buttons-vertical-line"></div>
                <div onClick={handleChangeElection("yours")} className = "paths__election-button paths__election-button--yours">
                    <Text content = 'Tuyas' fontSize="30px" color= "#523E53" fontWeight="500"/>
                </div>
            </div>
            
            <div className = "paths-container">
            {election === "whole"?
                <>
                <PathCard type={election}/>
                <PathCard type={election}/>
                <PathCard type={election}/>
                <PathCard type={election}/>
                <PathCard type={election}/>
                </>
                :
                <>
                <PathCard type={election}/>
                <PathCard type={election}/>
                </>
            }
            </div>
            
        
        </>
      );
    };
    export default Paths;