import "./home.css"
import React from 'react'
import Text from "../../atoms/text.jsx"
import Header from '../../molecules/header/header'
import Image from "../../img/logo-pathphi.png"
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