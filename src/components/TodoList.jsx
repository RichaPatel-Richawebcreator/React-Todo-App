import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";

export const TodoList = ({ data, checked, onCheckedTask, ondeleteTask}) => {
  return (
    <li className="todo-item">
      <button className="check-btn" onClick={() => onCheckedTask(data)}>
        <IoMdCheckmarkCircleOutline />
      </button>
      <span className={checked ? 'checkList' : 'notCheckList'}>{data}</span>
      <button className="delete-btn" onClick={() => ondeleteTask(data)}>
        <MdDelete />
      </button>
    </li>
  );
};
