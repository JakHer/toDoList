import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context";
import styles from "./Form.module.scss";

const Form = () => {
  const { addTask, clearList, editItem, editTask } = useContext(AppContext);
  const [title, setTitle] = useState(``);

  const handleChangeFn = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmitFn = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItem.id);
      setTitle("");
    }
  };

  useEffect(() => {
    editItem ? setTitle(editItem.title) : setTitle(``);
  }, [editItem]);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmitFn}>
        <div className={styles.wrapper}>
          <input
            className={styles.input}
            onChange={handleChangeFn}
            value={title}
            type="text"
            required
            placeholder="Add new task"
            maxLength="30"
          />
          <label className={styles.label} htmlFor={title}>
            {editItem ? "Edit " : "Enter New "}
            task
          </label>
        </div>

        <button className={styles.button} type="submit">
          {editItem ? "Edit " : "Add "}
          task
        </button>
      </form>
      {editItem ? (
        <button className={styles.button__edit} onClick={editTask}>
          Stop Editing
        </button>
      ) : (
        <button
          className={styles.button__clear}
          type="clear"
          onClick={clearList}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Form;
