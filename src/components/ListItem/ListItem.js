import React, { useContext } from "react";
import { AppContext } from "../../context";
import styles from "./ListItem.module.scss";

const ListItem = ({ task }) => {
  const { editItem, removeTask, findItem } = useContext(AppContext);
  return (
    <li className={styles.item}>
      <h2 className={styles.header}>{task.title}</h2>
      <div className={styles.button__container}>
        {editItem ? null : (
          <button
            className={styles.button__delete}
            onClick={() => removeTask(task.id)}
          >
            Delete
          </button>
        )}
        <button
          className={styles.button__edit}
          onClick={() => findItem(task.id)}
        >
          Edit
        </button>
      </div>
    </li>
  );
};

export default ListItem;
