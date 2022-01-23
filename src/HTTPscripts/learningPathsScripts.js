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

export function enrollInPath(setStatus,id_user, data){// data= {id: path_id}
    axios.patch(`${defaultURL}learning-path/enroll/${id_user}`, data)
    .then(response => {
        setStatus(response.status)
    })
    .catch(mes =>{
        if(mes.response && mes.response.data){
            console.log(mes.response.data.message)
        }
        
    }
    )
}