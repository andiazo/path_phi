import React from 'react'
import Text from '../../atoms/text';
import "./team.css"
import DiegoImg from '../../img/team-images/Diego.png'
import HoyosImg from '../../img/team-images/phoyos.png'
import AndresImg from '../../img/team-images/Andres.png'
import SamuelImg from '../../img/team-images/samuel.png'
import BullaImg from '../../img/team-images/Diego_bula.png'
import CarlosImg from '../../img/team-images/Carlangas.png'

const Team = ({}) => {

    //Puede poner JavaScript *puro* 
      return (
        <>
           <div className = "team__main-container container--incolumn">
           <Text color = "#7B7E9C" content = "Frontend" fontSize="4vw" fontWeight="bold"/>
            <div className="team__front-container">
            
                <div className = "team__card-container">
                    <img src={DiegoImg} alt="" />
                    <Text color = "#7B7E9C" content = "Diego Carvajal" fontSize="1.4vw" fontWeight="normal"/>
                    
                </div>
                <div className = "team__card-container">
                    <img src={HoyosImg} alt="" />
                    <Text color = "#7B7E9C" content = "Nicolás Hoyos" fontSize="1.4vw" fontWeight="normal"/>
                    
                </div>
            </div>
            <Text color = "#7B7E9C" content = "Backend" fontSize="4vw" fontWeight="bold"/>
            <div className="team__front-container">
                <div className = "team__card-container">
                    <img src={CarlosImg} alt="" />
                    <Text color = "#7B7E9C" content = "Carlos Niño" fontSize="1.4vw" fontWeight="normal"/>
                    
                </div>
                <div className = "team__card-container">
                    <img src={BullaImg} alt="" />
                    <Text color = "#7B7E9C" content = "Diego Bulla" fontSize="1.4vw" fontWeight="normal"/>
                    
                </div>
                <div className = "team__card-container">
                    <img src={SamuelImg} alt="" />
                    <Text color = "#7B7E9C" content = "Samuel Salgado" fontSize="1.4vw" fontWeight="normal"/>
                    
                </div>
                <div className = "team__card-container">
                    <img src={AndresImg} alt="" />
                    <Text color = "#7B7E9C" content = "Andres Díaz" fontSize="1.4vw" fontWeight="normal"/>
                    
                </div>
            </div>
           </div>
        </>
      );
    };
    export default Team;