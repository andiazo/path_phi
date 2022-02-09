import axios from 'axios'

const defaultURL = "http://3.145.19.245:5000/api/"

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
export function getPath(id_ruta, setPath, setContentToShow){// data= {id: path_id}
    axios.get(`${defaultURL}learning-path/consultar/${id_ruta}`)
    .then(response => {
        console.log(response.data)
        setPath(response.data)
        setContentToShow("specificPath")
    })
    .catch(mes =>{
        if(mes.response && mes.response.data){
            console.log(mes.response.data.message)
        }
        
    }
    )
}
export function getProgress(id_ruta, id_user, setProgress){// data= {id: path_id}
    axios.get(`${defaultURL}progress/${id_user}/${id_ruta}`)
    .then(response => {
        setProgress(Math.floor(response.data))
        
    })
    .catch(mes =>{
        if(mes.response && mes.response.data){
            console.log(mes.response.data.message)
        }
        
    }
    )
}
export function getProgressInit(id_ruta, id_user, setProgress, setActivation){// data= {id: path_id}
    axios.get(`${defaultURL}progress/${id_user}/${id_ruta}`)
    .then(response => {
        setProgress(Math.floor(response.data))
        setActivation(true)
        
    })
    .catch(mes =>{
        if(mes.response && mes.response.data){
            console.log(mes.response.data.message)
        }
        
    }
    )
}
export function progress(id_ruta, id_topic, id_user, setFirstTime){
    axios.post(`${defaultURL}progress/avanzar`,{
        "id_user": id_user,
        "id_ruta": id_ruta,
        "id_topic": id_topic
    })
    .then(response => {
        console.log(id_ruta +" "+ id_topic +" "+ id_user) 
        setFirstTime(true)
    })
    .catch(mes =>{
        setFirstTime(false)
        if(mes.response && mes.response.data){
            console.log(mes.response.data.message)
        }
        
    }
    )
}
