import { TaskStyled } from "./TaskStyle";
import { FaRegTrashAlt } from "react-icons/fa";

type TaskProps = {
    titleTask: string;
    onRemove?: () => void;
    onClick?: () => void
}

export default function Task({titleTask}:TaskProps){
    return(
        <TaskStyled.Container>
            <TaskStyled.Content>
                <TaskStyled.Title>{titleTask}</TaskStyled.Title>
                <TaskStyled.TrashButton><FaRegTrashAlt /></TaskStyled.TrashButton>
            </TaskStyled.Content>
        </TaskStyled.Container>
    )
}