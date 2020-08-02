import React, { useContext } from "react";
import { AppContext } from "../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import styles from "./ListItem.module.scss";

const ListItem = ({ task }) => {
  const { editItem, removeTask, findItem } = useContext(AppContext);
  return (
    <li className={editItem ? styles.itemActive : styles.item}>
      <h2 className={styles.header}>{task.title}</h2>
      <div className={styles.button__container}>
        <FontAwesomeIcon
          className={styles.hover}
          onClick={() => findItem(task.id)}
          icon={faEdit}
          color={editItem ? "#fff" : "#3fbfb8"}
        />
        {editItem ? null : (
          <FontAwesomeIcon
            className={styles.hover}
            onClick={() => removeTask(task.id)}
            icon={faTrash}
            color="#f22613"
          />
        )}
      </div>
    </li>
  );
};

export default ListItem;
