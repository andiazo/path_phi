
const Text = ({content, fontStyle, fontSize, fontWeight, color, textDecoration, cursor, link}) => {
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
    console.log(constStyle)
    return (
        <p style={constStyle} onClick={() => cursor=="pointer"?window.open(`${link? link:""}`, '_blank'):""}>{content}</p>
    );
};
export default Text;
