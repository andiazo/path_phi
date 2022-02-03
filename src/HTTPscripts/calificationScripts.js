import axios from 'axios'

const defaultURL = "http://18.191.144.177:5000/api/"

export function createComment(setCalificationStatus, comment, id_ruta, id_user){
    axios.post(`${defaultURL}comment/crear-comentario`,{
        "content": comment,
        "status": "ACTIVE",
        "id_user": id_user,
        "id_ruta": id_ruta
    })
    .then(response => {
        setCalificationStatus(true)
    })
    .catch(mes =>{
        setCalificationStatus(false)
        if(mes.response && mes.response.data){
            console.log(mes.response.data.message)
        }
        
    }
    )
}
export function createCalification(setCalificationStatus, calification, id_ruta, id_user){
    axios.post(`${defaultURL}grade/calificar`,{
        "grade": calification,
        "status": "ACTIVE",
        "id_user": id_user,
        "id_ruta": id_ruta
    })
    .then(response => {
        setCalificationStatus(true)
    })
    .catch(mes =>{
        setCalificationStatus(false)
        if(mes.response && mes.response.data){
            console.log(mes.response.data.message)
        }
        
    }
    )
}
