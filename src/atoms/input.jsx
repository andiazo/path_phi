
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
        return (
            <>
            {
                (type == "number")?
                <input min = "6" max="100" style={constStyle} id={id} type={type}/>
                :
                <input style={constStyle} id={id} type={type}/>
            }
            </>
        );
    };
    export default Input;
    