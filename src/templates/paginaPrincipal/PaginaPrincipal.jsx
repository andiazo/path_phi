import React from 'react'
import Header from '../../molecules/header/header'
import Home from '../../organisms/home/Home'
import "./pagPrincipal.css"

const PaginaPrincipal = ({handleClick, username, setUsername}) => {

    const reHandleClickRegister = () =>{
        handleClick("register")
      }
    const reHandleClickLogin = () =>{
        handleClick("login")
    }
    const [contentToShow, setContentToShow] = React.useState("home");
    const handleChange = (contentString) => {
        setContentToShow(contentString)
    }
    React.useEffect(()=>{
        console.log(contentToShow)
    },[contentToShow])
    //Puede poner JavaScript *puro* 
      return (
        <>
            <div className="pag-main-container">
                <Header handleClickNavigation = {handleChange} setUsername ={setUsername} username = {username} handleClickRegister= {reHandleClickRegister} handleClickLogin={reHandleClickLogin}/>
                 {contentToShow === "home" && <Home/>}
            </div>
        </>
      );
    };
    export default PaginaPrincipal;