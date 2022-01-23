import "./path.css"
import React from 'react'
import Text from "../../atoms/text.jsx"
import Image from "../../img/logo-pathphi.png"
import Topic from '../../molecules/topic/topic'
const Path = () => {
    const [topicCompleted, setTopicCompleted] = React.useState(false)
    const scala  = 50
    const [topics, setTopics] = React.useState([1,1,2,3,5,8]) // 1 2 3 4 5 6 = index - topicRange + 1 
    const [data, setData] =  React.useState([{
      title: "El título no existe",
      description: "Breve descripción, 300 letras máximo orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu",
      resources : [
          {name: "Nombre del recurso",
          link: "Vínculo",
          time: "Tiempo estimado"
          },
          {
          name: "Nombre del recurso",
          link: "Vínculo",
          time: "Tiempo estimado"
          }
      ],
      topicNumber : 1
  },
  {
    title: "El título no existe",
    description: "Breve descripción, 300 letras máximo orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu",
    resources : [
        {name: "Nombre del recurso",
        link: "Vínculo",
        time: "Tiempo estimado"
        },
        {
        name: "Nombre del recurso",
        link: "Vínculo",
        time: "Tiempo estimado"
        }
    ],
    topicNumber : 2
},
{
  title: "El título no existe",
  description: "Breve descripción, 300 letras máximo orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu",
  resources : [
      {name: "Nombre del recurso",
      link: "Vínculo",
      time: "Tiempo estimado"
      },
      {
      name: "Nombre del recurso",
      link: "Vínculo",
      time: "Tiempo estimado"
      }
  ],
  topicNumber : 3
},
{
  title: "El título no existe",
  description: "Breve descripción, 300 letras máximo orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu",
  resources : [
      {name: "Nombre del recurso",
      link: "Vínculo",
      time: "Tiempo estimado"
      },
      {
      name: "Nombre del recurso",
      link: "Vínculo",
      time: "Tiempo estimado"
      }
  ],
  topicNumber : 4
},
{
  title: "El título no existe",
  description: "Breve descripción, 300 letras máximo orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu",
  resources : [
      {name: "Nombre del recurso",
      link: "Vínculo",
      time: "Tiempo estimado"
      },
      {
      name: "Nombre del recurso",
      link: "Vínculo",
      time: "Tiempo estimado"
      }
  ],
  topicNumber : 5
}])
    const [topicRange, setTopicRange] = React.useState(3) //cantidad de paths renderizados
    const [nextElemSize, setNextElemSize] = React.useState(0)
    const topicData = {
      title: "El título no existe",
      description: "Breve descripción, 300 letras máximo orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu orem ipsu orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu  orem ipsu",
      resources : [
          {name: "Nombre del recurso",
          link: "Vínculo",
          time: "Tiempo estimado"
          },
          {
          name: "Nombre del recurso",
          link: "Vínculo",
          time: "Tiempo estimado"
          }
      ],
      topicNumber : 5
  }
      const handleClickPrev = (e) => {

          //setTopics((topics)=> topics.unshift(topics.length+1)  
          e.stopPropagation();  
          setTopics(topics => [...topics])
          setTopicRange(topicRange-1)
        }
        const handleClickNext = () => {

          //setTopics((topics)=> topics.unshift(topics.length+1)    
          setTopics(topics => [...topics])
          setTopicRange(topicRange+1)
        }
      const getSumArray = (dataArray) => {
        //setTopics((topics)=> topics.unshift(topics.length+1)   
        console.log(dataArray)
        let sum = 0
        for(let i = 0; i<dataArray.length; i++){
          sum += dataArray[i]
        }
        return sum;
      }
      React.useEffect(() =>{
        console.log("topicRange: "+topicRange)
        console.log(topics)
        if(topicRange == 1){
          setNextElemSize(getSumArray(topics.slice(topics.length-1,topics.length))*scala-1)
        }
        else{
          setNextElemSize(getSumArray(topics.slice(topics.length-2,topics.length))*scala-1)
        }
        
      },[topicRange])

    const divDrawer = (dataArray, index)=> {
      if(index == topics.length){
        return <div onClick={topicRange<data.length? handleClickNext:""} className="path__next-cubik" style={{height:"50px", width:nextElemSize}}>
          {divDrawer(dataArray, index-1)}
        </div>
      }
      return <div
       onClick={index == dataArray.length-2?handleClickPrev:(e) => e.stopPropagation()}
       style={{cursor: index == dataArray.length-2?"pointer":"auto",width:dataArray[index]*scala-1, height:dataArray[index]*scala-1}} 
       className={"path__cubik"}>
         {index == dataArray.length-1? <Topic setTopicCompleted={setTopicCompleted} topicCompleted={topicCompleted} topicData={data[Math.abs(topics.length - index - topicRange)]}/>: data[Math.abs(topics.length - index - topicRange)].topicNumber}{index != topics.length-topicRange && index>= 1?divDrawer(dataArray, index-1):""}
       </div>
    }
    //Puede poner JavaScript *puro* 
      return (
        <>
                <div className="path__main-container">
                  {console.log(nextElemSize)}
                    {divDrawer(topics,topics.length)}
                </div>
        </>
      );
    };
    export default Path;