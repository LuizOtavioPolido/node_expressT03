import { useNavigate } from "react-router";
import { ListagemTarefaStyled } from "./ListagemTarefaStyle";
import { FaPlus } from "react-icons/fa";
import Task from "../../components/Task/Task";
import { useEffect, useState } from "react";
import axios from "axios";

type Tarefa = {
  id: number;
  nome: string;
  descricao: string;
  status: string;
}

export default function ListagemTarefa() {
    const [listTarefa, setListTarefa] = useState<Tarefa[]>([])  
  
  const navigate = useNavigate()
    
  function getData(){
    axios.get('http://localhost:3000/tarefas').then((response) => {
      setListTarefa(response.data)
    })
  }

  useEffect(() => {
    getData()
  }, [])
  
    function renderList(){
      return listTarefa.map((item) => <Task onClick={() => navigate(`/tarefa/${item.id}`)} titleTask={item.nome}/>)
    }

    return (
    <ListagemTarefaStyled.Container>
      <h1>Listagem de Tarefa</h1>
      <ListagemTarefaStyled.Card>
        <ListagemTarefaStyled.DivBotao>
          <ListagemTarefaStyled.BotaoAdicionar onClick={() => navigate('/tarefa')}>
            <FaPlus size={18}/>
          </ListagemTarefaStyled.BotaoAdicionar>
        </ListagemTarefaStyled.DivBotao>
        <ListagemTarefaStyled.ItemLista>
          {renderList()}
        </ListagemTarefaStyled.ItemLista>
      </ListagemTarefaStyled.Card>
    </ListagemTarefaStyled.Container>
  );
}
