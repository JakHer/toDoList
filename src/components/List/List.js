import React, { useContext } from "react";
import ListItem from "../ListItem/ListItem";
import { AppContext } from "../../context";

const List = () => {
  const { tasks } = useContext(AppContext);

  return (
    <div>
      {tasks.length ? (
        <ul>
          {tasks.map((task) => {
            return <ListItem task={task} key={task.id} />;
          })}
        </ul>
      ) : (
        <h1>Currently task list is empty</h1>
      )}
    </div>
  );
};

export default List;
