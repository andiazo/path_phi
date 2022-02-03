import axios from 'axios'

const defaultURL = "https://18.191.144.177:5000/api/"

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

export function enrollInPath(id_path, id_user){// data= {id: path_id}
    axios.patch(`${defaultURL}learning-path/enroll/${id_path}/${id_user}`)
    .then(response => {
    })
    .catch(mes =>{
        if(mes.response && mes.response.data){
            console.log(mes.response.data.message)
        }
        
    }
    )
}
export function getUserPaths(id_user, setPaths){// data= {id: path_id}
    axios.get(`${defaultURL}users/rutas/${id_user}`)
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
export function leavePath(setPaths,id_path, id_user){// data= {id: path_id}
    axios.delete(`${defaultURL}learning-path/leave/${id_path}/${id_user}`)
    .then(response => {
        getUserPaths(id_user, setPaths)
    })
    .catch(mes =>{
        if(mes.response && mes.response.data){
            console.log(mes.response.data.message)
        }
        
    }
    )
}