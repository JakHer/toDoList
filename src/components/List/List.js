import React, { useContext } from "react";
import ListItem from "../ListItem/ListItem";
import { AppContext } from "../../context";

const List = () => {
  const { tasks } = useContext(AppContext);

  return (
    <ul>
      {tasks.map((task) => {
        return <ListItem task={task} key={task.id} />;
      })}
    </ul>
  );
};

export default List;
