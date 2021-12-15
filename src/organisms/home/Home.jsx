import "./home.css"
import React from 'react'
import PathPhiDescription from '../../molecules/pathPhiDescription/PathPhiDescription'
const Home = ({handleClick, username, setUsername}) => {

    const reHandleClickRegister = () =>{
        handleClick("register")
      }
      const reHandleClickLogin = () =>{
        handleClick("login")
      }
    //Puede poner JavaScript *puro* 
      return (
        <>
           <PathPhiDescription/>
        </>
      );
    };
    export default Home;