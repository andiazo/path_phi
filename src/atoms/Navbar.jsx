import Image from "../img/logo-pathphi.png"
const Navbar = ({HandleClickRegister, HandleClickLogin}) => {
    const stylenav = {
        width: '100%',
        float: 'right',
        margin: '1em 1em 3em 0',
        padding: '0',
        listStyle: 'none',
    }
   
    const listElementStyle = {
        float : 'right',
    }
    const aStyle = {
        display: 'block',
		padding: '8px 15px',
		textDecoration: 'none',
        color : 'grey',
		//fontWeight: 'bold',
		color: '#069',
		//borderRight: '1px solid #ccc',
    }
    const autStyle = {
        display: 'block',
		padding: '8px 15px',
		textDecoration: 'none',
		fontWeight: 'bold',
		color: '#069',
		borderRight: '1px solid #ccc',
        borderLeft: '1px solid #ccc',
    }

    const imgStyle = {
        position : 'absolute',
        width:"170px",
        height:"170px",
        top : '65px',
        left: '10px'
    }
    const divStyle = {
        display : 'block',
        width: '100%',
        height: '200px',
    }
    return(

        <div style = {divStyle}>
            <img src = {Image}  style = {imgStyle}/> 
            <ul id="List" style = {stylenav}>
                
                <li style = {listElementStyle}><a style = {aStyle} href="#">Acerca de</a></li>
                <li style = {listElementStyle}><a style = {aStyle} href="#">Rutas</a></li>
                <li style = {listElementStyle}><a style = {aStyle} href="#">Inicio</a></li>
            </ul>
            <ul id="List" style = {stylenav}>
                
                <li style = {listElementStyle}><a style = {autStyle} href="#" onClick={HandleClickRegister}>Registrarse</a></li>
                <li style = {listElementStyle}><a style = {autStyle} href="#" onClick={HandleClickLogin}>Iniciar Sesion</a></li>
            </ul>
        </div>
    );

}

export default Navbar