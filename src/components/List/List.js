import React, { useContext } from "react";
import ListItem from "../ListItem/ListItem";
import styles from "./List.module.scss";
import { AppContext } from "../../context";

const List = () => {
  const { tasks } = useContext(AppContext);

  return (
    <div className={styles.wrapper}>
      {tasks.length ? (
        <ul className={styles.list}>
          {tasks.map((task) => {
            return (
              <ListItem
                task={task}
                key={task.id}
                taskId={task.id}
                taskTitle={task.title}
              />
            );
          })}
        </ul>
      ) : (
        <h1 className={styles.header}>Currently task list is empty</h1>
      )}
    </div>
  );
};

export default List;
