import React, { useContext } from "react";
import { AppContext } from "../../context";

const ListItem = ({ task }) => {
  const { editItem, removeTask, findItem } = useContext(AppContext);
  return (
    <li>
      <h2>{task.title}</h2>
      <div>
        {editItem ? null : (
          <button onClick={() => removeTask(task.id)}>Delete</button>
        )}
        <button onClick={() => findItem(task.id)}>Edit</button>
      </div>
    </li>
  );
};

export default ListItem;
