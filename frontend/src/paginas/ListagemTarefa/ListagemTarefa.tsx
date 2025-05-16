import { useNavigate } from "react-router";
import { ListagemTarefaStyled } from "./ListagemTarefaStyle";
import { FaPlus } from "react-icons/fa";

export default function ListagemTarefa() {
    const navigate = useNavigate()
    
  
    return (
    <ListagemTarefaStyled.Container>
      <h1>Listagem de Tarefa</h1>
      <ListagemTarefaStyled.Card>
        <ListagemTarefaStyled.DivBotao>
          <ListagemTarefaStyled.BotaoAdicionar onClick={() => navigate('/tarefa')}>
            <FaPlus size={18}/>
          </ListagemTarefaStyled.BotaoAdicionar>
        </ListagemTarefaStyled.DivBotao>
        <ListagemTarefaStyled.ItemLista>div da lista</ListagemTarefaStyled.ItemLista>
      </ListagemTarefaStyled.Card>
    </ListagemTarefaStyled.Container>
  );
}
