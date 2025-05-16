import { useParams } from "react-router"

export default function Tarefa(){
    const params = useParams()
    
    return(
        <h1>Tarefa {params?.id}</h1>
    )
}