import "./path.css"
import React from 'react'
import Text from "../../atoms/text.jsx"
import Image from "../../img/logo-pathphi.png"
import Topic from '../../molecules/topic/topic'
import Input from "../../atoms/input"
import {getProgress, progress} from '../../HTTPscripts/learningPathsScripts'
const Path = ({data, userID, pathID, setProgress, Initprogress}) => {
    const [topicCompleted, setTopicCompleted] = React.useState(false)
    const scala  = 50
    const [topics, setTopics] = React.useState([1,1,2,3,5,8]) // 1 2 3 4 5 6 = index - topicRange + 1 
    const [auxdata, setauxData] =  React.useState([{
      title: "Título del tema",
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
    title: "Título del tema",
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
  title: "Título del tema",
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
  title: "Título del tema",
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
  title: "Título del tema",
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
},
{
  title: "Título del tema",
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
  topicNumber : 6
}])
    
    const [topicRange, setTopicRange] = React.useState(1) //cantidad de paths renderizados
    const [nextElemSize, setNextElemSize] = React.useState(0)
    const [firstTime, setFirstTime] = React.useState(true)
    const [updateProgress, setUpdateProgress] = React.useState(true)
    React.useEffect(()=>{
      if(updateProgress){
        getProgress(pathID, userID, setProgress)
        setUpdateProgress(false)
      }
    },[updateProgress])
    React.useEffect(()=>{
      if(firstTime){
        setTopicRange(Math.floor(data.length*Initprogress/100))
        console.log(data.length)
        console.log(Initprogress)
        setFirstTime(false)
      }
      
    },[firstTime])
    React.useEffect(()=>{
      if(topicCompleted){
        progress(pathID, data[topicRange-1].id_topic, userID, setUpdateProgress)
      }
    },[topicCompleted])
    const topicData = {
      title: "Título del tema",
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
          setTopicCompleted(false)
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
        
        console.log(topics)
        if(topicRange == 1){
          setNextElemSize(getSumArray(topics.slice(topics.length-1,topics.length))*scala-1)
        }
        else if(topicRange == 0){
          setTopicRange(1)
        }
        else{
          setNextElemSize(getSumArray(topics.slice(topics.length-2,topics.length))*scala-1)
        }
        console.log("topicRange: "+topicRange)
      },[topicRange])

    const divDrawer = (dataArray, index)=> {
      if(index == topics.length){
        return <div onClick={topicRange<data.length && topicCompleted? handleClickNext:undefined} className="path__next-cubik" style={{height:"50px", width:nextElemSize}}>
          {<div className="path__next-cubik-arrow">{"<-"}</div>}{divDrawer(dataArray, index-1)}
        </div>
      }
      return <div
       onClick={index == dataArray.length-2?handleClickPrev:(e) => e.stopPropagation()}
       style={{cursor: index == dataArray.length-2?"pointer":"auto",width:dataArray[index]*scala-1, height:dataArray[index]*scala-1}} 
       className={"path__cubik"}>
         <div className="path__cubik-curve"></div>
         {index == dataArray.length-1? <Topic topicNumber = {Math.abs(topics.length - index - topicRange)} setTopicCompleted={setTopicCompleted} topicCompleted={topicCompleted} topicData={data[Math.abs(topics.length - index - topicRange)]}/>
         :index == dataArray.length-2?<div className="path__previous-cubik-arrow">{"<-"}</div>:""
          /*data[Math.abs(topics.length - index - topicRange)].topicNumber*/
          }{index != topics.length-topicRange && index>= 1?divDrawer(dataArray, index-1):""}
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