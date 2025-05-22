import { useNavigate } from "react-router";
import { ListagemTarefaStyled } from "./ListagemTarefaStyle";
import { FaPlus } from "react-icons/fa";
import Task from "../../components/Task/Task";

export default function ListagemTarefa() {
    const navigate = useNavigate()
    
    const list = [
      {
        titleTask: 'tarefa 1'
      },
      {
        titleTask: 'tarefa 2'
      },
      {
        titleTask: 'tarefa 3'
      },
      {
        titleTask: 'tarefa 4'
      },
      {
        titleTask: 'tarefa 5'
      },

    ]
  
    function renderList(){
      return list.map((item) => <Task titleTask={item.titleTask}/>)
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
