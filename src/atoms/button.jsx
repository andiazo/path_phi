const Button = ({text, handleClick, color, borderColor}) => {
    //Puede poner JavaScript *puro*
        
        const constStyle ={
            border: `0.3em solid ${borderColor}`,
            height:"1.6em",
            width: "fit-content",
            fontSize: "1vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0.7em",
            padding:"1% 5% 1% 5%",
            cursor: "pointer",
            color: color,
            fontWeight: "bold",
        }
        return (
            <div style={constStyle} onClick={handleClick}>{text}</div>
        );
    };
    export default Button;
    


