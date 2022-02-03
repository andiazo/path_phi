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
           <Text textDecoration={"underline"} color = "#276271" content = "Frontend" fontSize="4vw" fontWeight="bold"/>
            <div className="team__front-container">
            
                <div className = "team__card-container">
                    <img src={DiegoImg} alt="" />
                    <Text textDecoration={"underline"} color = "#7B7E9C" content = "Diego Carvajal" fontSize="1.4vw" fontWeight="bold"/>
                    <Text color = "#7B7E9C" content = "Estudiante de Ingeniería en Sistemas." fontSize="1vw" fontWeight="normal"/>
                    <Text color = "#7B7E9C" content = "Me gusta el running y las películas de ciencia ficción" fontSize="1vw" fontWeight="normal"/>
                    <Text color = "#7B7E9C" content = "Interesado en entornos multijugador y algoritmos" fontSize="1vw" fontWeight="normal"/>
                    <Text color = "#7B7E9C" content = "dicarvajalb@unal.edu.co" fontSize="1vw" fontWeight="normal"/>
                </div>
                <div className = "team__card-container">
                    <img src={HoyosImg} alt="" />
                    <Text textDecoration={"underline"} color = "#7B7E9C" content = "Nicolás Hoyos" fontSize="1.4vw" fontWeight="bold"/>
                    <Text color = "#7B7E9C" content = "Estudiante de septima matricula de ingeniería de sistemas y computación" fontSize="1vw" fontWeight="normal"/>
                    <Text color = "#7B7E9C" content = "Hobbies: Fútbol, MTB, CS:GO" fontSize="1vw" fontWeight="normal"/>
                    <Text color = "#7B7E9C" content = "Interesado en: seguridad de la información" fontSize="1vw" fontWeight="normal"/>
                    <Text color = "#7B7E9C" content = "nhoyosp@unal.edu.co" fontSize="1vw" fontWeight="normal"/>
                    
                </div>
            </div>
            <Text textDecoration={"underline"} color = "#276271" content = "Backend" fontSize="4vw" fontWeight="bold"/>
            <div className="team__front-container">
                <div className = "team__card-container">
                    <img src={CarlosImg} alt="" />
                    <Text textDecoration={"underline"} color = "#7B7E9C" content = "Carlos Niño" fontSize="1.4vw" fontWeight="bold"/>
                    <Text color = "#7B7E9C" content = "Estudiante de Ingeniería en Sistemas." fontSize="1vw" fontWeight="normal"/>
                    <Text color = "#7B7E9C" content = "Hobbies: Ciclismo, ver anime, viajar en motocicleta." fontSize="1vw" fontWeight="normal"/>
                    <Text color = "#7B7E9C" content = "Interesado en AI, robótica." fontSize="1vw" fontWeight="normal"/>
                    <Text color = "#7B7E9C" content = "caaninome@unal.edu.co" fontSize="1vw" fontWeight="normal"/>
                    
                </div>
                <div className = "team__card-container">
                    <img src={BullaImg} alt="" />
                    <Text textDecoration={"underline"} color = "#7B7E9C" content = "Diego Bulla" fontSize="1.4vw" fontWeight="bold"/>
                    <Text color = "#7B7E9C" content = "Estudiante de Ingeniería en Sistemas" fontSize="1vw" fontWeight="normal"/>
                    
                    
                </div>
                <div className = "team__card-container">
                    <img src={SamuelImg} alt="" />
                    <Text textDecoration={"underline"} color = "#7B7E9C" content = "Samuel Salgado" fontSize="1.4vw" fontWeight="bold"/>
                    <Text color = "#7B7E9C" content = "Estudiante de Ingeniería en Sistemas" fontSize="1vw" fontWeight="normal"/>
                    <Text color = "#7B7E9C" content = "Hobbies: Fútbol, tenis, guitarra" fontSize="1vw" fontWeight="normal"/>
                    <Text color = "#7B7E9C" content = "Interesado en: criptografía y bases de datos " fontSize="1vw" fontWeight="normal"/>
                    <Text color = "#7B7E9C" content = "ssalgado@unal.edu.co" fontSize="1vw" fontWeight="normal"/>
                </div>
                <div className = "team__card-container">
                    <img src={AndresImg} alt="" />
                    <Text textDecoration={"underline"} color = "#7B7E9C" content = "Andres Díaz" fontSize="1.4vw" fontWeight="bold"/>
                    <Text color = "#7B7E9C" content = "Estudiante de Ingeniería en Sistemas" fontSize="1vw" fontWeight="normal"/>
                    <Text color = "#7B7E9C" content = "Me gusta el ajedrez, el fútbol y valorant" fontSize="1vw" fontWeight="normal"/>
                    <Text color = "#7B7E9C" content = "Interesado en AI y blockchain" fontSize="1vw" fontWeight="normal"/>
                    <Text color = "#7B7E9C" content = "andiazo@unal.edu.co" fontSize="1vw" fontWeight="normal"/>
                    
                </div>
            </div>
           </div>
            
        </>
      );
    };
    export default Team;