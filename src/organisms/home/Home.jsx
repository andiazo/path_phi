import "./home.css"
import React from 'react'
import PathPhiDescription from '../../molecules/pathPhiDescription/PathPhiDescription'
const Home = ({handleClick, username, setUsername}) => {
    const [firsTime, setFirsTime] = React.useState(true)
    const reHandleClickRegister = () =>{
        handleClick("register")
      }
      const reHandleClickLogin = () =>{
        handleClick("login")
      }
    React.useEffect(()=>{
        if(firsTime){
          document.getElementsByTagName("body")[0].style = "background-color: #276271; background-image: none;"
          setFirsTime(false)
        }
    }, [firsTime])
    //Puede poner JavaScript *puro* 
      return (
        <>
           <PathPhiDescription/>
        </>
      );
    };
    export default Home;