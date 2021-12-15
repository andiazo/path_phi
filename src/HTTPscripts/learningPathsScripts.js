import axios from 'axios'

const defaultURL = "http://localhost:5000/api/"

export function getAllPaths(setPaths){
    axios.get(`${defaultURL}learning-path/`)
    .then(response => {
        setPaths(response.data)
    })
    .catch(mes =>{
        if(mes.response && mes.response.data){
            console.log(mes.response.data.message)
        }
        
    }
    )
}