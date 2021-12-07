const Paragraph = ({title,text, align}) => {
    //Puede poner JavaScript *puro*
        

        const headerStyle = {
            display: 'inline',
            verticalAlign: 'top',
            fontSize: '40px',
            fontWeight: 'bold',
            lineHeight: '28px',
            float: `${align}`,
        }
        const paragraphStyle = {
            display: 'inline',
            fontSize: '16px',
            width:'200px',
            height:'200px',
            position: 'fixed',
            top: '50%',
            left: '50%',
            marginTop: '-100px',
            marginLeft: '-100px',
        }
        return (
            <div>
                <h1 style = {headerStyle}>{title}</h1>
                <p style={paragraphStyle} >{text}</p>
            </div>
        );
    };
    export default Paragraph;