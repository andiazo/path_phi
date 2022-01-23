
const Input = ({id, type, width, height, transformStyle, transform, backgroundColor, padding, border, onChange , maxlength}) => {
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
                <input maxlength = {maxlength} min = "6" max="100" style={constStyle} id={id} type={type} onChange={onChange}/>
                :
                <input maxlength = {maxlength} style={constStyle} id={id} type={type} onChange={onChange}/>
            }
            </>
        );
    };
    export default Input;
    