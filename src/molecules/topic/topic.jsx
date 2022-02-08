import './topic.css'
import React from 'react'
import Text from '../../atoms/text'
import Button from '../../atoms/button'
import Input from '../../atoms/input'
import react from 'react'

const Topic = ({setTopicCompleted, topicCompleted, topicData, topicNumber}) =>{
    
    const [resourcesCompleted, setResourcesCompleted] = React.useState([])
    const changeHandler = (index, event) =>{
        // actualizar la lista de topics completados
        if(event.target.checked){
            setResourcesCompleted((topicsCompleted) => [...topicsCompleted, true])
        }
    }
    React.useEffect(()=>{
        if(resourcesCompleted.length == topicData.resources.length){
            setTopicCompleted(true)
            setResourcesCompleted([])
        }
    }, [resourcesCompleted])
    React.useEffect(()=>{
        if(!topicCompleted){
            var els = document.getElementsByClassName("topic__checkbox");
            Array.prototype.forEach.call(els, function(checkbox) {
                checkbox.checked = false
            });
            setTopicCompleted(false)
            setResourcesCompleted([])
        }
    }, [topicCompleted])

    return( 
    <>
    <div className = "topic__main-container">
        <Text className = "topic__topic-number" content ={`tema #${topicNumber+1}`}/>
        <div className='topic__content-container'>
            
                <div className='container-incolumn topic__align-center'>
                    <Text fontWeight="bold" fontSize = {'30px'}content ={topicData.name_topic}/>
                    {topicCompleted && <Text color = {'#C19D72'} content ="completado"/>}
                </div>
                <Text content ={topicData.description_topic}/>
                <div>
                { 
                    topicData.resources.map((resource,index) =>
                    <div className = "topic__resource">
                        <Text textDecoration={"underline"} cursor = {"pointer"} handle = {() => window.open(`${resource.enlace_recurso}`)} content={`${index+1}. ${resource.nombre_recurso} ->`}/>
                        <label><Input className = "topic__checkbox"type ="checkbox" onChange={(event) => changeHandler(index, event)}/></label>
                    </div>
                    
                    )
                }
                </div>
                <Text className = "topic__topic-timer"content ={"¡Puedes avanzar una vez hayas terminado de completar los recursos!"}/>
            
        </div>
    </div>
    </>
    )
}

export default Topic