import React from 'react'
import './book.css'
import Text from '../../atoms/text'
import Input from '../../atoms/input'
const Book = ({}) =>{
    let data = {
        objective: "",
        inscriptionDate: "01/01/2022",
        completionPercentage: 40,
    }
    const currentDate = new Date().toLocaleDateString()
    const currentDay = dateDifferenceInDays(stringToDate(data.inscriptionDate), stringToDate(currentDate))
    const [numberOfWords, setNumberOfWords] = React.useState(data.objective.length)
    const [maxNumberOfWords, setMaxNumberOfWords] = React.useState(120)
    const [objective, setObjective] = React.useState(data.objective)
    const [settingObjective, setSettingObjective] = React.useState(data.objective === "")
    function dateDifferenceInDays(first, second) {
        // Take the difference between the dates and divide by milliseconds per day.
        // Round to nearest whole number to deal with DST.
        return Math.round((second-first)/(1000*60*60*24));
    }
    function stringToDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[1]-1, mdy[0]);
    }
    const writeObjectiveHolder = (event) =>{
        setNumberOfWords(event.target.value.length)
        
    }
    const editObjectiveHolder = (event) =>{
        setSettingObjective(true)
        //document.getElementById("book__objective-text").focus()
        
    }
    const focusOutObjectiveHolder = (event) =>{
        setObjective(event.target.value)
        setSettingObjective(event.target.value == "")
        
    }
    return(
        
        <div className = "book__main-container">
            <div className = "book__left-container">
                <div className='container--incolumn'>
                    <Text fontSize = "2vw" fontWeight= "bold" content = "Día 1"/>
                    <Text content = "Donde todo empieza"/>
                </div>
                <div className='container--incolumn book__objective-container'>
                    <Text fontSize = "1.2vw" fontWeight= "bold" content = "Mi objetivo:"/>
                    {settingObjective? 
                        <>
                            <textarea autoFocus id ="book__objective-text" onBlur = {focusOutObjectiveHolder} placeholder="!Escribe tu objetivo!"  maxlength = {maxNumberOfWords} onChange={(e) => writeObjectiveHolder(e)}>{objective}</textarea>
                            <Text fontSize = "1vw" color = "rgba(123, 102, 116, 0.7)" content = {numberOfWords+"/"+maxNumberOfWords}/>
                        </> 
                    :
                        
                        <Text fontSize = "1.1vw" handle = {editObjectiveHolder} color = "rgba(123, 102, 116, 0.7)" content = {objective}/>
                    }
                </div>
                <Text fontSize = "1.1vw" content = {data.inscriptionDate}/>
            </div>
            
            <div className = "book__shine-circle"></div>

            <div className = "book__right-container">
                
                <div className='container--incolumn'>
                    <Text fontSize = "2vw" fontWeight= "bold" content = {`Día ${currentDay}`}/>    
                    <Text content = "Donde puedo avanzar"/>
                </div>
                <div className='container--incolumn book__percentage-container'>
                    <Text fontSize = "2.3vw" fontWeight= "bold" content = {data.completionPercentage +"%"}/>    
                    <div className = "book__percentage-total">
                        <div style = {{width: "50%"}} className = "book__percentage-completion"></div>
                    </div>
                </div>
                
                
                
                <Text fontSize = "1.1vw" content = {currentDate}/>
            </div>
        </div>
    )    

}

export default Book;