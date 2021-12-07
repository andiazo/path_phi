
const Text = ({content, fontStyle, fontSize, fontWeight, color, textDecoration, cursor, handle, className}) => {
//Puede poner JavaScript *puro*
    
    const constStyle ={
        fontStyle: fontStyle? fontStyle: "",
        fontSize: fontSize?fontSize: "",
        fontWeight: fontWeight? fontWeight: "",
        color: color? color: "",
        textDecoration: textDecoration? textDecoration: "",
        cursor: cursor? cursor: "",

        margin: "0",
    }
    return (
        <p className = {className} style={constStyle} onClick={handle}>{content}</p>
    );
};
export default Text;
