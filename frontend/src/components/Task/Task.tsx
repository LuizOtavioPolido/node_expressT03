import { TaskStyled } from "./TaskStyle";
import { FaRegTrashAlt } from "react-icons/fa";

type TaskProps = {
  titleTask: string;
  onRemove: () => void;
  onClick: () => void;
};

export default function Task({ titleTask, onClick, onRemove }: TaskProps) {
  return (
    <TaskStyled.Container>
      <TaskStyled.Content>
        <TaskStyled.Title onClick={onClick}>{titleTask}</TaskStyled.Title>
        <TaskStyled.TrashButton onClick={onRemove}>
          <FaRegTrashAlt />
        </TaskStyled.TrashButton>
      </TaskStyled.Content>
    </TaskStyled.Container>
  );
}
