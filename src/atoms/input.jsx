
const Input = ({id, type, width, height, transformStyle, transform, backgroundColor, padding, border}) => {
    //Puede poner JavaScript *puro*
        
        const constStyle ={
            width: width,
            height: height,
            transformStyle: transformStyle,
            transform: transform,
            backgroundColor: backgroundColor,
            padding: padding,
            border: border,
        }
        console.log(constStyle)
        return (
            <input style={constStyle} id={id} type={type}/>
        );
    };
    export default Input;
    