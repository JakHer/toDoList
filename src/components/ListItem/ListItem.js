import React, { useContext } from "react";
import { AppContext } from "../../context";

const ListItem = ({ task }) => {
  const { removeTask } = useContext(AppContext);

  return (
    <li>
      <h2>{task.title}</h2>
      <div>
        <button onClick={() => removeTask(task.id)}>delete</button>
        <button>edit</button>
      </div>
    </li>
  );
};

export default ListItem;
