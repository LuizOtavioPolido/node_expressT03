import { useNavigate, useParams } from "react-router"
import { TarefaStyled } from "./TarefaStyle"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Tarefa(){
    const [nomeTarefa, setNomeTarefa] = useState('')
    const [descricaoTarefa, setDescricaoTarefa] = useState('')
    const [statusTarefa, setStatusTarefa] = useState('')
    
    const navigate = useNavigate()
    const params = useParams()
    
    useEffect(() => {
      if(params.id){
        getTarefa()
      }
    }, [])
    

    function getTarefa(){
        axios.get(`http://localhost:3000/tarefas/${params.id}`).then((response) => {
            setNomeTarefa(response.data.nome)
            setDescricaoTarefa(response.data.descricao)
            setStatusTarefa(response.data.status)
        })
    }

    function createTarefa(){
        const body = {
            nome:nomeTarefa, 
            descricao:descricaoTarefa, 
            status:statusTarefa
        }

        axios.post('http://localhost:3000/tarefas', body).then(() => {
            alert('Tarefa criada com sucesso!')
            setTimeout(() => {
                navigate('/listagemTarefa')
            }, 2000)
        }).catch((error) => {
            console.log(error)
        })
    }

    return(
        <TarefaStyled.Container>
            <TarefaStyled.Card>
                <TarefaStyled.Input value={nomeTarefa} onChange={(event) => setNomeTarefa(event.currentTarget.value)} placeholder="Digite o nome da tarefa"/>
                <TarefaStyled.Input value={descricaoTarefa} onChange={(event) => setDescricaoTarefa(event.currentTarget.value)} placeholder="Digite a descrição da tarefa"/>
                <TarefaStyled.Select value={statusTarefa} onChange={(event) => setStatusTarefa(event.currentTarget.value)}>
                    <option value={'Completo'}>Completo</option>
                    <option value={'Incompleto'}>Incompleto</option>
                </TarefaStyled.Select>

                <TarefaStyled.Button onClick={createTarefa}>Criar</TarefaStyled.Button>
            </TarefaStyled.Card>
        </TarefaStyled.Container>
    )
}