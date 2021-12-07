import "./login.css"
import Text from "../atoms/text"
import Input from "../atoms/input";
import Button from "../atoms/button";
const Login = () => {

//Puede poner JavaScript *puro* 
  return (
    <>
      <div className="main-container">
        <div className="login-container">

          <Text content = 'PathPhi' fontSize="3.5vw" color= "#C19D72" fontWeight="bold"/>
          <div className = "form">
            <div className = "container-incolumn">
              
              <Text content = 'Usuario' fontSize="2vw" color= "#5B7783" fontWeight="bold"/>
              <Input id="input-username" width= "12vw" height= "34.5px" transformStyle= "preserve-3d"transform= "rotateX(45deg)"backgroundColor= "#E5E5E5"padding= "0 5px 0 5px" border= "none"/>
            </div>
            <div className="container-incolumn">
              <Text content = 'Contraseña' fontSize="2vw" color= "#5B7783" fontWeight="bold"/>
              <Input type="password" id="input-password" width= "12vw" height= "34.5px" transformStyle= "preserve-3d"transform= "rotateX(45deg)"backgroundColor= "#E5E5E5"padding= "0 5px 0 5px" border= "none"/>
              
            </div>
          </div>
          
          <Button text="Acceder" color="#5B7783" borderColor="rgba(39, 98, 113, 0.65)"/>
          <div className="container-incolumn">
            <Text cursor = "pointer" textDecoration="underline" fontStyle = "italic" content = 'Registrarme' fontSize="0.8vw" color= "rgba(39, 98, 113, 0.65)" fontWeight="bold"/>
          </div>
          
        </div>
        <div className="vertical-bar"></div>
      </div>
    </>
  );
};
export default Login;
