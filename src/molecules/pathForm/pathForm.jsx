import React from 'react'
import './pathForm.css'
import Text from '../../atoms/text'
import Input from '../../atoms/input'
import Button from '../../atoms/button'
import funnyImage from '../../img/formPath/divertido.png'
import fullFilledImage from '../../img/formPath/realizado.png'
import dissatisfiedImage from '../../img/formPath/insatisfecho.png'
const PathForm = ({isFormRealized, handleSendForm}) =>{
    const data = {
        feeling: "",
        opinion: ""
    }
    const [feeling, setFeeling] = React.useState("Realizado") //Realidado, Divertido, Insatisfecho
    const [opinion, setOpinion] = React.useState("")
    
    React.useEffect(()=>{
        data.opinion = opinion
        data.feeling = feeling
    }, [feeling])
    
    return(
        
        <div className = "path-form__main-container" >
            {!isFormRealized? 
            <>
            <Text fontSize = "2vw" fontWeight = "bold" color = "#276271" content = "Cuéntanos tu opinión"/>
            <div className = "container--incolumn" style={{marginLeft:"2vw", gap: "2vw", alignItems: "flex-start"}}>
                <Text fontSize = "1.2vw" color = "#276271" content = "¿Cómo te sientes con esta ruta de aprendizaje?"/>
                    <div className = "container--inrow" style ={{width: "100%",gap: "3vw"}}>
                        <div className = "container--incolumn path-form__reaction" >
                            <label>
                                <input type="radio" name="reaction" value={1} checked="checked"/>
                                <img src={fullFilledImage}/>
                            </label>
                            <Text id = "path-form__fulfilled" fontSize = "1.2vw" color = "#276271" content = "Realizado(a)"/>   
                        </div>
                        <div className = "container--incolumn path-form__reaction">
                            <label>
                                <input type="radio" name="reaction" value={2}/>
                                <img src={funnyImage}/>
                            </label>
                            <Text fontSize = "1.2vw" color = "#276271" content = "Divertido(a)"/>
                        </div>
                        <div className = "container--incolumn path-form__reaction">
                            <label>
                                <input type="radio" name="reaction" value={3}/>
                                <img src={dissatisfiedImage}/>
                            </label>
                            <Text fontSize = "1.2vw" color = "#276271" content = "Insatisfecho(a)"/>
                        </div>
                    </div>
                <Text fontSize = "1.2vw" color = "#276271" content = "Cuéntanos un poco más"/>
                <div className='container--inrow' style ={{borderColor: "black", alignContent: "center",justifyContent: "center", gap: "2vw"}}>
                    <textarea id = "path-form__opinion-text" placeholder='Escribe algo' maxLength={200}>{opinion}</textarea>
                    <Button handle = {handleSendForm} borderColor = "#276271" color = "#276271" text = "enviar" />
                </div>
            </div>
            </>
            :<Text fontSize = "2vw" fontWeight = "bold" color = "rgb(193, 157, 114)" content = "¡Formulario enviado!"/>}
           
        </div>
    )    

}

export default PathForm;