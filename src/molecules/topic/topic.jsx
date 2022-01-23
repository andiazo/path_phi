import './topic.css'
import React from 'react'
import Text from '../../atoms/text'
import Button from '../../atoms/button'
import Input from '../../atoms/input'
import react from 'react'

const Topic = ({setTopicCompleted, topicCompleted, topicData}) =>{
    
    const [resourcesCompleted, setResourcesCompleted] = React.useState([])
    const changeHandler = (index, event) =>{
        // actualizar la lista de topics completados
        if(event.target.checked){
            setResourcesCompleted((topicsCompleted) => [...topicsCompleted, true])
        }
    }
    React.useEffect(()=>{
        if(resourcesCompleted.length == topicData.resources.length){
            let prove = true
            resourcesCompleted.forEach((resource) => prove = prove && resource)
            setTopicCompleted(true)
        }
    }, [resourcesCompleted])

    return( 
    <>
    <div className = "topic__main-container">
        <Text className = "topic__topic-number" content ={`tema #${topicData.topicNumber}`}/>
        <div className='topic__content-container'>
            
                <div className='container-incolumn'>
                    <Text fontSize = {'30px'}content ={topicData.title}/>
                    {topicCompleted && <Text color = {'#C19D72'} content ="completado"/>}
                </div>
                <Text content ={topicData.description}/>
                <div>
                { 
                    topicData.resources.map((resource,index) =>
                    <div className = "topic__resource">
                        <Text content={`${index+1}. ${resource.name}, ${resource.link}, ${resource.time}`}/>
                        <label><Input type ="checkbox" onChange={(event) => changeHandler(index, event)}/></label>
                    </div>
                    
                    )
                }
                </div>
                <Text className = "topic__topic-timer"content ={"Tiempo estimado para acabar el tema:  ¢min¢"}/>
            
        </div>
    </div>
    </>
    )
}

export default Topic