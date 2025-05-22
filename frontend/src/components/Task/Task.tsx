import { TaskStyled } from "./TaskStyle";
import { FaRegTrashAlt } from "react-icons/fa";

type TaskProps = {
    titleTask: string;
    onRemove?: () => void;
    onClick?: () => void
}

export default function Task({titleTask, onClick}:TaskProps){
    return(
        <TaskStyled.Container>
            <TaskStyled.Content>
                <TaskStyled.Title onClick={onClick}>{titleTask}</TaskStyled.Title>
                <TaskStyled.TrashButton><FaRegTrashAlt /></TaskStyled.TrashButton>
            </TaskStyled.Content>
        </TaskStyled.Container>
    )
}